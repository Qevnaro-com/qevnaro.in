import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Realistic smooth counter from 0% to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth staggered steps
        const step = prev < 40 ? Math.floor(Math.random() * 8) + 4 
                   : prev < 80 ? Math.floor(Math.random() * 10) + 5 
                   : Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 400); // Graceful pause at 100% before smooth dissolve
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      
      {/* Pulsing Ambient Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [0.9, 1.2, 0.9], 
          opacity: [0.35, 0.65, 0.35] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#0052FF]/20 via-[#00C6FF]/25 to-blue-200/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative flex flex-col items-center justify-center z-10 px-4">
        
        {/* Animated Concentric Tech Halo */}
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-[#0052FF]/20 pointer-events-none"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-slate-200/60 pointer-events-none"
          />

          {/* Premium Logo Showcase Card with Shimmer Sheen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="relative px-8 py-6 sm:px-12 sm:py-8 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_20px_60px_rgba(0,82,255,0.12)] backdrop-blur-xl flex items-center justify-center overflow-hidden group"
          >
            {/* Shimmer Light Glint Gliding across Logo */}
            <motion.div 
              animate={{ x: ['-200%', '300%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-20 pointer-events-none z-20"
            />

            {/* Official Full Navbar Logo */}
            <motion.img 
              src="/logo-qevnaro.png" 
              alt="Qevnaro Official Logo" 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain relative z-10 drop-shadow-[0_8px_20px_rgba(0,82,255,0.18)]"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Progress & Status Feedback */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-col items-center w-56 sm:w-72"
        >
          {/* Dual Gradient Loading Bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative shadow-inner p-0.5 border border-slate-200/60">
            <motion.div 
              className="h-full rounded-full bg-gradient-to-r from-[#0052FF] via-[#0084FF] to-[#00C6FF] shadow-[0_0_12px_rgba(0,198,255,0.5)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Live Progress Info Row */}
          <div className="w-full flex items-center justify-between mt-3 text-xs">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0052FF] animate-spin" />
              {progress < 45 ? 'Connecting...' 
               : progress < 85 ? 'Preparing Experience...' 
               : 'Launching...'}
            </span>
            <span className="font-mono font-black text-[#0052FF] text-sm">
              {progress}%
            </span>
          </div>

          {/* Brand Tagline */}
          <div className="mt-4 text-[10px] uppercase font-bold tracking-[0.28em] text-slate-400 text-center">
            Digital Systems • Engineering Excellence
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
