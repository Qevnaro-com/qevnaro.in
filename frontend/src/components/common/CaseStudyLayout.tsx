import React from 'react';
import { ArrowUpRight, Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Reveal, SplitHeading, Eyebrow } from '../ui/Reveal';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { SEO } from '../ui/SEO';
import { projects, type Project } from '../../lib/projects';

const card = 'rounded-[var(--radius-lg)] border border-line bg-surface';

const Section: React.FC<{ eyebrow: string; title: string; alt?: boolean; children: React.ReactNode }> = ({ eyebrow, title, alt, children }) => (
  <section className={`border-b border-line py-16 sm:py-24 ${alt ? 'bg-surface' : ''}`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SplitHeading text={title} className="mt-4 mb-10 max-w-3xl font-display text-3xl font-bold sm:text-4xl" />
      {children}
    </div>
  </section>
);

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-4">
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-fg-soft">
        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-blue/20 text-brand-sky"><Check className="h-3 w-3" /></span>
        <span className="leading-relaxed">{t}</span>
      </li>
    ))}
  </ul>
);

export const CaseStudyLayout: React.FC<{ project: Project }> = ({ project: p }) => {
  const related = projects.filter((x) => x.slug !== p.slug);
  return (
    <div className="bg-ink text-fg">
      <SEO title={`${p.name} case study`} description={p.tagline} path={p.path} image={p.cover} />

      <section className="relative overflow-hidden border-b border-line pt-36 pb-12 sm:pt-44">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] max-w-full rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Work', to: '/work' }, { label: p.name }]} />
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-fg-soft">
            {p.industry} · {p.category}
          </div>
          <SplitHeading as="h1" text={`${p.name}: ${p.tagline}`} className="max-w-4xl font-display text-4xl font-bold leading-[1.08] text-gradient sm:text-5xl lg:text-6xl" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">{p.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={p.liveUrl}>Visit live site</Button>
              <Button to="/contact" variant="ghost">Discuss a similar project</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-line">
            <img src={p.cover} alt={p.coverAlt} className="aspect-[16/8] w-full object-cover" loading="eager" />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-12">
        <dl className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[['Client', p.client], ['Industry', p.industry], ['Category', p.category]].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">{k}</dt>
              <dd className="mt-1 font-display text-lg font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section eyebrow="The challenge" title="What needed solving">
        <div className="grid gap-5 md:grid-cols-3">
          {p.challenge.map((c, i) => (
            <Reveal key={i} delay={i * 0.06} className={`${card} p-7`}>
              <span className="font-mono text-xs text-brand-sky">0{i + 1}</span>
              <p className="mt-3 leading-relaxed text-fg-soft">{c}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Objectives and strategy" title="What we set out to do" alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className={`${card} bg-ink p-8`}>
            <h3 className="mb-5 font-display text-xl font-bold">Objectives</h3>
            <Bullets items={p.objectives} />
          </div>
          <div className="space-y-4 leading-relaxed text-fg-soft">
            <h3 className="font-display text-xl font-bold text-fg">Strategy</h3>
            {p.strategy.map((s) => <p key={s}>{s}</p>)}
          </div>
        </div>
      </Section>

      <Section eyebrow="Our approach" title="How we worked">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06} className={`${card} p-6`}>
              <span className="font-mono text-xs text-brand-sky">Step 0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-soft">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services delivered" title="What we delivered" alt>
        <div className="flex flex-wrap gap-3">
          {p.services.map((s) => (
            <span key={s} className="rounded-full border border-line-strong bg-ink px-4 py-2 text-sm text-fg-soft">{s}</span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Technology" title="What it runs on">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.tech.map((t) => (
            <div key={t.title} className={`${card} p-6`}>
              <h3 className="font-display font-bold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-soft">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Gallery" title="A closer look" alt>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.gallery.map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="aspect-[16/10] w-full rounded-[var(--radius-lg)] border border-line object-cover" />
          ))}
        </div>
      </Section>

      <Section eyebrow="Results" title="Outcomes">
        {p.results && p.results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-3">
            {p.results.map((r) => (
              <div key={r.label} className={`${card} p-6`}>
                <div className="font-display text-3xl font-bold text-gradient">{r.value}</div>
                <div className="mt-1 text-sm text-fg-soft">{r.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="flex max-w-2xl items-start gap-2 text-fg-soft">
            <Info className="mt-1 h-4 w-4 shrink-0 text-brand-sky" />
            Results to be confirmed. We will publish measured outcomes here once they are verified with the client.
          </p>
        )}
      </Section>

      <Section eyebrow="Related projects" title="More work" alt>
        <div className="grid gap-5 sm:grid-cols-2">
          {related.map((r) => (
            <Link key={r.slug} to={r.path} className={`${card} group flex items-center justify-between bg-ink p-6 transition-colors hover:border-brand-blue/50`}>
              <div>
                <div className="font-mono text-xs text-brand-sky">{r.industry}</div>
                <div className="mt-1 font-display text-xl font-bold">{r.name}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-fg-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          ))}
          <Link to="/work" className={`${card} flex items-center justify-between bg-ink p-6 hover:border-brand-blue/50`}>
            <span className="font-display text-xl font-bold">All work</span>
            <ArrowUpRight className="h-5 w-5 text-fg-muted" />
          </Link>
        </div>
      </Section>

      <section className="py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Have something similar in mind?</h2>
          <p className="mt-4 text-fg-soft">Tell us what you are building and we will tell you honestly how we would approach it.</p>
          <div className="mt-8 flex justify-center"><Button to="/contact">Start a conversation</Button></div>
        </div>
      </section>
    </div>
  );
};
