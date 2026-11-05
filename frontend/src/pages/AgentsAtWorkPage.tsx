import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, ShieldCheck, Cpu, ArrowLeft } from 'lucide-react';
import { AgentsSwarmEngine } from '../components/agents-at-work/AgentsSwarmEngine';
import { SEO } from '../components/ui/SEO';

const AGENT_CARDS = [
  {
    name: 'Agent Apex',
    role: 'Swarm Orchestrator',
    color: '#3B82F6',
    desc: 'Decomposes complex client briefs into autonomous parallel workstreams, assigning tasks across engineering, copywriting, and design.',
    stats: '12ms Task Dispatch',
    code: '<AgentApex role="orchestrator" />',
    agent: 'Agent Apex',
  },
  {
    name: 'Vector RAG Engine',
    role: 'Enterprise Knowledge',
    color: '#06B6D4',
    desc: 'Connects proprietary enterprise PDFs, databases, and CRMs with zero-leak vector embeddings and sub-second semantic retrieval.',
    stats: '< 80ms Retrieval',
    code: '<VectorRAGEngine embeddings="text-embedding-3" />',
    agent: 'Vector RAG',
  },
  {
    name: 'CRO & Growth Bot',
    role: 'Conversion Optimization',
    color: '#EF4444',
    desc: 'Simulates thousands of user purchase journeys, dynamically writing high-converting variants for Google Ads and landing pages.',
    stats: '+34.8% Funnel Lift',
    code: '<CROEngine variants={24} mode="auto-tune" />',
    agent: 'CRO Engine',
  },
  {
    name: 'DevOps Sentinel',
    role: 'Autonomous Infra',
    color: '#10B981',
    desc: 'Provisions multi-region cloud containers, monitors latency spikes, and self-heals broken deployment dependencies without human intervention.',
    stats: '99.99% Auto-Uptime',
    code: '<DevOpsSentinel cloud="aws-hybrid" />',
    agent: 'DevOps Sentinel',
  },
];

const METRICS = [
  { value: '$42M+', label: 'Client Revenue Generated' },
  { value: '14.2s', label: 'Swarm Page Assembly' },
  { value: '99.98%', label: 'Automation Accuracy' },
  { value: '500+', label: 'AI Pipelines Deployed' },
];

export const AgentsAtWorkPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-ink text-fg overflow-hidden pt-6 pb-24">
      <SEO
        title="Agents at Work — A Page That Builds Itself | Qevnaro"
        description="Experience Qevnaro's autonomous multi-agent swarm building a live digital platform block by block in real time."
        path="/agents-at-work"
      />

      {/* Autonomous Swarm Animation Coordinator */}
      <AgentsSwarmEngine containerRef={containerRef} autoPlay />

      {/* Main Assembly Viewport */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Lab Breadcrumb Trail */}
        <div
          data-block
          data-code="<BreadcrumbRail path='Lab / Agents at work' />"
          data-log="mounted breadcrumb rail"
          data-agent="Layout Synth"
          className="mb-6 sm:mb-10"
        >
          <div className="fill flex items-center justify-between gap-3 border-b border-line/40 pb-3 pt-1 text-xs font-mono">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-fg-muted hover:text-brand-sky transition-colors"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>Lab / Agents</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 text-[11px] text-brand-sky">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Swarm v2.4 · 12 Nodes
            </span>
          </div>
        </div>

        {/* 2. Hero Headline Block with Character Typing */}
        <div
          data-block
          data-code="<HeroHeadline typing={true} />"
          data-log="typed hero headline"
          data-agent="Neural Copy"
          className="max-w-4xl py-2 sm:py-4"
        >
          <div className="fill">
            <h1
              data-type="headline"
              data-text="We Don't Just Write Code. We Deploy Autonomous Swarms."
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-fg leading-[1.14]"
            >
              We Don&apos;t Just Write Code. We Deploy Autonomous Swarms.
            </h1>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-fg-soft max-w-2xl">
              Watch our multi-agent architecture assemble layouts, wireframe skeletons, real-time typography, and reactive systems before your eyes.
            </p>
          </div>
        </div>

        {/* 3. Four Core Qevnaro Agent Cards */}
        <div className="mt-12">
          <div
            data-block
            data-code="<SectionHeading label='Core Swarm Nodes' />"
            data-log="placed Swarm Nodes header"
            data-agent="Layout Synth"
            className="mb-8"
          >
            <div className="fill flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-brand-sky" />
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-fg">Active Swarm Nodes</h2>
              </div>
              <span className="font-mono text-xs text-fg-muted">4 Autonomous Units</span>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AGENT_CARDS.map((card) => (
              <div
                key={card.name}
                data-block
                data-code={card.code}
                data-log={`compiled ${card.name} card`}
                data-agent={card.agent}
                className="card-glow rounded-xl sm:rounded-2xl border border-line p-4 sm:p-6 bg-surface/70 flex flex-col justify-between"
              >
                <div className="fill">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded font-mono text-[10px] sm:text-[11px] font-semibold"
                      style={{ backgroundColor: `${card.color}22`, color: card.color, border: `1px solid ${card.color}44` }}
                    >
                      {card.role}
                    </span>
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: card.color }} />
                  </div>

                  <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-lg font-semibold text-fg">{card.name}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-fg-soft">{card.desc}</p>
                </div>

                <div className="fill mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-line/50 flex items-center justify-between font-mono text-[11px] sm:text-xs">
                  <span className="text-fg-muted">Performance</span>
                  <span className="font-semibold text-brand-sky">{card.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Live Agency Telemetry Metrics Grid */}
        <div className="mt-10 sm:mt-16">
          <div
            data-block
            data-code="<AgencyTelemetryGrid metrics={4} />"
            data-log="deployed live telemetry dock"
            data-agent="Schema Core"
            className="card-glow rounded-xl sm:rounded-2xl border border-line bg-surface/40 p-4 sm:p-8"
          >
            <div className="fill grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {METRICS.map((metric) => (
                <div key={metric.label} className="text-left">
                  <span className="font-display text-2xl sm:text-4xl font-bold text-fg block">
                    {metric.value}
                  </span>
                  <span className="mt-1 sm:mt-2 block font-mono text-[11px] sm:text-xs text-fg-muted">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Swarm Architecture & Telemetry Terminal */}
        <div className="mt-16">
          <div
            data-block
            data-code="<SwarmRuntimeConsole engine='v8' />"
            data-log="initialized runtime telemetry"
            data-agent="Codex Engine"
            className="card-glow rounded-xl sm:rounded-2xl border border-line bg-surface/80 p-4 sm:p-8 font-mono text-xs"
          >
            <div className="fill">
              <div className="flex items-center justify-between border-b border-line pb-3 sm:pb-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-brand-sky" />
                  <span className="text-fg font-semibold uppercase tracking-wider text-[11px] sm:text-xs">Swarm Pipeline</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active Stream
                </span>
              </div>

              <div className="space-y-2 text-fg-soft leading-relaxed text-[11px] sm:text-xs">
                <p className="flex flex-wrap sm:flex-nowrap items-baseline gap-1.5">
                  <span className="text-fg-muted font-mono shrink-0">[00:01.04]</span>
                  <span className="text-blue-400 font-semibold shrink-0">Agent Apex:</span>
                  <span className="break-words">Decomposed requirements into 12 micro-tasks with zero human blockers.</span>
                </p>
                <p className="flex flex-wrap sm:flex-nowrap items-baseline gap-1.5">
                  <span className="text-fg-muted font-mono shrink-0">[00:01.28]</span>
                  <span className="text-cyan-400 font-semibold shrink-0">Vector RAG:</span>
                  <span className="break-words">Vectorized 42 proprietary documents into 1536-dimensional hyperplanes.</span>
                </p>
                <p className="flex flex-wrap sm:flex-nowrap items-baseline gap-1.5">
                  <span className="text-fg-muted font-mono shrink-0">[00:01.62]</span>
                  <span className="text-emerald-400 font-semibold shrink-0">DevOps Sentinel:</span>
                  <span className="break-words">Automated load balancer deployment across AWS edge clusters.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Final Client Handover / Launchpad Block */}
        <div className="mt-10 sm:mt-16 mb-8 sm:mb-12">
          <div
            data-block
            data-code="<HumanHandoverCTA action='deploy' />"
            data-log="rendered client launchpad"
            data-agent="Agent Apex"
            className="card-glow rounded-2xl sm:rounded-3xl border border-brand-blue/40 bg-gradient-to-br from-surface to-elevated p-6 sm:p-12 text-center"
          >
            <div className="fill max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-[11px] text-emerald-400 mb-3">
                <ShieldCheck className="h-3.5 w-3.5" />
                Assembly Ready for Human Control
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-fg">
                Ready to Put Autonomous Intelligence to Work?
              </h2>

              <p className="mt-3 text-xs sm:text-base text-fg-soft leading-relaxed">
                Whether you need custom RAG assistants, automated multi-app workflows, or high-performance digital products, our team and swarm are ready to build.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90 transition-all"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services/ai-automation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-sm font-semibold text-fg hover:border-brand-sky hover:text-brand-sky transition-all"
                >
                  Explore AI Automation
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentsAtWorkPage;
