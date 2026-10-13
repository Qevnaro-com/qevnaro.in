import { motion, type Variants } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Compass, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Key, 
  PhoneCall, 
  MessageCircle, 
  FileCheck, 
  BarChart, 
  Users2
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

const proptechCapabilities = [
  {
    icon: Compass,
    title: "3D Virtual Tours & Interactive Maps",
    desc: "WebGL & Three.js 360-degree walkthroughs, floor-plan navigators, and drone aerial viewing that boost buyer inquiries by 3x."
  },
  {
    icon: Users2,
    title: "Builder CRM & Channel Partner Apps",
    desc: "Automated broker commissioning, lead attribution, site visit scheduling, and WhatsApp status updates for real estate sales teams."
  },
  {
    icon: FileCheck,
    title: "RERA Compliance & Digital Bookings",
    desc: "Automated RERA document hosting, online token payment collection via UPI, and digital e-signature generation for agreement forms."
  },
  {
    icon: MapPin,
    title: "Hyper-Local Property Portals",
    desc: "Dynamic search with GIS mapping, neighborhood transit scores, school ratings, and price trend analytics across Indian metro hubs."
  },
  {
    icon: Key,
    title: "Rental & Society Management (ERP)",
    desc: "Tenant verification tracking, maintenance billing automation, gatekeeper visitor logs, and facility amenity reservations."
  },
  {
    icon: BarChart,
    title: "Real Estate Analytics & Yield Tools",
    desc: "Custom ROI calculators, mortgage loan comparison engines, and predictive property valuation heatmaps."
  }
];

export function RealEstate() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ========================================================= */}
      {/* HERO SECTION (Dark Tech Theme)                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A0F1C] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
              >
                <Building className="w-4 h-4" />
                <span>PropTech & Real Estate Engineering</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6"
              >
                Immersive Digital Platforms for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-[#00C6FF]">
                  Real Estate.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
              >
                Transform property discovery and developer sales with 3D walkthroughs, lead routing CRMs, and RERA-compliant digital booking portals.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-[#0052FF] text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all flex items-center gap-2 group">
                    Build PropTech Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20Real%20Estate%20software%20project." 
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
                    <div className="text-xs text-slate-400">Developer Project Dashboard</div>
                    <div className="text-2xl font-black text-white mt-1">CyberCity Heights, Gurgaon</div>
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold">
                    RERA REGISTERED
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">3D Virtual Interactive Walkthrough</div>
                      <div className="text-xs text-slate-400">4K WebGL 360° Living Room & Balcony</div>
                    </div>
                    <Eye className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Site Visits Scheduled This Week</div>
                      <div className="text-xs text-slate-400">Automated WhatsApp Reminders</div>
                    </div>
                    <div className="text-sm font-bold text-emerald-400">128 Visits (+42%)</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Online Token Booking Engine</div>
                      <div className="text-xs text-slate-400">Instant UPI ₹50,000 reservation lock</div>
                    </div>
                    <div className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">ACTIVE</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
                  <span>Channel Partner Attribution: 100%</span>
                  <span className="text-indigo-400 font-semibold">Zero Lead Leakage</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
              PropTech Modules
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
              Comprehensive Real Estate Software Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Designed for luxury builders, commercial real estate developers, co-working operators, and modern property brokerages.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {proptechCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
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
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Real Estate Development in India" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs uppercase font-bold text-cyan-300">Indian Real Estate Boom</div>
                  <div className="text-xl font-black mt-1">Digitizing High-Value Property Transactions</div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                Speed & Transparency
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-6">
                Turn Casual Browsers into In-Person Site Visits
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Indian buyers research properties online before ever speaking to an agent. We build immersive web experiences that establish credibility and automate lead nurturing from day one.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Interactive 3D unit selector with live availability status",
                  "Automated WhatsApp lead alerts directly to sales executives",
                  "RERA compliance documentation and carpet area disclosures",
                  "Integrated home loan eligibility calculators (SBI, HDFC, ICICI)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">PropTech Consultation Desk</div>
                  <div className="font-extrabold text-slate-900 text-lg">+91 87965 30323</div>
                </div>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-sm font-bold transition-all shadow-md">
                    Schedule Real Estate Demo
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
          <div className="rounded-3xl bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border border-indigo-200/80 p-8 sm:p-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Accelerate Your Property Bookings with Modern Tech
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base mb-8">
              Whether building an enterprise builder CRM, a 3D virtual tour experience, or a regional brokerage app, talk to our PropTech specialists.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+918796530323"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
              </a>
              <a 
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20PropTech%20project."
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
                Inquire Project Scope
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
