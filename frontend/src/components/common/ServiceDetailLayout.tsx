import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Info, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Reveal, SplitHeading, Eyebrow } from '../ui/Reveal';
import { Accordion } from '../ui/Accordion';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { SEO } from '../ui/SEO';
import { LineArt, type LineArtKind } from '../ui/line-art/LineArt';
import { EASE, viewport } from '../../lib/motion';

export interface ServiceProblem { title: string; problem: string; solution: string }
export interface ServiceSubItem { title: string; desc: string }
export interface ServiceFAQ { q: string; a: string }

export interface ServicePageData {
  badge: string;
  title: string;
  subtitle: string;
  overview: string[];
  whyNeeded: { heading: string; points: { title: string; desc: string }[] };
  problemsSolved: ServiceProblem[];
  deliverables: string[];
  subServices: ServiceSubItem[];
  methodology: { step: string; title: string; desc: string }[];
  toolsAndTech: { category: string; items: string[] }[];
  whoNeedsThis: string[];
  businessOutcomes: { metric: string; label: string; desc: string }[];
  relatedCaseStudies: { title: string; desc: string; href: string; tag: string }[];
  relatedServices: { title: string; desc: string; href: string }[];
  faqs: ServiceFAQ[];
  icon: LucideIcon;
  // optional enrichments
  art?: LineArtKind;
  slug?: string;
  seoTitle?: string;
  seoDescription?: string;
  /** Honest scope note shown under the hero (e.g. "No guaranteed rankings"). */
  disclaimer?: string;
  /** Extra comparison / deep-dive blocks (e.g. SEO vs AEO vs GEO, SEO sub-disciplines). */
  extraSections?: { eyebrow: string; title: string; intro?: string; columns: { title: string; items: string[] }[] }[];
}

const card = 'rounded-[var(--radius-lg)] border border-line bg-surface';

export const ServiceDetailLayout: React.FC<{ data: ServicePageData; children?: React.ReactNode }> = ({ data, children }) => {
  const path = data.slug ? `/services/${data.slug}` : undefined;
  const desc = data.seoDescription ?? data.subtitle;

  return (
    <div className="bg-ink text-fg">
      <SEO
        title={data.seoTitle ?? data.title}
        description={desc}
        path={path}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.title,
          description: desc,
          provider: { '@type': 'Organization', name: 'Qevnaro', url: 'https://qevnaro.in' },
        }}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: data.badge.split('·').pop()!.trim() }]} />
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-fg-soft">
              <data.icon className="h-3.5 w-3.5 text-brand-sky" />
              <span>{data.badge}</span>
            </div>
            <SplitHeading as="h1" text={data.title} className="font-display text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl text-gradient" />
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">{data.subtitle}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button to="/contact">Request a Quote</Button>
                <Button href="#scope" variant="ghost" arrow={false}>See what's included</Button>
              </div>
              {data.disclaimer && (
                <p className="mt-8 flex max-w-xl items-start gap-2 text-xs leading-relaxed text-fg-muted">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {data.disclaimer}
                </p>
              )}
            </Reveal>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <LineArt kind={data.art ?? 'code'} className="mx-auto aspect-[5/4] w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW + WHY */}
      <section className="border-b border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 mb-6 font-display text-3xl font-bold sm:text-4xl">What this service is — and why it matters</h2>
            <div className="space-y-4 leading-relaxed text-fg-soft">
              {data.overview.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={0.1} className={`${card} p-8 sm:p-10 lg:col-span-6`}>
            <Eyebrow>Why businesses need it</Eyebrow>
            <h3 className="mt-4 mb-7 font-display text-xl font-bold sm:text-2xl">{data.whyNeeded.heading}</h3>
            <ul className="space-y-5">
              {data.whyNeeded.points.map((pt, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-blue/20 text-brand-sky"><Check className="h-3 w-3" /></span>
                  <div>
                    <strong className="block text-sm font-semibold text-fg">{pt.title}</strong>
                    <span className="text-sm leading-relaxed text-fg-soft">{pt.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3. PROBLEMS */}
      <section className="border-b border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Problems we solve</Eyebrow>
          <SplitHeading text="Bottlenecks this service removes" className="mt-4 mb-14 max-w-3xl font-display text-3xl font-bold sm:text-5xl" />
          <div className="grid gap-5 md:grid-cols-3">
            {data.problemsSolved.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-line bg-ink p-7 transition-colors hover:border-brand-blue/50"
              >
                <span className="font-mono text-xs text-brand-sky">0{i + 1}</span>
                <h3 className="mt-3 mb-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mb-5 border-l-2 border-bad/50 pl-4 text-sm leading-relaxed text-fg-muted">{item.problem}</p>
                <p className="mt-auto border-l-2 border-ok/60 pl-4 text-sm leading-relaxed text-fg-soft">{item.solution}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SCOPE */}
      <section id="scope" className="scroll-mt-24 border-b border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>Scope</Eyebrow>
            <h2 className="mt-4 mb-10 font-display text-3xl font-bold sm:text-5xl">Sub-services</h2>
            <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2">
              {data.subServices.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: (i % 4) * 0.06, duration: 0.6 }}
                  className="bg-ink p-6 transition-colors hover:bg-elevated"
                >
                  <h3 className="mb-2 font-display text-base font-semibold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-soft">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="sticky top-28 rounded-[var(--radius-xl)] border border-brand-blue/30 bg-gradient-to-b from-brand-navy to-elevated p-8 sm:p-10">
              <Eyebrow>Deliverables</Eyebrow>
              <h3 className="mt-4 mb-6 font-display text-2xl font-bold">What Qevnaro hands over</h3>
              <ul className="mb-8 space-y-3">
                {data.deliverables.map((d, i) => (
                  <li key={i} className="flex gap-3 text-sm text-fg-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ok" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant="light" className="w-full">Discuss your scope</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* extra deep-dive sections */}
      {data.extraSections?.map((sec, k) => (
        <section key={k} className="border-b border-line bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>{sec.eyebrow}</Eyebrow>
            <h2 className="mt-4 mb-4 max-w-3xl font-display text-3xl font-bold sm:text-5xl">{sec.title}</h2>
            {sec.intro && <p className="mb-12 max-w-3xl leading-relaxed text-fg-soft">{sec.intro}</p>}
            <div className={`grid gap-5 ${sec.columns.length > 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'}`}>
              {sec.columns.map((c, i) => (
                <Reveal key={i} delay={i * 0.06} className="rounded-[var(--radius-lg)] border border-line bg-ink p-7">
                  <h3 className="mb-4 font-display text-lg font-semibold text-brand-sky">{c.title}</h3>
                  <ul className="space-y-2.5">
                    {c.items.map((it, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-fg-soft"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-sky" />{it}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 5. METHOD */}
      <section className="border-b border-line py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Approach</Eyebrow>
          <SplitHeading text="How we work, step by step" className="mt-4 mb-14 font-display text-3xl font-bold sm:text-5xl" />
          <ol className="relative grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-[19px] hidden h-px bg-gradient-to-r from-brand-blue via-line-strong to-transparent md:block" aria-hidden="true" />
            {data.methodology.map((m, i) => (
              <Reveal key={i} delay={i * 0.08} className="relative">
                <li className="list-none">
                  <span className="relative z-10 mb-5 grid h-10 w-10 place-items-center rounded-full border border-brand-blue bg-ink font-mono text-xs text-brand-sky">{m.step}</span>
                  <h3 className="mb-2 font-display text-lg font-semibold">{m.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-soft">{m.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. TOOLS */}
      <section className="border-b border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Tools &amp; technologies</Eyebrow>
          <h2 className="mt-4 mb-12 font-display text-3xl font-bold sm:text-5xl">What we build with</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {data.toolsAndTech.map((t, i) => (
              <Reveal key={i} delay={i * 0.06} className={`${card} bg-ink p-6`}>
                <h3 className="mb-4 border-b border-line pb-3 font-display text-sm font-semibold text-fg-soft">{t.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((it, j) => (
                    <span key={j} className="rounded-md border border-line-strong bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-fg">{it}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO + OUTCOMES */}
      <section className="border-b border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-4 mb-6 font-display text-3xl font-bold">Who benefits most</h2>
            <ul className="space-y-3">
              {data.whoNeedsThis.map((w, i) => (
                <li key={i} className="flex gap-3 text-sm text-fg-soft"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky" />{w}</li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {data.businessOutcomes.map((b, i) => (
              <Reveal key={i} delay={i * 0.07} className={`${card} p-6`}>
                <div className="mb-2 font-display text-xl font-bold text-gradient">{b.metric}</div>
                <div className="mb-2 text-sm font-semibold">{b.label}</div>
                <div className="text-xs leading-relaxed text-fg-muted">{b.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Showcase Slot */}
      {children && (
        <section className="border-b border-line bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      )}

      {/* 8. RELATED */}
      {(data.relatedCaseStudies.length > 0 || data.relatedServices.length > 0) && (
        <section className="border-b border-line bg-surface py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            {data.relatedCaseStudies.length > 0 && (
              <div className="lg:col-span-7">
                <Eyebrow>Related work</Eyebrow>
                <h3 className="mt-4 mb-6 font-display text-2xl font-bold">Case studies</h3>
                <div className="space-y-3">
                  {data.relatedCaseStudies.map((cs, i) => (
                    <Link key={i} to={cs.href} className="group block rounded-[var(--radius-md)] border border-line bg-ink p-5 transition-colors hover:border-brand-blue/50">
                      <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-brand-sky">{cs.tag}</div>
                      <div className="flex items-center justify-between font-display text-base font-semibold">
                        {cs.title}<ArrowUpRight className="h-4 w-4 text-fg-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-sky" />
                      </div>
                      <p className="mt-1 text-sm text-fg-soft">{cs.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {data.relatedServices.length > 0 && (
              <div className="lg:col-span-5">
                <Eyebrow>Pairs well with</Eyebrow>
                <h3 className="mt-4 mb-6 font-display text-2xl font-bold">Related services</h3>
                <div className="space-y-3">
                  {data.relatedServices.map((rs, i) => (
                    <Link key={i} to={rs.href} className="group flex items-center justify-between rounded-[var(--radius-md)] border border-line bg-ink p-4 transition-colors hover:bg-elevated">
                      <div>
                        <div className="text-sm font-semibold group-hover:text-brand-sky transition-colors">{rs.title}</div>
                        <div className="text-xs text-fg-muted">{rs.desc}</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-fg-muted group-hover:text-brand-sky" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 9. FAQ */}
      {data.faqs.length > 0 && (
        <section className="border-b border-line py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 mb-10 font-display text-3xl font-bold sm:text-5xl">Questions, answered</h2>
            <Accordion items={data.faqs} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org', '@type': 'FAQPage',
              mainEntity: data.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
            }) }} />
          </div>
        </section>
      )}

      {/* 10. CTA */}
      <section className="py-20 sm:py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-xl)] border border-brand-blue/30 bg-gradient-to-br from-brand-navy via-elevated to-ink px-6 py-16 text-center sm:px-14">
          <div className="absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-brand-blue/30 blur-[90px]" aria-hidden="true" />
          <h2 className="relative font-display text-3xl font-bold sm:text-5xl">Have a goal in mind? Let&apos;s talk about it.</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-fg-soft">Tell us what you&apos;re building and where you want to go next. We&apos;ll reply with an honest view of scope and next steps.</p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact">Start your project</Button>
            <Button to="/services" variant="ghost" arrow={false}>All services</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailLayout;
