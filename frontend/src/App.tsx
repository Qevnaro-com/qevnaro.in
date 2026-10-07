import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';

import { WebDevelopment } from './pages/services/WebDevelopment';
import { AppDevelopment } from './pages/services/AppDevelopment';
import { SocialMedia } from './pages/services/SocialMedia';
import { DigitalMarketing } from './pages/services/DigitalMarketing';
import { ECommerce } from './pages/solutions/ECommerce';
import { LeadGeneration } from './pages/solutions/LeadGeneration';
import { BrandIdentity } from './pages/solutions/BrandIdentity';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-light font-sans text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/solutions/e-commerce" element={<ECommerce />} />
            <Route path="/solutions/lead-generation" element={<LeadGeneration />} />
            <Route path="/solutions/brand-identity" element={<BrandIdentity />} />
            {/* You can add more routes here for Services, Contact, etc. */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
