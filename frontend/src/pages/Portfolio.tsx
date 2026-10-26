import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  HeartPulse, 
  QrCode, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  PhoneCall, 
  Sparkles, 
  X, 
  Activity,
  CheckCircle2,
  Zap,
  Smartphone,
  Stethoscope,
  Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
  const [activeModal, setActiveModal] = useState<'pulsencare' | 'menusqr' | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Subtle Tech Pattern & Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-blue-50/80 via-emerald-50/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* HERO SECTION (Minimal, Punchy & Clean White)              */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052FF] text-xs font-bold mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>Featured Production Products</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
          >
            Products We've{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] via-[#0084FF] to-[#00C6FF]">
              Engineered.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-500 font-normal"
          >
            Two flagship platforms built for real-world impact and high performance.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* ATTRACTIVE MINIMAL PRODUCT CARDS (2 Columns)              */}
        {/* ========================================================= */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          
          {/* ======================================================= */}
          {/* PRODUCT CARD 1: PULSENCARE (HEALTHCARE)                 */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.14)] hover:border-emerald-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Product Visual Area with Floating Live Overlays */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80" 
                  alt="PulseNCare Telemedicine" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5" />
                    Digital Health
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/95 text-emerald-800 text-xs font-bold shadow-md flex items-center gap-1.5 border border-emerald-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    ABDM Certified
                  </span>
                </div>

                {/* Floating Live ECG Wave Pill */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
                  <div className="text-[11px] font-bold text-slate-800">
                    74 BPM <span className="text-emerald-600 font-semibold">• Live ECG</span>
                  </div>
                </div>

                {/* WhatsApp Rx Pill */}
                <div className="absolute bottom-4 right-4 bg-emerald-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Instant Rx</span>
                </div>
              </div>

              {/* Minimal Product Body */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold shadow-sm">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                      PulseNCare
                    </h3>
                    <p className="text-xs font-semibold text-slate-400">
                      Telehealth & Clinical Operating System
                    </p>
                  </div>
                </div>

                {/* 3 Bold Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 text-center">
                  <div>
                    <div className="text-lg font-black text-emerald-600">150k+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Consults</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-lg font-black text-[#0052FF]">&lt; 60ms</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Latency</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-lg font-black text-slate-800">4.9 ★</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Rating</div>
                  </div>
                </div>

                {/* Quick Feature Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {['WebRTC Video', 'ABHA ID Sync', 'WhatsApp Rx', 'IoT Vitals', 'FastAPI'].map((badge, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-100">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Compact Action Footer */}
            <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModal('pulsencare')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20PulseNCare."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* ======================================================= */}
          {/* PRODUCT CARD 2: MENUSQR (SMART QR DINING)               */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,82,255,0.14)] hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Product Visual Area with Real Image & Floating Laser Scanner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80" 
                  alt="MenuSQR Smart Dining" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0052FF] text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5" />
                    QR Dining & POS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/95 text-blue-800 text-xs font-bold shadow-md flex items-center gap-1.5 border border-blue-100">
                    <Smartphone className="w-3.5 h-3.5 text-[#0052FF]" />
                    PWA • Zero App Download
                  </span>
                </div>

                {/* Floating Animated Laser Scanner Simulation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl border-2 border-cyan-400/80 bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <QrCode className="w-12 h-12 text-white opacity-85" />
                  <motion.div 
                    animate={{ y: [-30, 30, -30] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(0,198,255,1)]"
                  />
                  <span className="absolute bottom-1 text-[8px] font-mono text-cyan-300 font-bold">
                    0.4s Scan
                  </span>
                </div>

                {/* Bill Paid Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <Zap className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>Table #12 • <strong className="text-emerald-600">₹700 UPI Paid</strong></span>
                </div>

                {/* KDS Synced Pill */}
                <div className="absolute bottom-4 right-4 bg-[#0052FF] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>KDS Synced</span>
                </div>
              </div>

              {/* Minimal Product Body */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] font-bold shadow-sm">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#0052FF] transition-colors">
                      MenuSQR
                    </h3>
                    <p className="text-xs font-semibold text-slate-400">
                      Contactless QR Ordering & Cloud POS
                    </p>
                  </div>
                </div>

                {/* 3 Bold Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 text-center">
                  <div>
                    <div className="text-lg font-black text-[#0052FF]">3.8x</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Turnover</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-lg font-black text-slate-800">500+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Outlets</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-lg font-black text-emerald-600">₹24 Cr+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">UPI Paid</div>
                  </div>
                </div>

                {/* Quick Feature Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {['Instant PWA', '1-Click UPI', 'WebSockets', 'Kitchen KDS', 'Next.js 14'].map((badge, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 text-[11px] font-bold border border-blue-100">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Compact Action Footer */}
            <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModal('menusqr')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0052FF] text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20MenuSQR."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE DETAIL MODALS (Clean Minimal Light Theme)      */}
        {/* ========================================================= */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-200 relative text-left"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {activeModal === 'pulsencare' ? (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                      <HeartPulse className="w-4 h-4" /> Healthcare Overview
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      PulseNCare — Telemedicine & ABDM Clinic Infrastructure
                    </h3>

                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                      ⚡ Impact: 150,000+ Consultations • ABDM M1-M3 Certified • 4.9★ Doctor Rating
                    </div>

                    <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                      <p>
                        <strong>The Challenge:</strong> Rural and regional clinics faced constant video disconnects on weak 3G/4G networks and required immediate Ayushman Bharat Digital Mission (ABDM) integration.
                      </p>
                      <p>
                        <strong>Our Solution:</strong> Qevnaro engineered an ultra-low-bandwidth WebRTC video core (&lt; 80kbps), automated ABHA health card creation, and instant WhatsApp e-prescription dispatch.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['React Native', 'WebRTC', 'Python FastAPI', 'PostgreSQL', 'ABHA API', 'AWS'].map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Ready to build your HealthTech app?</span>
                      <a
                        href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20PulseNCare."
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0052FF] uppercase tracking-wider">
                      <QrCode className="w-4 h-4" /> Hospitality Overview
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      MenuSQR — QR Ordering & Table-Side UPI Settlements
                    </h3>

                    <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                      ⚡ Impact: 3.8x Faster Table Turnover • 500+ Outlets • ₹24 Cr+ Settled in UPI Orders
                    </div>

                    <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                      <p>
                        <strong>The Challenge:</strong> Busy dining outlets suffered from 25-minute menu and billing wait times, high waiter overheads, and lost orders during peak hours.
                      </p>
                      <p>
                        <strong>Our Solution:</strong> Built a 400ms instant PWA (zero app download required), WebSockets kitchen display sync, and 1-click table-side UPI payments.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Next.js 14', 'WebSockets', 'Node.js', 'Redis', 'Razorpay UPI', 'PostgreSQL'].map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Interested in deploying MenuSQR?</span>
                      <a
                        href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20MenuSQR."
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#0052FF] hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ========================================================= */}
        {/* BOTTOM ACTION STRIP                                       */}
        {/* ========================================================= */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Want to Build a Product Like PulseNCare or MenuSQR?
          </h3>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Speak directly with our technical team to discuss architecture, timelines, and costs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="tel:+918796530323"
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-[#0052FF] text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call +91 87965 30323
            </a>
            <a 
              href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20build%20a%20product."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
            <Link 
              to="/contact"
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 text-xs font-bold transition-all"
            >
              Start Project
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
