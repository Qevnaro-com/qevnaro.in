import { motion, type Variants } from 'framer-motion';
import { ShoppingCart, CreditCard, Package, BarChart3, Globe, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export function ECommerce() {
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
                <ShoppingCart className="w-4 h-4 text-[#00C6FF]" />
                <span className="tracking-wide">High-Converting E-Commerce</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Scale Your Store <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">Globally</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                We build headless commerce architectures, optimize checkout flows, and integrate intelligent inventory systems to turn your store into a revenue-generating machine.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                  Launch Your Store
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-slate-700/80 hover:border-slate-500 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  Explore Features
                </button>
              </motion.div>
            </div>

            {/* Shopping Cart & Analytics UI Animation */}
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
                {/* Main Store Dashboard Mockup */}
                <div className="bg-[#0F172A]/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-[0_0_50px_rgba(0,82,255,0.15)] overflow-hidden">
                  <div className="h-10 bg-[#1E293B] border-b border-slate-700 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="mx-auto bg-slate-800 rounded px-4 text-xs text-slate-400">mystore.com/admin</div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-end mb-6 border-b border-slate-800 pb-4">
                      <div>
                        <div className="text-slate-400 text-sm mb-1">Today's Revenue</div>
                        <div className="text-3xl font-black text-white">$12,450.00</div>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-xs font-bold">
                        <TrendingUp className="w-3 h-3" /> +24%
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Product Row 1 */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0052FF] to-[#00C6FF] flex items-center justify-center">
                            <Package className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">Premium Headphones</div>
                            <div className="text-xs text-slate-400">24 units sold</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-[#00C6FF]">$7,200.00</div>
                          <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-[10px] text-emerald-400 flex items-center justify-end gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Processing</motion.div>
                        </div>
                      </div>

                      {/* Product Row 2 */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                            <ShoppingCart className="w-6 h-6 text-slate-400" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">Smart Watch</div>
                            <div className="text-xs text-slate-400">12 units sold</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white">$3,599.00</div>
                          <div className="text-[10px] text-emerald-400 flex items-center justify-end gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Fulfilled</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Payment Widget */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ willChange: 'transform' }}
                  className="absolute -right-8 -bottom-6 bg-white p-4 rounded-xl shadow-[0_0_30px_rgba(0,82,255,0.2)] flex items-center gap-4 z-20"
                >
                  <div className="p-2 rounded-full bg-[#0052FF]/10 text-[#0052FF]">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Payment Processed</div>
                    <div className="text-lg font-black text-[#0052FF]">$399.00</div>
                  </div>
                </motion.div>
                
                {/* Floating Conversion Widget */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  style={{ willChange: 'transform' }}
                  className="absolute -left-10 top-20 bg-[#0F172A]/80 backdrop-blur-xl p-4 rounded-xl border border-[#0052FF]/50 shadow-[0_0_30px_rgba(0,198,255,0.3)] flex items-center gap-4 z-20"
                >
                  <div className="p-2 rounded-full bg-[#00C6FF] text-[#0F172A]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Cart Conversion</div>
                    <div className="text-lg font-black text-[#00C6FF]">4.2% Rate</div>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core E-commerce Capabilities */}
      <section className="py-24 relative z-10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Enterprise-Grade Commerce
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              We provide end-to-end e-commerce solutions, from frontend design to complex backend logic and payment integrations.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,82,255,0.06)] group"
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

      {/* Platforms & Integrations Marquee */}
      <section className="py-20 bg-white overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Platforms & Integrations We Expertly Handle</h3>
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
            {[...platforms, ...platforms, ...platforms].map((platform, idx) => (
              <div key={idx} className="flex items-center gap-3 px-8 py-4 bg-[#F8FAFC] border border-slate-200 rounded-2xl shadow-sm text-slate-700 font-bold text-xl hover:border-[#0052FF] hover:text-[#0052FF] transition-colors cursor-pointer">
                <div className="w-2.5 h-2.5 bg-[#0052FF] rounded-full"></div>
                {platform}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* E-Commerce Workflow Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">The Checkout Flow Optimization</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We optimize every step of the buyer's journey to reduce friction and increase sales.</p>
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
                  className="w-20 h-20 rounded-full bg-white border-[3px] border-slate-200 flex items-center justify-center mb-6 text-2xl font-black text-[#00C6FF] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#00C6FF] hover:shadow-[0_8px_30px_rgba(0,198,255,0.3)] transition-all duration-300"
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

const platforms = ["Shopify Plus", "WooCommerce", "Magento", "BigCommerce", "Stripe", "PayPal", "Klaviyo", "Algolia Search"];

const services = [
  {
    icon: ShoppingCart,
    title: "Headless Commerce",
    desc: "Decoupling frontend and backend using Next.js & Shopify/Saleor to create blazing-fast, custom shopping experiences.",
    gradient: "from-[#0052FF] to-blue-500"
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    desc: "Seamless integration with Stripe, PayPal, Razorpay, and Crypto gateways with one-click checkout functionalities.",
    gradient: "from-[#00C6FF] to-cyan-500"
  },
  {
    icon: Package,
    title: "Inventory & ERP Systems",
    desc: "Syncing your store with complex ERP systems for real-time inventory management, shipping, and fulfillment tracking.",
    gradient: "from-blue-600 to-[#0052FF]"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Setting up deep tracking, GA4 e-commerce events, and custom dashboards to monitor user behavior and LTV.",
    gradient: "from-[#0052FF] to-[#00C6FF]"
  },
  {
    icon: ShieldCheck,
    title: "PCI Compliance & Security",
    desc: "Ensuring top-tier security, fraud protection, and strict compliance with global payment standards.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Globe,
    title: "Multi-Currency & Global",
    desc: "Scaling your store globally with automatic currency conversion, localized content, and international shipping logic.",
    gradient: "from-[#00C6FF] to-[#0052FF]"
  }
];

const processSteps = [
  { title: "Discovery", desc: "Browsing products with lightning-fast Algolia-powered search and intuitive filters." },
  { title: "Cart Addition", desc: "Frictionless 'Add to Cart' mechanics with intelligent upsell and cross-sell triggers." },
  { title: "Checkout", desc: "A streamlined, single-page checkout process to heavily reduce cart abandonment rates." },
  { title: "Retention", desc: "Automated post-purchase email flows, loyalty rewards, and easy re-ordering." }
];
