import { motion, type Variants } from 'framer-motion';
import { 
  Factory, 
  Layers, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  PhoneCall, 
  MessageCircle, 
  Network, 
  Boxes, 
  Workflow
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

const manufacturingCapabilities = [
  {
    icon: Network,
    title: "Industrial IoT (IIoT) & Telemetry",
    desc: "Connect factory floor PLCs, sensors, and machines with MQTT & WebSockets to monitor overall equipment effectiveness (OEE) in real-time."
  },
  {
    icon: Wrench,
    title: "AI Predictive Maintenance",
    desc: "Machine learning models detecting vibration anomalies and heat spikes before catastrophic machine failure occurs, slashing downtime by 40%."
  },
  {
    icon: Boxes,
    title: "Smart Inventory & Raw Material ERP",
    desc: "Automated Bill of Materials (BOM) management, barcode/RFID tracking, and just-in-time procurement alerts to eliminate production halts."
  },
  {
    icon: Workflow,
    title: "Supply Chain & Multi-Plant Visibility",
    desc: "Track vendor fulfillment, warehouse dispatches, transit GPS, and raw material shipments across multiple Indian manufacturing plants."
  },
  {
    icon: ShieldAlert,
    title: "Quality Assurance & Computer Vision",
    desc: "Automated optical inspection systems flagging product defects on high-speed conveyor belts with sub-millimeter precision."
  },
  {
    icon: Layers,
    title: "Digital Twin & Workflow Simulation",
    desc: "Virtual replica models of factory assembly lines to simulate capacity constraints and optimize operator throughput."
  }
];

export function Manufacturing() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ========================================================= */}
      {/* HERO SECTION (Dark Tech Theme)                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A0F1C] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
              >
                <Factory className="w-4 h-4" />
                <span>Industry 4.0 & Smart Manufacturing</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4"
              >
                Intelligent Automation for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-[#0052FF]">
                  Smart Factories.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
              >
                Connect shop-floor IoT sensors, optimize assembly line uptime, and gain end-to-end supply chain clarity with enterprise-grade industrial software.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-[#0052FF] text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 group">
                    Deploy Smart Factory <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20Manufacturing%20IoT%20project." 
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
                    <div className="text-xs text-slate-400">Plant 04 • Pune Industrial Hub</div>
                    <div className="text-2xl font-black text-white mt-1">OEE: 91.4% <span className="text-xs text-emerald-400 font-bold ml-2">↑ Optimal Output</span></div>
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                    IIoT LIVE
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Line 2 Robotic Assembly</div>
                      <div className="text-xs text-slate-400">PLC telemetry synced every 200ms</div>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Predictive Health Score</div>
                      <div className="text-xs text-slate-400">Zero vibration anomalies detected</div>
                    </div>
                    <div className="text-sm font-bold text-emerald-400">99.8% OK</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Raw Material Reorder Trigger</div>
                      <div className="text-xs text-slate-400">Automated ERP purchase order</div>
                    </div>
                    <span className="text-xs font-bold text-cyan-300">AUTO-QUEUED</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
                  <span>MQTT & Modbus Supported</span>
                  <span className="text-cyan-400 font-semibold">Make In India Aligned</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Industry 4.0 Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
              Modernizing Production Lines & Supply Logistics
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We bridge traditional hardware with modern cloud architectures to provide real-time operational intelligence.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {manufacturingCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
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
      {/* INDIAN MANUFACTURING & CASE STUDY                         */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] bg-slate-900">
              {/* Indian manufacturing / smart industrial plant context */}
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                alt="Smart Manufacturing Plant with Engineers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs uppercase font-bold text-cyan-400">Make in India • Industry 4.0</div>
                  <div className="text-xl font-black mt-1">Driving Industrial Efficiency Across Bharat</div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Operational Excellence
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
                Prevent Costly Production Halts with Smart Tech
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether manufacturing automotive components, textiles, pharmaceuticals, or consumer electronics, our custom software gives plant managers full visibility across every shift.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Live OEE calculation across individual operators and machines",
                  "Automated dispatch challan & GST e-way bill generation",
                  "Mobile alerts via WhatsApp for critical maintenance thresholds",
                  "Edge computing gateways resilient to intermittent internet"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Industrial Tech Consultation</div>
                  <div className="font-extrabold text-slate-900 text-lg">+91 87965 30323</div>
                </div>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition-all shadow-md">
                    Schedule Plant Tech Audit
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
          <div className="rounded-3xl bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50 border border-cyan-200/80 p-8 sm:p-14">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Digitize Your Manufacturing Operations Today
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base mb-8">
              Speak with our automation and software architects to explore IIoT monitoring, ERP workflows, or computer vision quality inspection.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+918796530323"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
              </a>
              <a 
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20a%20Manufacturing%20software%20project."
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
                Inquire Automation Scope
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
