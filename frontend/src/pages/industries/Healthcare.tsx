import { motion, type Variants } from 'framer-motion';
import { 
  HeartPulse, 
  ShieldCheck, 
  Activity, 
  Video, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Database, 
  PhoneCall, 
  MessageCircle, 
  Users, 
  Stethoscope, 
  Lock
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

const healthcareFeatures = [
  {
    icon: Video,
    title: "Teleconsultation & Video Health",
    desc: "Low-bandwidth WebRTC video consultation platforms engineered for smooth connectivity even across Tier-2 and Tier-3 cities in India."
  },
  {
    icon: Database,
    title: "ABDM & EHR / EMR Integration",
    desc: "Unified patient record management fully compliant with Ayushman Bharat Digital Mission (ABDM), M1, M2, and M3 certification readiness."
  },
  {
    icon: Stethoscope,
    title: "Hospital & Clinic Management",
    desc: "Complete operational suite including OPD/IPD workflows, bed management, billing, e-prescriptions, and automated pharmacy inventory."
  },
  {
    icon: Lock,
    title: "HIPAA & DISHA Data Security",
    desc: "Enterprise-grade PHI (Protected Health Information) encryption, role-based access control, and comprehensive audit trail logging."
  },
  {
    icon: FileText,
    title: "Diagnostic & Lab Software (LIS)",
    desc: "Automated sample barcode tracking, analyzer equipment machine interfacing, and instant WhatsApp/SMS patient report delivery."
  },
  {
    icon: Activity,
    title: "IoT Remote Patient Monitoring",
    desc: "Real-time telemetry feeds connecting smart pulse oximeters, ECG monitors, and vitals tracking directly into the doctor's dashboard."
  }
];

export function Healthcare() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ========================================================= */}
      {/* HERO SECTION (Dark Tech Theme)                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A0F1C] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
              >
                <HeartPulse className="w-4 h-4" />
                <span>HealthTech & Digital Health Engineering</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6"
              >
                Intelligent Software for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00C6FF]">
                  Modern Healthcare.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
              >
                From HIPAA-compliant telemedicine to ABDM-ready hospital workflows, we build dependable, life-critical software trusted by doctors and clinics.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 group">
                    Build Healthcare Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20Healthcare%20software%20project." 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" /> WhatsApp Us
                </a>
              </motion.div>
            </div>

            {/* Right HealthTech Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">TeleMed Cloud Engine</div>
                      <div className="text-xs text-slate-400">ABDM Ready • Ayushman Bharat Linked</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                    ONLINE
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Encrypted Patient Records (EHR)</div>
                      <div className="text-xs text-slate-400">AES-256 GCM Cloud Storage</div>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Smart E-Prescriptions</div>
                      <div className="text-xs text-slate-400">1-click WhatsApp delivery to patient</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Video Call Latency</div>
                      <div className="text-xs text-slate-400">Adaptive WebRTC multi-bitrate</div>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">&lt; 85 ms</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
                  <span>HIPAA & DISHA Aligned</span>
                  <span className="text-emerald-400 font-semibold">99.99% Uptime SLA</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
              Healthcare Modules
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
              End-to-End Clinical & Digital Health Tools
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Engineered to reduce administrative overhead, eliminate diagnosis bottlenecks, and elevate patient care.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {healthcareFeatures.map((feat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* INDIAN CONTEXT & TRUST SECTION                            */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] bg-slate-900">
              {/* Indian Medical Consultation / Clinic context */}
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80" 
                alt="Indian Doctor using Digital Health System" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs uppercase font-bold text-emerald-400">Digital Health Mission</div>
                  <div className="text-xl font-black mt-1">Transforming Indian Patient Care Nationwide</div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
                ABDM Compliance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-6">
                Ayushman Bharat & Data Privacy Ready
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you run a multi-specialty hospital chain or an online diagnostic startup, our software ensures smooth integration with the National Health Authority (NHA) framework and zero downtime.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "ABHA ID Generation & Milestone 1, 2, 3 Integration",
                  "Encrypted E-Prescription Delivery on WhatsApp",
                  "Consent Management & Patient Data Ownership",
                  "Multi-Lingual Patient Interfaces (Hindi, English, etc.)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Clinical Software Desk</div>
                  <div className="font-extrabold text-slate-900 text-lg">+91 87965 30323</div>
                </div>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-sm font-bold transition-all shadow-md">
                    Book HealthTech Demo
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
          <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 p-8 sm:p-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Empower Your Medical Practice with Smart Technology
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base mb-8">
              Let's build a telemedicine app, diagnostic platform, or clinic management system that physicians and patients love.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+918796530323"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
              </a>
              <a 
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20Healthcare%20platform."
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
                Inquire HealthTech Project
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
