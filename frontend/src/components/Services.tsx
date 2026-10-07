
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, ShieldCheck, CloudLightning, Database, Bot } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailor-made, scalable software solutions designed specifically for your business logic and operational needs.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Web & Mobile Apps',
    description: 'Stunning, high-performance web and mobile applications providing seamless experiences across all devices.',
    icon: MonitorSmartphone,
    color: 'from-brand-blue to-purple-500'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Robust, secure, and highly available cloud architectures leveraging AWS, Azure, and Google Cloud.',
    icon: CloudLightning,
    color: 'from-orange-400 to-pink-500'
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security protocols and penetration testing to keep your data safe from modern threats.',
    icon: ShieldCheck,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Data Analytics & BI',
    description: 'Turn your raw data into actionable insights with our advanced business intelligence solutions.',
    icon: Database,
    color: 'from-brand-navy to-blue-600'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Automate processes and unlock new capabilities with cutting-edge AI integrations and predictive models.',
    icon: Bot,
    color: 'from-indigo-500 to-purple-600'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
              Solutions that Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Growth</span>
            </h3>
            <p className="text-gray-600 text-lg">
              From conception to deployment, we provide end-to-end technology solutions that empower your business to stay ahead in a rapidly evolving digital landscape.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-brand-light rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full -mr-8 -mt-8" />
              
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h4 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
