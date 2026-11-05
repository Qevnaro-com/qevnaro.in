import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { Button } from './ui/Button';
import LineArt, { type LineArtKind } from './ui/line-art/LineArt';
import { EASE, viewport } from '../lib/motion';

interface Category {
  id: string;
  title: string;
  value: string;
  subs: string[];
  art: LineArtKind;
  href: string;
  cta: string;
  layout: 'chips' | 'list' | 'columns';
}

const CATEGORIES: Category[] = [
  {
    id: 'A', title: 'Technology & Development', art: 'code', href: '/services/web-development', cta: 'web development', layout: 'chips',
    value: 'Websites and applications engineered to load fast, read clearly and scale with your business, from a first marketing site to a custom platform.',
    subs: ['Website Development', 'Custom Web Applications', 'Mobile App Development', 'E-commerce Development', 'UI/UX Design', 'Website Maintenance'],
  },
  {
    id: 'B', title: 'Digital Marketing & Growth', art: 'growth', href: '/services/digital-marketing', cta: 'digital marketing', layout: 'list',
    value: 'Campaigns that are planned, measured and adjusted, so spend goes toward the audiences and messages that actually respond.',
    subs: ['Digital Marketing', 'Social Media Marketing', 'Performance Marketing', 'Google Ads', 'Meta Ads', 'Lead Generation', 'CRO'],
  },
  {
    id: 'C', title: 'Search Visibility', art: 'search', href: '/services/seo', cta: 'SEO', layout: 'columns',
    value: 'Be easier to find on Google and easier to understand for AI answer engines, with technical foundations and content that earns attention.',
    subs: ['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Local SEO', 'E-commerce SEO', 'GEO/AEO', 'Content Optimization'],
  },
  {
    id: 'D', title: 'Creative & Branding', art: 'brand', href: '/services/branding', cta: 'branding', layout: 'chips',
    value: 'A recognisable identity and a steady flow of creative, so your brand looks and sounds the same on your site, socials and campaigns.',
    subs: ['Brand Identity', 'Logo Design', 'Graphic Design', 'Social Media Creatives', 'Video Editing', 'Reels', 'Photography & Creative Production'],
  },
  {
    id: 'E', title: 'Content & Communication', art: 'design', href: '/services/content-marketing', cta: 'content marketing', layout: 'list',
    value: 'Words and messages that explain your offer, support search and keep customers informed across email, web and chat.',
    subs: ['Content Marketing', 'Website Copywriting', 'SEO Content', 'Email Marketing', 'Newsletter Campaigns', 'WhatsApp Business Communication'],
  },
  {
    id: 'F', title: 'AI & Business Automation', art: 'ai', href: '/services/ai-automation', cta: 'AI automation', layout: 'columns',
    value: 'Practical AI and automation that takes repetitive work off your team, from answering common questions to keeping your CRM up to date.',
    subs: ['AI Integration', 'AI Chatbots', 'AI Agents', 'RAG Knowledge Assistants', 'Workflow Automation', 'CRM Automation', 'Business Process Automation'],
  },
  {
    id: 'G', title: 'Infrastructure & Engineering', art: 'cloud', href: '/services/cloud-devops', cta: 'cloud and DevOps', layout: 'chips',
    value: 'Reliable hosting, deployment and monitoring behind the scenes, so what we build stays secure, available and easy to update.',
    subs: ['Cloud Solutions', 'AWS/Azure', 'DevOps', 'CI/CD', 'Deployment', 'Monitoring', 'Website Security & Maintenance'],
  },
];

const Subs: React.FC<{ c: Category }> = ({ c }) => {
  if (c.layout === 'list') {
    return (
      <ol className="mt-6 divide-y divide-line border-y border-line">
        {c.subs.map((s, i) => (
          <li key={s} className="flex items-baseline gap-4 py-2.5 text-sm text-fg-soft transition-colors hover:text-fg">
            <span className="font-mono text-[11px] text-brand-sky/70">{String(i + 1).padStart(2, '0')}</span>
            {s}
          </li>
        ))}
      </ol>
    );
  }
  if (c.layout === 'columns') {
    return (
      <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {c.subs.map((s) => (
          <li key={s} className="flex items-center gap-2.5 text-sm text-fg-soft">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
            {s}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {c.subs.map((s) => (
        <li key={s} className="rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-xs text-fg-soft transition-colors hover:border-brand-sky/60 hover:text-fg">
          {s}
        </li>
      ))}
    </ul>
  );
};

export const MainServicesOverview: React.FC = () => {
  const [active, setActive] = useState('A');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const els = CATEGORIES.map((c) => document.getElementById(`svc-cat-${c.id}`)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.replace('svc-cat-', ''));
        });
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative border-b border-white/[0.08] bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <SplitHeading
            as="h2"
            text="Everything Your Business Needs to Grow Digitally."
            className="mt-4 text-3xl font-medium leading-[1.08] tracking-tight text-fg sm:text-4xl lg:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-fg-soft">
              Seven connected disciplines under one roof. Start with one, add others as you grow.
            </p>
          </Reveal>
        </div>

        {/* Sticky Mobile Category Navigator */}
        <div className="sticky top-16 z-20 -mx-4 mt-6 px-4 py-2 backdrop-blur-xl bg-ink/90 border-y border-white/[0.08] lg:hidden mask-fade-x no-scrollbar overflow-x-auto">
          <div className="inline-flex gap-2">
            {CATEGORIES.map((c) => {
              const on = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setActive(c.id);
                    document.getElementById(`svc-cat-${c.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`relative whitespace-nowrap rounded-full px-3 py-1.5 min-h-[40px] font-mono text-xs font-medium transition-all active:scale-95 cursor-pointer ${
                    on
                      ? 'bg-brand-blue text-white border border-brand-blue'
                      : 'bg-surface/80 text-fg-soft border border-white/[0.08] hover:text-white'
                  }`}
                >
                  <span>{c.id} · {c.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 lg:mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="hidden lg:col-span-4 lg:block">
            <nav aria-label="Service categories" className="sticky top-28">
              <ul className="space-y-1">
                {CATEGORIES.map((c) => {
                  const on = active === c.id;
                  return (
                    <li key={c.id}>
                      <a
                        href={`#svc-cat-${c.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(`svc-cat-${c.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className={`group relative flex items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-300 ${on ? 'bg-white/[0.05]' : 'hover:bg-white/[0.03]'}`}
                      >
                        {on && (
                          <motion.span layoutId="svc-active" className="absolute inset-y-2 left-0 w-0.5 rounded bg-brand-sky" transition={{ duration: 0.4, ease: EASE }} />
                        )}
                        <span className={`font-mono text-xs transition-colors ${on ? 'text-brand-sky' : 'text-fg-muted'}`}>{c.id}</span>
                        <span className={`text-base font-medium tracking-tight transition-colors ${on ? 'text-fg' : 'text-fg-muted group-hover:text-fg-soft'}`}>{c.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 px-4">
                <Button to="/services" variant="ghost">View all services</Button>
              </div>
            </nav>
          </aside>

          <div className="space-y-6 lg:col-span-8">
            {CATEGORIES.map((c, i) => (
              <motion.article
                key={c.id}
                id={`svc-cat-${c.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease: EASE }}
                className="card-glow group relative scroll-mt-36 overflow-hidden rounded-[var(--radius-lg)] p-6 sm:p-9 shadow-xl"
              >
                <div className={`flex flex-col gap-8 ${i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center`}>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 font-mono text-xs text-brand-sky">
                      <span className="grid h-7 w-7 place-items-center rounded-md border border-brand-sky/40">{c.id}</span>
                      <span className="uppercase tracking-[0.2em] text-fg-muted">Category</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-medium tracking-tight text-fg sm:text-3xl">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg-soft sm:text-base">{c.value}</p>
                    <Subs c={c} />
                    <Link to={c.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-sky transition-all hover:gap-3">
                      Explore {c.cta} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="mx-auto w-full max-w-[16rem] shrink-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 md:mx-0 md:w-56 lg:w-60">
                    <LineArt kind={c.art} className="aspect-[5/4] w-full" />
                  </div>
                </div>
              </motion.article>
            ))}
            <div className="pt-2 lg:hidden">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-sky">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServicesOverview;
