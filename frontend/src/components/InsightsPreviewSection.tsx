import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { INSIGHTS, formatDate } from '../data/insights';
import { EASE, viewport } from '../lib/motion';

export const InsightsPreviewSection: React.FC = () => {
  const items = INSIGHTS.slice(0, 4);
  const [lead, ...rest] = items;
  if (!lead) return null;

  return (
    <section className="relative border-b border-line bg-surface py-20 sm:py-28" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal><Eyebrow>Insights</Eyebrow></Reveal>
            <SplitHeading
              as="h2"
              text="Insights for Businesses Building What's Next."
              className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl"
            />
          </div>
          <Reveal delay={0.1}>
            <Link to="/insights" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-sky">
              All insights
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Link
              to={`/insights/${lead.slug}`}
              className="group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-line bg-ink p-7 transition-colors hover:border-brand-sky/50 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-70" aria-hidden="true" />
              <div className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sky">{lead.category}</div>
              <div className="relative mt-16">
                <h3 className="font-display text-2xl font-semibold leading-tight text-fg sm:text-4xl">{lead.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg-soft sm:text-base">{lead.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-fg-muted">
                  <span>{formatDate(lead.date)} · {lead.readingMinutes} min read</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col divide-y divide-line rounded-[var(--radius-lg)] border border-line bg-ink">
            {rest.map((a, i) => (
              <motion.div
                key={a.slug}
                className="flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              >
                <Link to={`/insights/${a.slug}`} className="group flex h-full flex-col justify-between gap-4 p-6 transition-colors hover:bg-white/[0.03]">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sky">{a.category}</div>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-fg sm:text-xl">{a.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fg-muted">{a.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-fg-muted">
                    <span>{formatDate(a.date)} · {a.readingMinutes} min read</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-sky">
                      Read article
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreviewSection;
