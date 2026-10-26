import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, PhoneCall, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const navLinks = [
  { 
    name: 'Services', 
    href: '/#services', 
    dropdown: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'App Development', href: '/services/app-development' },
      { name: 'Social Media', href: '/services/social-media' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' }
    ] 
  },
  { 
    name: 'Solutions', 
    href: '/#solutions', 
    dropdown: [
      { name: 'E-Commerce Solutions', href: '/solutions/e-commerce' },
      { name: 'Lead Generation', href: '/solutions/lead-generation' },
      { name: 'Brand Identity', href: '/solutions/brand-identity' }
    ] 
  },
  { 
    name: 'Industries', 
    href: '/#industries', 
    dropdown: [
      { name: 'Finance & Fintech', href: '/industries/fintech' },
      { name: 'Healthcare & MedTech', href: '/industries/healthcare' },
      { name: 'Retail & E-Commerce', href: '/industries/retail-ecommerce' },
      { name: 'Real Estate & PropTech', href: '/industries/real-estate' },
      { name: 'Smart Manufacturing', href: '/industries/manufacturing' },
      { name: 'EdTech & Learning', href: '/industries/edtech' }
    ] 
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },

];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  
  const shouldBeDarkText = true;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="transition-all duration-300">
              <img 
                src="/logo-qevnaro.png" 
                alt="Qevnaro Logo" 
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative">
            {navLinks.map((link) => (
              <div key={link.name} className="group py-4">
                <Link
                  to={link.href}
                  className={`flex items-center gap-1.5 font-medium transition-colors text-[15px] ${
                    shouldBeDarkText 
                      ? 'text-gray-700 hover:text-[#0052FF]' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-colors ${
                      shouldBeDarkText ? 'text-gray-400 group-hover:text-[#0052FF]' : 'text-gray-400 group-hover:text-white'
                    }`} />
                  )}
                </Link>
                
                {/* Desktop Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-[100%] left-auto pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-3 min-w-[220px] overflow-hidden">
                      {link.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.href}
                          className="flex items-center justify-between px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0052FF] hover:bg-[#F8FAFC] transition-colors group/item"
                        >
                          {subItem.name}
                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#0052FF]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 82, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden px-6 py-2.5 rounded-lg font-bold shadow-md transition-all group ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-[#0052FF] to-[#00C6FF] text-white' 
                    : 'bg-white text-[#0052FF] hover:bg-gray-50'
                }`}
              >
                <span className="relative z-10">Contact Us</span>
                {isScrolled && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ['-150%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                  />
                )}
              </motion.button>
            </Link>
          </div>

          {/* Animated Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-[60] relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 focus:outline-none flex flex-col justify-center items-center gap-[5px] bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 shadow-sm relative overflow-hidden transition-colors"
            >
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 bg-[#0F172A] rounded-full origin-center transition-all"
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className="block h-[2px] w-5 bg-[#0F172A] rounded-full transition-all"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 bg-[#0F172A] rounded-full origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[45] bg-white md:hidden overflow-y-auto"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-[80px] opacity-70 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-50 rounded-full blur-[80px] opacity-70 -z-10"></div>

            <div className="pt-28 px-6 pb-12 flex flex-col min-h-screen relative z-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.name} 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, ease: "easeOut" }}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <div 
                      className="flex justify-between items-center text-2xl font-black text-[#0F172A] cursor-pointer"
                      onClick={() => {
                        if (link.dropdown) {
                          setActiveMobileDropdown(activeMobileDropdown === link.name ? null : link.name);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {link.dropdown ? (
                        <span>{link.name}</span>
                      ) : (
                        <Link to={link.href} className="w-full" onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
                      )}
                      {link.dropdown && (
                        <motion.div
                          animate={{ rotate: activeMobileDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gray-50 p-2 rounded-full"
                        >
                          <ChevronDown className="w-5 h-5 text-[#0052FF]" />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {link.dropdown && activeMobileDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-5 pl-5 border-l-2 border-[#0052FF]/20 flex flex-col gap-5"
                        >
                          {link.dropdown.map((subItem, j) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.05 }}
                            >
                              <Link 
                                to={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-lg font-medium text-gray-500 hover:text-[#0052FF]"
                              >
                                {subItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 mt-auto space-y-4"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-[#0052FF] to-[#00C6FF] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex justify-center items-center gap-2">
                    Start a Project <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
                  <div className="flex gap-2">
                    <a
                      href="tel:+918796530323"
                      className="flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#0052FF]" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/918796530323?text=Hi%20Qevnaro%20Team%2C%20let%27s%20connect."
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  <a
                    href="mailto:qevnaro@gmail.com"
                    className="py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>qevnaro@gmail.com</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
