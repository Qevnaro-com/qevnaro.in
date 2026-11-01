import React from 'react';
import { motion } from 'framer-motion';

interface GlassAiButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'emerald';
  icon?: React.ReactNode;
}

export function GlassAiButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  icon,
}: GlassAiButtonProps) {
  const variantStyles = {
    primary: {
      bg: 'bg-brand-blue hover:bg-brand-blue-hover text-white',
      borderRay: 'from-transparent via-[#38bdf8] to-transparent',
      glow: 'shadow-[0_0_30px_rgba(46,110,254,0.4)]',
    },
    emerald: {
      bg: 'bg-emerald-600 hover:bg-emerald-500 text-white',
      borderRay: 'from-transparent via-emerald-300 to-transparent',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]',
    },
    secondary: {
      bg: 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12]',
      borderRay: 'from-transparent via-white/40 to-transparent',
      glow: 'shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold font-mono text-xs uppercase tracking-wider cursor-pointer overflow-hidden transition-all duration-300 ${currentVariant.bg} ${currentVariant.glow} ${className}`}
    >
      {/* Animated Rotating Conic Laser Border */}
      <span className="absolute inset-0 rounded-2xl overflow-hidden p-[1.5px] pointer-events-none">
        <span
          className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#2E6EFE_85%,#38BDF8_100%)] opacity-80"
        />
        <span className="absolute inset-[1.5px] rounded-[14px] bg-[#0c1220]/90" />
      </span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        <span>{children}</span>
      </span>

      {/* Shimmer Light Reflection Sweep on Hover */}
      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 hover:animate-shimmer pointer-events-none" />
    </motion.button>
  );
}

export default GlassAiButton;
