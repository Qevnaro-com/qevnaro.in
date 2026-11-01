import React from 'react';
import { Code2, Cloud, TrendingUp, Search, Sparkles, Bot, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const CAPABILITIES = [
  { name: 'Digital Experiences', icon: Monitor, href: '/services/web-development' },
  { name: 'Technology Development', icon: Code2, href: '/services/mobile-app-development' },
  { name: 'Growth Marketing', icon: TrendingUp, href: '/services/digital-marketing' },
  { name: 'Search Visibility', icon: Search, href: '/services/seo' },
  { name: 'Brand & Creative', icon: Sparkles, href: '/services/branding' },
  { name: 'AI & Automation', icon: Bot, href: '/services/ai-automation' },
  { name: 'Cloud & DevOps', icon: Cloud, href: '/services/cloud-devops' },
];

const Row: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
    {CAPABILITIES.map(({ name, icon: Icon, href }) => (
      <li key={name} className="flex items-center">
        <Link
          to={href}
          tabIndex={hidden ? -1 : 0}
          className="group flex items-center gap-3 px-7 py-1 text-fg-muted transition-colors duration-300 hover:text-fg sm:px-10"
        >
          <Icon className="h-5 w-5 text-brand-sky/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-sky" strokeWidth={1.5} />
          <span className="whitespace-nowrap text-lg font-medium tracking-tight sm:text-2xl">{name}</span>
        </Link>
        <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden="true" />
      </li>
    ))}
  </ul>
);

export const CapabilityStrip: React.FC = () => (
  <section aria-label="Capabilities" className="relative overflow-hidden border-b border-line bg-ink py-7">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-ink,#05070d)] to-transparent sm:w-32" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-ink,#05070d)] to-transparent sm:w-32" />
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
      <Row />
      <Row hidden />
    </div>
  </section>
);

export default CapabilityStrip;
