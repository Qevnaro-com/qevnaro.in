import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Reveal, SplitHeading, Eyebrow } from '../../components/ui/Reveal';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/ui/SEO';
import { LineArt } from '../../components/ui/line-art/LineArt';
import { industries } from '../../data/industries';
import { EASE, viewport } from '../../lib/motion';

// Varied bento spans for a 6-column grid (repeats every 7 tiles).
const spans = [
  'lg:col-span-4 lg:row-span-1',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
];

export const IndustriesIndex: React.FC = () => (
  <div className="bg-ink text-fg">
    <SEO
      title="Industries We Serve"
      description="Websites, marketing and technology for healthcare, education, real estate, e-commerce, SaaS, hospitality, professional services and more."
      path="/industries"
    />

    <section className="relative overflow-hidden border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <Breadcrumbs items={[{ label: 'Industries' }]} />
          <SplitHeading as="h1" text="Built around how your industry actually buys." className="font-display text-4xl font-bold leading-[1.06] text-gradient sm:text-5xl lg:text-6xl" />
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
              A clinic, a developer and a SaaS team face different customers and different rules. Pick your sector to see the challenges we plan for and the work we would do.
            </p>
            <div className="mt-9"><Button to="/contact">Discuss your industry</Button></div>
          </Reveal>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <LineArt kind="globe" className="mx-auto aspect-[5/4] w-full max-w-md" />
        </div>
      </div>
    </section>

    <section className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Eyebrow>Sectors</Eyebrow>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {industries.map((ind, i) => {
            const feature = i === 0;
            return (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: (i % 3) * 0.07, ease: EASE }}
                className={spans[i % spans.length]}
              >
                <Link
                  to={`/industries/${ind.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line p-7 transition-colors hover:border-brand-blue/50 ${
                    feature ? 'bg-elevated sm:p-9' : i % 2 ? 'bg-surface' : 'bg-ink'
                  }`}
                >
                  {feature && (
                    <div className="pointer-events-none absolute -right-6 -top-6 hidden w-64 opacity-60 sm:block" aria-hidden="true">
                      <LineArt kind={ind.art} className="aspect-[5/4] w-full" />
                    </div>
                  )}
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line-strong bg-white/[0.03] text-brand-sky">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <h2 className={`mt-6 font-display font-semibold ${feature ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{ind.name}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-soft">{ind.tagline}</p>
                  <div className="mt-6 space-y-2 text-sm">
                    <p className="border-l-2 border-bad/50 pl-3 text-fg-muted">{ind.challenges[0].title}</p>
                    <p className="border-l-2 border-ok/60 pl-3 text-fg-soft">{ind.solutions[0].title}</p>
                  </div>
                  <span className="mt-auto flex items-center gap-1.5 pt-7 text-sm font-semibold text-brand-sky">
                    Explore {ind.shortName}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[120px]" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold sm:text-5xl">Don&rsquo;t see your sector?</h2>
        <p className="mx-auto mt-5 max-w-xl text-fg-soft">We work across more industries than listed here. Tell us about your business and we will say honestly whether we are the right fit.</p>
        <div className="mt-9"><Button to="/contact">Get in touch</Button></div>
      </Reveal>
    </section>
  </div>
);

export default IndustriesIndex;
