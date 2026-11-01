import React from 'react';

interface LaserBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'blue' | 'emerald' | 'amber';
  className?: string;
}

export function LaserBadge({
  children,
  icon,
  variant = 'blue',
  className = '',
}: LaserBadgeProps) {
  const variantStyles = {
    blue: {
      conic: 'bg-[conic-gradient(from_0deg_at_50%_50%,#00000000_50%,#2E6EFE_80%,#38BDF8_100%)]',
      bg: 'bg-[#0c1527]/90 text-brand-sky',
      ping: 'bg-brand-sky',
      border: 'border-brand-blue/40',
    },
    emerald: {
      conic: 'bg-[conic-gradient(from_0deg_at_50%_50%,#00000000_50%,#059669_80%,#34D399_100%)]',
      bg: 'bg-[#061912]/90 text-emerald-400',
      ping: 'bg-emerald-400',
      border: 'border-emerald-500/30',
    },
    amber: {
      conic: 'bg-[conic-gradient(from_0deg_at_50%_50%,#00000000_50%,#D97706_80%,#FBBF24_100%)]',
      bg: 'bg-[#1c1306]/90 text-amber-400',
      ping: 'bg-amber-400',
      border: 'border-amber-500/30',
    },
  };

  const v = variantStyles[variant];

  return (
    <div className={`relative inline-flex items-center p-[1px] rounded-full overflow-hidden shadow-lg ${className}`}>
      {/* Orbiting Laser Ray */}
      <span
        className={`absolute inset-[-150%] animate-[spin_3s_linear_infinite] ${v.conic} opacity-90`}
      />
      {/* Inner Badge Pill */}
      <span
        className={`relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide backdrop-blur-md ${v.bg} border ${v.border}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${v.ping} animate-ping`} />
        {icon}
        {children}
      </span>
    </div>
  );
}

export default LaserBadge;
