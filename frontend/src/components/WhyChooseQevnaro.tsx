import React, { Suspense, lazy, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { EASE } from '../lib/motion';

const Massif = lazy(() => import('./ui/ScalabilityBricksMassif'));

const POINTS = [
  { title: 'Technology and marketing under one roof', desc: 'Engineering, design and growth work in one team, so the site we build and the campaigns we run are planned together instead of handed over between vendors.' },
  { title: 'Solutions aligned with business objectives', desc: 'We start from what you are trying to improve, then choose the scope and tools that serve it, not the other way around.' },
  { title: 'Design and development together', desc: 'Designers and engineers collaborate from the first wireframe, which keeps what is designed buildable and what is built faithful to the design.' },
  { title: 'Focus on UX and conversions', desc: 'Clear journeys, fast pages and purposeful calls to action, so visitors can find what they need and take the next step.' },
  { title: 'Transparent communication', desc: 'Regular updates, shared visibility of progress and plain-language explanations of trade-offs and costs.' },
  { title: 'Scalable technology choices', desc: 'Modern, well-supported stacks and modular architecture, so the product can grow without a rebuild every time requirements change.' },
  { title: 'Data-informed growth', desc: 'Analytics and measurement are set up early, so decisions are based on what users actually do.' },
  { title: 'Continuous improvement and support', desc: 'Launch is a milestone, not the end. We offer maintenance, monitoring and iteration after go-live.' },
];

const StageFallback = () => (
  <div className="grid h-[520px] place-items-center font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
    Loading simulation
  </div>
);

export const WhyChooseQevnaro: React.FC = () => {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const seen = useInView(stageRef, { once: true, margin: '200px' });

  return (
    <section className="relative border-b border-line bg-ink py-20 sm:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal><Eyebrow>Why Qevnaro</Eyebrow></Reveal>
          <SplitHeading
            as="h2"
            text="More Than a Service Provider. A Growth Partner."
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-fg-soft sm:text-lg">
              We work as an extension of your team: aligning technology, design and marketing around the outcomes your business cares about.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ul className="divide-y divide-line border-y border-line">
              {POINTS.map((p, i) => {
                const on = active === i;
                return (
                  <li key={p.title}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-expanded={on}
                      className="group relative flex w-full items-start gap-4 py-4 text-left"
                    >
                      {on && (
                        <motion.span layoutId="why-rail" className="absolute inset-y-0 left-0 w-[2px] bg-brand-blue" transition={{ duration: 0.4, ease: EASE }} />
                      )}
                      <span className={`pl-3 pt-1 font-mono text-xs transition-colors ${on ? 'text-brand-sky' : 'text-fg-muted'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1">
                        <span className={`block font-display text-base font-semibold transition-colors sm:text-lg ${on ? 'text-fg' : 'text-fg-soft group-hover:text-fg'}`}>
                          {p.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.span
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: EASE }}
                              className="block overflow-hidden"
                            >
                              <span className="block pt-2 text-sm leading-relaxed text-fg-muted">{p.desc}</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <Reveal y={40}>
            <div ref={stageRef} className="relative">
              <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />
              {seen ? (
                <Suspense fallback={<StageFallback />}>
                  <Massif />
                </Suspense>
              ) : (
                <StageFallback />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseQevnaro;
