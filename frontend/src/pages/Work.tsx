import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Reveal, SplitHeading, Eyebrow } from '../components/ui/Reveal';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEO } from '../components/ui/SEO';
import { projects } from '../lib/projects';
import { EASE } from '../lib/motion';

export function Work() {
  const industries = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.industry)))], []);
  const [active, setActive] = useState('All');
  const shown = projects.filter((p) => active === 'All' || p.industry === active);

  return (
    <div className="bg-ink text-fg">
      <SEO
        title="Our Work"
        description="Selected Qevnaro projects across healthcare and hospitality: web platforms, product design and engineering."
        path="/work"
      />

      <section className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] max-w-full rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Work' }]} />
          <Eyebrow>Selected work</Eyebrow>
          <SplitHeading as="h1" text="Products we have designed and built." className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-gradient sm:text-5xl lg:text-6xl" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
              A small, honest selection. Each project below is live, and each case study explains what the problem was and how we approached it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Horizontal Scrollable Filter Tabs with Double-Edge Fade on Mobile */}
          <div className="relative mb-10">
            <div className="mask-fade-x -mx-4 overflow-x-auto px-4 py-2 sm:mx-0 sm:px-0 no-scrollbar">
              <div
                role="group"
                aria-label="Filter by industry"
                className="glass-dock inline-flex gap-1.5 rounded-full p-1.5"
              >
                {industries.map((i) => {
                  const on = active === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setActive(i)}
                      className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer ${
                        on ? 'text-white' : 'text-fg-soft hover:text-white'
                      }`}
                    >
                      {on && (
                        <motion.span
                          layoutId="work-filter-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-brand-blue glow-pill-active"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{i}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.article
                  layout
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface transition-colors focus-within:border-brand-blue/60 hover:border-brand-blue/50"
                >
                  <Link to={p.path} className="block focus:outline-none" aria-label={`${p.name} case study`}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                      <img
                        src={p.cover}
                        alt={p.coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" aria-hidden="true" />
                      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:transition-none">
                        <p className="text-xs uppercase tracking-[0.18em] text-brand-sky">Delivered</p>
                        <p className="mt-1 text-sm text-fg">{p.services.slice(0, 4).join(' · ')}</p>
                      </div>
                    </div>
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs text-brand-sky">{p.industry} · {p.category}</span>
                        <ArrowUpRight className="h-5 w-5 text-fg-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                      <h2 className="mt-3 font-display text-2xl font-bold">{p.name}</h2>
                      <p className="mt-2 leading-relaxed text-fg-soft">{p.tagline}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.services.slice(0, 3).map((s) => (
                          <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted">{s}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Your project could be next.</h2>
          <p className="mt-4 text-fg-soft">Tell us what you want to build and we will reply with an honest view of how we would do it.</p>
          <div className="mt-8 flex justify-center"><Button to="/contact">Start a project</Button></div>
        </div>
      </section>
    </div>
  );
}

export default Work;
