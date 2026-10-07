import { motion, type Variants } from 'framer-motion';
import { Megaphone, Search, MousePointerClick, Mail, Lightbulb, TrendingUp, Target, ArrowUpRight } from 'lucide-react';

export function DigitalMarketing() {
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
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#0052FF] rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute -bottom-20 left-20 w-[600px] h-[600px] bg-[#00C6FF] rounded-full blur-[150px]"
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
                <Megaphone className="w-4 h-4 text-[#00C6FF]" />
                <span className="tracking-wide">Performance-Driven Marketing</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">Multiplies</span> Your Revenue
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                We execute laser-targeted campaigns combining SEO, PPC, and CRO. Stop paying for clicks, start investing in high-quality leads and explosive growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                  Get a Free SEO Audit
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-slate-700/80 hover:border-slate-500 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  View Case Studies
                </button>
              </motion.div>
            </div>

            {/* Campaign Dashboard Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none perspective-1000 hidden md:flex justify-center"
            >
              <motion.div 
                animate={{ y: [-15, 15, -15], rotateY: [5, -5, 5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="relative z-10 w-full max-w-md bg-[#0F172A]/90 backdrop-blur-2xl border border-slate-700 rounded-3xl shadow-[0_0_50px_rgba(0,198,255,0.15)] p-6 overflow-hidden"
              >
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052FF] to-[#00C6FF] flex items-center justify-center shadow-lg">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Campaign Alpha</h3>
                      <p className="text-xs text-slate-400">Running • Meta & Google</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                    Active
                  </div>
                </div>

                {/* Animated ROI Meter */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Return on Ad Spend (ROAS)</span>
                    <span className="text-[#00C6FF] font-bold">4.8x</span>
                  </div>
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#0052FF] to-[#00C6FF] relative"
                    >
                      <motion.div 
                        animate={{ opacity: [0, 1, 0], x: [0, 200] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <MousePointerClick className="w-4 h-4 text-[#00C6FF]" />
                      <span className="text-slate-400 text-xs">Total Clicks</span>
                    </div>
                    <div className="text-2xl font-black text-white">12,450</div>
                    <div className="text-xs text-emerald-400 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" /> +14.2%
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-[#0052FF]" />
                      <span className="text-slate-400 text-xs">Conversions</span>
                    </div>
                    <div className="text-2xl font-black text-white">842</div>
                    <div className="text-xs text-emerald-400 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" /> +28.5%
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ willChange: 'transform' }}
                className="absolute -right-10 top-20 bg-[#0F172A]/80 backdrop-blur-xl p-4 rounded-xl border border-[#0052FF]/50 shadow-[0_0_30px_rgba(0,82,255,0.3)] flex items-center gap-4 z-20"
              >
                <div className="p-2 rounded-full bg-[#0052FF] text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Cost Per Lead</div>
                  <div className="text-sm font-black text-emerald-400">Decreased 40%</div>
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
              Our Marketing Arsenal
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              A 360-degree approach to digital growth. We deploy the right tactics at the right time to dominate your market.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* Tools Marquee */}
      <section className="py-20 bg-white overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Powered by Industry-Leading Tools</h3>
        </div>
        <div className="relative flex flex-col gap-6 overflow-x-hidden">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-8 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ willChange: 'transform' }}
          >
            {[...tools, ...tools, ...tools].map((tool, idx) => (
              <div key={idx} className="flex items-center gap-3 px-8 py-4 bg-[#F8FAFC] border border-slate-200 rounded-2xl shadow-sm text-slate-700 font-bold text-xl hover:border-[#0052FF] hover:text-[#0052FF] transition-colors cursor-pointer">
                <div className="w-2.5 h-2.5 bg-[#00C6FF] rounded-full"></div>
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">The Conversion Funnel</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our systematic methodology to turn strangers into brand advocates.</p>
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

const tools = ["Google Analytics", "Meta Ads Manager", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Klaviyo", "Hotjar"];

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search engine rankings. We optimize your technical SEO, content, and backlinks to drive massive organic traffic.",
    gradient: "from-[#0052FF] to-blue-500"
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC)",
    desc: "Hyper-targeted Google and Meta ad campaigns that minimize your Cost Per Acquisition and maximize your ROAS.",
    gradient: "from-[#00C6FF] to-cyan-500"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Automated, personalized email sequences that nurture leads, recover abandoned carts, and boost customer lifetime value.",
    gradient: "from-blue-600 to-[#0052FF]"
  },
  {
    icon: Lightbulb,
    title: "Content Marketing",
    desc: "High-value blogs, whitepapers, and videos that position your brand as an industry authority and attract inbound leads.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    desc: "We use heatmaps and A/B testing to optimize your landing pages, ensuring every click has the highest chance of converting.",
    gradient: "from-emerald-400 to-teal-500"
  }
];

const processSteps = [
  { title: "Attract", desc: "Driving high-intent traffic to your site through SEO, Social Media, and targeted Ads." },
  { title: "Engage", desc: "Capturing attention with compelling copy, lead magnets, and optimized landing pages." },
  { title: "Convert", desc: "Using seamless UX, retargeting, and email sequences to turn leads into paying customers." },
  { title: "Retain", desc: "Building loyalty programs and continuous value delivery to create lifelong brand advocates." }
];
