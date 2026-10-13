import { motion, type Variants } from 'framer-motion';
import { 
  ShoppingCart, 
  Zap, 
  ShoppingBag, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Tag, 
  Smartphone, 
  PhoneCall, 
  MessageCircle, 
  TrendingUp, 
  Layers, 
  BarChart3
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

const retailCapabilities = [
  {
    icon: ShoppingBag,
    title: "Headless D2C Storefronts",
    desc: "Blazing fast Next.js & Shopify Plus storefronts achieving sub-second page loads, higher Google Lighthouse scores, and 2.5x conversions."
  },
  {
    icon: Truck,
    title: "Quick-Commerce & Dark Store Tech",
    desc: "10-30 minute hyper-local delivery apps with geofencing, route optimization, real-time rider dispatch, and inventory sync."
  },
  {
    icon: Layers,
    title: "ONDC Network Integration",
    desc: "Connect your catalog seamlessly to the Open Network for Digital Commerce (ONDC) to expand reach across millions of Indian buyers."
  },
  {
    icon: Smartphone,
    title: "WhatsApp Conversational Commerce",
    desc: "Turn WhatsApp into your primary revenue channel with automated catalog browsing, 1-click UPI checkout, and automated shipping updates."
  },
  {
    icon: Tag,
    title: "Omnichannel Inventory Management",
    desc: "Unify stock across physical retail POS, Amazon, Flipkart, Myntra, and your direct website with zero overselling risk."
  },
  {
    icon: BarChart3,
    title: "Customer Retention & AI Upselling",
    desc: "Personalized product recommendation engines, abandoned cart recovery sequences, and loyalty tier programs that boost LTV by 45%."
  }
];

export function RetailEcommerce() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ========================================================= */}
      {/* HERO SECTION (Dark Tech Theme)                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A0F1C] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Retail, D2C & Modern Commerce</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6"
              >
                High-Conversion{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-[#00C6FF]">
                  E-Commerce Systems.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
              >
                We build headless storefronts, hyper-local delivery apps, and multi-channel inventory engines built to scale sales across Bharat and the globe.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all flex items-center gap-2 group">
                    Scale Your Store <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20build%20an%20E-Commerce%20platform." 
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
                    <div className="text-xs text-slate-400">Omnichannel Revenue Monitor</div>
                    <div className="text-2xl font-black text-white mt-1">₹ 1,84,320 / day <span className="text-xs text-emerald-400 font-bold ml-2">↑ 34% conv.</span></div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                    D2C
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">ONDC & Marketplace Sync</div>
                      <div className="text-xs text-slate-400">Amazon • Flipkart • Myntra live feeds</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">SYNCED</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">WhatsApp 1-Click Checkout</div>
                      <div className="text-xs text-slate-400">Pre-filled UPI intent linking</div>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">98.2% drop-off drop</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Storefront Page Load</div>
                      <div className="text-xs text-slate-400">Global edge caching CDN</div>
                    </div>
                    <div className="text-xs font-mono text-orange-400 font-bold">0.68s Core Web Vitals</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
                  <span>Shiprocket & Delhivery Integrated</span>
                  <span className="text-orange-400 font-semibold">COD & UPI Fraud Guard</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
              E-Commerce Engines
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
              Built to Turn Casual Visitors into Lifetime Buyers
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We design robust backend systems capable of handling massive flash sales, Diwali traffic spikes, and lightning-fast logistics.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {retailCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
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
              {/* Indian retail & warehouse / e-commerce context */}
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80" 
                alt="Indian E-Commerce logistics and fulfillment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs uppercase font-bold text-orange-400">Bharat E-Commerce</div>
                  <div className="text-xl font-black mt-1">Powering D2C Giants & Modern Retailers</div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
                Logistics & Payment Agility
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-6">
                Tailored for the Indian Consumer Journey
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                From Cash-on-Delivery (COD) fraud verification to automated RTO (Return to Origin) reduction algorithms, we build features specifically engineered for Indian marketplace economics.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Automated COD confirmation via WhatsApp OTP",
                  "Deep integration with Delhivery, Shiprocket & BlueDart",
                  "Razorpay Magic Checkout & Cashfree 1-step UPI",
                  "Multi-warehouse regional dispatch optimization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">E-Commerce Strategy Desk</div>
                  <div className="font-extrabold text-slate-900 text-lg">+91 87965 30323</div>
                </div>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-sm font-bold transition-all shadow-md">
                    Discuss Store Architecture
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
          <div className="rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 p-8 sm:p-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Ready to Accelerate Your Online Sales Growth?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base mb-8">
              Whether migrating from a sluggish store or architecting a custom multi-vendor marketplace, talk to our commerce architects today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+918796530323"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
              </a>
              <a 
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20want%20to%20discuss%20an%20E-Commerce%20project."
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
                Request Commerce Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
