import { motion, type Variants } from 'framer-motion';
import { 
  LineChart, 
  ShieldCheck, 
  Zap, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  CreditCard, 
  Building2, 
  RefreshCw, 
  PhoneCall, 
  MessageCircle,
  TrendingUp,
  Cpu,
  Layers
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

const fintechCapabilities = [
  {
    icon: CreditCard,
    title: "UPI & Digital Payments",
    desc: "Seamless integration with NPCI, Razorpay, Cashfree, and banking APIs with sub-second payment settlement and automated reconciliation."
  },
  {
    icon: Lock,
    title: "Bank-Grade Security & PCI-DSS",
    desc: "Multi-factor authentication, end-to-end payload encryption, tokenization, and strict compliance with RBI digital lending guidelines."
  },
  {
    icon: Cpu,
    title: "AI-Powered Fraud Detection",
    desc: "Real-time anomaly detection algorithms that flag suspicious transactions and reduce chargeback ratios by up to 88%."
  },
  {
    icon: TrendingUp,
    title: "WealthTech & Trading Platforms",
    desc: "Low-latency WebSocket order-routing architectures for mutual funds, stocks, and crypto assets handling thousands of tick updates."
  },
  {
    icon: Building2,
    title: "Neo-Banking & Micro-Lending",
    desc: "End-to-end digital onboarding, automated Aadhaar/PAN e-KYC verification, credit bureau scoring, and loan disbursement pipelines."
  },
  {
    icon: RefreshCw,
    title: "High-Concurrency Ledgers",
    desc: "Double-entry immutable ledger architectures designed for high volume without race conditions or rounding discrepancies."
  }
];

const complianceBadges = [
  "PCI-DSS Level 1 Certified Architecture",
  "RBI Digital Lending Guidelines Compliant",
  "India DPDP Act 2023 Aligned",
  "ISO 27001 & SOC-2 Type II Ready"
];

export function Fintech() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ========================================================= */}
      {/* HERO SECTION (Dark Tech Theme)                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A0F1C] text-white">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FF]/15 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#00C6FF] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
              >
                <LineChart className="w-4 h-4" />
                <span>BFSI & FinTech Innovation</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6"
              >
                Next-Gen{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] via-[#0084FF] to-[#0052FF]">
                  Financial Systems
                </span>{' '}
                Built for Scale.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
              >
                We engineer bulletproof digital banking apps, automated lending platforms, and real-time payment solutions compliant with RBI guidelines.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,198,255,0.4)] transition-all flex items-center gap-2 group">
                    Build FinTech Solution <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20Fintech%20project." 
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
                    <div className="text-xs text-slate-400">Live Transaction Gateway</div>
                    <div className="text-2xl font-black text-white mt-1">₹ 42,85,910 <span className="text-xs text-emerald-400 font-bold ml-2">↑ 99.98% Success</span></div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#00C6FF] flex items-center justify-center font-bold">
                    UPI
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <div className="text-sm font-bold text-white">NPCI Switch Latency</div>
                        <div className="text-xs text-slate-400">P99 Response time</div>
                      </div>
                    </div>
                    <div className="text-sm font-mono text-emerald-400 font-bold">142 ms</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#00C6FF]" />
                      <div>
                        <div className="text-sm font-bold text-white">AI Fraud Shield</div>
                        <div className="text-xs text-slate-400">Zero false-positives</div>
                      </div>
                    </div>
                    <div className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                      ACTIVE
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Layers className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-sm font-bold text-white">e-KYC & Digilocker</div>
                        <div className="text-xs text-slate-400">Automated Aadhaar verify</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-white">Instant</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
                  <span>AES-256 Bit Encryption</span>
                  <span className="text-[#00C6FF] font-semibold">RBI Compliant</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052FF] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
              Comprehensive FinTech Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              From regulated banking APIs to ultra-fast retail payment flows, our engineering stack covers the full financial lifecycle.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {fintechCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-6 group-hover:bg-[#0052FF] group-hover:text-white transition-all duration-300 shadow-sm">
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
      {/* CASE STUDY & IMPACT (White/Slate-50)                      */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" 
                alt="Indian Fintech Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs uppercase font-bold text-cyan-300">Indian Tech Ecosystem</div>
                  <div className="text-xl font-black mt-1">Empowering Bharat's Digital Economy</div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0052FF] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Security & Trust
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-6">
                Built Strictly According to Indian & Global Regulations
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                In financial software, compliance is non-negotiable. We engineer systems with rigorous audit trails, zero-trust architectures, and data localization mandated by Indian authorities.
              </p>

              <div className="space-y-4 mb-8">
                {complianceBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm">{badge}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Direct Consultation</div>
                  <div className="font-extrabold text-slate-900 text-lg">+91 87965 30323</div>
                </div>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#0052FF] text-white text-sm font-bold transition-all shadow-md">
                    Schedule Architecture Review
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
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200/80 p-8 sm:p-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Ready to Launch or Modernize Your FinTech Product?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base mb-8">
              Let's build secure, scalable, and audit-ready financial software. Connect with our engineering leads directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+918796530323"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-[#0052FF] text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
              </a>
              <a 
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20Fintech%20project."
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
                Submit Project Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
