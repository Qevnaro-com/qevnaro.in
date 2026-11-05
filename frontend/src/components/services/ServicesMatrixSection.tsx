import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Search,
  TrendingUp,
  Palette,
  Cloud,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Activity,
} from 'lucide-react';
import { SplitHeading, Eyebrow } from '../ui/Reveal';
import { Button } from '../ui/Button';

interface ServiceItem {
  id: string;
  n: string;
  title: string;
  tagline: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  kpi: string;
  kpiLabel: string;
  chips: string[];
  previewType: 'code' | 'agents' | 'seo' | 'growth' | 'brand' | 'cloud' | 'content';
}

const SERVICES: ServiceItem[] = [
  {
    id: 'tech',
    n: '01',
    title: 'Technology & Development',
    tagline: 'High-performance web applications, enterprise portals, and mobile platforms engineered for sub-second hydration.',
    href: '/services/web-development',
    icon: Code2,
    kpi: '0.42s LCP',
    kpiLabel: 'Median PageSpeed Benchmark',
    chips: ['React 19 & Next.js', 'Mobile Apps (iOS/Android)', 'Headless Commerce', 'Custom APIs & Microservices'],
    previewType: 'code',
  },
  {
    id: 'ai',
    n: '02',
    title: 'AI Automation & Agents',
    tagline: 'Multi-agent orchestration pipelines, RAG knowledge stores, and automated CRM workflows that remove manual bottlenecks.',
    href: '/services/ai-automation',
    icon: Cpu,
    kpi: '1,280 tok/s',
    kpiLabel: 'Streaming Inference Speed',
    chips: ['Autonomous Agent Swarms', 'RAG Document Retrieval', 'Custom LLM Fine-Tuning', 'Business Process Automation'],
    previewType: 'agents',
  },
  {
    id: 'search',
    n: '03',
    title: 'Search Visibility (SEO & GEO)',
    tagline: 'Technical search optimization engineered for Google ranking and direct answer engine citations across Perplexity and ChatGPT.',
    href: '/services/seo',
    icon: Search,
    kpi: 'Top 3',
    kpiLabel: 'High-Intent Search Rankings',
    chips: ['Generative Engine Optimization (GEO)', 'Technical Core Web Vitals', 'Authority Backlinks', 'Content Semantics'],
    previewType: 'seo',
  },
  {
    id: 'growth',
    n: '04',
    title: 'Digital Marketing & Growth',
    tagline: 'Data-calibrated paid acquisition and high-converting landing page funnels that convert visitors into revenue.',
    href: '/services/digital-marketing',
    icon: TrendingUp,
    kpi: '+157%',
    kpiLabel: 'Average Pipeline Conversion Lift',
    chips: ['Performance Ads (Google & Meta)', 'Conversion Rate Optimization', 'Funnel Analytics', 'Lead Gen Engines'],
    previewType: 'growth',
  },
  {
    id: 'brand',
    n: '05',
    title: 'Creative & Brand Systems',
    tagline: 'Unified brand identities, design systems, and creative assets that maintain cohesive authority across every touchpoint.',
    href: '/services/branding',
    icon: Palette,
    kpi: '100% Cohesive',
    kpiLabel: 'Design System Token Coverage',
    chips: ['Brand Identity & Guidelines', 'UI/UX Design Systems', 'Motion & 3D Assets', 'Social & Campaign Creatives'],
    previewType: 'brand',
  },
  {
    id: 'cloud',
    n: '06',
    title: 'Cloud & Edge Infrastructure',
    tagline: 'Zero-downtime multi-region hosting, automated CI/CD deployments, and continuous security telemetry.',
    href: '/services/cloud-devops',
    icon: Cloud,
    kpi: '99.99%',
    kpiLabel: 'Global Edge Uptime SLA',
    chips: ['AWS & Cloudflare Edge', 'Zero-Downtime Deployments', 'Automated CI/CD Pipelines', 'Strict TLS 1.3 Security'],
    previewType: 'cloud',
  },
  {
    id: 'content',
    n: '07',
    title: 'Content & Communication',
    tagline: 'Precision copywriting, automated email nurture sequences, and WhatsApp communication flows that educate and retain.',
    href: '/services/content-marketing',
    icon: MessageSquare,
    kpi: '48% Open Rate',
    kpiLabel: 'Automated Lifecycle Engagement',
    chips: ['Website & Product Copywriting', 'Automated Lifecycle Flows', 'Executive Ghostwriting', 'Retention Drip Workflows'],
    previewType: 'content',
  },
];

export const ServicesMatrixSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('tech');
  const current = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section className="relative border-b border-white/[0.08] bg-[#07090e] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Eyebrow>Capabilities Matrix</Eyebrow>
            <SplitHeading
              as="h2"
              text="Seven Connected Disciplines. Engineered to Scale."
              className="mt-4 font-display text-3xl font-medium leading-[1.08] tracking-tight text-fg sm:text-4xl lg:text-5xl"
            />
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              We eliminate the friction of managing separate vendors. Design, engineering, AI automation, and growth marketing operate as a single coordinated engine.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button to="/services" variant="ghost">
              Explore All 7 Services
            </Button>
          </div>
        </div>

        {/* Interactive Matrix Workspace */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Column: Interactive Discipline Selector */}
          <div className="space-y-2 lg:col-span-5">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`group relative flex w-full items-start gap-4 rounded-xl p-3.5 text-left transition-all ${
                    isActive
                      ? 'bg-white/[0.06] border border-white/10 shadow-lg'
                      : 'border border-transparent hover:bg-white/[0.02] hover:border-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-service-rail"
                      className="absolute inset-y-2 left-0 w-1 rounded-full bg-sky-400"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                  <div
                    className={`mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border font-mono text-xs transition-colors ${
                      isActive
                        ? 'border-sky-500/40 bg-sky-500/10 text-sky-400'
                        : 'border-white/10 bg-white/[0.02] text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-zinc-500">{s.n}</span>
                      <span
                        className={`rounded px-1.5 py-0.2 font-mono text-[10px] tabular-nums ${
                          isActive ? 'bg-sky-500/20 text-sky-300' : 'text-zinc-500'
                        }`}
                      >
                        {s.kpi}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                      }`}
                    >
                      {s.title}
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs text-zinc-500">{s.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Sandbox / Cockpit */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0d1017] p-6 shadow-2xl shadow-black/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Service Header Bar */}
                  <div className="flex items-start justify-between border-b border-white/5 pb-4">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
                        <span>Discipline {current.n}</span>
                        <span>//</span>
                        <span className="text-zinc-400">{current.kpiLabel}</span>
                      </div>
                      <h3 className="mt-2 text-2xl font-medium text-white">{current.title}</h3>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-400">
                      {current.kpi}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-300">{current.tagline}</p>

                  {/* Capabilities Chip Grid */}
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-2.5">
                      Included Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.chips.map((chip) => (
                        <div
                          key={chip}
                          className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-zinc-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 flex-shrink-0" />
                          <span>{chip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Interactive Preview Canvas */}
                  <div className="rounded-xl border border-white/5 bg-[#090b10] p-4 font-mono text-xs">
                    {current.previewType === 'code' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                          <span className="flex items-center gap-2">
                            <Terminal className="h-3.5 w-3.5 text-sky-400" />
                            <span>platform_benchmark.ts</span>
                          </span>
                          <span className="text-emerald-400">status: verified</span>
                        </div>
                        <div className="text-zinc-400 leading-relaxed text-[11px]">
                          <div><span className="text-sky-400">export const</span> <span className="text-amber-300">benchmark</span> = &#123;</div>
                          <div className="pl-4">lcp: <span className="text-emerald-400">'0.42s'</span>, cls: <span className="text-emerald-400">0.000</span>, hydration: <span className="text-emerald-400">'instant'</span>,</div>
                          <div className="pl-4">framework: <span className="text-sky-300">'React 19 + TypeScript + Edge CDN'</span>,</div>
                          <div className="pl-4">renderMode: <span className="text-emerald-400">'Hybrid SSR/Edge-Cached'</span></div>
                          <div>&#125;;</div>
                        </div>
                      </div>
                    )}

                    {current.previewType === 'agents' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                          <span className="flex items-center gap-2">
                            <Activity className="h-3.5 w-3.5 text-sky-400" />
                            <span>orchestration_swarm_status</span>
                          </span>
                          <span className="text-emerald-400">active 12 nodes</span>
                        </div>
                        <div className="space-y-1.5 text-[11px] text-zinc-400">
                          <div>[14:28:01] <span className="text-sky-400">Agent.Intake:</span> User enquiry parsed (confidence: 99.4%)</div>
                          <div>[14:28:02] <span className="text-amber-300">Agent.RAG:</span> 1536-dim vector cosine match = 0.941</div>
                          <div>[14:28:02] <span className="text-emerald-400">Agent.Action:</span> CRM auto-populated · Slack alert sent</div>
                        </div>
                      </div>
                    )}

                    {current.previewType === 'seo' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                          <span className="flex items-center gap-2">
                            <Search className="h-3.5 w-3.5 text-sky-400" />
                            <span>search_engine_signals</span>
                          </span>
                          <span className="text-sky-400">GEO + SEO Validated</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center pt-1">
                          <div className="bg-white/[0.02] p-2 rounded border border-white/5">
                            <div className="text-[10px] text-zinc-500">Core Web Vitals</div>
                            <div className="text-sm text-emerald-400 font-bold">100/100</div>
                          </div>
                          <div className="bg-white/[0.02] p-2 rounded border border-white/5">
                            <div className="text-[10px] text-zinc-500">Answer Engine Citations</div>
                            <div className="text-sm text-white font-bold">98.4%</div>
                          </div>
                          <div className="bg-white/[0.02] p-2 rounded border border-white/5">
                            <div className="text-[10px] text-zinc-500">Organic Growth</div>
                            <div className="text-sm text-sky-400 font-bold">+280%</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {current.previewType === 'growth' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                          <span className="flex items-center gap-2">
                            <TrendingUp className="h-3.5 w-3.5 text-sky-400" />
                            <span>conversion_funnel_telemetry</span>
                          </span>
                          <span className="text-emerald-400">+157% Qualified Bookings</span>
                        </div>
                        <div className="space-y-1.5 text-[11px] pt-1">
                          <div className="flex justify-between text-zinc-400">
                            <span>Ad Click to Land</span>
                            <span className="text-white">96.8% (Fast Load)</span>
                          </div>
                          <div className="w-full bg-zinc-800 rounded-full h-1.5">
                            <div className="bg-sky-400 h-1.5 rounded-full" style={{ width: '96.8%' }}></div>
                          </div>
                          <div className="flex justify-between text-zinc-400 pt-1">
                            <span>Engagement to Checkout / Enquiry</span>
                            <span className="text-emerald-400">5.4% (vs 2.1% Industry avg)</span>
                          </div>
                          <div className="w-full bg-zinc-800 rounded-full h-1.5">
                            <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '54%' }}></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {current.previewType === 'brand' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                          <span className="flex items-center gap-2">
                            <Palette className="h-3.5 w-3.5 text-sky-400" />
                            <span>design_system_tokens</span>
                          </span>
                          <span className="text-zinc-400">Figma ➔ Code Sync</span>
                        </div>
                        <div className="flex gap-2 pt-1">
                          <div className="flex-1 bg-[#07090e] p-2 rounded border border-white/10 text-center">
                            <div className="h-4 rounded bg-sky-500 mb-1"></div>
                            <span className="text-[10px] text-zinc-400">Brand Blue</span>
                          </div>
                          <div className="flex-1 bg-[#07090e] p-2 rounded border border-white/10 text-center">
                            <div className="h-4 rounded bg-emerald-400 mb-1"></div>
                            <span className="text-[10px] text-zinc-400">Accent Ok</span>
                          </div>
                          <div className="flex-1 bg-[#07090e] p-2 rounded border border-white/10 text-center">
                            <div className="h-4 rounded bg-[#0c1017] border border-white/20 mb-1"></div>
                            <span className="text-[10px] text-zinc-400">Obsidian Surface</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {current.previewType === 'cloud' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                          <span className="flex items-center gap-2">
                            <Cloud className="h-3.5 w-3.5 text-sky-400" />
                            <span>multi_region_edge_matrix</span>
                          </span>
                          <span className="text-emerald-400">99.99% Operational</span>
                        </div>
                        <div className="space-y-1 text-[11px] text-zinc-400">
                          <div className="flex justify-between">
                            <span>Mumbai (ap-south-1)</span>
                            <span className="text-emerald-400">8ms · 0.00% packet loss</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Singapore (ap-southeast-1)</span>
                            <span className="text-emerald-400">32ms · 0.00% packet loss</span>
                          </div>
                          <div className="flex justify-between">
                            <span>London (eu-west-2)</span>
                            <span className="text-emerald-400">48ms · 0.00% packet loss</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {current.previewType === 'content' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                          <span className="flex items-center gap-2">
                            <MessageSquare className="h-3.5 w-3.5 text-sky-400" />
                            <span>automated_retention_flow</span>
                          </span>
                          <span className="text-emerald-400">Active Pipeline</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 space-y-1">
                          <div>[Step 1] Lead Submission ➔ Instant WhatsApp Welcome & Calendar Link</div>
                          <div>[Step 2] Day 2 Case Study Delivery (Open rate: 64.2%)</div>
                          <div>[Step 3] Day 5 Technical Proposal Discussion Trigger</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Detail CTA Row */}
                  <div className="flex items-center justify-between pt-2">
                    <Link
                      to={current.href}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-white transition-colors"
                    >
                      <span>Read {current.title} Specifications</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <Button to="/contact" size="sm" variant="ghost">
                      Discuss This Capability
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMatrixSection;
