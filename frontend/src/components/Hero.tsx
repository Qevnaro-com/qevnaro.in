import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Shield, Server, Database, Globe, Code, Cpu, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    // Normalize coordinates from -1 to 1
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Smooth springs for parallax
  const springConfig = { damping: 25, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  
  // Floating particles (reduced count for performance)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);
  
  useEffect(() => {
    // Reduced from 30 to 10 to improve performance
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0A0F1C] overflow-hidden min-h-screen flex items-center perspective-1000"
    >
      {/* High-tech Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(#00C6FF 1px, transparent 1px), linear-gradient(90deg, #00C6FF 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Floating Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#00C6FF] pointer-events-none opacity-20"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, willChange: 'transform, opacity' }}
          animate={{ 
            y: [0, -50, 0],
            opacity: [0.1, 0.5, 0.1] 
          }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#0052FF] rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-40 -left-40 w-[500px] h-[500px] bg-[#00C6FF] rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0052FF]/20 to-[#00C6FF]/20 border border-[#00C6FF]/30 text-white text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(0,198,255,0.2)] backdrop-blur-sm"
            >
              <Cpu className="w-4 h-4 text-[#00C6FF]" />
              <span className="tracking-wide">Full-Service Digital Agency</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-white leading-tight mb-6 tracking-tight max-w-3xl"
            >
              Transforming Your Digital{' '}
              <motion.span 
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] via-[#0052FF] to-[#00C6FF] bg-[length:200%_auto]"
              >
                Presence
              </motion.span>{' '}
              for Massive Growth.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              QEVNARO provides complete digital solutions. From stunning Web & App development to data-driven Digital Marketing and Social Media strategies. We build the brand, you dominate the market.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-blue-600 text-white rounded-xl font-bold shadow-[0_0_30px_rgba(0,82,255,0.4)] hover:shadow-[0_0_40px_rgba(0,82,255,0.6)] transition-all text-lg flex items-center justify-center gap-2 group"
              >
                Explore Solutions
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-slate-700/80 text-white rounded-xl font-bold hover:border-slate-500 transition-all text-lg flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Code className="w-5 h-5 text-[#00C6FF]" /> API Docs
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Sleek Dashboard / Tech UI Mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ rotateX, rotateY, willChange: 'transform' }}
            className="relative w-full aspect-square hidden md:flex justify-center items-center preserve-3d"
          >
            {/* Main Glassmorphic Dashboard Panel */}
            <div 
              className="relative w-full max-w-lg bg-[#0F172A]/60 backdrop-blur-2xl rounded-2xl border border-slate-700 shadow-2xl p-6 overflow-hidden preserve-3d"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">QEVNARO_CONTROL_PANEL</div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-slate-400"><Shield className="w-3 h-3" /></div>
                </div>
              </div>

              {/* Main Graph Area */}
              <div className="bg-[#1E293B]/50 rounded-xl p-4 mb-6 border border-slate-700/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-semibold text-white">User Traffic & Conversions</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded font-bold">LIVE</span>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[40, 60, 45, 80, 55, 90, 65, 100, 75, 85].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, type: "spring" }}
                      className="flex-1 bg-gradient-to-t from-[#0052FF] to-[#00C6FF] rounded-t-sm opacity-80"
                    ></motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1E293B]/50 p-4 rounded-xl border border-slate-700/30 flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Leads Generated</div>
                    <div className="text-lg font-bold text-white">12,450+</div>
                  </div>
                </div>
                <div className="bg-[#1E293B]/50 p-4 rounded-xl border border-slate-700/30 flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Total Ad Reach</div>
                    <div className="text-lg font-bold text-white">4.5M</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Widget 1 - Server Health */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-10 bg-[#0F172A]/80 backdrop-blur-xl p-4 rounded-xl border border-slate-600 shadow-2xl flex items-center gap-4"
              style={{ transform: "translateZ(80px)", willChange: 'transform' }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-slate-600 flex items-center justify-center">
                  <Server className="w-4 h-4 text-emerald-400" />
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-emerald-400 rounded-full"
                  style={{ willChange: 'transform' }}
                ></motion.div>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Campaign Status</div>
                <div className="text-[10px] text-emerald-400">Active & Optimizing</div>
              </div>
            </motion.div>

            {/* Floating Widget 2 - Security */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-20 bg-[#0052FF]/20 backdrop-blur-xl p-4 rounded-xl border border-[#0052FF]/50 shadow-[0_0_30px_rgba(0,82,255,0.3)] flex items-center gap-4"
              style={{ transform: "translateZ(60px)", willChange: 'transform' }}
            >
              <div className="p-2 bg-[#0052FF] rounded-lg text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">SEO Ranking</div>
                <div className="text-[10px] text-[#00C6FF]">+25% This Month</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
