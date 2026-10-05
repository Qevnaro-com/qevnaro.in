import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket, Shield, Code, Smartphone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'About Us', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
];

const services = [
  { name: 'Custom Software', icon: Code, desc: 'Tailored solutions for your business.' },
  { name: 'Cybersecurity', icon: Shield, desc: 'Protecting your digital assets.' },
  { name: 'Cloud Migration', icon: Rocket, desc: 'Seamlessly move to the cloud.' },
  { name: 'Mobile Apps', icon: Smartphone, desc: 'Next-gen iOS and Android apps.' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="#0C1C36" strokeWidth="8"/>
                <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="#2E6EFE"/>
              </svg>
            </div>
            <span className={`text-2xl font-bold tracking-wider text-brand-navy`}>
              QEVNARO
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 font-medium hover:text-brand-blue transition-colors text-gray-800`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[400px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                      >
                        <div className="grid grid-cols-2 p-4 gap-4">
                          {services.map((service) => (
                            <a key={service.name} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                              <div className="p-2 bg-blue-50 text-brand-blue rounded-lg group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                                <service.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-brand-navy text-sm">{service.name}</h4>
                                <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-navy text-white px-6 py-2.5 rounded-full font-medium shadow-md shadow-brand-navy/20 hover:bg-brand-blue transition-colors"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-navy p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brand-blue rounded-md transition-colors border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-6 px-3">
                <button className="w-full bg-brand-navy text-white px-4 py-3 rounded-xl font-medium shadow-sm hover:bg-brand-blue transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
