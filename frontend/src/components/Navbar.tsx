import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
      { name: 'Finance & Fintech', href: '#' },
      { name: 'Healthcare', href: '#' },
      { name: 'Retail & E-Commerce', href: '#' },
      { name: 'Real Estate', href: '#' }
    ] 
  },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },

];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  
  const location = useLocation();
  const isLightPage = location.pathname === '/about';
  const shouldBeDarkText = isScrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors ${
                isScrolled ? 'text-[#0F172A]' : 'text-white'
              }`}
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden absolute top-full left-0 w-full shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50 last:border-0">
                  <div 
                    className="flex justify-between items-center px-3 py-4 text-base font-medium text-gray-800 hover:text-[#0052FF] cursor-pointer"
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
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === link.name ? 'rotate-180 text-[#0052FF]' : 'text-gray-400'}`} />
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {link.dropdown && activeMobileDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-[#F8FAFC] rounded-lg mx-2 mb-2 overflow-hidden"
                      >
                        {link.dropdown.map(subItem => (
                          <Link 
                            key={subItem.name} 
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-6 py-3 text-sm text-gray-600 hover:text-[#0052FF] border-b border-gray-100 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-6 px-3">
                <button className="w-full bg-[#0052FF] text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
