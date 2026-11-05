import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Smartphone,
  TrendingUp,
  Bot,
  Palette,
  Zap,
  Sparkles,
  Lock,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  ChevronRight,
  Radio,
} from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SplitHeading, Reveal } from '../components/ui/Reveal';
import { site, whatsappLink } from '../lib/site';

interface ProjectCategory {
  id: string;
  title: string;
  shortLabel: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  prompt: string;
  description: string;
  badge: string;
  accent: string;
}

const CATEGORIES: ProjectCategory[] = [
  {
    id: 'web-dev',
    title: 'Web & SaaS Development',
    shortLabel: 'Web Development',
    tag: 'Next.js · React · Full-Stack',
    icon: Code2,
    prompt: 'Hi Qevnaro team, I would like to discuss a Web Development / SaaS project. Here is an overview of our goals: ',
    description: 'High-performance websites, scalable web applications, client portals, and headless e-commerce architectures.',
    badge: 'High Velocity',
    accent: 'from-blue-500/20 to-brand-blue/5 border-blue-500/30 text-brand-sky',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Engineering',
    shortLabel: 'Mobile Apps',
    tag: 'iOS · Android · Flutter',
    icon: Smartphone,
    prompt: 'Hi Qevnaro team, I want to discuss building a Mobile App for iOS and Android. Here is our requirement: ',
    description: 'Ultra-fluid, 60fps cross-platform mobile apps with cloud backends, API integrations, and App Store releases.',
    badge: 'Cross-Platform',
    accent: 'from-sky-500/20 to-sky-600/5 border-sky-500/30 text-sky-400',
  },
  {
    id: 'seo-growth',
    title: 'SEO, GEO & Growth Marketing',
    shortLabel: 'SEO & Growth',
    tag: 'GEO · AEO · Performance',
    icon: TrendingUp,
    prompt: 'Hi Qevnaro team, I want to accelerate our search rankings, Generative AI visibility (GEO/AEO), and paid performance marketing: ',
    description: 'Dominate traditional Google search and modern AI search engines (Perplexity, ChatGPT, Gemini) to drive real revenue.',
    badge: 'Organic & Paid',
    accent: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Chatbots',
    shortLabel: 'AI Automation',
    tag: 'Agents · RAG · Workflows',
    icon: Bot,
    prompt: 'Hi Qevnaro team, I want to explore integrating custom AI agents, automated workflows, or LLM applications: ',
    description: 'Custom autonomous agents, enterprise RAG search assistants, automated operations, and smart company chatbots.',
    badge: 'GenAI & Agents',
    accent: 'from-purple-500/20 to-indigo-600/5 border-purple-500/30 text-purple-400',
  },
  {
    id: 'branding',
    title: 'Branding & UI/UX Product Design',
    shortLabel: 'Branding & Design',
    tag: 'Figma · Design Systems · Brand',
    icon: Palette,
    prompt: 'Hi Qevnaro team, we need world-class UI/UX product design or a complete visual brand identity system: ',
    description: 'High-converting design systems, premium web/app visual design, brand guidelines, and delightful interaction prototypes.',
    badge: 'Luxury Polish',
    accent: 'from-pink-500/20 to-rose-600/5 border-pink-500/30 text-pink-400',
  },
  {
    id: 'urgent',
    title: 'Urgent Turnaround & Sprint Support',
    shortLabel: 'Urgent Inquiry',
    tag: 'Priority SLA · Technical Audit',
    icon: Zap,
    prompt: 'Hi Qevnaro team, we have an urgent project deadline or require immediate security / architecture code review: ',
    description: 'Rapid turnaround emergency engineering, critical release support, security audits, or performance fixes.',
    badge: 'Priority Dispatch',
    accent: 'from-amber-500/20 to-yellow-600/5 border-amber-500/30 text-amber-400',
  },
];

/**
 * Valid SVG QR Code Matrix pointing to https://wa.me/918796530323
 * Rendered purely in client-side SVG for instant load & zero external dependencies.
 */
const WhatsAppQRCodeSVG: React.FC<{ className?: string }> = ({ className = 'h-36 w-36' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 27 27"
    shapeRendering="crispEdges"
    className={className}
    aria-label="Scan QR Code to chat with Qevnaro on WhatsApp"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      d="M1 1.5h7m1 0h3m1 0h4m2 0h7M1 2.5h1m5 0h1m1 0h2m1 0h2m2 0h1m2 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h2m3 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m2 0h6m3 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h1m2 0h2m1 0h2m2 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m5 0h1m2 0h1m2 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M10 8.5h2m2 0h1m1 0h1M1 9.5h1m2 0h7m1 0h1m3 0h1m1 0h1m2 0h1m1 0h3M1 10.5h1m1 0h2m3 0h3m2 0h1m1 0h3m2 0h5M1 11.5h1m1 0h1m2 0h2m2 0h1m2 0h1m2 0h1m1 0h3m1 0h1m2 0h1M1 12.5h1m1 0h2m1 0h1m8 0h1m1 0h1m1 0h2m1 0h4M2 13.5h1m3 0h11m1 0h2m5 0h1M1 14.5h2m1 0h1m4 0h1m1 0h1m3 0h1m5 0h1m2 0h1M1 15.5h2m1 0h2m1 0h3m1 0h6m1 0h1m2 0h5M1 16.5h1m1 0h3m5 0h2m2 0h2m3 0h1m1 0h2m1 0h1M1 17.5h1m4 0h4m5 0h1m1 0h5m1 0h2M9 18.5h1m2 0h3m2 0h1m3 0h1m1 0h2M1 19.5h7m1 0h2m1 0h1m4 0h1m1 0h1m1 0h1m3 0h1M1 20.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M1 21.5h1m1 0h3m1 0h1m1 0h3m1 0h9m2 0h1M1 22.5h1m1 0h3m1 0h1m1 0h1m5 0h5m5 0h1M1 23.5h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h1m2 0h1m2 0h5M1 24.5h1m5 0h1m2 0h2m3 0h1m4 0h2m1 0h3M1 25.5h7m1 0h1m1 0h1m2 0h2m1 0h1m1 0h1m2 0h1m2 0h1"
    />
  </svg>
);

function getCurrentTimeStr(): string {
  try {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '09:41 AM';
  }
}

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [sentMessages, setSentMessages] = useState<{ id: string; text: string; time: string }[]>([]);

  const defaultMsg = 'Hi Qevnaro team, I would like to discuss a project with your engineering and growth leads.';
  const defaultWaUrl = whatsappLink(defaultMsg);

  const handleLaunchWhatsApp = (text?: string, chipId?: string) => {
    if (chipId) setActiveChip(chipId);
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try { navigator.vibrate(25); } catch {}
    }
    const cleanMsg = (text || defaultMsg).replace(/^Hi Qevnaro team,\s*/, '');
    const timeStr = getCurrentTimeStr();
    setSentMessages((prev) => [...prev, { id: String(Date.now()), text: cleanMsg, time: timeStr }]);

    const url = whatsappLink(text || defaultMsg);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 450);
  };

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  return (
    <div className="bg-ink text-fg selection:bg-emerald-500/30 selection:text-white">
      <SEO
        title="Direct WhatsApp & Instant Contact | Qevnaro"
        description="Connect directly with Qevnaro founders and engineers on WhatsApp. Zero forms, zero waiting. Instant project scoping and responses within 15 minutes."
        path="/contact"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        
        {/* Ambient atmospheric glows */}
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-emerald-500/12 blur-[160px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-40 left-[-10%] h-[560px] w-[560px] rounded-full bg-brand-blue/15 blur-[160px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Direct WhatsApp Desk' }]} />

          {/* Live Online Badge */}
          <div className="mt-4 mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wide">Direct WhatsApp Desk Active · Typically Replies in &lt; 15 Mins</span>
          </div>

          <SplitHeading
            as="h1"
            text="Skip the forms. Talk to our core team directly on WhatsApp."
            className="mt-2 max-w-4xl font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-gradient"
          />

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-fg-soft">
              No ticket queues, no 48-hour email delays, and no junior sales gatekeepers.
              Connect directly with our engineering founders and growth specialists for immediate scoping, architectural clarity, and sprint estimates.
            </p>
          </Reveal>

          {/* Mobile Instant 1-Tap Floating-Style Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:hidden">
            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 text-sm font-bold text-white shadow-[0_4px_25px_rgba(16,185,129,0.4)] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              <span>Chat on WhatsApp Now</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${site.phone}`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-line-strong bg-surface hover:bg-elevated px-6 py-3.5 text-xs font-semibold text-fg active:scale-[0.98] transition-all"
            >
              <Phone className="h-4 w-4 text-brand-sky" />
              <span>Or Direct Call: {site.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Primary Showcase: Interactive Smartphone Chassis & Quick Desk Hub */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* LEFT / CENTER: Interactive Luxury Smartphone Chassis ("Phone ke andar") */}
            <div className="lg:col-span-6 flex flex-col items-center">
              
              <div className="text-center mb-6 lg:hidden">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Live WhatsApp Experience
                </span>
                <p className="text-xs text-fg-muted mt-1">Tap any option below to open directly in WhatsApp</p>
              </div>

              {/* Realistic Flagship Smartphone Frame */}
              <div className="relative w-full max-w-[390px] rounded-[38px] sm:rounded-[52px] p-2.5 sm:p-4 bg-gradient-to-b from-[#2e3b4e] via-[#161f2c] to-[#0a0f16] border border-white/25 shadow-[0_35px_120px_rgba(0,0,0,0.95),0_0_80px_rgba(16,185,129,0.15)]">
                
                {/* Physical Titanium Hardware Edge & Side Buttons */}
                <div className="pointer-events-none absolute inset-0 rounded-[38px] sm:rounded-[52px] border border-white/10" />
                
                {/* Left Hardware Buttons: Action Button & Volume Rockers */}
                <div className="pointer-events-none absolute -left-[5px] top-28 h-7 w-[4px] rounded-l-md bg-[#475569] border-l border-white/20" />
                <div className="pointer-events-none absolute -left-[5px] top-40 h-12 w-[4px] rounded-l-md bg-[#475569] border-l border-white/20" />
                <div className="pointer-events-none absolute -left-[5px] top-56 h-12 w-[4px] rounded-l-md bg-[#475569] border-l border-white/20" />
                
                {/* Right Hardware Button: Power / Siri Key */}
                <div className="pointer-events-none absolute -right-[5px] top-36 h-16 w-[4px] rounded-r-md bg-[#475569] border-r border-white/20" />

                {/* Inner Screen */}
                <div className="relative overflow-hidden rounded-[30px] sm:rounded-[42px] bg-[#070b12] border border-white/[0.08] flex flex-col min-h-[580px] sm:min-h-[600px] shadow-inner">
                  
                  {/* Subtle WhatsApp Pattern Background */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Top Earpiece Speaker Slit */}
                  <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-black border border-white/10 z-30" />

                  {/* Top Status Bar with Apple Dynamic Island */}
                  <div className="relative z-20 pt-3 px-6 flex items-center justify-between select-none">
                    <span className="font-sans text-[12px] font-bold text-fg tracking-tight">09:41</span>
                    
                    {/* Apple Dynamic Island */}
                    <div className="h-5 w-28 rounded-full bg-black border border-white/15 flex items-center justify-between px-3 shadow-inner">
                      <div className="h-2 w-2 rounded-full bg-[#111827] border border-white/20 flex items-center justify-center">
                        <div className="h-0.5 w-0.5 rounded-full bg-blue-500/60" />
                      </div>
                      <div className="h-2 w-2 rounded-full bg-black" />
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    {/* Signal + 5G + Battery */}
                    <div className="flex items-center gap-1.5 text-fg">
                      <div className="flex items-end gap-[1.5px] h-2.5">
                        <span className="w-[2.5px] h-[3px] bg-fg rounded-full" />
                        <span className="w-[2.5px] h-[5px] bg-fg rounded-full" />
                        <span className="w-[2.5px] h-[7.5px] bg-fg rounded-full" />
                        <span className="w-[2.5px] h-[10px] bg-fg rounded-full" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-fg ml-0.5">5G</span>
                      <div className="relative flex items-center">
                        <div className="h-3 w-5 rounded-[4px] border border-fg/80 p-[1.5px] flex items-center">
                          <div className="h-full w-full bg-emerald-400 rounded-[2px]" />
                        </div>
                        <div className="h-1.5 w-[1.5px] bg-fg/80 rounded-r-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp App Top Bar */}
                  <div className="relative z-10 mt-2.5 border-b border-line bg-[#0d141e]/95 px-4 py-3 backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white font-bold font-display text-sm shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                          Q
                        </div>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0d141e]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display text-sm font-bold text-fg">Qevnaro Studio</span>
                          <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-500 text-[#0d141e]" />
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Online · Avg reply &lt;15m</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${site.phone}`}
                        aria-label="Direct Call"
                        className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-fg-soft hover:text-white transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={defaultWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open in WhatsApp"
                        className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Chat Stream Inside Phone */}
                  <div className="relative flex-1 p-4 space-y-3.5 overflow-y-auto">
                    
                    {/* Security Notice Pill */}
                    <div className="mx-auto max-w-[280px] rounded-lg bg-[#18222d] border border-amber-500/20 px-3 py-1.5 text-center text-[10px] text-amber-200/90 leading-tight flex items-center justify-center gap-1.5">
                      <Lock className="h-3 w-3 text-amber-400 shrink-0" />
                      <span>End-to-end encrypted direct channel. Direct founder &amp; engineer line.</span>
                    </div>

                    <div className="text-center">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-fg-muted/60 bg-black/40 px-2.5 py-0.5 rounded-full">
                        Today
                      </span>
                    </div>

                    {/* Incoming Agent Message Bubble */}
                    <div className="relative max-w-[88%] rounded-2xl rounded-tl-sm bg-[#121926] border border-white/[0.08] p-3.5 shadow-md">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Sparkles className="h-3 w-3 text-emerald-400" />
                        <span className="text-[11px] font-bold text-fg">Engineering Lead</span>
                      </div>
                      <p className="text-xs text-fg-soft leading-relaxed">
                        Hey there! 👋 Welcome to Qevnaro. We skip contact forms so you get immediate architectural clarity.
                      </p>
                      <p className="text-xs font-semibold text-fg mt-2">
                        Tap your project category below to chat directly:
                      </p>
                      <span className="block text-right font-mono text-[9px] text-fg-muted/70 mt-1">
                        09:41 AM
                      </span>
                    </div>

                    {/* Interactive Category Chips Inside Phone Screen ("Phone ke andar") */}
                    <div className="space-y-1.5 pt-1">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = activeChip === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleLaunchWhatsApp(cat.prompt, cat.id)}
                            className={`group w-full flex items-center justify-between rounded-xl p-2.5 text-left border transition-all active:scale-[0.98] cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                                : 'bg-surface/80 hover:bg-[#151e2c] border-white/[0.08] hover:border-emerald-500/40 text-fg-soft hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                              <div className="truncate">
                                <span className="block text-xs font-semibold text-fg group-hover:text-white truncate">
                                  {cat.shortLabel}
                                </span>
                                <span className="block text-[10px] text-fg-muted truncate">
                                  {cat.tag}
                                </span>
                              </div>
                            </div>

                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-fg-muted group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </button>
                        );
                      })}
                    </div>

                    {/* Sent Outgoing Message Bubbles (Interactive Simulation inside Phone) */}
                    {sentMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className="relative ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-[#005c4b] to-[#00705a] border border-emerald-400/20 p-3 shadow-md"
                      >
                        <p className="text-xs text-white leading-relaxed font-medium">
                          {msg.text}
                        </p>
                        <div className="flex items-center justify-end gap-1 font-mono text-[9px] text-emerald-200/80 mt-1">
                          <span>{msg.time}</span>
                          <span className="text-sky-300 font-bold">✓✓</span>
                        </div>
                      </div>
                    ))}

                  </div>

                  {/* Phone Bottom WhatsApp Trigger Bar & iOS Home Indicator */}
                  <div className="relative z-10 border-t border-line bg-[#0d141e] p-3.5 pb-2">
                    <button
                      type="button"
                      onClick={() => handleLaunchWhatsApp()}
                      className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 fill-current shrink-0" />
                      <span>Chat on WhatsApp Now</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <div className="mt-2 text-center text-[10px] font-mono text-fg-muted flex items-center justify-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Instant 1-Tap Connect · Zero Wait Time</span>
                    </div>
                    {/* iOS Home Indicator Bar */}
                    <div className="mt-3 flex justify-center pb-1">
                      <div className="h-1 w-32 rounded-full bg-white/35" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT: Desktop QR Scanner Card + Fast Channels + SLAs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Desktop QR Scan Card (Visually prominent for desktop visitors, hidden on mobile) */}
              <div className="hidden md:block relative overflow-hidden rounded-[var(--radius-xl)] border border-emerald-500/30 bg-gradient-to-br from-surface via-surface to-elevated p-7 sm:p-9 shadow-[0_20px_70px_rgba(16,185,129,0.07)]">
                <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-[80px]" />
                
                <div className="relative flex flex-col sm:flex-row items-center gap-7">
                  
                  {/* Visual QR Code Container */}
                  <div className="relative shrink-0 rounded-2xl border border-emerald-500/40 bg-ink/90 p-3.5 shadow-[0_0_30px_rgba(16,185,129,0.15)] group">
                    <div className="text-emerald-400">
                      <WhatsAppQRCodeSVG className="h-32 w-32 sm:h-36 sm:w-36" />
                    </div>
                    {/* Centered WhatsApp Emblem */}
                    <div className="absolute inset-0 grid place-items-center pointer-events-none">
                      <div className="h-8 w-8 rounded-full bg-ink border border-emerald-500/50 flex items-center justify-center shadow-lg">
                        <MessageCircle className="h-4 w-4 fill-emerald-400 text-ink" />
                      </div>
                    </div>
                  </div>

                  {/* QR Instructions & CTAs */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-mono text-emerald-400 mb-2">
                      <Radio className="h-3 w-3 animate-pulse" />
                      <span>Scan to Chat on Mobile</span>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl font-bold text-fg">
                      Open Instantly on Your Phone
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-fg-soft leading-relaxed">
                      Point your phone camera at this QR code to launch WhatsApp immediately on your mobile device.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                      <a
                        href={defaultWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
                      >
                        <MessageCircle className="h-3.5 w-3.5 fill-current" />
                        <span>Launch WhatsApp Web</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct Alternative Channels (Phone & Email) */}
              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Voice Call Card */}
                <div className="group rounded-[var(--radius-xl)] border border-line bg-surface p-6 hover:border-brand-blue/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/15 text-brand-sky border border-brand-blue/30 group-hover:scale-105 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(site.phone, 'phone')}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-fg-muted hover:text-white px-2.5 py-1 rounded-lg bg-white/[0.04] border border-line hover:border-line-strong transition-colors cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedType === 'phone' ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="font-display text-base font-bold text-fg">Direct Phone Call</h3>
                  <p className="mt-1 text-xs text-fg-soft leading-relaxed">
                    Direct voice line to discuss technical scope and pricing with our founders.
                  </p>

                  <div className="mt-4 pt-4 border-t border-line">
                    <a
                      href={`tel:${site.phone}`}
                      className="inline-flex items-center gap-2 text-sm font-bold font-mono text-brand-sky hover:text-white transition-colors"
                    >
                      <span>{site.phone}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Direct Email Card */}
                <div className="group rounded-[var(--radius-xl)] border border-line bg-surface p-6 hover:border-brand-blue/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/15 text-brand-sky border border-brand-blue/30 group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(site.email, 'email')}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-fg-muted hover:text-white px-2.5 py-1 rounded-lg bg-white/[0.04] border border-line hover:border-line-strong transition-colors cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedType === 'email' ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="font-display text-base font-bold text-fg">Official RFPs &amp; Briefs</h3>
                  <p className="mt-1 text-xs text-fg-soft leading-relaxed">
                    Sending formal RFPs, architecture specs, or partnership documents?
                  </p>

                  <div className="mt-4 pt-4 border-t border-line">
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 text-sm font-bold font-mono text-brand-sky hover:text-white transition-colors truncate max-w-full"
                    >
                      <span className="truncate">{site.email}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Working Hours, SLA & Location Card */}
              <div className="rounded-[var(--radius-xl)] border border-line bg-surface/90 p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4 border-b border-line pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-sky font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>Response SLA &amp; Hours</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    Guaranteed &lt; 15 Mins
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 text-xs">
                  <div className="rounded-xl border border-line bg-ink/50 p-3">
                    <span className="block text-fg-muted text-[10px] uppercase font-mono">Avg Reply Speed</span>
                    <span className="font-semibold text-emerald-400 mt-1 block">&lt; 15 mins</span>
                  </div>
                  <div className="rounded-xl border border-line bg-ink/50 p-3">
                    <span className="block text-fg-muted text-[10px] uppercase font-mono">Working Hours</span>
                    <span className="font-semibold text-fg mt-1 block">Mon–Sat, 9AM–9PM IST</span>
                  </div>
                  <div className="rounded-xl border border-line bg-ink/50 p-3">
                    <span className="block text-fg-muted text-[10px] uppercase font-mono">Offices</span>
                    <span className="font-semibold text-fg mt-1 block">Noida &amp; Bengaluru</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-fg-soft pt-3 border-t border-line">
                  <MapPin className="h-3.5 w-3.5 text-brand-sky shrink-0" />
                  <span>{site.address}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Six Interactive Project Category Cards (1-Tap WhatsApp Triggers) */}
      <section className="relative border-t border-line py-20 sm:py-28 bg-[#090d14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Tailored 1-Tap Inquiries
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-fg">
              Choose your focus area. We’ll pre-fill your WhatsApp message.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-fg-soft leading-relaxed">
              Every card opens an encrypted WhatsApp discussion pre-loaded with specific context, so we dive straight into solutions without wasting your time.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleLaunchWhatsApp(cat.prompt, cat.id)}
                  className="group relative flex flex-col justify-between rounded-[var(--radius-xl)] border border-line bg-surface/90 p-7 hover:border-emerald-500/50 hover:bg-elevated transition-all duration-300 hover:shadow-[0_15px_50px_rgba(16,185,129,0.08)] cursor-pointer active:scale-[0.99]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${cat.accent} border transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted bg-white/[0.04] border border-line px-2.5 py-1 rounded-full">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-fg group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                    
                    <span className="block font-mono text-xs text-brand-sky mt-1">
                      {cat.tag}
                    </span>

                    <p className="mt-3 text-xs leading-relaxed text-fg-soft">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5">
                      <MessageCircle className="h-3.5 w-3.5 fill-current" />
                      <span>Start on WhatsApp</span>
                    </span>
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.04] group-hover:bg-emerald-500 text-fg-muted group-hover:text-white transition-all">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Comparison: Why Direct WhatsApp Beats Slow Agency Forms */}
      <section className="relative border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-sky font-semibold">
                High-Velocity Communication
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-fg leading-tight">
                Why Qevnaro replaced web forms with direct WhatsApp.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-fg-soft leading-relaxed">
                Traditional agencies force you to fill out 15-field questionnaires, then pass your details to junior sales representatives who schedule a call 4 days later.
              </p>
              <p className="mt-3 text-sm sm:text-base text-fg-soft leading-relaxed">
                At Qevnaro, your message goes straight to technical founders and software architects who evaluate technical feasibility, tech stacks, and timelines in real time.
              </p>

              <div className="mt-8">
                <a
                  href={defaultWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-7 py-4 text-sm font-bold text-white transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)] active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Traditional Agency Card */}
                <div className="rounded-[var(--radius-xl)] border border-line bg-surface/50 p-6 sm:p-7 opacity-75">
                  <div className="font-mono text-xs uppercase tracking-wider text-bad font-semibold mb-3">
                    ❌ Traditional Agency Forms
                  </div>
                  <ul className="space-y-3 text-xs text-fg-muted">
                    <li className="flex items-start gap-2.5">
                      <span className="text-bad font-bold">✕</span>
                      <span>10+ required input fields asking repetitive questions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-bad font-bold">✕</span>
                      <span>24 to 72 hours response time through automated ticket systems.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-bad font-bold">✕</span>
                      <span>Vetted by non-technical sales reps who don’t write code.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-bad font-bold">✕</span>
                      <span>Generic copy-paste proposals with zero architecture insight.</span>
                    </li>
                  </ul>
                </div>

                {/* Qevnaro WhatsApp Card */}
                <div className="rounded-[var(--radius-xl)] border border-emerald-500/40 bg-gradient-to-b from-surface via-surface to-elevated p-6 sm:p-7 shadow-[0_10px_40px_rgba(16,185,129,0.08)]">
                  <div className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Qevnaro Direct Channel</span>
                  </div>
                  <ul className="space-y-3 text-xs text-fg-soft">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Zero forms. 1-tap encrypted direct WhatsApp connection.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Under 15 minutes average reply during operational hours.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Direct 1-on-1 dialogue with technical founders &amp; software leads.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Immediate feasibility assessment, stack selection &amp; sprint timelines.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Trust & Guarantee Card */}
      <section className="border-t border-line py-14 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[var(--radius-xl)] border border-line-strong bg-elevated/70 p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-fg">
                  Ready to start? Zero pressure, 100% technical transparency.
                </h3>
                <p className="text-xs text-fg-soft mt-0.5">
                  Send your thoughts, voice notes, or wireframes. We respect your confidentiality and can sign standard mutual NDAs.
                </p>
              </div>
            </div>

            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95 transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Connect on WhatsApp Now</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
