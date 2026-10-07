import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, Globe, Award } from 'lucide-react';

const stats = [
  { label: 'Global Clients', value: '250+' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Team Experts', value: '120+' },
  { label: 'Awards Won', value: '15' }
];

const values = [
  { icon: Zap, title: 'Innovation First', desc: 'We constantly push the boundaries of technology to deliver future-proof solutions.' },
  { icon: Shield, title: 'Uncompromising Quality', desc: 'Rigorous testing and peer reviews ensure our deliverables are flawless.' },
  { icon: Users, title: 'Client Partnership', desc: 'We work as an extension of your team, aligned with your business goals.' },
  { icon: Globe, title: 'Global Perspective', desc: 'Diverse talent and worldwide experience bring unique insights to every project.' },
  { icon: Target, title: 'Results Driven', desc: 'We focus on metrics that matter: ROI, performance, and user engagement.' },
  { icon: Award, title: 'Continuous Excellence', desc: 'We never settle. Continuous learning and improvement is in our DNA.' },
];

export const About = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-sans selection:bg-[#0052FF] selection:text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32 z-10">
        
        {/* Animated Background Gradients (Light version) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0052FF]/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[#00C6FF]/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3"></div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-slate-200 text-slate-700 text-sm font-bold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse"></span>
            About QEVNARO
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            Architecting the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00C6FF]">Digital Experiences</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium"
          >
            QEVNARO is a premier digital agency specializing in high-performance web development, mobile applications, and data-driven marketing. We don't just build software; we build market leaders.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-slate-100 py-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-[#0052FF] font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story / Vision Split */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Founded on the principle that technology should empower rather than complicate, QEVNARO was born out of a desire to bridge the gap between complex engineering and beautiful, intuitive user experiences.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Today, we partner with visionary startups and global enterprises to craft digital solutions that drive real-world impact. Our approach combines rigorous strategic thinking with unparalleled technical execution.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            {/* Abstract Light 3D Glass Card showing "Q" Branding */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,82,255,0.08)] flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0052FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="w-full h-full relative">
                 {/* Decorative elements */}
                 <div className="absolute top-4 left-4 w-12 h-4 rounded-full bg-slate-200"></div>
                 <div className="absolute top-4 left-20 w-24 h-4 rounded-full bg-[#0052FF]/20"></div>
                 
                 <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#00C6FF]/20 blur-md"></div>
                 
                 {/* Center Q Logo */}
                 <div className="absolute inset-0 flex items-center justify-center text-[#0052FF]">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 fill-current">
                      <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                      <circle cx="50" cy="50" r="15" fill="#00C6FF"/>
                    </svg>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Bento Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            These are the principles that guide our decisions, shape our culture, and drive our success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-[#0052FF] group-hover:border-[#0052FF] transition-colors duration-300 shadow-sm">
                <val.icon className="w-7 h-7 text-[#0052FF] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
