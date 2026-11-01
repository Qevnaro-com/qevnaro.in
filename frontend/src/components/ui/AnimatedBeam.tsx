import React, { useId } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBeamProps {
  className?: string;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  gradientStartColor?: string;
  gradientStopColor?: string;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className = '',
  startX = 50,
  startY = 50,
  endX = 250,
  endY = 50,
  curvature = 40,
  duration = 2.5,
  delay = 0,
  pathColor = 'rgba(148, 163, 184, 0.25)',
  gradientStartColor = '#0052FF',
  gradientStopColor = '#00C6FF',
}) => {
  const id = useId();
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2 - curvature;

  const d = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;

  return (
    <svg
      fill="none"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute inset-0 overflow-visible ${className}`}
    >
      <path
        d={d}
        stroke={pathColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%',
          }}
          animate={{
            x1: ['0%', '100%'],
            x2: ['10%', '110%'],
            y1: ['0%', '100%'],
            y2: ['10%', '110%'],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedBeam;
