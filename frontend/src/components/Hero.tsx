import { motion } from 'framer-motion';
import { Code, Globe, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-light"></div>
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 -left-40 w-96 h-96 bg-brand-navy/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-sm font-semibold mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
                </span>
                Transforming Ideas into Digital Reality
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-navy leading-tight mb-6 tracking-tight">
                Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Future</span> of Your Business
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Qevnaro delivers next-generation IT solutions, crafting stunning, high-performance websites and web applications tailored for your success in the digital era.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-navy text-white rounded-full font-bold shadow-lg shadow-brand-navy/30 hover:bg-brand-blue transition-all flex items-center justify-center gap-2 group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-brand-navy border border-gray-200 rounded-full font-bold shadow-sm hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  View Our Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Animated Interactive UI */}
          <div className="relative mt-10 lg:mt-0 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center"
            >
              {/* Dark Glassmorphism Code Editor Mockup */}
              <div className="relative w-full z-10 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 bg-[#0C1C36]/90 backdrop-blur-xl transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                {/* Editor Header */}
                <div className="w-full h-12 bg-black/40 border-b border-gray-700/50 flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">App.tsx — Qevnaro</div>
                  <div className="w-4"></div>
                </div>
                
                {/* Editor Body */}
                <div className="p-6 text-sm font-mono leading-relaxed text-gray-300">
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">1</span>
                    <span><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">2</span>
                    <span><span className="text-purple-400">import</span> {'{'} <span className="text-blue-400">Scale</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@qevnaro/ui'</span>;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">3</span>
                    <span></span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">4</span>
                    <span><span className="text-purple-400">export const</span> <span className="text-yellow-200">Hero</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">5</span>
                    <span className="pl-4"><span className="text-purple-400">return</span> (</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">6</span>
                    <span className="pl-8">&lt;<span className="text-blue-400">div</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"digital-future"</span>&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">7</span>
                    <span className="pl-12">&lt;<span className="text-blue-400">h1</span>&gt;Building Next-Gen IT&lt;/<span className="text-blue-400">h1</span>&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">8</span>
                    <span className="pl-12">&lt;<span className="text-blue-400">Scale</span> <span className="text-blue-200">business</span>=<span className="text-green-300">"10x"</span> /&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">9</span>
                    <span className="pl-8">&lt;/<span className="text-blue-400">div</span>&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">10</span>
                    <span className="pl-4">);</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4 select-none">11</span>
                    <span>{'}'};</span>
                  </div>
                </div>
                
                {/* Glowing accent at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-blue-400 to-purple-500 shadow-[0_0_15px_rgba(46,110,254,0.8)]"></div>
              </div>

              {/* Floating Element 1 - Design */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-10 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-brand-blue to-purple-500 text-white rounded-xl shadow-lg shadow-brand-blue/30">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Advanced Stack</div>
                  <div className="text-xs text-gray-500 font-medium">React, Node, AI</div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Cloud */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-24 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-4"
              >
                <div className="p-3 bg-brand-navy text-white rounded-xl shadow-lg shadow-brand-navy/30">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Cloud Hosting</div>
                  <div className="text-xs text-gray-500 font-medium">99.9% Uptime</div>
                </div>
              </motion.div>
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
