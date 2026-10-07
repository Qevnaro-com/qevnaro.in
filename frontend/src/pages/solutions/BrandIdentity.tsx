import { motion, type Variants } from 'framer-motion';
import { Palette, PenTool, LayoutTemplate, Type, Layers, Sparkles, Box, CheckCircle2 } from 'lucide-react';

export function BrandIdentity() {
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
                <Palette className="w-4 h-4 text-[#00C6FF]" />
                <span className="tracking-wide">Premium Brand Identity</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Design A Brand They <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">Never Forget</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                We craft iconic visual identities, compelling brand voices, and comprehensive style guides that distinguish you from the competition and resonate deeply with your target audience.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                  Start Your Rebrand
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-slate-700/80 hover:border-slate-500 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  View Portfolio
                </button>
              </motion.div>
            </div>

            {/* Design Canvas Mockup Animation (Real Feel) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none perspective-1000 hidden md:block"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10], rotateX: [2, -2, 2], rotateY: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="relative z-10"
              >
                {/* Main Design Software Mockup */}
                <div className="bg-[#0F172A]/90 backdrop-blur-2xl border border-slate-700 rounded-2xl shadow-[0_0_50px_rgba(0,82,255,0.15)] overflow-hidden">
                  {/* Fake App Window Header */}
                  <div className="h-10 bg-[#1E293B] border-b border-slate-700 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="mx-auto text-xs font-semibold text-slate-400">Brand_Style_Guide.design</div>
                  </div>
                  
                  <div className="flex">
                    {/* Fake Sidebar Toolbar */}
                    <div className="w-12 border-r border-slate-800 p-2 space-y-4 flex flex-col items-center pt-4">
                      <div className="w-8 h-8 rounded-md bg-[#0052FF]/20 flex items-center justify-center text-[#00C6FF]"><PenTool className="w-4 h-4" /></div>
                      <div className="w-8 h-8 rounded-md hover:bg-white/5 flex items-center justify-center text-slate-500"><Type className="w-4 h-4" /></div>
                      <div className="w-8 h-8 rounded-md hover:bg-white/5 flex items-center justify-center text-slate-500"><LayoutTemplate className="w-4 h-4" /></div>
                      <div className="w-8 h-8 rounded-md hover:bg-white/5 flex items-center justify-center text-slate-500"><Box className="w-4 h-4" /></div>
                    </div>

                    {/* Canvas Area */}
                    <div className="p-6 flex-1 bg-slate-900 relative overflow-hidden">
                      {/* Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      
                      <div className="relative z-10 space-y-6">
                        {/* Logo Box */}
                        <motion.div 
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          className="w-full bg-white rounded-xl p-6 border-2 border-dashed border-[#0052FF]/50 relative"
                        >
                          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#00C6FF] rounded-full border-4 border-slate-900"></div>
                          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#0052FF] rounded-full border-4 border-slate-900"></div>
                          
                          <div className="text-center">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Logo</div>
                            <div className="text-4xl font-black text-slate-900 tracking-tighter">BRAND<span className="text-[#0052FF]">X</span></div>
                          </div>
                        </motion.div>

                        {/* Color Palette */}
                        <div className="grid grid-cols-4 gap-3">
                          <div className="space-y-2">
                            <div className="h-16 rounded-lg bg-[#0F172A] shadow-md border border-slate-700"></div>
                            <div className="text-[10px] text-slate-400 font-mono text-center">#0F172A</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-16 rounded-lg bg-[#0052FF] shadow-md"></div>
                            <div className="text-[10px] text-slate-400 font-mono text-center">#0052FF</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-16 rounded-lg bg-[#00C6FF] shadow-md"></div>
                            <div className="text-[10px] text-slate-400 font-mono text-center">#00C6FF</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-16 rounded-lg bg-white shadow-md border border-slate-200"></div>
                            <div className="text-[10px] text-slate-400 font-mono text-center">#FFFFFF</div>
                          </div>
                        </div>

                        {/* Typography */}
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Typography</div>
                          <div className="space-y-2">
                            <div className="text-2xl font-black text-white">Aa - Inter Bold</div>
                            <div className="text-sm font-medium text-slate-300">Aa - Inter Medium (Body)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ willChange: 'transform' }}
                  className="absolute -right-8 top-16 bg-white p-4 rounded-xl shadow-[0_0_30px_rgba(0,82,255,0.25)] flex items-center gap-4 z-20"
                >
                  <div className="p-2 rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Design System</div>
                    <div className="text-sm font-black text-slate-700">Approved by Client</div>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative z-10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Building Brands With Purpose
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              We don't just design logos; we build holistic brand ecosystems that tell your story and build instant trust.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,82,255,0.06)] group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Marquee */}
      <section className="py-20 bg-white overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Designed using industry-standard tools</h3>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Creative Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">A strategic approach to turning abstract ideas into tangible, iconic brand assets.</p>
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
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

const tools = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Spline 3D", "Webflow", "Procreate"];

const services = [
  {
    icon: Sparkles,
    title: "Logo & Mark Design",
    desc: "Designing memorable, timeless logos and brand marks that serve as the anchor for your entire corporate identity.",
    gradient: "from-[#0052FF] to-blue-500"
  },
  {
    icon: Palette,
    title: "Color & Typography",
    desc: "Selecting strategic color palettes and typography systems that evoke the right emotions and psychological responses.",
    gradient: "from-[#00C6FF] to-cyan-500"
  },
  {
    icon: LayoutTemplate,
    title: "Brand Style Guides",
    desc: "Creating comprehensive brand rulebooks ensuring strict visual and tonal consistency across all platforms and mediums.",
    gradient: "from-blue-600 to-[#0052FF]"
  },
  {
    icon: Type,
    title: "Brand Voice & Messaging",
    desc: "Crafting your unique tone of voice, mission statements, and taglines so you speak directly to your ideal customer.",
    gradient: "from-[#0052FF] to-[#00C6FF]"
  },
  {
    icon: Layers,
    title: "Marketing Collateral",
    desc: "Designing cohesive business cards, letterheads, presentation decks, and packaging that leave a lasting physical impression.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: PenTool,
    title: "UI/UX & Web Integration",
    desc: "Translating your new brand identity seamlessly into digital interfaces, ensuring perfect harmony between brand and product.",
    gradient: "from-[#00C6FF] to-[#0052FF]"
  }
];

const processSteps = [
  { title: "Discovery", desc: "Deep diving into your business goals, competitors, and target audience to find your unique positioning." },
  { title: "Conceptualization", desc: "Brainstorming and sketching multiple visual directions and mood boards for your brand." },
  { title: "Refinement", desc: "Selecting the strongest concept and polishing the logo, typography, and color palette." },
  { title: "Delivery", desc: "Handing over the final source files, comprehensive style guide, and digital assets." }
];
