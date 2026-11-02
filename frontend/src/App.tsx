import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Home is eager for fast initial paint; all other routes are code-split
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then(m => ({ default: m.About || m.default })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers || m.default })));
const Contact = lazy(() => import('./pages/Contact'));
const Work = lazy(() => import('./pages/Work').then(m => ({ default: m.Work || m.default })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process || m.default })));
const Insights = lazy(() => import('./pages/Insights'));
const InsightArticle = lazy(() => import('./pages/InsightArticle').then(m => ({ default: m.InsightArticle || m.default })));
const NotFound = lazy(() => import('./pages/NotFound'));

const PulseNCareCaseStudy = lazy(() => import('./pages/case-studies/PulseNCareCaseStudy'));
const MenuSQRCaseStudy = lazy(() => import('./pages/case-studies/MenuSQRCaseStudy'));

const PrivacyPolicy = lazy(() => import('./pages/legal/Privacy'));
const TermsAndConditions = lazy(() => import('./pages/legal/Terms'));
const CookiesPolicy = lazy(() => import('./pages/legal/Cookies'));

const IndustriesIndex = lazy(() => import('./pages/industries/IndustriesIndex'));
const IndustryPage = lazy(() => import('./pages/industries/IndustryPage').then(m => ({ default: m.IndustryPage || m.default })));

const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview').then(m => ({ default: m.ServicesOverview || m.default })));
const SERVICE_PAGES: Record<string, ReturnType<typeof lazy>> = {
  'web-development': lazy(() => import('./pages/services/WebDevelopment')),
  'mobile-app-development': lazy(() => import('./pages/services/MobileAppDevelopment')),
  'ecommerce-development': lazy(() => import('./pages/services/EcommerceDevelopment')),
  'ui-ux-design': lazy(() => import('./pages/services/UiUxDesign')),
  'digital-marketing': lazy(() => import('./pages/services/DigitalMarketing')),
  'social-media-marketing': lazy(() => import('./pages/services/SocialMediaMarketing')),
  seo: lazy(() => import('./pages/services/SEO')),
  'geo-aeo': lazy(() => import('./pages/services/GeoAeo')),
  'performance-marketing': lazy(() => import('./pages/services/PerformanceMarketing')),
  branding: lazy(() => import('./pages/services/Branding')),
  'content-marketing': lazy(() => import('./pages/services/ContentMarketing')),
  'video-creative-production': lazy(() => import('./pages/services/VideoProduction')),
  'email-marketing': lazy(() => import('./pages/services/EmailMarketing')),
  'marketing-automation': lazy(() => import('./pages/services/MarketingAutomation')),
  'ai-automation': lazy(() => import('./pages/services/AiAutomation')),
  'chatbots-agents': lazy(() => import('./pages/services/ChatbotsAgents')),
  'cloud-devops': lazy(() => import('./pages/services/CloudDevops')),
};

const REDIRECTS: [string, string][] = [
  ['/services/app-development', '/services/mobile-app-development'],
  ['/services/social-media', '/services/social-media-marketing'],
  ['/services/ui-design', '/services/ui-ux-design'],
  ['/solutions/e-commerce', '/services/ecommerce-development'],
  ['/solutions/lead-generation', '/services/performance-marketing'],
  ['/solutions/brand-identity', '/services/branding'],
  ['/portfolio', '/work'],
  ['/case-studies/pulsencare', '/work/pulsencare'],
  ['/case-studies/menusqr', '/work/menusqr'],
  ['/industries/edtech', '/industries/education'],
  ['/industries/retail-ecommerce', '/industries/ecommerce-retail'],
  ['/industries/manufacturing', '/industries/manufacturing-b2b'],
  ['/industries/fintech', '/industries/finance-consulting'],
];

/** Inertial smooth scrolling (disabled for reduced-motion users). */
function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const RouteFallback = () => (
  <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading page">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-line-strong border-t-brand-blue" />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process />} />

            <Route path="/work" element={<Work />} />
            <Route path="/work/pulsencare" element={<PulseNCareCaseStudy />} />
            <Route path="/work/menusqr" element={<MenuSQRCaseStudy />} />

            <Route path="/services" element={<ServicesOverview />} />
            {Object.entries(SERVICE_PAGES).map(([slug, Page]) => (
              <Route key={slug} path={`/services/${slug}`} element={<Page />} />
            ))}

            <Route path="/industries" element={<IndustriesIndex />} />
            <Route path="/industries/:slug" element={<IndustryPage />} />

            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />

            {REDIRECTS.map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <SmoothScroll />
        <ScrollProgress />
        <ScrollToTop />
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <AnimatePresence>
          {isLoading && <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        <div
          className={`flex min-h-screen flex-col bg-ink font-sans text-fg ${
            isLoading ? 'h-screen overflow-hidden pointer-events-none' : ''
          }`}
        >
          <Navbar />
          <main id="main" className="flex-grow">
            <ErrorBoundary>
              <AnimatedRoutes />
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;
