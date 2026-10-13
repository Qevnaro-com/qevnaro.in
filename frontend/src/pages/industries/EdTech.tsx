import { motion, type Variants } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  PhoneCall, 
  MessageCircle, 
  Laptop, 
  BrainCircuit, 
  FileCheck2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const edtechCapabilities = [
  {
    icon: Video,
    title: "Low-Bandwidth Live Classrooms",
    desc: "Interactive live streaming with real-time student polls, whiteboards, and hand-raise features optimized for 4G and 3G connections in Bharat."
  },
  {
    icon: FileCheck2,
    title: "NTA-Style Mock Test Engine",
    desc: "Simulated examination engines matching JEE, NEET, CUET, and UPSC formats with negative marking, percentile metrics, and section timing."
  },
  {
    icon: BrainCircuit,
    title: "AI Instant Doubt Resolver",
    desc: "OCR picture-to-solution models and LLM conversational tutors that answer student queries 24/7 with step-by-step explanations."
  },
  {
    icon: Award,
    title: "Gamified Learning & Leaderboards",
    desc: "Daily streak counters, badge rewards, chapter completion quizzes, and peer rankings that drive course completion rates up to 72%."
  },
  {
    icon: Laptop,
    title: "Custom Learning Management (LMS)",
    desc: "DRM-protected video hosting (preventing screen recording/piracy), PDF notes viewer, homework submission, and automated parent reports."
  },
  {
    icon: GraduationCap,
    title: "Institute ERP & Fee Collection",
    desc: "Batch allocation, biometric/app attendance tracking, automated fee reminders via WhatsApp, and instant GST invoice receipts."
  }
];

export function EdTech() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ========================================================= */}
      {/* HERO SECTION (Dark Tech Theme)                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A0F1C] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>EdTech & Next-Gen Learning Platforms</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6"
              >
                Scalable Platforms for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-[#00C6FF]">
                  Modern Education.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
              >
                From pirate-proof video streaming to national-level test series engines and AI tutors, we build engaging software that empowers educators and students.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-[#0052FF] text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2 group">
                    Build EdTech Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20an%20EdTech%20software%20project." 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" /> WhatsApp Us
                </a>
              </motion.div>
            </div>

            {/* Right Interactive Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div>
                    <div className="text-xs text-slate-400">Live Mock Test Simulation</div>
                    <div className="text-2xl font-black text-white mt-1">JEE Advanced All-India Test</div>
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-bold">
                    14,890 LIVE
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Anti-Piracy DRM Streaming</div>
                      <div className="text-xs text-slate-400">Dynamic user watermark & encrypted HLS</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400">PROTECTED</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">AI Doubt Solver Response</div>
                      <div className="text-xs text-slate-400">Instant step-by-step math solver</div>
                    </div>
                    <div className="text-xs font-mono text-purple-300 font-bold">&lt; 1.8s Response</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">WhatsApp Parent Progress Report</div>
                      <div className="text-xs text-slate-400">Automated weekly attendance & marks</div>
                    </div>
                    <div className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">SENT</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
                  <span>Sub-second Live Polls</span>
                  <span className="text-purple-400 font-semibold">99.9% Concurrency Uptime</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CAPABILITIES SECTION (White Theme)                       */}
      {/* ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100">
              EdTech Modules
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
              Comprehensive Tools for Teachers, Coaches & Academies
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Deliver seamless learning experiences whether catering to K-12 schooling, competitive exam coaching, or professional upskilling.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {edtechCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <cap.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CASE STUDY & IMPACT                                       */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] bg-slate-900">
              {/* Indian student / learning tech context */}
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80" 
                alt="Indian Students Learning on Digital Platform" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs uppercase font-bold text-purple-300">Democratizing Education</div>
                  <div className="text-xl font-black mt-1">Connecting Quality Teachers to Students Across India</div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100">
                Engagement & Retention
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-6">
                Designed for High Completion & Low Drop-Off
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Traditional video courses suffer from 90% drop-off. We integrate social learning, gamified streak badges, and personalized test analytics that keep students hooked and motivated.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Dynamic watermarking with student phone number to deter piracy",
                  "Detailed chapter-wise strength & weakness analytics",
                  "Razorpay & Cashfree subscription and installment EMI integration",
                  "Offline video download capability in Android & iOS apps"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">EdTech Advisory Desk</div>
                  <div className="font-extrabold text-slate-900 text-lg">+91 87965 30323</div>
                </div>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-purple-600 text-white text-sm font-bold transition-all shadow-md">
                    Schedule LMS Walkthrough
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA BANNER                                         */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border border-purple-200/80 p-8 sm:p-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Scale Your Coaching Institute or EdTech Venture
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base mb-8">
              Speak with our engineers to build custom mobile learning apps, mock test platforms, or live interactive classroom portals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+918796530323"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-purple-600 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
              </a>
              <a 
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20an%20EdTech%20software%20project."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: +91 87965 30323
              </a>
              <Link 
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 text-sm font-bold shadow-sm transition-all"
              >
                Inquire LMS Features
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
