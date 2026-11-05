import React from 'react';
import { ShieldCheck, Cloud, Cpu, Database, Zap, Lock, Layers } from 'lucide-react';

const ECOSYSTEM = [
  { name: 'Cloudflare Edge', spec: 'Global CDN & Workers', icon: Cloud },
  { name: 'Amazon Web Services', spec: 'Multi-Region Cloud', icon: Layers },
  { name: 'TypeScript 5.8', spec: 'Strict Type-Safety', icon: ShieldCheck },
  { name: 'React 19 & Vite', spec: 'Sub-Second Hydration', icon: Zap },
  { name: 'Stripe Global', spec: 'PCI Level 1 Checkout', icon: Lock },
  { name: 'Gemini & OpenAI', spec: 'Autonomous LLM Agents', icon: Cpu },
  { name: 'PostgreSQL & Supabase', spec: 'ACID Compliant Edge', icon: Database },
];

export const TrustEcosystemStrip: React.FC = () => {
  return (
    <div className="relative border-b border-white/[0.06] bg-[#07090e]/80 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Core Infrastructure Stack</span>
        </div>

        <div className="flex w-full items-center gap-6 overflow-x-auto scrollbar-none sm:w-auto">
          {ECOSYSTEM.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex flex-shrink-0 items-center gap-2 rounded-md px-2.5 py-1 text-zinc-400 transition-colors hover:text-white"
              >
                <Icon className="h-3.5 w-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                <span className="font-mono text-xs font-medium">{tech.name}</span>
                <span className="hidden font-mono text-[10px] text-zinc-600 md:inline">· {tech.spec}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustEcosystemStrip;
