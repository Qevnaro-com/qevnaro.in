import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { Button } from './ui/Button';
import { projects } from '../lib/projects';
import { EASE, viewport } from '../lib/motion';

const CathodeSession = lazy(() => import('./ui/CathodeSession'));

/** Mounts children only once the element nears the viewport. */
const MountWhenVisible: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window));
  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, [show]);
  return <div ref={ref} className={className}>{show ? <Suspense fallback={null}>{children}</Suspense> : null}</div>;
};

const FEATURED = ['pulsencare', 'menusqr'] as const;

export const FeaturedWorkSection: React.FC = () => {
  const items = FEATURED.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as typeof projects;

  return (
    <section className="relative border-b border-white/[0.08] bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Eyebrow>Selected work</Eyebrow>
            <SplitHeading
              as="h2"
              text="Work That Brings Ideas to Life."
              className="mt-4 text-3xl font-medium leading-[1.08] tracking-tight text-fg sm:text-4xl lg:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-fg-soft">
                Two products we designed and built, both live today.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Button to="/work" variant="ghost">View all work</Button>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-10">
          {items.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, ease: EASE }}
              className="card-glow group overflow-hidden rounded-[var(--radius-lg)] shadow-2xl"
            >
              <div className={`grid lg:grid-cols-12 ${i % 2 ? 'lg:[direction:rtl]' : ''}`}>
                <Link to={`/work/${p.slug}`} className="relative block overflow-hidden lg:col-span-7 lg:[direction:ltr]" aria-label={`View ${p.name} case study`}>
                  <div className="aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
                    <img
                      src={p.cover}
                      alt={p.coverAlt}
                      width={1376}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/70 px-4 py-2 text-xs font-semibold text-fg opacity-100 backdrop-blur transition-all duration-500 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    View case study <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>

                <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-5 lg:[direction:ltr]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sky">{p.category}</div>
                  <h3 className="mt-3 text-3xl font-medium tracking-tight text-fg sm:text-4xl">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-soft sm:text-base">{p.tagline}</p>

                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">Challenge</dt>
                      <dd className="mt-1 text-fg-soft">{p.challenge[0]}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">Solution</dt>
                      <dd className="mt-1 text-fg-soft">{p.strategy[0]}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t.title} className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-fg-muted">{t.title}</span>
                    ))}
                  </div>

                  <Link to={`/work/${p.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-sky transition-all hover:gap-3">
                    Read the case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Production Telemetry Console */}
        <div className="card-glow relative mt-16 overflow-hidden rounded-[var(--radius-lg)] p-5 sm:p-10 shadow-2xl border border-white/10 bg-[#0c1017]">
          <div className="bg-grid absolute inset-0 opacity-20" />
          <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live Observability Telemetry
              </span>
              <h3 className="mt-5 text-2xl font-medium tracking-tight text-fg sm:text-3xl">Transparent Reporting & Real-Time Observability</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-soft sm:text-base">
                Launch is only milestone one. Every platform we build connects to real-time latency telemetry, core web vitals observability, and conversion attribution so you always have verified ground-truth data.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-medium">0.42s</span>
                  <span className="text-zinc-500">Avg LCP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-medium">99.99%</span>
                  <span className="text-zinc-500">SLA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sky-400 font-medium">&lt;50ms</span>
                  <span className="text-zinc-500">Edge P99</span>
                </div>
              </div>
            </div>
            <MountWhenVisible className="lg:col-span-7">
              <CathodeSession className="w-full" />
            </MountWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
