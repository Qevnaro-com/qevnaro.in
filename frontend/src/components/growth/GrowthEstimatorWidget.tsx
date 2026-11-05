import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';
import { Button } from '../ui/Button';

type ProjectType = 'web' | 'ai' | 'mobile' | 'growth';

const OPTIONS: Record<
  ProjectType,
  { label: string; icon: React.ComponentType<{ className?: string }>; multiplier: number; timeline: string; tech: string }
> = {
  web: { label: 'Web Platform', icon: Zap, multiplier: 2.4, timeline: '4–6 Weeks', tech: 'React 19 · Vite · Edge CDN' },
  ai: { label: 'AI Agent Swarm', icon: Cpu, multiplier: 3.2, timeline: '3–5 Weeks', tech: 'Gemini 2.5 Pro · RAG · Multi-Agent' },
  mobile: { label: 'Mobile Application', icon: ShieldCheck, multiplier: 2.1, timeline: '6–8 Weeks', tech: 'iOS & Android · Offline-first' },
  growth: { label: 'Full-Funnel Growth', icon: TrendingUp, multiplier: 2.8, timeline: '2–4 Weeks', tech: 'GEO/SEO · Headless Checkout' },
};

export const GrowthEstimatorWidget: React.FC = () => {
  const [projectType, setProjectType] = useState<ProjectType>('web');
  const [traffic, setTraffic] = useState<number>(50); // in thousands
  const [currentCvr, setCurrentCvr] = useState<number>(2.0); // in percentage

  const currentConfig = OPTIONS[projectType];
  const projectedCvr = Math.min(6.5, +(currentCvr * currentConfig.multiplier).toFixed(1));
  const estimatedConversions = Math.round((traffic * 1000 * projectedCvr) / 100);
  const baselineConversions = Math.round((traffic * 1000 * currentCvr) / 100);
  const incrementalLift = estimatedConversions - baselineConversions;

  return (
    <section className="relative border-b border-white/[0.08] bg-[#07090e] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 font-mono text-xs text-sky-400">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive ROI & Scope Estimator</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simulate Your Digital Growth Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            See the projected impact of engineering rigor, sub-second speed, and autonomous automation on your pipeline.
          </p>
        </div>

        {/* Interactive Calculator Bento Box */}
        <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0d1017] p-6 sm:p-8 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Column: Sliders and Selections */}
            <div className="space-y-6 lg:col-span-7">
              {/* Scope Selection */}
              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-2 uppercase tracking-wider">
                  1. Select Core Focus Area
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(OPTIONS) as ProjectType[]).map((key) => {
                    const opt = OPTIONS[key];
                    const Icon = opt.icon;
                    const isSelected = projectType === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setProjectType(key)}
                        className={`flex items-center gap-2 rounded-xl p-3 text-left transition-all font-mono text-xs ${
                          isSelected
                            ? 'bg-sky-500/20 text-white border border-sky-500/40'
                            : 'bg-white/[0.02] text-zinc-400 border border-white/5 hover:border-white/10 hover:text-zinc-200'
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isSelected ? 'text-sky-400' : 'text-zinc-500'}`} />
                        <span className="truncate">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Traffic Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-zinc-400 uppercase tracking-wider">2. Monthly Unique Visitors</span>
                  <span className="text-white font-medium tabular-nums">{traffic.toLocaleString()}k / month</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                  <span>5k (Startup)</span>
                  <span>100k (Scale)</span>
                  <span>200k+ (Enterprise)</span>
                </div>
              </div>

              {/* Current Conversion Rate Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-zinc-400 uppercase tracking-wider">3. Current Baseline Conversion</span>
                  <span className="text-zinc-300 font-medium tabular-nums">{currentCvr.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="4.0"
                  step="0.1"
                  value={currentCvr}
                  onChange={(e) => setCurrentCvr(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                  <span>0.5% (Underperforming)</span>
                  <span>2.0% (Average)</span>
                  <span>4.0% (Strong)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Projected Output */}
            <div className="lg:col-span-5 rounded-xl border border-sky-500/20 bg-sky-500/[0.03] p-5 sm:p-6 space-y-5">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-sky-400">
                  Projected Conversion Rate
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-mono font-medium text-white tabular-nums">
                    {projectedCvr.toFixed(1)}%
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    +{Math.round(((projectedCvr - currentCvr) / currentCvr) * 100)}% lift
                  </span>
                </div>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Monthly Incremental Leads:</span>
                  <span className="text-white font-medium tabular-nums">+{incrementalLift.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Target Delivery Window:</span>
                  <span className="text-sky-300">{currentConfig.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Recommended Stack:</span>
                  <span className="text-zinc-300 text-[11px] truncate max-w-[150px]">{currentConfig.tech}</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  to={`/contact?focus=${projectType}&traffic=${traffic}k`}
                  size="md"
                  className="w-full"
                >
                  Lock In This Scope
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
                <div className="text-center font-mono text-[10px] text-zinc-500 mt-2">
                  Includes free technical architecture roadmap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthEstimatorWidget;
