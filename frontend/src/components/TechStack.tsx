import { motion } from 'framer-motion';

// Tech stack split into two rows for visual interest
const row1 = [
  "React & Next.js", "Node.js", "Flutter", "React Native", 
  "Tailwind CSS", "WordPress", "Shopify", "Figma", "Firebase"
];

const row2 = [
  "Google Ads", "Meta Ads", "SEO Optimization", "Google Analytics", 
  "Hootsuite", "Canva", "Mailchimp", "HubSpot", "Social Media Management"
];

export const TechStack = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-gray-100 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center relative z-10">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Powered by Modern Technology</h3>
        <p className="text-sm font-medium text-slate-500">
          We leverage the best-in-class tools to build robust ecosystems.
        </p>
      </div>
      
      <div className="relative flex flex-col gap-6 overflow-x-hidden z-10">
        
        {/* Gradients on edges for smooth fade out */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 - Moving Left */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-8 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        >
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <div 
              key={`r1-${index}`} 
              className="flex items-center justify-center px-8 py-4 bg-white rounded-2xl shadow-sm border border-slate-200/60 hover:border-[#0052FF]/30 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-2 h-2 rounded-full bg-[#00C6FF] mr-3 group-hover:scale-150 transition-transform"></div>
              <span className="text-lg font-bold text-slate-700 group-hover:text-[#0052FF] transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moving Right */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-8 w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        >
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <div 
              key={`r2-${index}`} 
              className="flex items-center justify-center px-8 py-4 bg-white rounded-2xl shadow-sm border border-slate-200/60 hover:border-purple-500/30 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 group-hover:scale-150 transition-transform"></div>
              <span className="text-lg font-bold text-slate-700 group-hover:text-purple-600 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
