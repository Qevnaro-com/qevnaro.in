import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, RotateCcw, FastForward, ChevronDown, ChevronUp, Cpu, CheckCircle2 } from 'lucide-react';
import type { SwarmLogEvent } from './types';

interface SwarmActivityLogProps {
  logs: SwarmLogEvent[];
  isBuilding: boolean;
  isComplete: boolean;
  totalBlocks: number;
  completedBlocks: number;
  elapsedSeconds: number;
  onSkip: () => void;
  onRebuild: () => void;
}

export const SwarmActivityLog: React.FC<SwarmActivityLogProps> = ({
  logs,
  isBuilding,
  isComplete,
  totalBlocks,
  completedBlocks,
  elapsedSeconds,
  onSkip,
  onRebuild,
}) => {
  // Unslop fix: default to compact minimized pill on phone screens so it never covers content
  const [minimized, setMinimized] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const ms = Math.floor((secs % 1) * 10);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${ms}`;
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 max-w-[calc(100vw-24px)]">
      <AnimatePresence mode="wait">
        {minimized ? (
          <motion.div
            key="minimized-pill"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="card-glow glass-dock flex items-center gap-2.5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-mono text-fg shadow-2xl border border-white/10"
          >
            <button
              type="button"
              onClick={() => setMinimized(false)}
              className="flex items-center gap-2 text-left"
              aria-label="Expand Swarm HUD"
            >
              <span className="relative flex h-2 w-2">
                {isBuilding && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                )}
                <span className={`relative inline-flex h-2 w-2 rounded-full ${isComplete ? 'bg-emerald-400' : 'bg-brand-sky'}`} />
              </span>
              <span className="font-semibold text-brand-sky">Swarm</span>
              <span className="text-fg-muted font-mono text-[11px]">{completedBlocks}/{totalBlocks}</span>
              <span className="hidden sm:inline text-fg-muted font-mono text-[10px]">{formatTime(elapsedSeconds)}</span>
              <ChevronUp className="h-3.5 w-3.5 text-fg-muted ml-0.5" />
            </button>

            {isBuilding && (
              <button
                type="button"
                onClick={onSkip}
                className="ml-1 rounded bg-brand-blue/30 px-2 py-0.5 text-[10px] font-semibold text-brand-sky hover:bg-brand-blue/50 border border-brand-blue/40"
              >
                Skip ⚡
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="full-hud"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="card-glow glass-dock w-80 sm:w-96 rounded-2xl border border-white/10 p-3.5 shadow-2xl backdrop-blur-2xl"
          >
            {/* HUD Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  {isBuilding && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                  )}
                  <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isComplete ? 'bg-emerald-400' : 'bg-brand-sky'}`} />
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-fg">
                  <Cpu className="h-3.5 w-3.5 text-brand-sky" />
                  Swarm Telemetry
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-fg-muted">
                <span>{formatTime(elapsedSeconds)}</span>
                <button
                  type="button"
                  onClick={() => setMinimized(true)}
                  className="rounded p-1 hover:bg-white/10 text-fg-muted hover:text-fg"
                  aria-label="Minimize HUD"
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Block Completion Progress Bar */}
            <div className="mt-2.5">
              <div className="flex justify-between font-mono text-[10px] text-fg-muted">
                <span>Assembly Progress</span>
                <span className="text-brand-sky font-semibold">
                  {completedBlocks} / {totalBlocks} ({totalBlocks > 0 ? Math.round((completedBlocks / totalBlocks) * 100) : 0}%)
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-blue to-accent-cyan shadow-[0_0_10px_rgba(56,189,248,0.7)]"
                  initial={false}
                  animate={{ width: `${totalBlocks > 0 ? (completedBlocks / totalBlocks) * 100 : 0}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Activity Stream */}
            <div className="mt-3 max-h-36 overflow-y-auto space-y-1.5 pr-1 font-mono text-[11px] no-scrollbar">
              {logs.length === 0 ? (
                <div className="py-4 text-center text-fg-muted flex items-center justify-center gap-2">
                  <Terminal className="h-3.5 w-3.5 animate-pulse text-brand-sky" />
                  <span>Swarm agents initializing...</span>
                </div>
              ) : (
                logs.slice(-6).map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-fg-soft"
                  >
                    <span className="text-[10px] text-fg-muted shrink-0">{log.time}</span>
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold shrink-0"
                      style={{ backgroundColor: `${log.agentColor}22`, color: log.agentColor, border: `1px solid ${log.agentColor}44` }}
                    >
                      {log.agentName}
                    </span>
                    <span className="truncate text-[11px] text-fg">{log.action}</span>
                  </motion.div>
                ))
              )}
            </div>

            {/* Controls */}
            <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center gap-2">
              {isBuilding ? (
                <button
                  type="button"
                  onClick={onSkip}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-sky border border-brand-blue/40 text-xs font-mono font-medium transition-all"
                >
                  <FastForward className="h-3.5 w-3.5" />
                  Skip to Finish
                </button>
              ) : (
                <div className="flex-1 flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Swarm Build Complete
                </div>
              )}
              <button
                type="button"
                onClick={onRebuild}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-fg-soft hover:text-fg border border-white/10 text-xs font-mono font-medium transition-all"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Rebuild
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
