import { motion, type Variants } from 'framer-motion';
import { Code, Smartphone, Zap, Globe, ShieldCheck, Database, Layout } from 'lucide-react';
export function WebDevelopment() {
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
      {/* Hero Section (Dark Theme for impact) */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center bg-[#0A0F1C]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0052FF] rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FF] rounded-full blur-[150px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            
            <div className="text-center lg:text-left z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0052FF]/20 to-[#00C6FF]/20 border border-[#00C6FF]/30 text-white text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(0,198,255,0.2)] backdrop-blur-sm"
              >
                <Code className="w-4 h-4 text-[#00C6FF]" />
                <span className="tracking-wide">Premium Web Development</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">Experiences</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                We engineer high-performance, scalable, and visually stunning websites tailored to convert visitors into loyal customers. From corporate portals to complex web apps, we deliver excellence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-blue-600 hover:shadow-[0_0_30px_rgba(0,82,255,0.6)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.4)]">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-slate-700/80 hover:border-slate-500 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  View Portfolio
                </button>
              </motion.div>
            </div>

            {/* Code Editor Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none perspective-1000 hidden md:block"
            >
              <motion.div 
                animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="bg-[#0F172A]/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden relative z-10"
              >
                {/* Window Header */}
                <div className="flex items-center px-4 py-3 border-b border-slate-700/50 bg-[#1E293B]/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto text-xs font-mono text-slate-400 flex items-center gap-2">
                    <Layout className="w-3 h-3" /> App.tsx — QEVNARO
                  </div>
                </div>
                {/* Code Content */}
                <div className="p-6 font-mono text-sm overflow-hidden relative leading-relaxed">
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="text-pink-400 mb-2">
                    import <span className="text-blue-300">{`{ motion }`}</span> from <span className="text-green-300">'framer-motion'</span>;
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="text-blue-400 mb-4">
                    const <span className="text-yellow-300">WebExperience</span> = () =&gt; <span className="text-yellow-300">{`{`}</span>
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }} className="pl-4 text-slate-300 mb-2">
                    return (
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4 }} className="pl-8 text-slate-300 mb-2">
                    &lt;<span className="text-pink-400">motion.div</span>
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.6 }} className="pl-12 text-blue-300 mb-2">
                    initial=<span className="text-yellow-300">{`{{`}</span> opacity: <span className="text-purple-400">0</span> <span className="text-yellow-300">{`}}`}</span>
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.8 }} className="pl-12 text-blue-300 mb-2">
                    animate=<span className="text-yellow-300">{`{{`}</span> opacity: <span className="text-purple-400">1</span>, scale: <span className="text-purple-400">1.05</span> <span className="text-yellow-300">{`}}`}</span>
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.0 }} className="pl-12 text-blue-300 mb-2">
                    className=<span className="text-green-300">"ultra-fast-performance"</span>
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.2 }} className="pl-8 text-slate-300 mb-2">
                    &gt;
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.4 }} className="pl-12 text-white font-bold tracking-wide">
                    Built by QEVNARO Experts.
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.6 }} className="pl-8 text-slate-300 mt-2">
                    &lt;/<span className="text-pink-400">motion.div</span>&gt;
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.8 }} className="pl-4 text-slate-300 mt-2">
                    );
                  </motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3.0 }} className="text-yellow-300 mt-2">
                    <span className="text-blue-400">{`}`}</span>
                  </motion.div>
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-4 bg-white mt-2 inline-block" />
                </div>
              </motion.div>

              {/* Floating element 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="absolute -right-8 top-16 bg-[#0F172A]/80 backdrop-blur-xl p-4 rounded-xl border border-slate-600 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Performance Score</div>
                  <div className="text-lg font-black text-emerald-400">100 / 100</div>
                </div>
              </motion.div>
              
              {/* Floating element 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: 'transform' }}
                className="absolute -left-12 bottom-16 bg-[#0052FF]/10 backdrop-blur-xl p-4 rounded-xl border border-[#0052FF]/30 shadow-[0_0_30px_rgba(0,82,255,0.2)] flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-[#0052FF]/30 border border-[#0052FF]/50 flex items-center justify-center text-[#00C6FF]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Global Reach</div>
                  <div className="text-xs font-medium text-[#00C6FF]">SEO Optimized</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Features Grid (Light Theme) */}
      <section className="py-24 relative z-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Why Choose Our Web Services?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              We don't just write code; we build digital assets that generate revenue and scale with your business.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,82,255,0.08)] group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0052FF] transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Animated Marquee */}
      <section className="py-20 bg-[#F8FAFC] overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Technologies We Master</h3>
        </div>
        <div className="relative flex flex-col gap-6 overflow-x-hidden">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-8 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ willChange: 'transform' }}
          >
            {[...techs, ...techs, ...techs].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 font-bold text-lg hover:border-[#0052FF] hover:text-[#0052FF] transition-colors">
                <div className="w-2 h-2 bg-[#00C6FF] rounded-full"></div>
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section (Light Theme) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Proven Methodology</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">A streamlined, transparent approach to bringing your vision to life, ensuring on-time delivery and top-notch quality.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Background Line */}
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center mb-6 text-2xl font-black text-[#0052FF] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#0052FF] transition-colors duration-300"
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

const techs = ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS", "GraphQL"];

const features = [
  {
    icon: Layout,
    title: "Custom UI/UX Design",
    desc: "We don't use templates. Every website is designed from scratch to reflect your brand's unique identity and maximize user engagement.",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Optimized for lightning-fast load times. We use modern frameworks like React and Next.js to ensure a smooth, lag-free experience.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    desc: "Flawless rendering across all devices. Your site will look stunning and function perfectly on desktops, tablets, and smartphones.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    desc: "Built to grow with your business. Our backend solutions handle increasing traffic and data without compromising performance.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    desc: "Clean code structure, fast load times, and meta-tag optimization ensure your site ranks high on Google from day one.",
    gradient: "from-orange-400 to-amber-500"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Advanced security protocols, SSL certificates, and secure data handling to protect your business and your customers.",
    gradient: "from-slate-600 to-slate-800"
  }
];

const processSteps = [
  { title: "Discovery", desc: "Understanding your business goals, target audience, and technical requirements." },
  { title: "Design", desc: "Creating wireframes and high-fidelity UI prototypes for your approval." },
  { title: "Development", desc: "Writing clean, efficient code to bring the designs to life." },
  { title: "Launch", desc: "Rigorous testing, deployment, and ongoing post-launch support." }
];
