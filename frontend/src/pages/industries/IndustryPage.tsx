import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Info, Check, X } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Reveal, SplitHeading, Eyebrow } from '../../components/ui/Reveal';
import { Accordion } from '../../components/ui/Accordion';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/ui/SEO';
import { LineArt } from '../../components/ui/line-art/LineArt';
import { getIndustry, industries, SERVICE_LABELS } from '../../data/industries';
import { EASE, viewport } from '../../lib/motion';

const NotFoundInline: React.FC = () => (
  <div className="bg-ink text-fg">
    <SEO title="Industry not found" description="This industry page does not exist." noindex />
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-4 pt-32 pb-20 sm:px-6">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">We could not find that industry.</h1>
      <p className="mt-5 text-fg-soft">It may have moved or never existed. Browse the industries we work with instead.</p>
      <div className="mt-8"><Button to="/industries">All industries</Button></div>
    </section>
  </div>
);

export const IndustryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ind = getIndustry(slug);
  if (!ind) return <NotFoundInline />;

  const path = `/industries/${ind.slug}`;
  const related = Array.from(new Set(ind.solutions.map((s) => s.service)));
  const others = industries.filter((i) => i.slug !== ind.slug).slice(0, 3);

  return (
    <div className="bg-ink text-fg">
      <SEO
        title={ind.seoTitle}
        description={ind.seoDescription}
        path={path}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: ind.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ label: 'Industries', to: '/industries' }, { label: ind.shortName }]} />
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-fg-soft">
              <ind.icon className="h-3.5 w-3.5 text-brand-sky" />
              <span>Industry · {ind.shortName}</span>
            </div>
            <SplitHeading as="h1" text={ind.name} className="font-display text-4xl font-bold leading-[1.06] text-gradient sm:text-5xl lg:text-6xl" />
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">{ind.tagline}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button to="/contact">Talk to us</Button>
                <Button href="#challenges" variant="ghost" arrow={false}>See how we help</Button>
              </div>
              {ind.disclaimer && (
                <p className="mt-8 flex max-w-xl items-start gap-2 text-xs leading-relaxed text-fg-muted">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {ind.disclaimer}
                </p>
              )}
            </Reveal>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <LineArt kind={ind.art} className="mx-auto aspect-[5/4] w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow>The landscape</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Digital in {ind.shortName.toLowerCase()}, honestly</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 leading-relaxed text-fg-soft lg:col-span-8 lg:text-lg">
            <p>{ind.intro[0]}</p>
            <p>{ind.intro[1]}</p>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES vs SOLUTIONS */}
      <section id="challenges" className="scroll-mt-24 border-b border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Challenges and solutions</Eyebrow>
          <SplitHeading text="What gets in the way, and what we build" className="mt-4 mb-14 max-w-3xl font-display text-3xl font-bold sm:text-5xl" />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                <X className="h-4 w-4 text-bad" /> Common challenges
              </h3>
              <ul className="space-y-3">
                {ind.challenges.map((c, i) => (
                  <motion.li
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                    className="rounded-[var(--radius-lg)] border border-line border-l-2 border-l-bad/60 bg-ink p-5"
                  >
                    <strong className="block font-display text-base font-semibold">{c.title}</strong>
                    <span className="mt-1 block text-sm leading-relaxed text-fg-muted">{c.desc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                <Check className="h-4 w-4 text-ok" /> Digital solutions
              </h3>
              <ul className="space-y-3">
                {ind.solutions.map((s, i) => (
                  <motion.li
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                  >
                    <Link
                      to={`/services/${s.service}`}
                      className="group flex items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-line border-l-2 border-l-ok/60 bg-ink p-5 transition-colors hover:border-brand-blue/50"
                    >
                      <span>
                        <strong className="block font-display text-base font-semibold">{s.title}</strong>
                        <span className="mt-1 block text-sm leading-relaxed text-fg-soft">{s.desc}</span>
                        <span className="mt-2 block font-mono text-[11px] text-brand-sky">{SERVICE_LABELS[s.service]}</span>
                      </span>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-fg-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-sky" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS + TECH */}
      <section className="border-b border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Marketing channels</Eyebrow>
            <h2 className="mt-4 mb-8 font-display text-3xl font-bold sm:text-4xl">Where your audience is</h2>
            <div className="divide-y divide-line border-y border-line">
              {ind.channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.04} className="flex gap-5 py-5">
                  <span className="font-mono text-xs text-brand-sky">0{i + 1}</span>
                  <div>
                    <strong className="block font-display font-semibold">{c.title}</strong>
                    <span className="text-sm leading-relaxed text-fg-soft">{c.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1} className="rounded-[var(--radius-lg)] border border-line bg-surface p-8 sm:p-10">
            <Eyebrow>Technology requirements</Eyebrow>
            <h2 className="mt-4 mb-7 font-display text-2xl font-bold sm:text-3xl">What the build must handle</h2>
            <ul className="space-y-5">
              {ind.technology.map((t) => (
                <li key={t.title} className="flex gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-blue/20 text-brand-sky"><Check className="h-3 w-3" /></span>
                  <div>
                    <strong className="block text-sm font-semibold">{t.title}</strong>
                    <span className="text-sm leading-relaxed text-fg-soft">{t.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="border-b border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>How we help</Eyebrow>
          <SplitHeading text="A simple path from audit to results" className="mt-4 mb-14 font-display text-3xl font-bold sm:text-5xl" />
          <ol className="relative space-y-10 border-l border-line-strong pl-8">
            {ind.howWeHelp.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                className="relative"
              >
                <span className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full border border-brand-blue bg-ink font-mono text-[10px] text-brand-sky">{i + 1}</span>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-fg-soft">{s.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Questions we hear often</h2>
          </div>
          <div className="lg:col-span-8"><Accordion items={ind.faqs} /></div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Related services</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((s) => (
              <Link key={s} to={`/services/${s}`} className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-4 py-2 text-sm text-fg-soft transition-colors hover:border-brand-blue/60 hover:text-fg">
                {SERVICE_LABELS[s]} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted">
            <span>Other industries:</span>
            {others.map((o) => (
              <Link key={o.slug} to={`/industries/${o.slug}`} className="text-fg-soft hover:text-brand-sky">{o.shortName}</Link>
            ))}
            <Link to="/industries" className="text-brand-sky">View all</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[120px]" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">Let&rsquo;s talk about your {ind.shortName.toLowerCase()} goals.</h2>
          <p className="mx-auto mt-5 max-w-xl text-fg-soft">Tell us where you are and what you want to change. We will reply with an honest view of what is realistic.</p>
          <div className="mt-9"><Button to="/contact">Start a conversation</Button></div>
        </Reveal>
      </section>
    </div>
  );
};

export default IndustryPage;
