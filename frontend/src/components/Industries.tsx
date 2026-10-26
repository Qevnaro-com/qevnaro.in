import { motion } from 'framer-motion';
import { useState } from 'react';
import { LineChart, HeartPulse, Factory, ShoppingCart, Building, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { 
    id: 1,
    icon: LineChart, 
    title: 'Finance & Fintech', 
    desc: 'Secure platforms for seamless financial growth and management.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200',
    link: '/industries/fintech'
  },
  { 
    id: 2,
    icon: HeartPulse, 
    title: 'Healthcare', 
    desc: 'HIPAA & ABDM compliant systems for modern telemedicine and clinical data.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    link: '/industries/healthcare'
  },
  { 
    id: 3,
    icon: Factory, 
    title: 'Manufacturing', 
    desc: 'Automated IIoT workflows and predictive tracking for smart factories.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    link: '/industries/manufacturing'
  },
  { 
    id: 4,
    icon: ShoppingCart, 
    title: 'E-Commerce', 
    desc: 'Scalable storefronts, ONDC integration, and automated quick commerce.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    link: '/industries/retail-ecommerce'
  },
  { 
    id: 5,
    icon: Building, 
    title: 'Real Estate', 
    desc: '3D virtual property tours, developer CRMs, and RERA-compliant portals.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    link: '/industries/real-estate'
  },
  { 
    id: 6,
    icon: BookOpen, 
    title: 'EdTech', 
    desc: 'Interactive LMS, live test series engines, and low-latency virtual classrooms.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    link: '/industries/edtech'
  },
];

export const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="py-20 bg-white overflow-hidden" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-[#0052FF] uppercase mb-2 bg-blue-50 inline-block px-3.5 py-1 rounded-full border border-blue-100"
          >
            Domain Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight"
          >
            Industries We Empower
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Hover over the sectors to explore our specialized tech architectures and dedicated industry solutions.
          </p>
        </div>
        
        {/* Expanding Cards Layout */}
        <div className="flex flex-col lg:flex-row h-[70vh] lg:h-[500px] gap-2.5 w-full">
          {industries.map((item, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <motion.div
                key={item.id}
                onHoverStart={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                layout
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 lg:flex-shrink transition-all ${
                  isActive ? 'lg:flex-[3] flex-[3]' : 'lg:flex-[1] flex-[1]'
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url(${item.image})`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)'
                  }}
                ></div>
                
                {/* Dark Overlay */}
                <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-gradient-to-t from-black/95 via-black/40 to-black/20' : 'bg-black/70'}`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-5 lg:p-7 flex flex-col justify-end">
                  <div className={`flex items-center gap-3 mb-3 transition-all duration-300 ${!isActive && 'lg:mb-10'}`}>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/20 transition-all duration-300 ${isActive ? 'bg-[#0052FF] text-white shadow-lg shadow-blue-500/40' : 'bg-white/10 text-white'}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    
                    {/* Vertical Title (when collapsed on desktop) */}
                    {!isActive && (
                      <h3 className="hidden lg:block absolute left-7 bottom-32 -rotate-90 origin-left text-base font-bold text-white whitespace-nowrap opacity-70 tracking-wider">
                        {item.title}
                      </h3>
                    )}
                  </div>

                  {/* Active Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'}`}>
                    <h3 className={`text-xl lg:text-3xl font-black text-white mb-2 ${!isActive && 'lg:hidden'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-slate-300 text-xs lg:text-sm max-w-sm mb-5 leading-relaxed ${!isActive && 'hidden'}`}>
                      {item.desc}
                    </p>
                    
                    <div className={!isActive ? 'hidden' : 'block'}>
                      <Link 
                        to={item.link}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 hover:bg-[#0052FF] text-white font-bold text-xs lg:text-sm border border-white/20 transition-all duration-300 backdrop-blur-sm group"
                      >
                        Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
