import { motion } from 'framer-motion';
import { Quote, ArrowRight, Star, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    quote: "Qevnaro completely transformed our UPI payment gateway and cloud infrastructure. Their architecture reduced our transaction latency by 42% and seamlessly handled over 3 lakh orders during the Diwali rush with zero downtime.",
    name: "Rajesh Malhotra",
    role: "Chief Technology Officer",
    company: "PaisaTrack FinTech",
    location: "Bengaluru, Karnataka",
    metric: "42% Faster Payments",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Building an ABDM-compliant telemedicine portal in 8 weeks felt impossible until we partnered with Qevnaro. Our doctors across Tier-2 & Tier-3 cities in Maharashtra now conduct HD video consults and send instant WhatsApp e-prescriptions.",
    name: "Dr. Pooja Kulkarni",
    role: "Founder & Managing Director",
    company: "AarogyaFirst Health",
    location: "Mumbai, Maharashtra",
    metric: "ABDM Ready in 8 Wks",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "We partnered with Qevnaro for our shop-floor inventory and industrial IoT tracking. Their custom software gave our plant managers real-time visibility across 4 factories, cutting raw material wastage by 26% in the very first quarter.",
    name: "Vikram Singhania",
    role: "VP Operations & Supply Chain",
    company: "BharatSteel Industries",
    location: "Gurugram, Haryana",
    metric: "26% Wastage Reduced",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0052FF] text-xs font-bold tracking-wider uppercase mb-3"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Client Success Stories • 4.9/5 Rating</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight"
            >
              Trusted by Ambitious{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00C6FF]">
                Indian Businesses.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 mt-4 max-w-xl text-base leading-relaxed"
            >
              Hear directly from founders, CTOs, and leaders across Bharat on how our custom engineering transformed their operations.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 text-sm font-bold shadow-sm hover:shadow transition-all group"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4 text-[#0052FF] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const isHighlighted = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`p-8 rounded-3xl relative flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted 
                    ? 'bg-[#0A1128] text-white shadow-2xl border border-blue-900/50' 
                    : 'bg-white text-slate-800 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-200'
                }`}
              >
                <div>
                  {/* Top Row: Stars + Metric Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-amber-400 text-amber-400" 
                        />
                      ))}
                    </div>

                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      isHighlighted 
                        ? 'bg-blue-500/20 text-[#00C6FF] border-blue-400/30' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {story.metric}
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className={`w-8 h-8 opacity-25 ${isHighlighted ? 'text-white' : 'text-[#0052FF]'}`} />
                  </div>

                  {/* Quote Text */}
                  <p className={`text-sm sm:text-[15px] leading-relaxed mb-8 font-normal ${
                    isHighlighted ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    "{story.quote}"
                  </p>
                </div>
                
                {/* Author Info */}
                <div className={`pt-6 border-t flex items-center gap-4 ${
                  isHighlighted ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <div className="relative shrink-0">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-13 h-13 rounded-full object-cover border-2 border-[#0052FF]/30 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-white" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h4 className={`font-bold text-base truncate ${isHighlighted ? 'text-white' : 'text-slate-900'}`}>
                      {story.name}
                    </h4>
                    <p className={`text-xs truncate font-medium ${isHighlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      {story.role} • <span className="font-semibold text-[#0052FF]">{story.company}</span>
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{story.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Stat Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-around gap-6 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0052FF]">99.4%</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">On-Time Project Delivery</div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0F172A]">150+</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Indian Startups & Brands</div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">Zero</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Security Breaches Reported</div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0052FF]">24/7</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">India-Based Engineering Support</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
