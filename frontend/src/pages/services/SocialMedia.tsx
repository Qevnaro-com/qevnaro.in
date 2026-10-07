import { motion, type Variants } from 'framer-motion';
import { Share2, TrendingUp, Users, Target, BarChart, HeartHandshake } from 'lucide-react';

export function SocialMedia() {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center bg-[#050B14]">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#0052FF] rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-[#00C6FF] rounded-full blur-[150px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0052FF]/20 to-[#00C6FF]/20 border border-[#0052FF]/30 text-white text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(0,82,255,0.2)] backdrop-blur-sm"
              >
                <Share2 className="w-4 h-4 text-[#00C6FF]" />
                <span className="tracking-wide">Elite Social Media Management</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Turn Followers Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">Loyal Customers</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                We don't just post; we create movements. Our strategic campaigns build unbreakable community trust, skyrocket engagement, and drive massive ROI for your brand.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                  Boost Your Brand
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-slate-700/80 hover:border-slate-500 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  View Results
                </button>
              </motion.div>
            </div>

            {/* Growth Graph Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none perspective-1000 hidden md:block"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10], rotateX: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="relative z-10 bg-[#0F172A]/90 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-[0_0_50px_rgba(0,82,255,0.15)] p-8 overflow-hidden"
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Brand Engagement</h3>
                    <p className="text-[#00C6FF] text-sm font-semibold">+342% This Month</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#0052FF]/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#00C6FF]" />
                  </div>
                </div>

                {/* Animated Chart Bars */}
                <div className="flex items-end justify-between gap-3 h-48 mt-4 border-b border-slate-700 pb-2">
                  {[40, 55, 30, 70, 50, 85, 100].map((height, i) => (
                    <div key={i} className="w-full relative group">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), type: "spring", bounce: 0.4 }}
                        className={`w-full rounded-t-md ${i === 6 ? 'bg-gradient-to-t from-[#0052FF] to-[#00C6FF] shadow-[0_0_15px_rgba(0,198,255,0.6)]' : 'bg-slate-700 group-hover:bg-[#0052FF]/50 transition-colors'}`}
                      ></motion.div>
                    </div>
                  ))}
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl font-black text-white">45K</div>
                    <div className="text-xs text-slate-400 mt-1">Followers</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl font-black text-white">1.2M</div>
                    <div className="text-xs text-slate-400 mt-1">Impressions</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-[#0052FF]/20 to-[#00C6FF]/20 border border-[#00C6FF]/30">
                    <div className="text-xl font-black text-[#00C6FF]">8.5%</div>
                    <div className="text-xs text-[#00C6FF] font-medium mt-1">Conversion</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: 'transform' }}
                className="absolute -right-8 top-16 bg-white p-4 rounded-xl shadow-[0_0_30px_rgba(0,82,255,0.2)] flex items-center gap-4 z-20"
              >
                <div className="p-2 rounded-full bg-[#0052FF]/10 text-[#0052FF]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Community Trust</div>
                  <div className="text-lg font-black text-[#0052FF]">Top 1%</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Features Grid */}
      <section className="py-24 relative z-10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Why Brands Trust Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              We don't follow trends; we set them. Our data-driven approach ensures every post serves a measurable purpose in your growth journey.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,82,255,0.06)] group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms Animated Marquee */}
      <section className="py-20 bg-white overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Platforms We Dominate</h3>
        </div>
        <div className="relative flex flex-col gap-6 overflow-x-hidden">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-8 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ willChange: 'transform' }}
          >
            {[...platforms, ...platforms, ...platforms].map((platform, idx) => (
              <div key={idx} className="flex items-center gap-3 px-8 py-4 bg-[#F8FAFC] border border-slate-200 rounded-2xl shadow-sm text-slate-700 font-bold text-xl hover:border-[#0052FF] hover:text-[#0052FF] transition-colors cursor-pointer">
                <div className="w-2.5 h-2.5 bg-[#00C6FF] rounded-full"></div>
                {platform}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Proven Framework</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">A systematic approach to growing your brand's digital footprint consistently.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-slate-200 z-0"></div>

            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6, type: "spring" }}
                className="relative flex flex-col items-center text-center z-10"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-20 h-20 rounded-full bg-white border-[3px] border-slate-200 flex items-center justify-center mb-6 text-2xl font-black text-[#0052FF] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#0052FF] hover:shadow-[0_8px_30px_rgba(0,82,255,0.3)] transition-all duration-300"
                >
                  0{idx + 1}
                </motion.div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

const platforms = ["Instagram", "LinkedIn", "Twitter (X)", "Facebook", "TikTok", "YouTube", "Pinterest", "Reddit"];

const services = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    desc: "Every campaign begins with deep audience research and competitor analysis to position your brand precisely where it wins.",
    gradient: "from-[#0052FF] to-blue-500"
  },
  {
    icon: Users,
    title: "Community Management",
    desc: "We don't just broadcast; we interact. We build loyal tribes around your brand through authentic, daily engagement.",
    gradient: "from-[#00C6FF] to-cyan-500"
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    desc: "Transparent reporting and continuous optimization. We track metrics that matter to your bottom line, not just vanity numbers.",
    gradient: "from-blue-600 to-[#0052FF]"
  }
];

const processSteps = [
  { title: "Brand Audit", desc: "We analyze your current presence and identify hidden growth opportunities." },
  { title: "Content Creation", desc: "Producing high-quality, viral-worthy videos, graphics, and copy." },
  { title: "Distribution", desc: "Strategic scheduling and posting across multiple platforms for maximum reach." },
  { title: "Scale & Optimize", desc: "A/B testing and doubling down on the content that drives the highest ROI." }
];
