import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const stories = [
  {
    quote: "QEVNARO completely transformed our legacy infrastructure. Their cloud migration strategy was flawless, resulting in a 40% reduction in our operational costs and zero downtime.",
    name: "Sarah Jenkins",
    role: "CTO, FinTrust Bank",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The cybersecurity implementation provided by the QEVNARO team saved us from a massive potential breach. Their 24/7 monitoring and response time is absolutely unmatched.",
    name: "David Chen",
    role: "VP of Engineering, HealthSync",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "We partnered with them for a complete digital modernization of our manufacturing workflow. The custom software they built increased our factory throughput by 25%.",
    name: "Elena Rodriguez",
    role: "Operations Director, NexaMotors",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const SuccessStories = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight"
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mt-4 max-w-lg"
            >
              See how we've helped leading organizations overcome their toughest technological challenges.
            </motion.p>
          </div>
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#0052FF] font-semibold hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            See all stories <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 rounded-3xl relative ${
                index === 0 
                  ? 'bg-[#0A1128] text-white shadow-xl' 
                  : 'bg-white text-slate-800 border border-slate-100 shadow-sm'
              }`}
            >
              <div className="mb-6">
                <Quote className={`w-10 h-10 opacity-20 ${index === 0 ? 'text-white' : 'text-[#0052FF]'}`} />
              </div>
              <p className={`text-sm md:text-base leading-relaxed mb-8 italic ${index === 0 ? 'text-slate-300' : 'text-slate-600'}`}>
                "{story.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0052FF]/20"
                />
                <div>
                  <h4 className={`font-bold ${index === 0 ? 'text-white' : 'text-slate-900'}`}>{story.name}</h4>
                  <p className={`text-xs ${index === 0 ? 'text-slate-400' : 'text-slate-500'}`}>{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
