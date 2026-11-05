import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import LineArt, { type LineArtKind } from './ui/line-art/LineArt';
import { EASE, viewport } from '../lib/motion';

interface Feature {
  n: string;
  name: string;
  outcome: string;
  deliver: string[];
  tags: string[];
  art: LineArtKind;
  href: string;
  cta: string;
}

const FEATURES: Feature[] = [
  {
    n: '01', name: 'Web & App Development', art: 'code', href: '/services/web-development', cta: 'See web and app development',
    outcome: 'Digital products that are fast, accessible and built to be maintained, whether you need a business site or a full platform.',
    deliver: ['Business websites and web portals', 'Custom web applications', 'iOS and Android apps', 'E-commerce storefronts'],
    tags: ['React', 'TypeScript', 'Node.js', 'Mobile', 'APIs'],
  },
  {
    n: '02', name: 'SEO & GEO', art: 'search', href: '/services/seo', cta: 'See SEO and GEO',
    outcome: 'Become easier to find in Google and easier for AI assistants to understand and reference.',
    deliver: ['Technical and on-page SEO', 'Local and e-commerce SEO', 'Content structure for answer engines', 'Schema and entity clean-up'],
    tags: ['Google', 'Bing', 'AI Overviews', 'Schema', 'Search Console'],
  },
  {
    n: '03', name: 'Performance & Social Growth', art: 'growth', href: '/services/performance-marketing', cta: 'See growth marketing',
    outcome: 'Paid and organic campaigns that are tracked end to end, so you can see what is driving enquiries.',
    deliver: ['Google and Meta ad campaigns', 'Landing pages and CRO', 'Social content and community', 'Reporting you can read'],
    tags: ['Google Ads', 'Meta Ads', 'Instagram', 'LinkedIn', 'Analytics'],
  },
  {
    n: '04', name: 'Branding & Creative', art: 'brand', href: '/services/branding', cta: 'See branding and creative',
    outcome: 'A brand system and creative output that look consistent and are easy for your team to reuse.',
    deliver: ['Brand identity and logo', 'Graphic and social creatives', 'Video editing and reels', 'Photography and production'],
    tags: ['Identity', 'Motion', 'Video', 'Guidelines', 'Print'],
  },
  {
    n: '05', name: 'AI Automation & Agents', art: 'ai', href: '/services/ai-automation', cta: 'See AI automation',
    outcome: 'Assistants and automations that handle repetitive questions and tasks, with people kept in the loop where it matters.',
    deliver: ['AI chatbots for web and WhatsApp', 'Knowledge assistants on your content', 'CRM and lead-routing automation', 'Custom workflow integrations'],
    tags: ['LLMs', 'RAG', 'WhatsApp', 'CRM', 'Zapier / n8n'],
  },
];

const Visual: React.FC<{ f: Feature }> = ({ f }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${x}% ${y}%, rgba(91,155,255,0.22), transparent 60%)`;
  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(((e.clientX - r.left) / r.width) * 100);
    y.set(((e.clientY - r.top) / r.height) * 100);
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className="card-glow group relative aspect-[5/4] overflow-hidden rounded-[var(--radius-lg)] border border-line bg-elevated shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-brand-sky/40"
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: bg }} />
      <LineArt kind={f.art} className="relative h-full w-full p-8 sm:p-12" />
      <span className="absolute left-5 top-4 font-mono text-xs font-semibold text-brand-sky">{f.n}</span>
    </div>
  );
};

export const FeaturedServices: React.FC = () => (
  <section className="relative border-b border-white/[0.08] bg-ink py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Eyebrow>Featured services</Eyebrow>
        <SplitHeading
          as="h2"
          text="Five Ways We Help You Grow."
          className="mt-4 text-3xl font-medium leading-[1.08] tracking-tight text-fg sm:text-4xl"
        />
      </div>

      <div className="mt-12 space-y-14 sm:space-y-20">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.n}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
            className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
          >
            <div className={`lg:col-span-6 ${i % 2 ? 'lg:order-2' : ''}`}>
              <Visual f={f} />
            </div>
            <div className={`lg:col-span-6 ${i % 2 ? 'lg:order-1' : ''}`}>
              <h3 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">{f.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-soft sm:text-base">{f.outcome}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {f.deliver.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-fg-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line-strong/80 bg-surface/40 px-3 py-1 font-mono text-[11px] text-fg-muted transition-colors hover:border-brand-sky/40 hover:text-fg">{t}</span>
                ))}
              </div>
              <Reveal delay={0.1}>
                <Link to={f.href} className="group mt-8 inline-flex items-center gap-2 border-b border-brand-sky/40 pb-1 text-sm font-semibold text-brand-sky transition-all hover:gap-3 hover:border-brand-sky">
                  {f.cta} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedServices;
