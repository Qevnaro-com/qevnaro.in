import { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export function LiveTelemetryDeck() {
  const [latency, setLatency] = useState(42);
  const [upiSuccess] = useState(99.85);
  const [queryP99, setQueryP99] = useState(16);

  // Subtle real-time micro-fluctuations (Diagnostics pattern)
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(40 + Math.floor(Math.sin(Date.now() / 1000) * 4));
      setQueryP99(15 + Math.floor(Math.cos(Date.now() / 1500) * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl bg-surface/90 backdrop-blur-xl border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 sm:p-6">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-white tracking-wider">
            PRODUCTION TELEMETRY
          </span>
        </div>
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-mono">
          ALL CLUSTERS NOMINAL
        </span>
      </div>

      {/* 3 Circular Telemetry Gauges */}
      <div className="grid grid-cols-3 gap-3 text-center">
        {/* Gauge 1: WebRTC Latency */}
        <div className="p-3 rounded-2xl bg-ink/70 border border-white/[0.06] flex flex-col items-center">
          <div className="relative w-14 h-14 mb-2 flex items-center justify-center">
            <svg className="w-14 h-14 -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="22"
                className="text-white/[0.08] stroke-current"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                className="text-emerald-400 stroke-current transition-all duration-700"
                strokeWidth="4"
                strokeDasharray="138"
                strokeDashoffset={138 - (138 * (100 - latency)) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <Activity className="w-4 h-4 text-emerald-400 absolute" />
          </div>
          <div className="text-base font-black text-white font-mono">{latency} ms</div>
          <div className="text-[9px] font-bold text-fg-muted uppercase tracking-wider font-mono">WebRTC Lag</div>
        </div>

        {/* Gauge 2: UPI Settlement */}
        <div className="p-3 rounded-2xl bg-ink/70 border border-white/[0.06] flex flex-col items-center">
          <div className="relative w-14 h-14 mb-2 flex items-center justify-center">
            <svg className="w-14 h-14 -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="22"
                className="text-white/[0.08] stroke-current"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                className="text-brand-blue stroke-current"
                strokeWidth="4"
                strokeDasharray="138"
                strokeDashoffset="3"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <ShieldCheck className="w-4 h-4 text-brand-sky absolute" />
          </div>
          <div className="text-base font-black text-white font-mono">{upiSuccess}%</div>
          <div className="text-[9px] font-bold text-fg-muted uppercase tracking-wider font-mono">UPI Success</div>
        </div>

        {/* Gauge 3: Query P99 */}
        <div className="p-3 rounded-2xl bg-ink/70 border border-white/[0.06] flex flex-col items-center">
          <div className="relative w-14 h-14 mb-2 flex items-center justify-center">
            <svg className="w-14 h-14 -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="22"
                className="text-white/[0.08] stroke-current"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                className="text-brand-sky stroke-current transition-all duration-700"
                strokeWidth="4"
                strokeDasharray="138"
                strokeDashoffset={138 - (138 * (100 - queryP99 * 2)) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <Zap className="w-4 h-4 text-brand-sky absolute" />
          </div>
          <div className="text-base font-black text-white font-mono">{queryP99} ms</div>
          <div className="text-[9px] font-bold text-fg-muted uppercase tracking-wider font-mono">API P99</div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-fg-muted font-mono">
        <span>Active Region: AP-South-1 (Mumbai)</span>
        <span className="font-bold text-brand-sky">99.9% Monitored SLA</span>
      </div>
    </div>
  );
}

export default LiveTelemetryDeck;
