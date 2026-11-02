import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';
import { Magnetic } from './ui/Magnetic';
import { HeroShader } from './ui/HeroShader';
import { EASE } from '../lib/motion';

const LINES: { text: string; accent?: boolean }[] = [
  { text: 'We build digital' },
  { text: 'experiences that' },
  { text: 'drive growth.', accent: true },
];

const MARQUEE = [
  'Enterprise Web Platforms',
  'Cross-Platform Mobile Apps',
  'SEO & AI Search Visibility',
  'Full-Funnel Performance',
  'Brand & Product Strategy',
  'AI Automation & Agents',
];

export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const [first] = useState(() => {
    try {
      if (sessionStorage.getItem('qev_hero_seen')) return false;
      sessionStorage.setItem('qev_hero_seen', '1');
      return true;
    } catch {
      return false;
    }
  });
  const d = first ? 1.0 : 0.05;

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-line">
      {/* Fluid shader backdrop (scales slowly as you scroll away) */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10" aria-hidden="true">
        <HeroShader />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink/80 via-ink/25 to-transparent lg:w-[55%]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </motion.div>

      <motion.div
        style={{ y, opacity: fade }}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-32 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: d, ease: EASE }}
          className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-fg-soft backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
          </span>
          Technology · Creative · Digital Growth
        </motion.div>

        <h1
          className="font-display text-[2.6rem] font-semibold leading-[1.0] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.6rem] xl:text-[6.4rem]"
          aria-label="We build digital experiences that drive growth."
        >
          {LINES.map((l, i) => (
            <span key={l.text} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]" aria-hidden="true">
              <motion.span
                className={`block ${l.accent ? 'hero-shimmer' : ''}`}
                initial={{ y: '112%', rotate: 2.5, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.1, delay: d + 0.1 + i * 0.12, ease: EASE }}
                style={{ transformOrigin: 'left bottom' }}
              >
                {l.accent ? (
                  <>
                    drive <span className="serif-accent">growth.</span>
                  </>
                ) : (
                  l.text
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: d + 0.55, ease: EASE }}
          className="mt-8 max-w-xl text-base leading-relaxed text-fg-soft sm:text-lg"
        >
          Qevnaro combines technology, creativity and strategy to help businesses build stronger digital experiences, reach the right audience and scale with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: d + 0.68, ease: EASE }}
          className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
        >
          <Magnetic>
            <Button to="/contact" size="lg" className="w-full sm:w-auto">Start a Project</Button>
          </Magnetic>
          <Magnetic>
            <Button to="/services" variant="ghost" size="lg" className="w-full sm:w-auto">Explore Our Services</Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Capability marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: d + 0.9 }}
        className="relative border-t border-line bg-ink/40 py-4 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
        aria-label="Core capabilities"
      >
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span className="h-1 w-1 rounded-full bg-brand-sky/70" />
            </span>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 1.1 }}
        className="absolute bottom-20 right-8 hidden flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-muted lg:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
