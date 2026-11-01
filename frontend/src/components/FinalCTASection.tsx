import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { LineArt } from './ui/line-art/LineArt';
import { whatsappLink } from '../lib/site';

export const FinalCTASection: React.FC = () => {
  const wa = whatsappLink();
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/25 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        {[360, 560, 780].map((s, i) => (
          <motion.div
            key={s}
            className="absolute left-1/2 top-1/2 rounded-full border border-brand-sky/20"
            style={{ width: s, height: s, marginLeft: -s / 2, marginTop: -s / 2 }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute right-[-60px] top-1/2 hidden w-[380px] -translate-y-1/2 text-brand-sky/40 lg:block" aria-hidden="true">
        <LineArt kind="growth" />
      </div>
      <div className="pointer-events-none absolute left-[-60px] top-1/2 hidden w-[340px] -translate-y-1/2 text-brand-sky/30 lg:block" aria-hidden="true">
        <LineArt kind="code" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal><Eyebrow>Let&apos;s talk</Eyebrow></Reveal>
        <SplitHeading
          as="h2"
          text="Have a Business Goal in Mind? Let's Make It Happen."
          className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-soft sm:text-lg">
            Tell us what you&apos;re building, what you&apos;re trying to improve and where you want to go next.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button to="/contact">Start Your Project</Button>
            <Button to="/contact" variant="ghost">Schedule a Consultation</Button>
          </div>
          {wa && (
            <a href={wa} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
              Prefer WhatsApp? Message us
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
