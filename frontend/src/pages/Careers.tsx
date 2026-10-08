import { motion, type Variants } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Globe, Coffee, Laptop, GraduationCap, UploadCloud, CheckCircle2, Code, Terminal, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Careers() {
  const [selectedRole, setSelectedRole] = useState<string>("General Application");

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, type: "spring", bounce: 0.4 } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="font-sans selection:bg-[#0052FF] selection:text-white bg-white">
      
      {/* Hero Section (Dark & Interactive) */}
      <section className="relative w-full bg-slate-950 pt-32 pb-32 overflow-hidden flex items-center min-h-[85vh]">
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#0052FF]/30 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#00C6FF]/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3"
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMWUxZTFlIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwdjYwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="lg:w-3/5 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-slate-300 text-sm font-bold mb-6"
              >
                <Zap className="w-4 h-4 text-[#00C6FF]" />
                <span>WE ARE HIRING</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
              >
                Do the best work of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">life here.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium max-w-2xl"
              >
                Join a passionate team of creators, engineers, and innovators in India and globally. We are building the future of digital experiences, and we want you on board.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex gap-4"
              >
                <a href="#open-roles" className="px-8 py-4 rounded-full bg-white text-[#0052FF] font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,82,255,0.3)] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)]">
                  View Open Roles <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Abstract Visual (Glassmorphism Hiring Card) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:w-2/5 w-full relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF] to-[#00C6FF] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <motion.div 
                  whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                  className="relative h-full w-full bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,82,255,0.15)] flex flex-col justify-center transform-gpu transition-all"
                >
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  
                  <div className="space-y-6 mt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0052FF]/20 flex items-center justify-center border border-[#0052FF]/30">
                        <Terminal className="text-[#00C6FF] w-6 h-6" />
                      </div>
                      <div>
                        <div className="h-2 w-24 bg-slate-700 rounded-full mb-2"></div>
                        <div className="h-2 w-16 bg-slate-800 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                        <Sparkles className="text-purple-400 w-6 h-6" />
                      </div>
                      <div>
                        <div className="h-2 w-32 bg-slate-700 rounded-full mb-2"></div>
                        <div className="h-2 w-20 bg-slate-800 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                        <Code className="text-emerald-400 w-6 h-6" />
                      </div>
                      <div>
                        <div className="h-2 w-20 bg-slate-700 rounded-full mb-2"></div>
                        <div className="h-2 w-24 bg-slate-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 text-right">
                    <h3 className="text-xl font-bold text-white tracking-widest uppercase mb-1">Join Us</h3>
                    <div className="flex gap-1 justify-end">
                      <span className="w-2 h-2 rounded-full bg-[#00C6FF] animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 rounded-full bg-[#00C6FF] animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Life at Qevnaro (Indian Context Images) */}
      <section className="py-24 bg-white relative z-10 -mt-10 rounded-t-[3rem] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Life at Qevnaro
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              Deeply rooted in India's thriving tech landscape, our culture celebrates diversity, relentless innovation, and a whole lot of fun.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 h-[300px] md:h-[400px] rounded-3xl overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Indian Corporate / Tech Team Image */}
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Team Collaboration" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Indian Female Developer */}
              <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80" alt="Focused Work" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Mentorship / Team */}
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Team Meeting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 h-[300px] md:h-[400px] rounded-3xl overflow-hidden group relative bg-gradient-to-r from-[#0052FF] to-[#00C6FF] flex items-center justify-center p-12 text-center"
            >
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Build the Future <br/> With Us.</h3>
                <p className="text-white/80 font-medium text-lg max-w-md mx-auto">We are always on the lookout for ambitious talent across India and beyond.</p>
              </div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section (Slate 50) */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Why You'll Love It Here
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 max-w-2xl mx-auto text-lg"
            >
              We believe that when we take care of our team, our team takes care of our clients. Here's what you get when you join us.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0052FF]/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${benefit.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hiring Process (White Background) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Hiring Process</h2>
            <p className="text-slate-600 text-lg">Fast, transparent, and respectful of your time.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-8 left-16 right-16 h-1.5 bg-slate-100 z-0 rounded-full"></div>
            
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 mb-10 md:mb-0 px-4 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border-4 border-slate-200 group-hover:border-[#00C6FF] group-hover:bg-[#0052FF] group-hover:text-white flex items-center justify-center font-black text-slate-400 text-xl mb-6 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,198,255,0.4)] group-hover:-translate-y-2">
                  {index + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles & Application Form */}
      <section id="open-roles" className="py-24 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Roles */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Open Positions</h2>
                <p className="text-slate-600 text-lg">Select a role to apply directly.</p>
              </motion.div>

              <div className="flex-1 space-y-4">
                {jobs.map((job, idx) => (
                  <motion.div 
                    key={idx}
                    onClick={() => setSelectedRole(job.title)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedRole === job.title 
                        ? 'bg-gradient-to-r from-[#0052FF] to-[#00C6FF] text-white shadow-[0_15px_30px_rgba(0,82,255,0.25)] scale-[1.02]' 
                        : 'bg-white border border-slate-200 hover:border-[#0052FF]/30 hover:shadow-xl'
                    }`}
                  >
                    <div className="relative z-10">
                      <h3 className={`text-xl font-bold mb-3 ${selectedRole === job.title ? 'text-white' : 'text-slate-900 group-hover:text-[#0052FF] transition-colors'}`}>
                        {job.title}
                      </h3>
                      <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold ${selectedRole === job.title ? 'text-white/90' : 'text-slate-500'}`}>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 opacity-70" /> {job.department}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 opacity-70" /> {job.location}
                        </div>
                      </div>
                    </div>
                    {/* Selected Indicator */}
                    {selectedRole === job.title && (
                      <motion.div layoutId="activeIndicator" className="absolute right-6 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                {/* General Application Card */}
                <motion.div 
                  onClick={() => setSelectedRole("General Application")}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: jobs.length * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 mt-6 ${
                    selectedRole === "General Application" 
                      ? 'bg-slate-900 text-white shadow-[0_15px_30px_rgba(15,23,42,0.2)] scale-[1.02]' 
                      : 'bg-transparent border-2 border-slate-300 border-dashed hover:border-slate-400 hover:bg-slate-100/50'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className={`text-lg font-bold ${selectedRole === "General Application" ? 'text-white' : 'text-slate-900'}`}>
                        General Application
                      </h3>
                      <p className={`text-sm mt-1 font-medium ${selectedRole === "General Application" ? 'text-slate-400' : 'text-slate-500'}`}>
                        Don't see a perfect fit? Pitch us.
                      </p>
                    </div>
                    {selectedRole === "General Application" && (
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0052FF] to-[#00C6FF]"></div>

                <div className="mb-10">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-[#0052FF] text-xs font-bold tracking-wider uppercase mb-4 rounded-full border border-blue-100">Application Form</span>
                  <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                    Applying for: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00C6FF]">{selectedRole}</span>
                  </h3>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">First Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="John" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all font-medium text-slate-900" required />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Doe" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all font-medium text-slate-900" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all font-medium text-slate-900" required />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all font-medium text-slate-900" required />
                    </div>
                  </div>

                  <div className="pt-4 pb-2 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-700 mb-3">Resume & Portfolio <span className="text-red-500">*</span></h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="relative flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-6 cursor-pointer hover:border-[#0052FF] hover:bg-[#0052FF]/5 transition-all group bg-slate-50">
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                        <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#0052FF]/10 text-slate-400 group-hover:text-[#0052FF] shadow-sm flex items-center justify-center mb-3 transition-colors">
                          <UploadCloud className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-bold text-slate-700 text-center">Upload Resume</span>
                        <span className="text-[11px] font-medium text-slate-500 mt-1">PDF or DOCX</span>
                      </label>

                      <div className="space-y-2 group flex flex-col justify-center">
                        <label className="text-xs font-bold text-slate-500 text-center mb-1">OR PROVIDE A LINK</label>
                        <input type="url" placeholder="LinkedIn or Portfolio URL" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all font-medium text-slate-900" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group border-t border-slate-100 pt-4">
                    <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Cover Letter <span className="text-red-500">*</span></label>
                    <textarea required rows={4} placeholder="Tell us why you're a great fit. What unique value will you bring to our team?" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all font-medium text-slate-900 resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full mt-6 px-8 py-4 bg-slate-900 hover:bg-[#0052FF] text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,82,255,0.3)] flex items-center justify-center gap-2 group">
                    Submit Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

const benefits = [
  {
    icon: Globe,
    title: "Work From Anywhere",
    desc: "We are a remote-friendly company. Work from your home, a cafe, or a beach house in Bali.",
    gradient: "from-[#0052FF] to-[#00C6FF]"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health, dental, and vision insurance for you and your dependents.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Laptop,
    title: "Home Office Budget",
    desc: "We provide a generous stipend to help you set up a productive and comfortable workspace.",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Annual budget for courses, conferences, and books to keep your skills razor sharp.",
    gradient: "from-purple-500 to-fuchsia-500"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "We care about results, not hours logged. Work when you are most productive.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Coffee,
    title: "Paid Time Off",
    desc: "Generous PTO policy with a mandatory minimum to ensure you rest and recharge fully.",
    gradient: "from-orange-400 to-amber-500"
  }
];

const processSteps = [
  { title: "Application Review", desc: "We review your resume and portfolio carefully within 48 hours." },
  { title: "Introductory Call", desc: "A 30-min chat with HR to align on goals and culture fit." },
  { title: "Skills Assessment", desc: "A technical interview or a small targeted take-home assignment." },
  { title: "Final Offer", desc: "Meet the founders, get an offer, and welcome aboard!" }
];

const jobs = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time"
  },
  {
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Remote (India/Global)",
    type: "Full-Time"
  },
  {
    title: "Performance Marketing Manager",
    department: "Marketing",
    location: "Remote (India)",
    type: "Full-Time"
  },
  {
    title: "B2B Sales Executive",
    department: "Sales",
    location: "Remote (US/EU)",
    type: "Full-Time"
  }
];
