import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';
import { EASE } from '../lib/motion';
import { HeroAuroraCanvas } from './ui/HeroAuroraCanvas';

const HEADLINE = ['Crafting', 'Modern', 'Digital', 'Experiences', 'That', 'Drive', 'Growth'];
const PILLARS = [
  'Enterprise Web Platforms',
  'Cross-Platform Mobile Apps',
  'SEO & AI Search Visibility',
  'Full-Funnel Performance',
  'Brand & Product Strategy',
];

export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Snappy timing: Avoid long delays on return visits or SPA navigation
  const [isFirstLoad] = useState(() => {
    if (typeof window === 'undefined') return false;
    const seen = sessionStorage.getItem('qev_hero_seen');
    if (!seen) {
      sessionStorage.setItem('qev_hero_seen', '1');
      return true;
    }
    return false;
  });

  const baseDelay = isFirstLoad ? 1.0 : 0.05;

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden border-b border-line pt-28 pb-16">
      {/* Stripe / Vercel style Generative Aurora & Neural Flow Canvas */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Subtle grid in distant background */}
        <div className="bg-grid absolute inset-0 opacity-25 -z-20" />
        
        {/* Deep, crisp cosmic backdrop glow */}
        <div className="absolute top-1/4 right-[5%] sm:right-[15%] h-[460px] w-[460px] rounded-full bg-radial from-brand-blue/15 via-brand-sky/5 to-transparent pointer-events-none -z-20" />

        {/* Generative Aurora & Neural Flow Canvas */}
        <HeroAuroraCanvas />

        {/* Left text legibility gradient wash */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] bg-gradient-to-r from-ink via-ink/60 to-transparent pointer-events-none -z-10" />

        {/* Subtle bottom fade to seamlessly blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent pointer-events-none -z-10" />
      </div>

      <motion.div style={{ y, opacity: fade }} className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: baseDelay, ease: EASE }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-fg-soft backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-sky opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-sky" />
          </span>
          <span>Technology · Creative · Digital Growth</span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="max-w-3xl font-display text-[2.2rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem]" aria-label={HEADLINE.join(' ')}>
          {HEADLINE.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]" aria-hidden="true">
              <motion.span
                className={`inline-block ${i >= 3 && i <= 4 ? 'text-gradient' : ''}`}
                initial={{ y: '115%', rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 0.05 + i * 0.05, ease: EASE }}
              >
                {w}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: baseDelay + 0.3, ease: EASE }}
          className="mt-6 max-w-xl text-base leading-relaxed text-fg-soft sm:text-lg"
        >
          Qevnaro combines technology, creativity and strategy to help businesses build stronger digital experiences, reach the right audience and scale with confidence.
        </motion.p>

        {/* Action Buttons — High-Converting & Mobile-Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: baseDelay + 0.4, ease: EASE }}
          className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center max-w-lg"
        >
          <Button to="/contact" size="lg" className="w-full sm:w-auto">
            Start a Project
          </Button>
          <Button to="/services" variant="ghost" size="lg" className="w-full sm:w-auto">
            Explore Our Services
          </Button>
        </motion.div>

        {/* Core Capability Pills */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: baseDelay + 0.5 }}
          className="mt-12 flex flex-wrap gap-2 max-w-2xl"
          aria-label="Core capabilities"
        >
          {PILLARS.map((p) => (
            <li key={p} className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-fg-soft backdrop-blur-sm">
              {p}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Down Scroll Indicator */}
      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 0.7 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-muted sm:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
