import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Preloader } from './components/Preloader';

import { WebDevelopment } from './pages/services/WebDevelopment';
import { AppDevelopment } from './pages/services/AppDevelopment';
import { SocialMedia } from './pages/services/SocialMedia';
import { DigitalMarketing } from './pages/services/DigitalMarketing';

import { ECommerce } from './pages/solutions/ECommerce';
import { LeadGeneration } from './pages/solutions/LeadGeneration';
import { BrandIdentity } from './pages/solutions/BrandIdentity';

// Industries
import { Fintech } from './pages/industries/Fintech';
import { Healthcare } from './pages/industries/Healthcare';
import { RetailEcommerce } from './pages/industries/RetailEcommerce';
import { RealEstate } from './pages/industries/RealEstate';
import { Manufacturing } from './pages/industries/Manufacturing';
import { EdTech } from './pages/industries/EdTech';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {/* Animated Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main App Content - reveals after loader is done */}
      <div 
        className={`min-h-screen bg-white font-sans text-slate-900 flex flex-col transition-opacity duration-1000 ${
          isLoading ? 'opacity-0 h-screen overflow-hidden pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            
            {/* Solutions */}
            <Route path="/solutions/e-commerce" element={<ECommerce />} />
            <Route path="/solutions/lead-generation" element={<LeadGeneration />} />
            <Route path="/solutions/brand-identity" element={<BrandIdentity />} />

            {/* Industries */}
            <Route path="/industries/fintech" element={<Fintech />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/edtech" element={<EdTech />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
