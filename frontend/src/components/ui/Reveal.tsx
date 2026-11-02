import React from 'react';
import { motion } from 'framer-motion';
import { EASE, viewport } from '../../lib/motion';

/** Fade + rise reveal when scrolled into view. */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 28, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={viewport}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

/** Word-by-word masked headline reveal. */
export const SplitHeading: React.FC<{
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  delay?: number;
}> = ({ text, as = 'h2', className, delay = 0 }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      aria-label={text}
    >
      {text.split(' ').map((w, i, arr) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]" aria-hidden="true">
          <motion.span
            className={i === arr.length - 1 ? 'inline-block serif-accent' : 'inline-block'}
            variants={{
              hidden: { y: '115%', rotate: 3 },
              show: { y: 0, rotate: 0, transition: { duration: 1, ease: EASE } },
            }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-brand-sky ${className}`}>
    <span className="h-px w-6 bg-brand-sky/60" />
    {children}
  </div>
);
