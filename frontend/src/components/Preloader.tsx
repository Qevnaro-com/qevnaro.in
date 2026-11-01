import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { QEVNARO_NAVY_PATH, QEVNARO_CHEVRON_PATH } from './common/QevnaroLogo';

const LETTERS = ['Q', 'E', 'V', 'N', 'A', 'R', 'O'];
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Brand loader — mirrors the official logo lockup exactly:
 * navy hexagonal Q + electric-blue chevron on the left, bold wordmark on the right,
 * on the same warm off-white field as the logo artwork.
 */
export const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(onLoadingComplete, reduce ? 500 : 2300);
    return () => clearTimeout(t);
  }, [onLoadingComplete, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#F5F5F3] select-none"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 0.85, ease: EASE }}
      role="status"
      aria-label="Loading Qevnaro"
    >
      <div className="relative flex items-center gap-4 sm:gap-6 px-6">
        {/* Mark */}
        <svg viewBox="0 0 96 86" className="h-16 w-auto sm:h-24 overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="pl-navy" x1="1.5" y1="1.5" x2="94" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0a173d" />
              <stop offset="100%" stopColor="#10235d" />
            </linearGradient>
            <linearGradient id="pl-blue" x1="18" y1="32" x2="65.5" y2="56.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4d94ff" />
              <stop offset="100%" stopColor="#1b6af2" />
            </linearGradient>
          </defs>
          <motion.path
            d={QEVNARO_NAVY_PATH}
            fillRule="evenodd"
            stroke="#0d1b48"
            strokeWidth="1.6"
            strokeLinejoin="round"
            fill="url(#pl-navy)"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { duration: 1.0, ease: EASE },
              fillOpacity: { duration: 0.5, delay: 0.85 },
            }}
          />
          <motion.path
            d={QEVNARO_CHEVRON_PATH}
            fill="url(#pl-blue)"
            initial={{ opacity: 0, y: -16, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 240, damping: 16 }}
            style={{ transformOrigin: '42px 44px' }}
          />
        </svg>

        {/* Wordmark */}
        <div className="flex overflow-hidden pb-1" aria-hidden="true">
          {LETTERS.map((l, i) => (
            <motion.span
              key={i}
              className="text-[2.1rem] sm:text-[3.4rem] font-extrabold leading-none text-[#0d1b48]"
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif", letterSpacing: '0.02em' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 + i * 0.05, ease: EASE }}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>

      {/* progress hairline */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-[#2E6EFE]"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Preloader;
