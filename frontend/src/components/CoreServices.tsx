import { motion, type Variants } from 'framer-motion';
import { LayoutTemplate, Smartphone, Share2, Megaphone, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  { icon: LayoutTemplate, title: 'Web Development', desc: 'Custom, responsive, and high-performance websites built for conversions.', color: 'text-blue-600', bg: 'bg-blue-50', hover: 'group-hover:bg-blue-600 group-hover:text-white', link: '/services/web-development' },
  { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform mobile applications that users love to engage with.', color: 'text-indigo-600', bg: 'bg-indigo-50', hover: 'group-hover:bg-indigo-600 group-hover:text-white', link: '/services/app-development' },
  { icon: Share2, title: 'Social Media Management', desc: 'Strategic content creation and community management to grow your brand organically.', color: 'text-pink-600', bg: 'bg-pink-50', hover: 'group-hover:bg-pink-600 group-hover:text-white', link: '/services/social-media' },
  { icon: Megaphone, title: 'Digital Marketing & Ads', desc: 'Targeted ad campaigns on Google and Meta to maximize your ROI and generate leads.', color: 'text-orange-600', bg: 'bg-orange-50', hover: 'group-hover:bg-orange-600 group-hover:text-white', link: '/services/digital-marketing' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

export const CoreServices = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white border-b border-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-[#0052FF] uppercase mb-3"
            >
              Our Capabilities
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight"
            >
              End-to-End IT Solutions for <br className="hidden md:block" />Modern Enterprises.
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:border-[#0052FF] hover:text-[#0052FF] transition-colors">
              View All Services
            </button>
          </motion.div>
        </div>
        
        {/* Compact & Refined Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => {
                if (service.link !== '#') {
                  navigate(service.link);
                  window.scrollTo(0, 0);
                }
              }}
              className="group relative bg-[#F8FAFC] rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer border border-transparent hover:border-slate-200"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${service.bg} ${service.color} ${service.hover}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-slate-100">
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0052FF]" />
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
