import { motion } from 'framer-motion';
import { Headphones, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

const reasons = [
  { 
    icon: Headphones, 
    title: '24/7 Dedicated Support', 
    desc: 'Our engineering team is monitoring your systems around the clock. We resolve issues before you even notice them.',
    stat: '99.9%',
    statLabel: 'Uptime Guarantee'
  },
  { 
    icon: TrendingUp, 
    title: 'Infinite Scalability', 
    desc: 'Architectures designed to grow with you. From 100 to 10M users, your platform remains lightning fast.',
    stat: '10x',
    statLabel: 'Growth Capacity'
  },
  { 
    icon: Award, 
    title: 'Elite Expertise', 
    desc: 'Led by industry veterans. We bring decades of combined experience from top-tier tech companies to your project.',
    stat: '50+',
    statLabel: 'Tech Experts'
  },
];

export const WhyQevnaro = () => {
  return (
    <section className="py-16 relative bg-[#060D1E] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0052FF]/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FF]/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-10">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold tracking-widest uppercase mb-6"
            >
              The Qevnaro Advantage
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            >
              Why modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">enterprises</span> choose us.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              We don't just act as vendors; we partner with you to engineer scalable, secure, and future-proof digital ecosystems. Experience reliability like never before.
            </motion.p>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            {[
              "Agile Methodology", "Enterprise Security", "Cloud-Native", "24/7 Monitoring"
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#00C6FF]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", bounce: 0.4 }}
              className="relative group h-full"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#0052FF] to-[#00C6FF] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>
              
              <div className="relative h-full bg-[#0A1128] border border-slate-800 p-8 rounded-2xl flex flex-col items-start transition-all duration-500 group-hover:border-transparent group-hover:-translate-y-2">
                
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0052FF]/20 group-hover:border-[#0052FF]/50 transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-[#00C6FF]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                  {reason.desc}
                </p>
                
                {/* Embedded Stat */}
                <div className="w-full pt-6 border-t border-slate-800 flex items-center justify-between mt-auto">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    {reason.stat}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00C6FF]">
                    {reason.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
