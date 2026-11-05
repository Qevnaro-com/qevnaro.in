import React from 'react';
import { Button } from './ui/Button';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { LineArt } from './ui/line-art/LineArt';
import { whatsappLink } from '../lib/site';

export const FinalCTASection: React.FC = () => {
  const wa = whatsappLink();
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] sm:h-[520px] w-[340px] sm:w-[520px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/30 blur-[100px] sm:blur-[140px]" aria-hidden="true" />
      
      {/* Static concentric rings — no pulse */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center" aria-hidden="true">
        {[220, 320, 460].map((s) => (
          <div
            key={s}
            className="absolute rounded-full border border-brand-sky/15"
            style={{ width: s, height: s }}
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
          className="mt-4 font-display text-3xl font-medium leading-[1.08] tracking-tight text-fg sm:text-5xl"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-soft">
            Tell us what you&apos;re building, what you&apos;re trying to improve and where you want to go next.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button to="/contact">Start Your Project</Button>
            <Button to="/contact" variant="ghost">Schedule a Consultation</Button>
          </div>
          {wa && (
            <a href={wa} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
              Prefer WhatsApp? Message us
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
