import { motion } from 'framer-motion';
import { useState } from 'react';
import { LineChart, HeartPulse, Factory, ShoppingCart, Building, BookOpen, ArrowRight } from 'lucide-react';

const industries = [
  { 
    id: 1,
    icon: LineChart, 
    title: 'Finance & Fintech', 
    desc: 'Secure platforms for seamless financial growth and management.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 2,
    icon: HeartPulse, 
    title: 'Healthcare', 
    desc: 'HIPAA-compliant systems for modern telemedicine and data.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 3,
    icon: Factory, 
    title: 'Manufacturing', 
    desc: 'Automated workflows and tracking for smart factories.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 4,
    icon: ShoppingCart, 
    title: 'E-Commerce', 
    desc: 'Scalable storefronts driving massive online sales conversions.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 5,
    icon: Building, 
    title: 'Real Estate', 
    desc: 'Digital property platforms and virtual touring experiences.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 6,
    icon: BookOpen, 
    title: 'EdTech', 
    desc: 'Interactive learning management systems and virtual classrooms.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200'
  },
];

export const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="py-16 bg-white overflow-hidden" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-[#0052FF] uppercase mb-2"
          >
            Global Reach
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight"
          >
            Industries We Empower
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Hover over the cards to explore how our tailored solutions drive innovation across diverse sectors worldwide.
          </p>
        </div>
        
        {/* Expanding Cards Layout - Fixed Height to prevent layout jumping */}
        <div className="flex flex-col lg:flex-row h-[70vh] lg:h-[500px] gap-2 w-full">
          {industries.map((item, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <motion.div
                key={item.id}
                onHoverStart={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                layout
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 lg:flex-shrink ${
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
                <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/30 to-transparent' : 'bg-black/70'}`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-end">
                  <div className={`flex items-center gap-3 mb-3 transition-all duration-300 ${!isActive && 'lg:mb-10'}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/20 transition-colors duration-300 ${isActive ? 'bg-[#0052FF] text-white' : 'bg-white/10 text-white'}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    
                    {/* Vertical Title (when collapsed on desktop) */}
                    {!isActive && (
                      <h3 className="hidden lg:block absolute left-7 bottom-32 -rotate-90 origin-left text-base font-bold text-white whitespace-nowrap opacity-60 tracking-wider">
                        {item.title}
                      </h3>
                    )}
                  </div>

                  {/* Active Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'}`}>
                    <h3 className={`text-xl lg:text-3xl font-bold text-white mb-2 ${!isActive && 'lg:hidden'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-slate-300 text-xs lg:text-sm max-w-sm mb-4 leading-relaxed ${!isActive && 'hidden'}`}>
                      {item.desc}
                    </p>
                    <motion.div 
                      className={`inline-flex items-center gap-2 text-white font-semibold text-xs lg:text-sm hover:text-[#00C6FF] transition-colors ${!isActive && 'hidden'}`}
                    >
                      Explore Case Studies <ArrowRight className="w-4 h-4" />
                    </motion.div>
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
