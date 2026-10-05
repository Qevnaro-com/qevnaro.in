
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL', 'REST APIs']
  },
  {
    title: 'Database & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes']
  }
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Technologies</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Powered by Modern <br/> Tech Stack
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              We leverage the latest and most robust technologies to build scalable, secure, and lightning-fast applications for our enterprise clients.
            </p>
            <button className="bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/30">
              View Architecture
            </button>
          </motion.div>

          <div className="space-y-6">
            {techCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-white font-semibold text-lg mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 bg-white/10 text-gray-300 rounded-full text-sm font-medium border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
