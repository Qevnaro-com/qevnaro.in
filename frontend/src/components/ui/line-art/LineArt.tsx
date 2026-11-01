import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export type LineArtKind = 'globe' | 'code' | 'design' | 'growth' | 'ai' | 'cloud' | 'search' | 'brand';

const stroke = 'currentColor';

// Universal smooth stroke-draw transition
const draw = (delay = 0, d = 1.5) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: d, delay, ease: [0.16, 1, 0.3, 1] as const },
});

// Animated Path Primitive
const P = (props: React.ComponentProps<typeof motion.path> & { i?: number; dFactor?: number }) => {
  const { i = 0, dFactor = 1.5, ...rest } = props;
  return (
    <motion.path
      fill="none"
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...draw(i * 0.07, dFactor)}
      {...rest}
    />
  );
};

// Animated Circle Primitive
const C = (props: React.ComponentProps<typeof motion.circle> & { i?: number; dFactor?: number }) => {
  const { i = 0, dFactor = 1.5, ...rest } = props;
  return (
    <motion.circle
      fill="none"
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...draw(i * 0.07, dFactor)}
      {...rest}
    />
  );
};

// Animated Rect Primitive
const R = (props: React.ComponentProps<typeof motion.rect> & { i?: number; dFactor?: number }) => {
  const { i = 0, dFactor = 1.5, ...rest } = props;
  return (
    <motion.rect
      fill="none"
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...draw(i * 0.07, dFactor)}
      {...rest}
    />
  );
};

const Accent = ({ children }: { children: React.ReactNode }) => (
  <g style={{ color: '#5B9BFF' }}>{children}</g>
);

const CyanAccent = ({ children }: { children: React.ReactNode }) => (
  <g style={{ color: '#38BDF8' }}>{children}</g>
);

/* ---------- Technical Blueprint HUD Frame ---------- */
const BlueprintHUD = ({ label, code }: { label: string; code: string }) => (
  <g className="pointer-events-none select-none opacity-45 font-mono text-[8px]" fill="currentColor">
    {/* Corner Registration Brackets */}
    <motion.path
      d="M 15 25 L 15 15 L 25 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      {...draw(0, 0.8)}
    />
    <motion.path
      d="M 385 25 L 385 15 L 375 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      {...draw(0.05, 0.8)}
    />
    <motion.path
      d="M 15 295 L 15 305 L 25 305"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      {...draw(0.1, 0.8)}
    />
    <motion.path
      d="M 385 295 L 385 305 L 375 305"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      {...draw(0.15, 0.8)}
    />

    {/* Center Registration Crosshairs */}
    <path
      d="M 195 160 L 205 160 M 200 155 L 200 165"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.5"
    />

    {/* Telemetry Annotations */}
    <text x="24" y="22" letterSpacing="0.1em">SYS//{code}</text>
    <text x="376" y="22" textAnchor="end" letterSpacing="0.1em">LAT 28.5355°N</text>
    <text x="24" y="300" letterSpacing="0.1em">{label}</text>
    <text x="376" y="300" textAnchor="end" letterSpacing="0.1em">GRID 400x320</text>
  </g>
);

/* ---------- Individual High-Fidelity Scenes (viewBox 0 0 400 320) ---------- */

const Globe = () => (
  <>
    <BlueprintHUD label="GLOBAL INFRASTRUCTURE" code="GLB-01" />
    <defs>
      <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2e6efe" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#2e6efe" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ambient Glow Disk */}
    <circle cx="200" cy="160" r="110" fill="url(#globe-glow)" />

    {/* Main Sphere Outer Boundary */}
    <C i={0} cx="200" cy="160" r="110" strokeWidth={1.5} opacity={0.7} />

    {/* Latitude parallels */}
    {[-75, -45, -15, 15, 45, 75].map((y, i) => (
      <P
        key={y}
        i={i + 1}
        d={`M ${200 - Math.sqrt(Math.max(0, 110 * 110 - y * y))} ${160 + y} A ${Math.sqrt(Math.max(0, 110 * 110 - y * y))} ${Math.abs(y) / 3.5 + 16} 0 0 0 ${200 + Math.sqrt(Math.max(0, 110 * 110 - y * y))} ${160 + y}`}
        opacity={0.5}
      />
    ))}

    {/* Longitude meridians */}
    {[30, 65, 95].map((rx, i) => (
      <P
        key={rx}
        i={i + 7}
        d={`M 200 50 A ${rx} 110 0 0 1 200 270 A ${rx} 110 0 0 1 200 50`}
        opacity={0.55}
      />
    ))}
    <P i={10} d="M 200 50 L 200 270" strokeDasharray="3 3" opacity="0.6" />

    {/* Orbiting ring & satellites */}
    <Accent>
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 160px' }}
      >
        <ellipse
          cx="200"
          cy="160"
          rx="154"
          ry="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          transform="rotate(-22 200 160)"
        />
        <circle cx="354" cy="160" r="4.5" fill="currentColor" transform="rotate(-22 200 160)" />
      </motion.g>

      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 160px' }}
      >
        <ellipse
          cx="200"
          cy="160"
          rx="142"
          ry="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.45"
          transform="rotate(35 200 160)"
        />
        <circle cx="58" cy="160" r="3.2" fill="currentColor" transform="rotate(35 200 160)" />
      </motion.g>
    </Accent>

    <CyanAccent>
      {/* Planetary Hub Nodes */}
      {[[135, 125], [245, 135], [195, 210], [270, 195], [165, 170]].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="currentColor"
          animate={{ opacity: [0.4, 1, 0.4], r: [3, 5.5, 3] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <P
        i={11}
        d="M 135 125 Q 185 85 245 135 Q 285 165 270 195 Q 235 230 195 210 Q 155 195 165 170 Z"
        strokeWidth={1.6}
        strokeDasharray="5 3"
      />
    </CyanAccent>
  </>
);

const Code = () => (
  <>
    <BlueprintHUD label="SYSTEM ARCHITECTURE" code="SRC-02" />
    {/* Isometric Cube Shell */}
    <P i={0} d="M 70 110 L 200 45 L 330 110 L 330 225 L 200 290 L 70 225 Z" strokeWidth={1.6} />
    <P i={1} d="M 70 110 L 200 175 L 330 110" strokeWidth={1.4} />
    <P i={2} d="M 200 175 L 200 290" strokeWidth={1.4} />

    {/* Bus lines on top facet */}
    {[0, 1, 2, 3, 4].map((i) => (
      <P
        key={i}
        i={i + 3}
        d={`M ${110 + i * 20} ${88 - i * 8} L ${200} ${140 - i * 14}`}
        strokeWidth={0.9}
        opacity={0.4}
      />
    ))}

    {/* Code Lines on Right Facet */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <P
        key={i}
        i={i + 4}
        d={`M 220 ${195 + i * 14} L ${305 - (i % 3) * 18} ${145 + i * 14}`}
        strokeWidth={1.2}
        opacity={0.65}
      />
    ))}

    <Accent>
      {/* Code syntax tags on Left Facet */}
      <P i={6} d="M 115 170 L 92 184 L 115 198" strokeWidth={2.2} />
      <P i={7} d="M 155 170 L 178 184 L 155 198" strokeWidth={2.2} />
      <P i={8} d="M 148 162 L 122 206" strokeWidth={2.2} />

      {/* Terminal cursor block */}
      <motion.rect
        x="230"
        y="240"
        width="9"
        height="15"
        fill="currentColor"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </Accent>

    <CyanAccent>
      {/* Data packet pulse along central spine */}
      <motion.circle
        cx="200"
        cy="175"
        r="4.5"
        fill="currentColor"
        animate={{ y: [0, 105, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </CyanAccent>
  </>
);

const Design = () => (
  <>
    <BlueprintHUD label="PRECISION DESIGN TOKENS" code="DSN-03" />
    {/* Viewport Frame */}
    <R i={0} x="55" y="55" width="290" height="210" rx="14" strokeWidth={1.4} opacity={0.65} />
    <P i={1} d="M 55 92 L 345 92" opacity="0.5" />

    {/* Window Controls */}
    {[75, 90, 105].map((x, i) => (
      <C key={i} i={i + 2} cx={x} cy="74" r="4" strokeWidth={1.2} opacity={0.7} />
    ))}

    {/* Smooth Cubic Bezier Curves */}
    <P i={3} d="M 100 225 C 140 95, 260 95, 300 225" strokeWidth={2.2} />
    <P i={4} d="M 100 225 L 140 145 M 300 225 L 260 145" strokeWidth={1} strokeDasharray="3 3" opacity="0.6" />

    {/* Secondary Harmonic Wave */}
    <P i={5} d="M 90 190 Q 200 250 310 190" strokeWidth={1.2} opacity={0.35} />

    <Accent>
      {/* Vector Anchor Points with Levers */}
      {[[100, 225], [300, 225], [140, 145], [260, 145]].map(([x, y], i) => (
        <motion.rect
          key={i}
          x={x - 5}
          y={y - 5}
          width="10"
          height="10"
          fill="#07090E"
          stroke="currentColor"
          strokeWidth="1.6"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}
    </Accent>

    <CyanAccent>
      {/* Pen Tool Cursor Tracking along curve */}
      <motion.g
        animate={{ x: [-55, 55, -55] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="200" cy="145" r="5" fill="currentColor" />
        <path d="M 195 140 L 200 130 L 205 140 Z" fill="currentColor" />
      </motion.g>
    </CyanAccent>
  </>
);

const Growth = () => (
  <>
    <BlueprintHUD label="PERFORMANCE TELEMETRY" code="GRO-04" />
    <defs>
      <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#2e6efe" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Axes */}
    <P i={0} d="M 55 265 L 345 265 M 55 265 L 55 55" strokeWidth={1.4} opacity="0.7" />

    {/* Calibration Grid */}
    {[0, 1, 2, 3, 4].map((i) => (
      <P
        key={i}
        i={i + 1}
        d={`M 55 ${225 - i * 40} L 345 ${225 - i * 40}`}
        strokeWidth={0.6}
        opacity={0.25}
        strokeDasharray="2 4"
      />
    ))}

    {/* Candlestick Metric Bars */}
    {[60, 105, 85, 145, 130, 185].map((h, i) => (
      <motion.rect
        key={i}
        x={82 + i * 44}
        width="26"
        rx="3"
        fill="none"
        stroke={stroke}
        strokeWidth="1.3"
        initial={{ y: 265, height: 0 }}
        whileInView={{ y: 265 - h, height: h }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      />
    ))}

    {/* Gradient Underlay under growth curve */}
    <motion.path
      d="M 95 195 L 139 155 L 183 178 L 227 115 L 271 130 L 315 65 L 315 265 L 95 265 Z"
      fill="url(#growth-gradient)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay: 0.5 }}
    />

    <Accent>
      {/* Exponential Growth Trend Line */}
      <P i={5} d="M 95 195 L 139 155 L 183 178 L 227 115 L 271 130 L 315 65" strokeWidth={2.6} />

      {/* Glowing Peak Target Node */}
      <motion.circle
        r="6"
        fill="currentColor"
        cx="315"
        cy="65"
        animate={{ r: [5, 9, 5], opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </Accent>

    <CyanAccent>
      {/* Growth Metric Badge */}
      <text x="325" y="60" className="font-mono text-[10px] font-bold" fill="currentColor">
        +380%
      </text>
    </CyanAccent>
  </>
);

const AI = () => (
  <>
    <BlueprintHUD label="NEURAL MATRIX GRAPH" code="NET-05" />
    {/* Deep Learning Node Topology */}
    {[[200, 160], [100, 85], [300, 85], [100, 235], [300, 235], [200, 55], [200, 265]].map(
      ([x, y], i) => (
        <g key={i}>
          {i > 0 && (
            <P i={i} d={`M 200 160 L ${x} ${y}`} strokeWidth={1.1} strokeDasharray="4 3" opacity="0.6" />
          )}
          <C i={i} cx={x} cy={y} r={i === 0 ? 36 : 16} fill="#07090E" strokeWidth={1.4} />
        </g>
      )
    )}

    <Accent>
      {/* Core Node Quantum Pulsation */}
      <motion.circle
        cx="200"
        cy="160"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        animate={{ r: [36, 48, 36], opacity: [0.9, 0, 0.9] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      <P i={8} d="M 186 150 L 186 170 M 200 144 L 200 176 M 214 150 L 214 170" strokeWidth={2.4} />
    </Accent>

    <CyanAccent>
      {/* Synaptic Pulses Traveling Between Neurons */}
      {[[100, 85], [300, 85], [100, 235], [300, 235]].map(([tx, ty], i) => (
        <motion.circle
          key={i}
          r="3.5"
          fill="currentColor"
          animate={{ cx: [200, tx], cy: [160, ty], opacity: [1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.45 }}
        />
      ))}
    </CyanAccent>
  </>
);

const Cloud = () => (
  <>
    <BlueprintHUD label="DISTRIBUTED CLOUD TIERS" code="CLD-06" />
    {/* Stacked Infrastructure Servers */}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <P
          i={i * 2}
          d={`M 85 ${200 - i * 54} L 200 ${145 - i * 54} L 315 ${200 - i * 54} L 200 ${255 - i * 54} Z`}
          strokeWidth={1.4}
        />
        <P
          i={i * 2 + 1}
          d={`M 85 ${200 - i * 54} L 85 ${218 - i * 54} L 200 ${273 - i * 54} L 315 ${218 - i * 54} L 315 ${200 - i * 54}`}
          strokeWidth={1.2}
        />
      </g>
    ))}

    <Accent>
      {/* Central Heartbeat Indicators */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="200"
          cy={200 - i * 54}
          r="4.5"
          fill="currentColor"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      {/* Uplink Laser Beam */}
      <P i={6} d="M 200 35 L 200 120" stroke="currentColor" strokeWidth={1.8} strokeDasharray="4 4" />
    </Accent>

    <CyanAccent>
      {/* Server Rack Status LEDs */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="120" cy={218 - i * 54} r="2.2" fill="currentColor" />
          <circle cx="130" cy={218 - i * 54} r="2.2" fill="currentColor" />
        </g>
      ))}
    </CyanAccent>
  </>
);

const Search = () => (
  <>
    <BlueprintHUD label="INDEXING & DISCOVERY ENGINE" code="SRCH-07" />
    {/* Optical Lens */}
    <C i={0} cx="165" cy="140" r="82" strokeWidth={1.6} opacity={0.8} />
    <P i={1} d="M 226 200 L 305 275" strokeWidth={5} />

    {/* Target Calipers */}
    <P
      i={2}
      d="M 125 140 L 140 140 M 190 140 L 205 140 M 165 100 L 165 115 M 165 165 L 165 180"
      strokeWidth={1.2}
      opacity={0.5}
    />

    <Accent>
      {/* Expanding Radar Ring */}
      <motion.circle
        cx="165"
        cy="140"
        r="82"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        animate={{ r: [82, 108], opacity: [0.8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
      <P i={3} d="M 130 140 L 155 165 L 205 112" strokeWidth={2.6} />
    </Accent>

    <CyanAccent>
      {/* Rotating Search Sweep Line */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '165px 140px' }}
      >
        <line x1="165" y1="140" x2="247" y2="140" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      </motion.g>
    </CyanAccent>
  </>
);

const Brand = () => (
  <>
    <BlueprintHUD label="GEOMETRIC IDENTITY SCHEMATIC" code="BRD-08" />
    {/* Outer Hexagon */}
    <P i={0} d="M 200 45 L 305 106 L 305 214 L 200 275 L 95 214 L 95 106 Z" strokeWidth={1.6} />

    {/* Inner Concentric Hexagon */}
    <P
      i={1}
      d="M 200 88 L 268 127 L 268 193 L 200 232 L 132 193 L 132 127 Z"
      strokeWidth={1.2}
      opacity={0.6}
    />

    {/* Radiating Tangent Rays */}
    <P
      i={2}
      d="M 200 45 L 200 88 M 305 106 L 268 127 M 305 214 L 268 193 M 200 275 L 200 232 M 95 214 L 132 193 M 95 106 L 132 127"
      strokeWidth={1}
      opacity={0.4}
    />

    {/* Brand Chevron Monogram */}
    <Accent>
      <P i={3} d="M 165 152 L 200 122 L 235 152 L 216 172 L 200 156 L 176 172 Z" strokeWidth={2.4} />
      <motion.path
        d="M 165 152 L 200 122 L 235 152 L 216 172 L 200 156 L 176 172 Z"
        fill="currentColor"
        opacity="0"
        animate={{ opacity: [0, 0.45, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </Accent>

    <CyanAccent>
      {/* Precision Caliper Marks */}
      <circle cx="200" cy="122" r="3.5" fill="currentColor" />
      <circle cx="200" cy="275" r="3.5" fill="currentColor" />
      <line x1="200" y1="30" x2="200" y2="40" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="280" x2="200" y2="290" stroke="currentColor" strokeWidth="1" />
    </CyanAccent>
  </>
);

const scenes: Record<LineArtKind, React.FC> = {
  globe: Globe,
  code: Code,
  design: Design,
  growth: Growth,
  ai: AI,
  cloud: Cloud,
  search: Search,
  brand: Brand,
};

/** High-Precision Architectural Line Illustration. Draws on scroll, tilts toward pointer in 3D. */
export const LineArt: React.FC<{ kind: LineArtKind; className?: string }> = ({
  kind,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 140, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 140, damping: 20 });
  const Scene = scenes[kind];

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || r.width === 0 || r.height === 0) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ touchAction: 'pan-y' }}
      className={`relative text-fg-soft [perspective:900px] select-none ${className}`}
    >
      {/* Subtle Cyan/Blue Optical Radial Glow Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand-blue/10 blur-3xl opacity-60"
        aria-hidden="true"
      />

      <motion.svg
        viewBox="0 0 400 320"
        role="img"
        aria-hidden="true"
        className="h-full w-full overflow-visible pointer-events-none"
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      >
        <Scene />
      </motion.svg>
    </div>
  );
};

export default LineArt;
