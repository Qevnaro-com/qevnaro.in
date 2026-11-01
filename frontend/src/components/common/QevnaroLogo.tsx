import React from 'react';

// Exact mathematical 1:1 path extracted and verified against Qevnaro's official brand logo
// ViewBox: 0 0 96 86
export const QEVNARO_NAVY_PATH = 
  "M 44.5,1.5 L 87.5,26 L 87.5,58 L 73,49.5 L 73,34 L 44.5,18 L 16,34 L 16,51 L 44.5,67.5 L 53.5,62.5 L 59,71.5 L 44.5,84.5 L 1.5,60 L 1.5,26 Z M 63.5,65 L 74.5,58.5 L 94,82.5 L 74,82.5 Z";

// Exact Blue Chevron nested inside the hexagon aperture
export const QEVNARO_CHEVRON_PATH = 
  "M 44.5,32 L 65.5,47.5 L 54.5,56.5 L 44.5,47 L 29,54 L 18,46 Z";

interface QevnaroLogoMarkProps {
  className?: string;
  size?: number;
  chevronColor?: string;
  qColor?: string;
}

export const QevnaroLogoMark: React.FC<QevnaroLogoMarkProps> = ({
  className = '',
  size = 38,
  chevronColor,
  qColor,
}) => {
  return (
    <svg 
      width={size} 
      height={(size * 86) / 96} 
      viewBox="0 0 96 86" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
    >
      <defs>
        {/* Official Deep Navy Gradient */}
        <linearGradient id="qevnaro-navy-brand" x1="1.5" y1="1.5" x2="94" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a173d" />
          <stop offset="60%" stopColor="#0d1b48" />
          <stop offset="100%" stopColor="#10235d" />
        </linearGradient>

        {/* Official Electric Royal Blue Gradient */}
        <linearGradient id="qevnaro-blue-brand" x1="18" y1="32" x2="65.5" y2="56.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#448dff" />
          <stop offset="50%" stopColor="#327efb" />
          <stop offset="100%" stopColor="#1b6af2" />
        </linearGradient>

        {/* Luminous Chevron Drop Glow */}
        <filter id="qevnaro-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#327efb" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Hexagonal Q Mark */}
      <path 
        d={QEVNARO_NAVY_PATH} 
        fill={qColor || "url(#qevnaro-navy-brand)"} 
        fillRule="evenodd" 
      />

      {/* Electric Blue Chevron */}
      <path 
        d={QEVNARO_CHEVRON_PATH} 
        fill={chevronColor || "url(#qevnaro-blue-brand)"} 
        filter="url(#qevnaro-glow)" 
      />
    </svg>
  );
};

interface QevnaroLogoProps {
  className?: string;
  markSize?: number;
  textColor?: string;
  qColor?: string;
  chevronColor?: string;
  showTagline?: boolean;
}

export const QevnaroLogo: React.FC<QevnaroLogoProps & { tone?: 'light' | 'dark' }> = ({
  className = '',
  markSize = 36,
  tone = 'dark',
  textColor,
  qColor,
  chevronColor,
  showTagline = false,
}) => {
  // tone="dark" => logo sits on a dark background (white mark + wordmark)
  // tone="light" => logo sits on a light background (official navy)
  const resolvedText = textColor ?? (tone === 'dark' ? 'text-white' : 'text-[#0d1b48]');
  const resolvedQ = qColor ?? (tone === 'dark' ? '#F4F5F7' : undefined);
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="shrink-0">
        <QevnaroLogoMark size={markSize} qColor={resolvedQ} chevronColor={chevronColor} />
      </div>

      <div className="flex flex-col">
        <span
          className={`text-xl sm:text-[1.65rem] font-extrabold tracking-[0.03em] uppercase leading-none ${resolvedText}`}
          style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
        >
          Qevnaro
        </span>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-slate-400 mt-1">
            Flagship Engineering
          </span>
        )}
      </div>
    </div>
  );
};

export default QevnaroLogo;
