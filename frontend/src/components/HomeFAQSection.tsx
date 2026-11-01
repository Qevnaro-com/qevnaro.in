import React from 'react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { Accordion } from './ui/Accordion';
import { Button } from './ui/Button';
import { GLOBAL_FAQS } from '../data/faqs';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GLOBAL_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export const HomeFAQSection: React.FC = () => (
  <section className="relative border-b border-line bg-ink py-20 sm:py-28" aria-labelledby="faq-heading">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
          <SplitHeading
            as="h2"
            text="Frequently Asked Questions"
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-fg-soft">
              Straight answers about how we work, what we offer and what to expect. Not seeing your question? Ask us directly.
            </p>
            <Button to="/contact" variant="ghost" className="mt-7">Ask a question</Button>
          </Reveal>
        </div>
        <Reveal y={24}>
          <Accordion items={GLOBAL_FAQS} />
        </Reveal>
      </div>
    </div>
  </section>
);

export default HomeFAQSection;
