import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { EASE } from '../lib/motion';

const STEPS = [
  {
    n: '01', title: 'Discover',
    desc: 'We understand your business, audience and goals before proposing anything.',
    does: ['Stakeholder conversations and goal setting', 'Audience and market understanding', 'Review of your existing site, product and channels'],
    gets: ['A shared understanding of objectives', 'Clear priorities and constraints'],
  },
  {
    n: '02', title: 'Strategize',
    desc: 'We define scope, architecture, creative direction and growth strategy.',
    does: ['Scope and technical architecture', 'Creative direction and information structure', 'Growth and measurement plan'],
    gets: ['A written plan and roadmap', 'Agreed scope, milestones and approach'],
  },
  {
    n: '03', title: 'Create & Build',
    desc: 'We design, develop, write, integrate and execute.',
    does: ['UI/UX design and brand work', 'Front-end, back-end and integrations', 'Content, creative and campaign setup'],
    gets: ['Working builds you can review early', 'Regular demos and feedback loops'],
  },
  {
    n: '04', title: 'Launch & Optimize',
    desc: 'We test, deploy, measure and refine.',
    does: ['Quality assurance and performance checks', 'Deployment and go-live support', 'Tracking, measurement and refinement'],
    gets: ['A tested, launched product or campaign', 'Data to guide the next improvements'],
  },
  {
    n: '05', title: 'Grow & Support',
    desc: 'Maintenance, insights, optimisation and ongoing improvements.',
    does: ['Maintenance and monitoring', 'Reporting and insight', 'Continued optimisation and new features'],
    gets: ['A partner after launch', 'A steady cycle of improvement'],
  },
];

export const ProcessSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, STEPS.length - 1));
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-20 sm:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal><Eyebrow>Our process</Eyebrow></Reveal>
            <SplitHeading
              as="h2"
              text="From First Conversation to Continuous Growth."
              className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl"
            />
          </div>
          <Reveal delay={0.1}>
            <Link to="/process" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-sky">
              See the full process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Mobile Step Status Pill */}
        <div className="mt-10 sm:hidden flex items-center justify-between px-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/15 border border-brand-blue/35 px-3 py-1 font-mono text-xs text-brand-sky">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-pulse" />
            <span>STEP {step.n} / 05</span>
          </div>
          <span className="font-display text-sm font-bold text-fg">{step.title}</span>
        </div>

        <div role="tablist" aria-label="Process steps" onKeyDown={onKey} className="relative mt-4 sm:mt-14">
          <div className="absolute left-0 right-0 top-[19px] h-px bg-line-strong" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-[19px] h-px w-full origin-left bg-brand-sky"
            animate={{ scaleX: active / (STEPS.length - 1) }}
            transition={{ duration: 0.7, ease: EASE }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-5 gap-1 sm:gap-4">
            {STEPS.map((s, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <button
                  key={s.n}
                  type="button"
                  role="tab"
                  id={`proc-tab-${i}`}
                  aria-selected={on}
                  aria-controls="proc-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex flex-col items-center gap-3 text-center sm:items-start sm:text-left cursor-pointer active:scale-95 transition-transform"
                >
                  <span
                    className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border font-mono text-xs font-semibold transition-all duration-500 ${
                      on
                        ? 'border-brand-blue bg-brand-blue text-white shadow-[0_0_24px_rgba(46,110,254,0.9)] scale-110 sm:scale-100'
                        : done
                          ? 'border-brand-sky/60 bg-ink text-brand-sky'
                          : 'border-line-strong bg-ink text-fg-muted group-hover:text-fg'
                    }`}
                  >
                    {done ? <Check className="h-4 w-4" /> : s.n}
                  </span>
                  <span className={`hidden font-display text-sm font-semibold transition-colors sm:block lg:text-base ${on ? 'text-fg' : 'text-fg-muted group-hover:text-fg-soft'}`}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="proc-panel"
          role="tabpanel"
          aria-labelledby={`proc-tab-${active}`}
          className="relative mt-8 sm:mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface p-6 sm:p-10 shadow-2xl"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-10"
            >
              <div>
                <div className="font-display text-4xl sm:text-7xl font-semibold text-gradient">{step.n}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-fg-soft">{step.desc}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sky">What we do</div>
                <ul className="mt-4 space-y-3">
                  {step.does.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sky" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sky">What you get</div>
                <ul className="mt-4 space-y-3">
                  {step.gets.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Quick-Navigation Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-line/70 pt-4 sm:hidden">
            <button
              type="button"
              disabled={active === 0}
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-fg disabled:opacity-25 disabled:pointer-events-none active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </button>
            <span className="font-mono text-[11px] text-fg-muted font-medium">
              Step {step.n} of 05
            </span>
            <button
              type="button"
              disabled={active === STEPS.length - 1}
              onClick={() => setActive((a) => Math.min(STEPS.length - 1, a + 1))}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue border border-brand-blue px-3.5 py-1.5 text-xs font-semibold text-white disabled:opacity-25 disabled:pointer-events-none active:scale-95 transition-all shadow-[0_0_15px_rgba(46,110,254,0.4)] cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
