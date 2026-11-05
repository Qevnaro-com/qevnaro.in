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
          className="group flex items-center gap-2.5 px-6 py-1 text-fg-muted transition-colors duration-200 hover:text-fg sm:px-8"
        >
          <Icon className="h-4 w-4 text-brand-sky/80 transition-colors group-hover:text-brand-sky" strokeWidth={1.5} />
          <span className="whitespace-nowrap text-sm font-medium tracking-normal text-fg-soft group-hover:text-fg sm:text-base">{name}</span>
        </Link>
        <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
      </li>
    ))}
  </ul>
);

export const CapabilityStrip: React.FC = () => (
  <section aria-label="Capabilities" className="relative overflow-hidden border-b border-white/[0.08] bg-ink py-4">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
      <Row />
      <Row hidden />
      <Row hidden />
    </div>
  </section>
);

export default CapabilityStrip;
