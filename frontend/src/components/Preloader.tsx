import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    // 3 second timer for the awesome animation to play out
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2800); 
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // Exact mathematically derived path for the Dark Blue 'Q' Shape (Hexagon + Tail + Hole)
  const qPath = "M 55,5 L 94,27.5 L 94,72.5 L 133,95 L 113,95 L 84,78.3 L 55,95 L 16,72.5 L 16,27.5 Z M 55,25 L 33.4,37.5 L 33.4,62.5 L 55,75 L 76.6,62.5 L 76.6,37.5 Z";
  
  // Exact polygon for the Light Blue Chevron
  const chevronPoints = "55,36 73.6,46.7 73.6,58.7 55,48 36.4,58.7 36.4,46.7";

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/60 via-white to-white"></div>
      
      <div className="relative flex flex-col items-center justify-center z-10">
        
        {/* The Exact Qevnaro Logo Container */}
        <div className="relative w-56 h-40 flex items-center justify-center">
          <svg viewBox="0 0 140 100" className="w-full h-full overflow-visible">
            <defs>
              <filter id="blue-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#3B82F6" floodOpacity="0.35" />
              </filter>
              <filter id="dark-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Dark Blue 'Q' - Outline Animation */}
            <motion.path 
              d={qPath}
              fill="none" 
              stroke="#0F172A" 
              strokeWidth="2" 
              fillRule="evenodd"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Dark Blue 'Q' - Solid Fill */}
            <motion.path 
              d={qPath}
              fill="#0F172A" 
              fillRule="evenodd"
              filter="url(#dark-glow)"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.3 }}
              style={{ originX: "70px", originY: "50px" }}
            />

            {/* Light Blue Chevron - Outline Animation */}
            <motion.polygon 
              points={chevronPoints}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Light Blue Chevron - Solid Fill */}
            <motion.polygon 
              points={chevronPoints}
              fill="#3B82F6"
              filter="url(#blue-glow)"
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, type: "spring", bounce: 0.5 }}
              style={{ originX: "55px", originY: "47px" }}
            />
          </svg>
        </div>

        {/* Brand Text */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-8 flex flex-col items-center"
        >
          <h2 className="text-3xl font-black text-[#0F172A] tracking-[0.3em] uppercase ml-2">
            Qevnaro
          </h2>
          
          {/* Sleek Loading Bar */}
          <div className="w-40 h-1.5 bg-slate-100 rounded-full mt-5 overflow-hidden relative shadow-inner">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#3B82F6]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
