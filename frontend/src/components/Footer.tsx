import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const socialLinks = [
  { 
    label: 'Facebook', 
    href: 'https://www.facebook.com', 
    icon: () => (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    )
  },
  { 
    label: 'Twitter', 
    href: 'https://twitter.com', 
    icon: () => (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
    )
  },
  { 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com', 
    icon: () => (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    )
  },
  { 
    label: 'Instagram', 
    href: 'https://www.instagram.com', 
    icon: () => (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    )
  },
];

export const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
      className="relative bg-[#050B14] text-white pt-24 pb-10 overflow-hidden border-t border-slate-800"
    >
      {/* Background Glows */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#0052FF]/50 to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.15, 0.28, 0.15], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0052FF]/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8 mb-16"
        >
          <motion.div variants={fadeInUp} className="col-span-2 lg:col-span-2 pr-0 lg:pr-12">
            <Link to="/" className="inline-flex items-center mb-6 group transition-all duration-300">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="rounded-2xl bg-white/95 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-1 ring-slate-200/80"
              >
                <img 
                  src="/logo-qevnaro.png" 
                  alt="Qevnaro Logo" 
                  className="h-12 md:h-14 w-auto object-contain drop-shadow-md" 
                />
              </motion.div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              We engineer high-performance, scalable, and visually stunning digital solutions tailored to convert visitors into loyal customers. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 rounded-full bg-[#0F172A] border border-slate-800 flex items-center justify-center hover:bg-[#0052FF] hover:border-[#0052FF] hover:shadow-[0_0_15px_rgba(0,82,255,0.4)] hover:text-white transition-all duration-300 text-slate-400"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><Link to="/services/web-development" className="hover:text-[#00C6FF] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] opacity-0 group-hover:opacity-100 transition-opacity"></span>Web Development</Link></li>
              <li><Link to="/services/app-development" className="hover:text-[#00C6FF] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] opacity-0 group-hover:opacity-100 transition-opacity"></span>App Development</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-[#00C6FF] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] opacity-0 group-hover:opacity-100 transition-opacity"></span>Digital Marketing</Link></li>
              <li><Link to="/services/social-media" className="hover:text-[#00C6FF] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] opacity-0 group-hover:opacity-100 transition-opacity"></span>Social Media</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><Link to="/about" className="hover:text-[#00C6FF] transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#00C6FF] transition-colors">Careers</Link></li>
              <li><Link to="/#success-stories" className="hover:text-[#00C6FF] transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-[#00C6FF] transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><span>Privacy Policy</span></li>
              <li><span>Terms of Service</span></li>
              <li><span>Cookie Policy</span></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} QEVNARO. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <span>English (US)</span>
            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
