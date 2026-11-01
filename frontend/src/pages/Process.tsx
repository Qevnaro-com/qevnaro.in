import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Inbox, Package, Wrench } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { EASE } from '../lib/motion';

interface Step {
  num: string;
  title: string;
  summary: string;
  we: string[];
  you: string[];
  need: string[];
}

const STEPS: Step[] = [
  {
    num: '01', title: 'Discover',
    summary: 'We learn your business, customers and constraints before proposing anything.',
    we: ['Run a kickoff conversation on goals, audience and success measures', 'Review your current site, analytics and competitors', 'Identify risks, dependencies and quick wins'],
    you: ['A shared understanding of the problem and the goals', 'A clear scope and priorities', 'A written summary of findings'],
    need: ['Access to existing site, analytics and accounts where relevant', 'Honest context on what has and has not worked', 'A named decision-maker'],
  },
  {
    num: '02', title: 'Strategize',
    summary: 'We turn what we learned into a plan you can approve with confidence.',
    we: ['Define structure, features and content approach', 'Choose technology that fits the goals and the team', 'Agree timeline, milestones and review points'],
    you: ['A proposed plan, sitemap or architecture', 'A timeline with milestones', 'A transparent estimate and assumptions'],
    need: ['Feedback on the plan within the agreed window', 'Sign-off on scope before build starts', 'Brand assets and existing content inventory'],
  },
  {
    num: '03', title: 'Create & Build',
    summary: 'Design and engineering move together, with checkpoints so there are no late surprises.',
    we: ['Design the key screens and the visual system', 'Build, integrate and test across devices and browsers', 'Share working previews at each milestone'],
    you: ['Reviewable designs and live previews', 'A tested build covering speed, accessibility and search basics', 'Documentation for how things work'],
    need: ['Final copy, images and product data', 'Structured feedback on each review round', 'Access to third-party tools being integrated'],
  },
  {
    num: '04', title: 'Launch & Optimize',
    summary: 'We release carefully, then use real data to improve the first version.',
    we: ['Run a pre-launch checklist and prepare redirects', 'Go live with analytics and monitoring in place', 'Review early behaviour and fix what the data shows'],
    you: ['A live, monitored product', 'Tracking set up against your goals', 'A short list of recommended improvements'],
    need: ['Approval to go live', 'Domain and hosting access if we do not manage them', 'Availability during launch window'],
  },
  {
    num: '05', title: 'Grow & Support',
    summary: 'Good digital products keep evolving. We stay available to maintain and expand.',
    we: ['Maintain, update and secure what we built', 'Report on the numbers that matter to you', 'Plan the next round of improvements with you'],
    you: ['Ongoing support and maintenance options', 'Regular, plain-language reporting', 'A prioritised roadmap'],
    need: ['Periodic review of results and priorities', 'Timely approval of new work', 'Feedback from your team and customers'],
  },
];

const PRINCIPLES = [
  { t: 'Clarity over jargon', d: 'We explain decisions in plain language so you can make informed calls.' },
  { t: 'Honest estimates', d: 'We state assumptions and risks up front, and tell you early when something changes.' },
  { t: 'Small, visible steps', d: 'Regular previews mean you see progress and can steer before it is expensive.' },
  { t: 'Measure what matters', d: 'We tie work to business outcomes, not vanity numbers.' },
  { t: 'Built to last', d: 'Clean, documented work that your team or another developer can pick up.' },
  { t: 'No guaranteed rankings', d: 'We do not promise results nobody can control. We promise careful work and transparent reporting.' },
];

const card = 'rounded-[var(--radius-lg)] border border-line bg-surface';

export const Process: React.FC = () => {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const clicked = useRef(false);

  // scroll-spy for the detail blocks on mobile/desktop: activate the step nearest viewport center
  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[];
    const io = new IntersectionObserver(
      (entries) => {
        if (clicked.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const pick = (i: number) => {
    clicked.current = true;
    setActive(i);
    refs.current[i]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    window.setTimeout(() => { clicked.current = false; }, 800);
  };

  const pct = (active / (STEPS.length - 1)) * 100;

  return (
    <div className="bg-ink text-fg">
      <SEO
        title="Our Process"
        description="How Qevnaro works: Discover, Strategize, Create & Build, Launch & Optimize, Grow & Support. What we do, what you get and what we need from you at every step."
        path="/process"
      />

      <section className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Process' }]} />
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-sky">Our process</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-gradient sm:text-5xl lg:text-6xl">
              A clear path from first conversation to lasting growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
              Five steps, each with a defined purpose, outputs and a shared set of responsibilities, so you always know what is happening and what comes next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Horizontal progress rail (sticky) */}
      <div className="sticky top-16 z-30 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
          <div className="relative">
            <div className="absolute left-5 right-5 top-5 h-px bg-line-strong" aria-hidden="true" />
            <motion.div
              className="absolute left-5 top-5 h-px origin-left bg-brand-sky"
              style={{ width: 'calc(100% - 2.5rem)' }}
              initial={false}
              animate={{ scaleX: pct / 100 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
              aria-hidden="true"
            />
            <ol className="relative flex justify-between">
              {STEPS.map((s, i) => {
                const done = i < active;
                const on = i === active;
                return (
                  <li key={s.num} className="flex w-16 flex-col items-center sm:w-24">
                    <button
                      type="button"
                      onClick={() => pick(i)}
                      aria-current={on ? 'step' : undefined}
                      aria-label={`Step ${s.num}: ${s.title}`}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs transition-all duration-300 ${
                        on
                          ? 'scale-110 border-brand-sky bg-brand-blue text-white shadow-[0_0_24px_-2px_rgba(46,110,254,0.8)]'
                          : done
                            ? 'border-brand-sky bg-elevated text-brand-sky'
                            : 'border-line-strong bg-ink text-fg-muted hover:text-fg'
                      }`}
                    >
                      {done ? <Check className="h-4 w-4" /> : s.num}
                    </button>
                    <span className={`mt-2 hidden text-center text-xs sm:block ${on ? 'text-fg' : 'text-fg-muted'}`}>{s.title}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* Steps */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="space-y-10">
          {STEPS.map((s, i) => {
            const on = i === active;
            return (
              <div
                key={s.num}
                ref={(el) => { refs.current[i] = el; }}
                data-i={i}
                className={`${card} relative overflow-hidden p-7 transition-all duration-500 sm:p-10 ${
                  on ? 'border-brand-sky/50 bg-elevated shadow-[0_0_60px_-30px_rgba(46,110,254,0.8)]' : 'opacity-70'
                }`}
                onClick={() => setActive(i)}
              >
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[8rem] font-bold leading-none text-white/[0.03]" aria-hidden="true">
                  {s.num}
                </span>
                <div className="relative">
                  <p className="font-mono text-xs text-brand-sky">Step {s.num}</p>
                  <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 max-w-2xl text-fg-soft">{s.summary}</p>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {([
                      ['What we do', Wrench, s.we],
                      ['What you get', Package, s.you],
                      ['What we need from you', Inbox, s.need],
                    ] as const).map(([label, Icon, items]) => (
                      <div key={label} className="rounded-[var(--radius-md)] border border-line bg-ink/60 p-5">
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-fg">
                          <Icon className="h-4 w-4 text-brand-sky" aria-hidden="true" />
                          {label}
                        </div>
                        <ul className="space-y-2.5 text-sm leading-relaxed text-fg-soft">
                          {items.map((t) => (
                            <li key={t} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-sky" aria-hidden="true" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-sky">How we work</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">Working principles</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-[var(--radius-lg)] border border-line bg-elevated p-6">
                  <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-soft">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready for step one?</h2>
          <p className="mx-auto mt-4 max-w-xl text-fg-soft">Tell us what you want to build or improve. A discovery conversation is the best place to begin.</p>
          <div className="mt-8 flex justify-center"><Button to="/contact">Start a project</Button></div>
        </div>
      </section>
    </div>
  );
};

export default Process;
