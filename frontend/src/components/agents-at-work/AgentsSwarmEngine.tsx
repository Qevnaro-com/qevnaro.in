import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AGENT_ROSTER, type AgentConfig, type CursorState, type MarqueeRect, type SwarmLogEvent } from './types';
import { SwarmActivityLog } from './SwarmActivityLog';

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

interface AgentsSwarmEngineProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  autoPlay?: boolean;
}

export const AgentsSwarmEngine: React.FC<AgentsSwarmEngineProps> = ({
  containerRef,
  autoPlay = true,
}) => {
  const [cursors, setCursors] = useState<CursorState[]>(() =>
    AGENT_ROSTER.map((agent, i) => ({
      ...agent,
      x: 100 + (i % 4) * 80,
      y: 120 + Math.floor(i / 4) * 90,
      targetX: 100 + (i % 4) * 80,
      targetY: 120 + Math.floor(i / 4) * 90,
      originX: 100 + (i % 4) * 80,
      originY: 120 + Math.floor(i / 4) * 90,
      bow: (Math.random() - 0.5) * 50,
      progress: 1,
      duration: 1000,
      startTime: 0,
      active: false,
      state: 'idle',
    }))
  );

  const [marquees, setMarquees] = useState<Record<string, MarqueeRect>>({});
  const [logs, setLogs] = useState<SwarmLogEvent[]>([]);
  const [isBuilding, setIsBuilding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [totalBlocks, setTotalBlocks] = useState(0);
  const [completedBlocks, setCompletedBlocks] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const rafId = useRef<number | null>(null);
  const buildTimeoutRef = useRef<number | null>(null);
  const timerIntervalRef = useRef<number | null>(null);
  const userScrolledRef = useRef(false);
  const isCancelledRef = useRef(false);

  const addLog = useCallback((agent: AgentConfig, action: string) => {
    const now = new Date();
    const timeStr = `${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${Math.floor(now.getMilliseconds() / 100)}`;
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        time: timeStr,
        agentName: agent.name,
        agentColor: agent.color,
        action,
      },
    ]);
  }, []);

  // Complete everything immediately
  const skipToDone = useCallback(() => {
    if (!containerRef.current) return;
    isCancelledRef.current = true;
    const blocks = containerRef.current.querySelectorAll<HTMLElement>('[data-block]');
    blocks.forEach((b) => {
      b.setAttribute('data-state', 'done');
      b.removeAttribute('data-flash');
      // clear any typing overlays
      const typingOverlay = b.querySelector('.typing-overlay');
      if (typingOverlay) typingOverlay.remove();
      const typeTarget = b.querySelector<HTMLElement>('[data-type]');
      if (typeTarget) typeTarget.removeAttribute('data-typing');
    });

    setMarquees({});
    setIsBuilding(false);
    setIsComplete(true);
    setCompletedBlocks(blocks.length);

    // Spread cursors into idle floating positions
    setCursors((prev) =>
      prev.map((c, i) => ({
        ...c,
        active: false,
        state: 'idle',
        x: 60 + (i % 6) * 160,
        y: 80 + Math.floor(i / 6) * 120,
      }))
    );
  }, [containerRef]);

  // Main build runner
  const startBuild = useCallback(async () => {
    if (!containerRef.current) return;
    isCancelledRef.current = false;
    userScrolledRef.current = false;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      skipToDone();
      return;
    }

    const blocks = Array.from(containerRef.current.querySelectorAll<HTMLElement>('[data-block]'));
    if (blocks.length === 0) return;

    setTotalBlocks(blocks.length);
    setCompletedBlocks(0);
    setLogs([]);
    setIsBuilding(true);
    setIsComplete(false);
    setElapsedSeconds(0);

    // Mark body/container with active build class
    containerRef.current.classList.add('agents-build-active');

    // Reset all blocks to empty
    blocks.forEach((b) => {
      b.setAttribute('data-state', 'empty');
      b.removeAttribute('data-flash');
    });

    const startTime = performance.now();
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = window.setInterval(() => {
      setElapsedSeconds((performance.now() - startTime) / 1000);
    }, 100);

    // Initial announcement
    addLog(AGENT_ROSTER[0], 'Swarm dispatched. Beginning block layout synthesis.');

    // Process blocks sequentially with multi-agent concurrency
    for (let index = 0; index < blocks.length; index++) {
      if (isCancelledRef.current) break;
      const block = blocks[index];

      // Pick agent (from data-agent or round robin)
      const preferredName = block.getAttribute('data-agent');
      const agent =
        AGENT_ROSTER.find((a) => a.name.toLowerCase() === preferredName?.toLowerCase()) ||
        AGENT_ROSTER[index % AGENT_ROSTER.length];

      const blockRect = block.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const blockTop = blockRect.top + scrollY;
      const blockLeft = blockRect.left + scrollX;
      const blockWidth = blockRect.width;
      const blockHeight = blockRect.height;

      // Auto-camera tracking if user has not scrolled deliberately
      if (!userScrolledRef.current && autoPlay) {
        const targetScroll = Math.max(0, blockTop - 180);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }

      // Step 1: Fly cursor to top-left of block
      const cursorIndex = AGENT_ROSTER.findIndex((a) => a.id === agent.id);
      if (cursorIndex !== -1) {
        setCursors((prev) => {
          const next = [...prev];
          next[cursorIndex] = {
            ...next[cursorIndex],
            active: true,
            state: 'traveling',
            originX: next[cursorIndex].x,
            originY: next[cursorIndex].y,
            targetX: blockLeft,
            targetY: blockTop,
            bow: (Math.random() - 0.5) * 80,
            duration: 450,
            startTime: performance.now(),
            progress: 0,
          };
          return next;
        });
      }

      await new Promise((r) => setTimeout(r, 480));
      if (isCancelledRef.current) break;

      // Step 2: Drag Marquee across block (mark state)
      block.setAttribute('data-state', 'mark');
      const marqueeKey = block.id || `block-${index}`;
      setMarquees((prev) => ({
        ...prev,
        [marqueeKey]: {
          x: blockLeft,
          y: blockTop,
          w: blockWidth,
          h: blockHeight,
          agentColor: agent.color,
          agentName: agent.name,
        },
      }));

      // Move cursor to bottom-right of block
      if (cursorIndex !== -1) {
        setCursors((prev) => {
          const next = [...prev];
          next[cursorIndex] = {
            ...next[cursorIndex],
            state: 'dragging',
            originX: blockLeft,
            originY: blockTop,
            targetX: blockLeft + blockWidth,
            targetY: blockTop + blockHeight,
            bow: 0,
            duration: 380,
            startTime: performance.now(),
            progress: 0,
          };
          return next;
        });
      }

      await new Promise((r) => setTimeout(r, 420));
      if (isCancelledRef.current) break;

      // Remove marquee and switch to rough state
      setMarquees((prev) => {
        const next = { ...prev };
        delete next[marqueeKey];
        return next;
      });

      // Step 3: Rough state (outline + skeleton + JSX tooltip)
      block.setAttribute('data-state', 'rough');
      const logMsg = block.getAttribute('data-log') || `scaffolded ${block.getAttribute('data-code') || 'section'}`;
      addLog(agent, logMsg);

      // Check for live headline typing
      const typeEl = block.querySelector<HTMLElement>('[data-type]');
      if (typeEl && !isCancelledRef.current) {
        const fullText = typeEl.getAttribute('data-text') || typeEl.innerText || '';
        typeEl.setAttribute('data-typing', 'true');
        const overlay = document.createElement('span');
        overlay.className = 'typing-overlay absolute inset-0 pointer-events-none text-fg';
        overlay.style.color = 'var(--color-fg)';
        typeEl.parentElement?.style.setProperty('position', 'relative');
        typeEl.appendChild(overlay);

        // Type letter by letter
        for (let c = 0; c <= fullText.length; c += 2) {
          if (isCancelledRef.current) break;
          overlay.innerHTML = `${fullText.slice(0, c)}<span class="inline-block w-2 h-5 ml-0.5 animate-pulse align-middle" style="background:${agent.color}"></span>`;
          await new Promise((r) => setTimeout(r, 28));
        }
        overlay.remove();
        typeEl.removeAttribute('data-typing');
      } else {
        await new Promise((r) => setTimeout(r, 260));
      }

      if (isCancelledRef.current) break;

      // Step 4: Done state + flash bloom
      block.setAttribute('data-state', 'done');
      block.setAttribute('data-flash', 'true');
      setCompletedBlocks((c) => c + 1);

      // Idle drift cursor slightly
      if (cursorIndex !== -1) {
        setCursors((prev) => {
          const next = [...prev];
          next[cursorIndex] = {
            ...next[cursorIndex],
            state: 'idle',
            originX: next[cursorIndex].x,
            originY: next[cursorIndex].y,
            targetX: next[cursorIndex].x + (Math.random() - 0.5) * 80,
            targetY: next[cursorIndex].y + (Math.random() - 0.5) * 60,
            duration: 800,
            startTime: performance.now(),
            progress: 0,
          };
          return next;
        });
      }

      await new Promise((r) => setTimeout(r, 120));
      block.removeAttribute('data-flash');
    }

    if (!isCancelledRef.current) {
      addLog(AGENT_ROSTER[0], 'All 12 modules compiled & verified. Handing over to user.');
      setIsBuilding(false);
      setIsComplete(true);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  }, [containerRef, autoPlay, addLog, skipToDone]);

  // Rebuild sequence (pull apart from bottom up, then replay)
  const rebuild = useCallback(async () => {
    if (!containerRef.current) return;
    isCancelledRef.current = true;
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    const blocks = Array.from(containerRef.current.querySelectorAll<HTMLElement>('[data-block]')).reverse();
    // Pull apart
    for (const b of blocks) {
      b.setAttribute('data-state', 'rough');
      await new Promise((r) => setTimeout(r, 40));
      b.setAttribute('data-state', 'empty');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    await new Promise((r) => setTimeout(r, 600));

    startBuild();
  }, [containerRef, startBuild]);

  // Deliberate user scroll detection
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastY);
      if (dy > 60 && isBuilding) {
        userScrolledRef.current = true;
      }
      lastY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isBuilding]);

  // Animation Frame Loop for Cursors
  useEffect(() => {
    const loop = (time: number) => {
      setCursors((prev) => {
        let changed = false;
        const next = prev.map((c) => {
          if (c.progress >= 1 && c.state !== 'idle') return c;

          const elapsed = time - c.startTime;
          const p = Math.min(1, Math.max(0, elapsed / c.duration));
          const e = easeInOutQuad(p);

          const dx = c.targetX - c.originX;
          const dy = c.targetY - c.originY;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;

          // Bow offset perpendicular to movement line
          const bowOffset = Math.sin(Math.PI * e) * c.bow;
          const rawX = c.originX + dx * e - (dy / len) * bowOffset;
          const currentY = c.originY + dy * e + (dx / len) * bowOffset;

          // Unslop fix: clamp X on mobile so name tags never clip viewport
          const maxX = typeof window !== 'undefined' ? Math.max(260, window.innerWidth - 124) : 1000;
          const currentX = Math.max(8, Math.min(maxX, rawX));

          changed = true;
          return {
            ...c,
            x: currentX,
            y: currentY,
            progress: p,
          };
        });
        return changed ? next : prev;
      });

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Mount trigger
  useEffect(() => {
    if (autoPlay) {
      buildTimeoutRef.current = window.setTimeout(() => {
        startBuild();
      }, 500);
    }
    return () => {
      isCancelledRef.current = true;
      if (buildTimeoutRef.current) window.clearTimeout(buildTimeoutRef.current);
      if (timerIntervalRef.current) window.clearInterval(timerIntervalRef.current);
    };
  }, [autoPlay, startBuild]);

  return (
    <>
      {/* Absolute Swarm Cursors & Marquees Layer */}
      <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden" aria-hidden="true">
        {/* Active Marquees */}
        {Object.entries(marquees).map(([key, m]) => (
          <div
            key={key}
            className="absolute rounded-lg border-2 border-dashed transition-all duration-75"
            style={{
              left: `${m.x}px`,
              top: `${m.y}px`,
              width: `${m.w}px`,
              height: `${m.h}px`,
              borderColor: m.agentColor,
              backgroundColor: `${m.agentColor}12`,
              boxShadow: `0 0 25px ${m.agentColor}40`,
            }}
          >
            {/* Live Dimension & Agent Tag */}
            <span
              className="absolute -top-7 left-0 rounded px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-ink shadow-md"
              style={{ backgroundColor: m.agentColor }}
            >
              {m.agentName} · {Math.round(m.w)} × {Math.round(m.h)} px
            </span>
          </div>
        ))}

        {/* 12 Named Agent Cursors — on mobile, only show active builders to eliminate clutter */}
        {cursors.map((c) => (
          <div
            key={c.id}
            className={`agent-cursor absolute will-change-transform transition-opacity duration-300 ${!c.active ? 'hidden md:block' : ''}`}
            style={{
              transform: `translate3d(${c.x}px, ${c.y}px, 0)`,
              opacity: isBuilding || c.active ? 1 : 0.85,
            }}
          >
            {/* SVG Pointer Arrow */}
            <svg
              width="22"
              height="26"
              viewBox="0 0 18 22"
              fill={c.color}
              stroke="#070A10"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
            >
              <path d="M1 1L7.5 20.5L10.5 13L17 10.5L1 1Z" />
            </svg>

            {/* Agent Name Badge */}
            <span
              className="absolute left-4 top-3.5 flex items-center gap-1 whitespace-nowrap rounded px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{
                backgroundColor: c.color,
                color: c.textColor,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              {c.name}
            </span>
          </div>
        ))}
      </div>

      {/* Floating HUD Activity Log */}
      <SwarmActivityLog
        logs={logs}
        isBuilding={isBuilding}
        isComplete={isComplete}
        totalBlocks={totalBlocks}
        completedBlocks={completedBlocks}
        elapsedSeconds={elapsedSeconds}
        onSkip={skipToDone}
        onRebuild={rebuild}
      />
    </>
  );
};
