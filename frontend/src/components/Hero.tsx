import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Magnetic } from './ui/Magnetic';
import { HeroShader } from './ui/HeroShader';
import { HeroEngineeringCockpit } from './hero/HeroEngineeringCockpit';
import { EASE } from '../lib/motion';

const LINES: { text: string; accent?: boolean }[] = [
  { text: 'We build digital' },
  { text: 'experiences that' },
  { text: 'drive growth.', accent: true },
];

const MARQUEE = [
  'Enterprise Web Platforms',
  'Cross-Platform Mobile Apps',
  'Autonomous AI Agent Pipelines',
  'Full-Funnel Growth Infrastructure',
  'Edge Cloud Architecture',
  'Real-Time Telemetry & Systems',
];

export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const [first] = useState(() => {
    try {
      if (sessionStorage.getItem('qev_hero_seen')) return false;
      sessionStorage.setItem('qev_hero_seen', '1');
      return true;
    } catch {
      return false;
    }
  });
  const d = first ? 0.8 : 0.05;

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden border-b border-line bg-ink">
      {/* Ambient shader backdrop */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10" aria-hidden="true">
        <HeroShader />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink/90 via-ink/40 to-transparent lg:w-[60%]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </motion.div>

      {/* Main Asymmetric Split Content */}
      <motion.div
        style={{ y, opacity: fade }}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 pb-8 pt-28 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8 lg:pt-36"
      >
        {/* Left Column: High-Authority Messaging & Proof Metrics */}
        <div className="flex min-w-0 w-full flex-col justify-center lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: d, ease: EASE }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-xs text-fg-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Autonomous AI · Web Platforms · Digital Growth
          </motion.div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium leading-[1.04] tracking-[-0.03em] text-fg"
            aria-label="We build digital experiences that drive growth."
          >
            {LINES.map((l, i) => (
              <span key={l.text} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]" aria-hidden="true">
                <motion.span
                  className="block text-fg"
                  initial={{ y: '112%', rotate: 1.5, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: d + 0.1 + i * 0.1, ease: EASE }}
                  style={{ transformOrigin: 'left bottom' }}
                >
                  {l.accent ? (
                    <>
                      drive <span className="serif-accent italic font-normal text-sky-400">growth.</span>
                    </>
                  ) : (
                    l.text
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: d + 0.45, ease: EASE }}
            className="mt-6 max-w-full text-base leading-relaxed text-zinc-300 sm:text-lg lg:max-w-xl"
          >
            Qevnaro engineers resilient web platforms, autonomous AI agent workflows, and data-driven growth architectures designed for ambitious enterprise scale.
          </motion.p>

          {/* Factual Performance Proof Rail */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: d + 0.55, ease: EASE }}
            className="mt-6 flex flex-wrap items-center gap-4 border-y border-white/5 py-3 font-mono text-xs text-zinc-400"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-white tabular-nums">0.42s</span>
              <span className="text-zinc-500">Median LCP</span>
            </div>
            <span className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-white tabular-nums">99.99%</span>
              <span className="text-zinc-500">Edge Uptime</span>
            </div>
            <span className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-white tabular-nums">$42M+</span>
              <span className="text-zinc-500">Revenue Impact</span>
            </div>
          </motion.div>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: d + 0.65, ease: EASE }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </Magnetic>
            <Magnetic>
              <Button to="/services" variant="ghost" size="lg" className="group w-full sm:w-auto">
                Explore Our Services
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column: Tangible Digital Engineering Cockpit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: d + 0.35, ease: EASE }}
          className="flex w-full min-w-0 items-center justify-center lg:col-span-5"
        >
          <HeroEngineeringCockpit />
        </motion.div>
      </motion.div>

      {/* Capability Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: d + 0.8 }}
        className="relative overflow-hidden border-t border-line bg-ink/60 py-3.5 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]"
        aria-label="Core capabilities"
      >
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{t}</span>
              <span className="h-1 w-1 rounded-full bg-sky-400/80" />
            </span>
          ))}
        </div>
      </motion.div>

      {/* Subtle Scroll Cue */}
      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 1.0 }}
        className="absolute bottom-16 right-8 hidden flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-zinc-300 lg:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
