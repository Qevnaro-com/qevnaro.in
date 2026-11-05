import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  TrendingUp,
  Server,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

interface EngineTab {
  id: 'apps' | 'agents' | 'growth' | 'infra';
  label: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TABS: EngineTab[] = [
  { id: 'apps', label: 'Web Platform', badge: '0.42s LCP', icon: Code2 },
  { id: 'agents', label: 'Agent Matrix', badge: '1,280 tok/s', icon: Cpu },
  { id: 'growth', label: 'Growth Engine', badge: '+157% Lift', icon: TrendingUp },
  { id: 'infra', label: 'Edge Infra', badge: '99.99%', icon: Server },
];

export const HeroEngineeringCockpit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EngineTab['id']>('apps');

  return (
    <div className="relative w-full max-w-full rounded-2xl border border-white/10 bg-[#0c0f17] p-1 shadow-2xl shadow-black/80 lg:max-w-xl">
      {/* Top Window Chrome */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-zinc-500">
            qevnaro://sys-core.v2.4
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-zinc-500">telemetry:</span>
          <span className="text-emerald-400 tabular-nums">24ms ping</span>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex items-center gap-1 overflow-x-auto border-b border-white/5 p-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex min-h-[40px] flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 font-mono text-xs transition-colors ${
                isActive
                  ? 'bg-white/10 text-white shadow-sm ring-1 ring-white/10'
                  : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-sky-400' : 'text-zinc-500 group-hover:text-zinc-400'}`} />
              <span>{tab.label}</span>
              <span
                className={`rounded px-1.5 py-0.5 text-[10px] tabular-nums ${
                  isActive ? 'bg-sky-500/20 text-sky-300' : 'bg-white/[0.04] text-zinc-500'
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel Body */}
      <div className="p-4 sm:p-5">
        <AnimatePresence mode="wait">
          {activeTab === 'apps' && (
            <motion.div
              key="apps"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Production Benchmark</div>
                  <div className="text-sm font-medium text-white">Sub-second enterprise frontend</div>
                </div>
                <div className="inline-flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  <ShieldCheck className="h-3 w-3" /> Grade A+
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="text-[10px] font-mono text-zinc-500">LCP Speed</div>
                  <div className="mt-1 font-mono text-base font-medium text-white tabular-nums">0.42s</div>
                  <div className="text-[10px] text-emerald-400 font-mono">99.8th pct</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="text-[10px] font-mono text-zinc-500">Layout Shift</div>
                  <div className="mt-1 font-mono text-base font-medium text-white tabular-nums">0.000</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Zero jump</div>
                </div>
                <div className="col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 sm:col-span-1">
                  <div className="text-[10px] font-mono text-zinc-500">Time to Interactive</div>
                  <div className="mt-1 font-mono text-base font-medium text-white tabular-nums">0.68s</div>
                  <div className="text-[10px] text-sky-400 font-mono">Hydration edge</div>
                </div>
              </div>

              {/* Real SVG Performance Chart */}
              <div className="rounded-xl border border-white/5 bg-[#090b10] p-3">
                <div className="flex items-center justify-between pb-2 text-[10px] font-mono text-zinc-400">
                  <span>Throughput (req/sec)</span>
                  <span className="text-zinc-500">Peak: 14,200 req/s</span>
                </div>
                <div className="flex h-16 items-end gap-1.5 pt-2">
                  {[45, 62, 58, 79, 72, 88, 94, 82, 91, 100, 96, 98].map((val, idx) => (
                    <div key={idx} className="group relative flex-1">
                      <div
                        style={{ height: `${val}%` }}
                        className={`w-full rounded-t transition-all ${
                          idx >= 9 ? 'bg-sky-400' : 'bg-zinc-700/60 group-hover:bg-zinc-500'
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between font-mono text-[9px] text-zinc-600">
                  <span>00:00 UTC</span>
                  <span>12:00 UTC</span>
                  <span>Now (Real-time)</span>
                </div>
              </div>

              {/* Code Footnote */}
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <Terminal className="h-3.5 w-3.5 text-sky-400" />
                  <span className="text-zinc-300">stack:</span>
                  <span className="text-zinc-500">React 19 · Vite · Cloudflare Workers</span>
                </div>
                <span className="font-mono text-[10px] text-sky-400 flex items-center gap-0.5">
                  live <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === 'agents' && (
            <motion.div
              key="agents"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Multi-Agent Orchestration</div>
                  <div className="text-sm font-medium text-white">Autonomous LLM workflow pipeline</div>
                </div>
                <div className="inline-flex items-center gap-1 rounded border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-[10px] text-sky-400">
                  <Activity className="h-3 w-3" /> Swarm Active
                </div>
              </div>

              {/* Agents 4-node pipeline grid: 2-col on mobile, 4-col on sm+ */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { step: '01', name: 'Intake Node', status: 'Completed', latency: '12ms' },
                  { step: '02', name: 'Vector RAG', status: '1536-dim', latency: '48ms' },
                  { step: '03', name: 'Critic Pass', status: 'Validated', latency: '34ms' },
                  { step: '04', name: 'Final Action', status: 'Deployed', latency: '19ms' },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                    <span className="font-mono text-[10px] text-sky-400">{item.step}</span>
                    <div className="mt-1 text-xs font-medium text-white truncate">{item.name}</div>
                    <div className="mt-1 font-mono text-[10px] text-zinc-400">{item.status}</div>
                    <div className="font-mono text-[9px] text-emerald-400 mt-0.5">{item.latency}</div>
                  </div>
                ))}
              </div>

              {/* Terminal Execution Preview */}
              <div className="rounded-xl border border-white/5 bg-[#090b10] p-3 font-mono text-[11px] leading-relaxed text-zinc-300">
                <div className="text-zinc-600">// swarm execution log: run_agent_matrix()</div>
                <div className="text-zinc-400">
                  <span className="text-emerald-400">✓</span> [RAG-Store] 42 documents retrieved (cosine: 0.94)
                </div>
                <div className="text-zinc-400">
                  <span className="text-sky-400">⚡</span> [Inference] Gemini 2.5 Pro streaming 1,280 tok/s
                </div>
                <div className="text-zinc-400">
                  <span className="text-emerald-400">✓</span> [Schema Guard] 100% type-safe JSON validated
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400">
                <div className="font-mono text-[11px] text-zinc-400">
                  Autonomy Level: <span className="text-white">Full Delegation</span>
                </div>
                <div className="font-mono text-[11px] text-emerald-400">0 Human intervention needed</div>
              </div>
            </motion.div>
          )}

          {activeTab === 'growth' && (
            <motion.div
              key="growth"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Conversion Engine</div>
                  <div className="text-sm font-medium text-white">Full-funnel ROI & SEO architecture</div>
                </div>
                <div className="inline-flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  +157% Pipeline
                </div>
              </div>

              {/* A/B Comparison Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="text-[10px] font-mono text-zinc-500">Industry Baseline</div>
                  <div className="mt-1 text-xl font-mono text-zinc-400 tabular-nums">2.1%</div>
                  <div className="mt-1 text-[11px] text-zinc-500">Generic landing page template</div>
                </div>
                <div className="rounded-xl border border-sky-500/20 bg-sky-500/[0.04] p-3">
                  <div className="text-[10px] font-mono text-sky-400">Qevnaro Engineered</div>
                  <div className="mt-1 text-xl font-mono text-white tabular-nums">5.4%</div>
                  <div className="mt-1 text-[11px] text-emerald-400">+157% lift in qualified bookings</div>
                </div>
              </div>

              {/* Proven KPIs */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="text-[10px] font-mono text-zinc-500">Search Rank</div>
                  <div className="mt-1 font-mono text-sm font-medium text-white">Top 3</div>
                  <div className="text-[10px] text-zinc-400">High-intent intent</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="text-[10px] font-mono text-zinc-500">PageSpeed</div>
                  <div className="mt-1 font-mono text-sm font-medium text-white">100/100</div>
                  <div className="text-[10px] text-emerald-400">Core Web Vitals</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="text-[10px] font-mono text-zinc-500">CAC Reduction</div>
                  <div className="mt-1 font-mono text-sm font-medium text-white">-38%</div>
                  <div className="text-[10px] text-sky-400">Ad efficiency</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-zinc-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Verified across $42M+ in client annual transactions.</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'infra' && (
            <motion.div
              key="infra"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Edge Cloud Cluster</div>
                  <div className="text-sm font-medium text-white">Zero-downtime global fabric</div>
                </div>
                <div className="inline-flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  99.99% SLA
                </div>
              </div>

              {/* Edge Node Status */}
              <div className="space-y-2">
                {[
                  { region: 'Mumbai (ap-south-1)', latency: '8ms', load: '22%', status: 'Operational' },
                  { region: 'Singapore (ap-southeast-1)', latency: '32ms', load: '19%', status: 'Operational' },
                  { region: 'London (eu-west-2)', latency: '48ms', load: '31%', status: 'Operational' },
                ].map((node) => (
                  <div
                    key={node.region}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="font-mono text-[10px] text-zinc-300 truncate">{node.region}</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[11px]">
                      <span className="text-zinc-500">load: {node.load}</span>
                      <span className="text-emerald-400 tabular-nums">{node.latency}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Edge Telemetry Footnote */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-white/5 bg-[#090b10] p-2.5 font-mono text-[11px]">
                  <div className="text-zinc-500">Cache Hit Ratio</div>
                  <div className="mt-1 text-base text-white tabular-nums">99.4%</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#090b10] p-2.5 font-mono text-[11px]">
                  <div className="text-zinc-500">SSL Termination</div>
                  <div className="mt-1 text-base text-emerald-400">TLS 1.3 Strict</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
