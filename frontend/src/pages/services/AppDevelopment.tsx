import { motion, type Variants } from 'framer-motion';
import { Smartphone, Layers, ShieldCheck, Zap, Globe } from 'lucide-react';

export function AppDevelopment() {
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
                <Smartphone className="w-4 h-4 text-[#00C6FF]" />
                <span className="tracking-wide">Next-Gen App Development</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Apps That Keep Users <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">Hooked</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                We build native and cross-platform mobile experiences that dominate the App Store. From intuitive UI to flawless performance, we turn bold ideas into billion-dollar apps.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                  Start Your App
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-slate-700/80 hover:border-slate-500 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  View Case Studies
                </button>
              </motion.div>
            </div>

            {/* Phone Mockup Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="relative w-full max-w-sm mx-auto lg:max-w-none perspective-1000 hidden md:flex justify-center items-center"
            >
              <motion.div 
                animate={{ y: [-15, 15, -15], rotateY: [-5, 5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="relative z-10 w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden"
              >
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl w-40 mx-auto z-50"></div>
                
                {/* App Screen Content */}
                <div className="w-full h-full bg-gradient-to-b from-[#0F172A] to-[#050B14] relative">
                  {/* Decorative UI elements */}
                  <div className="px-6 pt-16 pb-6">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-2 bg-white/20 rounded-full mb-8"
                    ></motion.div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} className="h-24 bg-[#0052FF]/30 rounded-2xl backdrop-blur-md border border-[#0052FF]/50"></motion.div>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} className="h-24 bg-[#00C6FF]/30 rounded-2xl backdrop-blur-md border border-[#00C6FF]/50"></motion.div>
                    </div>

                    <div className="space-y-4">
                      {[1, 2, 3].map((item, i) => (
                        <motion.div 
                          key={item}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.6 + i * 0.2 }}
                          className="w-full h-16 bg-white/10 rounded-2xl border border-white/5 flex items-center px-4 gap-4"
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0052FF] to-[#00C6FF]"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 bg-white/30 rounded-full w-2/3"></div>
                            <div className="h-2 bg-white/10 rounded-full w-1/3"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Navigation Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-slate-900/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center px-6">
                    <motion.div whileHover={{ scale: 1.2 }} className="w-6 h-6 rounded-md bg-[#0052FF]"></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} className="w-6 h-6 rounded-md bg-white/30"></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} className="w-6 h-6 rounded-md bg-white/30"></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} className="w-6 h-6 rounded-md bg-white/30"></motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating element 1 */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="absolute -right-6 top-32 bg-[#0F172A]/80 backdrop-blur-xl p-4 rounded-xl border border-[#0052FF]/50 shadow-[0_0_30px_rgba(0,82,255,0.3)] flex items-center gap-4 z-20"
              >
                <div className="p-2 rounded-full bg-[#0052FF] text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">App Security</div>
                  <div className="text-xs text-[#0052FF]">Enterprise Grade</div>
                </div>
              </motion.div>
              
              {/* Floating element 2 */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: 'transform' }}
                className="absolute -left-10 bottom-40 bg-[#0F172A]/80 backdrop-blur-xl p-4 rounded-xl border border-[#00C6FF]/50 shadow-[0_0_30px_rgba(0,198,255,0.3)] flex items-center gap-4 z-20"
              >
                <div className="p-2 rounded-full bg-[#00C6FF] text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Load Time</div>
                  <div className="text-lg font-black text-[#00C6FF]">0.5s</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Features Grid (Light Theme) */}
      <section className="py-24 relative z-10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Mastering Every Mobile Platform
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              Whether it's iOS, Android, or Cross-Platform, we have the specialized expertise to bring your mobile application to life.
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
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] group"
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

      {/* Tech Stack Animated Marquee */}
      <section className="py-20 bg-white overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Our Mobile Tech Stack</h3>
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
            {[...techs, ...techs, ...techs].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl shadow-sm text-slate-700 font-bold text-lg hover:border-[#0052FF] hover:text-[#0052FF] transition-colors cursor-pointer">
                <div className="w-2 h-2 bg-[#00C6FF] rounded-full"></div>
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">How We Build Better Apps</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">From sketch to the App Store, our methodology ensures flawless execution.</p>
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

const techs = ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "GraphQL", "AWS Mobile", "Node.js", "Java"];

const services = [
  {
    icon: Smartphone,
    title: "Native iOS App Development",
    desc: "Leveraging Swift and Objective-C to build high-performance, seamless applications exclusively designed for the Apple ecosystem.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Layers,
    title: "Native Android App Development",
    desc: "Crafting robust, scalable, and secure Android apps using Kotlin and Java, optimized for thousands of different devices.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Globe,
    title: "Cross-Platform Development",
    desc: "Using Flutter and React Native to build a single codebase that runs flawlessly on both iOS and Android, saving time and money.",
    gradient: "from-[#0052FF] to-[#0052FF]"
  }
];

const processSteps = [
  { title: "Strategy", desc: "We analyze your audience, competitors, and goals to build a winning app strategy." },
  { title: "UI/UX Design", desc: "Creating intuitive interfaces that provide delightful and engaging user experiences." },
  { title: "Engineering", desc: "Writing robust, secure, and scalable code with strict quality assurance testing." },
  { title: "App Store Launch", desc: "Deploying to the App Store and Google Play, handling all compliance and review processes." }
];
