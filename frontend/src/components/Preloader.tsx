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
      <div className="relative flex items-center gap-[0.9rem] px-6 sm:gap-6">
        {/* Mark — traced from the brand artwork */}
        <svg viewBox="0 0 117 107" className="h-14 w-auto overflow-visible sm:h-24" aria-hidden="true">
          <motion.path
            d={QEVNARO_NAVY_PATH}
            fill="#0c1d48"
            stroke="#0c1d48"
            strokeWidth="1.2"
            strokeLinejoin="round"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { duration: 1.0, ease: EASE },
              fillOpacity: { duration: 0.5, delay: 0.85 },
            }}
          />
          <motion.path
            d={QEVNARO_CHEVRON_PATH}
            fill="#3175fe"
            initial={{ opacity: 0, y: -18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 220, damping: 18 }}
            style={{ transformOrigin: '55px 58px' }}
          />
        </svg>

        {/* Wordmark */}
        <div className="flex overflow-hidden pb-1" aria-hidden="true">
          {LETTERS.map((l, i) => (
            <motion.span
              key={i}
              className="text-[1.75rem] leading-none text-[#0c1d48] sm:text-[3rem]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, letterSpacing: '0.035em' }}
              initial={{ y: '115%' }}
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
        className="absolute bottom-0 left-0 h-[3px] bg-[#3175fe]"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Preloader;
