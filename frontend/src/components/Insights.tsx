import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    title: 'How to Choose the Right Software Solution for Your Business',
    date: 'Nov 16, 2023',
    desc: 'Discover the key factors to consider when selecting enterprise software to drive efficiency.'
  },
  {
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
    title: 'New Tools, Connections and Technology Strategy',
    date: 'Nov 12, 2023',
    desc: 'Stay ahead of the curve with our guide on adopting the latest technological innovations.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    title: 'What Tech Insights Is Driven Towards In 2024',
    date: 'Aug 10, 2023',
    desc: 'An exploration of upcoming trends in cybersecurity, cloud infrastructure, and AI.'
  }
];

export const Insights = () => {
  return (
    <section className="py-16 bg-white" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0F172A]"
          >
            Latest Tech Insights
          </motion.h2>
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#0052FF] font-semibold hover:underline flex items-center gap-1"
          >
            See all <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-[#0052FF]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0052FF] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {post.desc}
              </p>
              <span className="text-xs font-semibold text-gray-400">
                {post.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
