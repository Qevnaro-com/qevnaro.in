import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#081225] text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="#2E6EFE" strokeWidth="8"/>
                <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="#2E6EFE"/>
              </svg>
              <span className="text-2xl font-bold text-white tracking-wider">QEVNARO</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the digital transformation with innovative IT solutions, custom software, and robust cloud architectures for enterprises globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors text-xs font-bold">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors text-xs font-bold">TW</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors text-xs font-bold">IN</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors text-xs font-bold">IG</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Custom Software</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Mobile Applications</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <span>123 Tech Boulevard, Innovation District, Tech City, TC 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <span>hello@qevnaro.in</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Qevnaro IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
