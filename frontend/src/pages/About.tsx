import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, Zap, Shield, Globe, Award, ChevronRight, CheckCircle2, HelpCircle, ArrowRight, Eye, Crosshair } from 'lucide-react';
import { useState, useRef } from 'react';

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

const faqs = [
  {
    question: "Will I have full ownership of the source code?",
    answer: "Absolutely. Once the project is completed and cleared, 100% of the IP and source code is transferred to you."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive AMC and maintenance packages to ensure your digital assets stay secure and updated."
  },
  {
    question: "How do you ensure project deadlines are met?",
    answer: "We use agile methodologies with weekly sprints and transparent tracking, so you always know where we stand."
  },
  {
    question: "Can your solutions scale with my business?",
    answer: "We build on cloud-native, scalable architectures (AWS, GCP) ensuring your app handles 10 to 10M users smoothly."
  }
];

const FAQItem = ({ faq, index }: { faq: {question: string, answer: string}, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
      >
        <span className="font-bold text-slate-900 text-lg flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-[#0052FF]" />
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 pt-0 text-slate-600 border-t border-slate-50 mt-2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const About = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="font-sans selection:bg-[#0052FF] selection:text-white bg-white">
      
      {/* Hero Section - Dark & Attractive */}
      <section className="relative w-full bg-slate-950 pt-32 pb-32 overflow-hidden flex items-center">
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
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C6FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052FF]"></span>
                </span>
                ABOUT QEVNARO
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
              >
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00C6FF]">Digital</span> <br/>
                Excellence.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium max-w-2xl"
              >
                We are a premier digital agency specializing in high-performance web development, scalable software, and intuitive user experiences that turn visitors into loyal customers.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex gap-4"
              >
                <button className="px-8 py-4 rounded-full bg-white text-[#0052FF] font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer">
                  Our Work <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Right Abstract Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:w-2/5 w-full relative"
            >
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF] to-[#00C6FF] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative h-full w-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl flex flex-col justify-center items-center transform hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-white">
                      <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="50" cy="50" r="15" fill="#00C6FF"/>
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mt-8 tracking-widest uppercase">Qevnaro</h3>
                  <p className="text-slate-400 text-sm mt-2">Digital Architecture</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section - Light Theme */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
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

      {/* Trust & Doubts Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Why Clients Trust Us</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand that choosing a technology partner is a big decision. We operate with complete transparency, delivering milestones on time, and ensuring you have zero doubts about your product's success.
              </p>
              
              <div className="space-y-4">
                {[
                  "100% Transparency in Development",
                  "Agile Methodology & Weekly Sprints",
                  "Dedicated Project Managers",
                  "Strict NDA & IP Protection"
                ].map((feature, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-3 text-slate-700 font-medium text-lg bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                  >
                    <CheckCircle2 className="text-[#00C6FF] w-6 h-6 flex-shrink-0" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-10 lg:p-12 hover:shadow-[0_20px_40px_rgba(0,82,255,0.08)] transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C6FF]/10 rounded-full blur-3xl group-hover:bg-[#00C6FF]/20 transition-all duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0052FF] flex items-center justify-center mb-8 border border-blue-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become the leading digital innovation hub in India and globally, empowering businesses with world-class, future-proof technologies. We envision a world where digital transformation is seamless, highly accessible, and drives exponential growth for every partner we collaborate with.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-10 lg:p-12 hover:shadow-[0_20px_40px_rgba(0,82,255,0.08)] transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052FF]/10 rounded-full blur-3xl group-hover:bg-[#0052FF]/20 transition-all duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-[#00C6FF] flex items-center justify-center mb-8 border border-cyan-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Crosshair className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To architect highly scalable, robust, and beautiful digital solutions that solve real-world problems. We are on a mission to deliver uncompromising quality, maintain 100% transparency, and act as a dedicated tech partner—building your vision as if it were our own.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Story Section with Indian Context Images */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#0052FF] rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">The Qevnaro Story</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Rooted in India's vibrant tech ecosystem, QEVNARO was born from a passion to merge flawless engineering with breathtaking design to solve complex digital challenges. We don't just write code; we craft digital legacies that propel businesses forward.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're an ambitious startup looking to disrupt the market or an enterprise needing a scalable architecture, our highly skilled Indian talent pool and seasoned experts are ready to transform your vision into reality.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-slate-200 rounded-3xl aspect-[4/5] overflow-hidden shadow-sm">
                    {/* Indian Tech Professional / Office */}
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Indian Tech Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-200 rounded-3xl aspect-[4/5] overflow-hidden shadow-sm">
                    {/* Indian Startup / Corporate Meeting */}
                    <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80" alt="Indian Corporate Collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Our DNA
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              The principles that drive us to build the extraordinary and maintain highest standards of excellence.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-[#0052FF]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#0052FF] transition-colors duration-300">
                  <val.icon className="w-7 h-7 text-[#0052FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
