import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';

const LINKS = [
  { to: '/', label: 'Home', desc: 'Back to the start' },
  { to: '/services', label: 'Services', desc: 'What we build and run' },
  { to: '/work', label: 'Work', desc: 'Selected projects' },
  { to: '/contact', label: 'Contact', desc: 'Talk to the team' },
];

export const NotFound: React.FC = () => {
  const reduce = useReducedMotion();
  const loop = reduce ? {} : { repeat: Infinity, repeatType: 'reverse' as const };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-4 pb-20 pt-36 text-fg">
      <SEO title="Page not found" description="The page you are looking for could not be found." noindex />
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />

      <div className="relative text-center">
        <svg viewBox="0 0 480 160" className="mx-auto w-full max-w-xl text-fg-soft" role="img" aria-label="404">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M 90 20 L 30 100 L 100 100 M 80 60 L 80 140" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduce ? 0 : 1.4, ease: [0.16, 1, 0.3, 1] }} />
            <motion.ellipse cx="240" cy="80" rx="52" ry="64" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduce ? 0 : 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} />
            <motion.path d="M 330 20 L 390 100 L 320 100 M 340 60 L 340 140" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduce ? 0 : 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} />
          </g>
          <motion.circle
            cx="240" cy="80" r="6" fill="#5B9BFF"
            animate={reduce ? undefined : { cx: [210, 270, 210], cy: [50, 110, 50] }}
            transition={{ duration: 4, ease: 'easeInOut', ...loop }}
          />
          <motion.path
            d="M 20 150 L 460 150" fill="none" stroke="#5B9BFF" strokeWidth="1.5" strokeDasharray="6 10"
            animate={reduce ? undefined : { strokeDashoffset: [0, -64] }}
            transition={{ duration: 3, ease: 'linear', repeat: reduce ? 0 : Infinity }}
          />
        </svg>

        <h1 className="mt-8 font-display text-3xl font-bold sm:text-5xl">This page took a wrong turn.</h1>
        <p className="mx-auto mt-4 max-w-md text-fg-soft">
          The address may be mistyped or the page may have moved. Try one of these instead.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between rounded-[var(--radius-md)] border border-line bg-surface p-4 transition-colors hover:border-line-strong hover:bg-elevated"
            >
              <span>
                <span className="block font-semibold">{l.label}</span>
                <span className="text-xs text-fg-muted">{l.desc}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-fg-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-sky" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center"><Button to="/">Go to homepage</Button></div>
      </div>
    </div>
  );
};

export default NotFound;
