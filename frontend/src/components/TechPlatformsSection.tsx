import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { EASE } from '../lib/motion';

const GROUPS = [
  { id: 'dev', label: 'Development', note: 'Fast, maintainable front ends, APIs and cross-platform mobile apps, chosen to fit the product rather than the trend.', items: ['React', 'Next.js', 'Node.js', 'Python', 'React Native', 'Flutter'] },
  { id: 'design', label: 'Design', note: 'Interface design, prototyping and brand and creative production.', items: ['Figma', 'Adobe Creative Cloud'] },
  { id: 'marketing', label: 'Marketing', note: 'Campaign management, audience targeting, measurement and search visibility tracking.', items: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Google Analytics', 'Google Search Console'] },
  { id: 'commerce', label: 'Commerce', note: 'Online stores on proven platforms, or custom-built where the business needs more control.', items: ['Shopify', 'WooCommerce', 'Custom E-commerce'] },
  { id: 'infra', label: 'Infrastructure', note: 'Reliable hosting, containerised deployments and automated delivery pipelines.', items: ['AWS', 'Azure', 'Docker', 'CI/CD'] },
  { id: 'ai', label: 'Automation & AI', note: 'Practical AI and automation woven into existing workflows and business systems.', items: ['Python', 'LLM integrations', 'RAG', 'Workflow automation platforms', 'CRM integrations'] },
];

export const TechPlatformsSection: React.FC = () => {
  const [id, setId] = useState(GROUPS[0].id);
  const group = GROUPS.find((g) => g.id === id) ?? GROUPS[0];

  return (
    <section className="relative border-b border-line bg-surface py-20 sm:py-28" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal><Eyebrow>Technologies and platforms</Eyebrow></Reveal>
          <SplitHeading
            as="h2"
            text="Technologies and Platforms We Work With"
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-fg-soft sm:text-lg">
              We choose tools to fit your goals, team and budget. Pick a discipline to see what we use and how.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none]">
            <div role="tablist" aria-label="Technology groups" className="inline-flex gap-1 rounded-full border border-line bg-ink p-1">
              {GROUPS.map((g) => {
                const on = g.id === id;
                return (
                  <button
                    key={g.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setId(g.id)}
                    className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${on ? 'text-white' : 'text-fg-muted hover:text-fg'}`}
                  >
                    {on && (
                      <motion.span layoutId="tech-pill" className="absolute inset-0 rounded-full bg-brand-blue" transition={{ duration: 0.45, ease: EASE }} />
                    )}
                    <span className="relative">{g.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={group.id + '-note'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sky">How we use it</div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">{group.label}</h3>
              <p className="mt-3 text-base leading-relaxed text-fg-soft">{group.note}</p>
            </motion.div>
          </AnimatePresence>

          <div className="relative min-h-[140px] rounded-[var(--radius-lg)] border border-line bg-ink p-5 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
            <motion.ul layout className="relative flex flex-wrap gap-3" role="list">
              <AnimatePresence mode="popLayout">
                {group.items.map((t, i) => (
                  <motion.li
                    key={group.id + t}
                    layout
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                    whileHover={{ y: -3 }}
                    className="rounded-full border border-line-strong bg-surface px-4 py-2.5 text-sm font-medium text-fg shadow-[0_6px_20px_-10px_rgba(46,110,254,0.6)] transition-colors hover:border-brand-sky/60 sm:px-5 sm:text-base"
                  >
                    {t}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPlatformsSection;
