import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { EASE, viewport } from '../lib/motion';

const STEPS = [
  { t: 'Kickoff', d: 'We align on goals, success measures, stakeholders and how we will communicate.' },
  { t: 'Shared workspace', d: 'One place for tasks, files and decisions, visible to you throughout.' },
  { t: 'Weekly updates', d: 'A short, regular summary of what moved, what is next and what we need from you.' },
  { t: 'Demos', d: 'Working builds and creative reviewed with you as they take shape, not only at the end.' },
  { t: 'Feedback loops', d: 'Your input is gathered, prioritised and folded into the next cycle.' },
];

export const TestimonialsSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-ink py-20 sm:py-28" aria-labelledby="collab-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Reveal><Eyebrow>Client collaboration</Eyebrow></Reveal>
        <SplitHeading
          as="h2"
          text="What Our Clients Say."
          className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl"
        />
        <Reveal delay={0.15}>
          <p className="mt-5 text-base leading-relaxed text-fg-soft sm:text-lg">
            We would rather show you how we work than put words in anyone&apos;s mouth. Here is what working with Qevnaro looks like day to day.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <ol className="relative space-y-0">
          <motion.span
            className="absolute bottom-3 left-[15px] top-3 w-px origin-top bg-gradient-to-b from-brand-sky via-brand-blue/50 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 1.4, ease: EASE }}
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <motion.li
              key={s.t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              className="group relative flex gap-6 pb-9 last:pb-0"
            >
              <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong bg-ink font-mono text-[11px] text-brand-sky transition-colors group-hover:border-brand-sky group-hover:bg-brand-blue group-hover:text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{s.t}</h3>
                <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-fg-soft sm:text-base">{s.d}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <Reveal y={36}>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-line-strong bg-surface p-7 sm:p-9">
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-brand-blue/15 blur-3xl" aria-hidden="true" />
            <MessageSquareQuote className="h-9 w-9 text-brand-sky/70" strokeWidth={1.3} />
            <div className="relative mt-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">Placeholder</div>
              <p className="mt-3 font-display text-xl font-medium leading-snug text-fg-soft sm:text-2xl">
                Verified client feedback will appear here.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                We publish testimonials only once clients have reviewed and approved them.
              </p>
              <Button to="/contact" className="mt-7">Start a conversation</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
