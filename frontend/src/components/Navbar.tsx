import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  ChevronDown, ArrowUpRight, ArrowRight, Code2, Smartphone, ShoppingBag, Palette, TrendingUp, Search, Bot, Share2,
  Target, Sparkles, FileText, Video, Mail, Cpu, MessageSquare, Cloud, Workflow, Stethoscope, GraduationCap,
  Building2, Store, Layers, UtensilsCrossed, Briefcase, Menu, X, MessageCircle,
} from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { QevnaroLogo } from './common/QevnaroLogo';
import { Button } from './ui/Button';

type Icon = React.ComponentType<{ className?: string }>;
interface Item { name: string; desc: string; href: string; icon: Icon }

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: 'Digital Experience',
    items: [
      { name: 'Web Development', desc: 'Business sites & web apps', href: '/services/web-development', icon: Code2 },
      { name: 'Mobile Apps', desc: 'Native & cross-platform', href: '/services/mobile-app-development', icon: Smartphone },
      { name: 'E-commerce', desc: 'Shopify, WooCommerce, custom', href: '/services/ecommerce-development', icon: ShoppingBag },
      { name: 'UI/UX Design', desc: 'Research, prototypes, systems', href: '/services/ui-ux-design', icon: Palette },
    ],
  },
  {
    title: 'Digital Growth',
    items: [
      { name: 'Digital Marketing', desc: 'Full-funnel growth', href: '/services/digital-marketing', icon: TrendingUp },
      { name: 'SEO', desc: 'Technical, on-page & local', href: '/services/seo', icon: Search },
      { name: 'GEO / AEO', desc: 'Visibility in AI search', href: '/services/geo-aeo', icon: Bot },
      { name: 'Social Media', desc: 'Strategy, content & community', href: '/services/social-media-marketing', icon: Share2 },
      { name: 'Performance Marketing', desc: 'Google, Meta & LinkedIn ads', href: '/services/performance-marketing', icon: Target },
    ],
  },
  {
    title: 'Creative & Brand',
    items: [
      { name: 'Branding', desc: 'Identity & guidelines', href: '/services/branding', icon: Sparkles },
      { name: 'Content Marketing', desc: 'Strategy, copy & SEO content', href: '/services/content-marketing', icon: FileText },
      { name: 'Video Production', desc: 'Reels, brand & product video', href: '/services/video-creative-production', icon: Video },
      { name: 'Email & WhatsApp', desc: 'Nurture & retention flows', href: '/services/email-marketing', icon: Mail },
    ],
  },
  {
    title: 'Technology & Automation',
    items: [
      { name: 'AI Automation', desc: 'Workflows & document AI', href: '/services/ai-automation', icon: Cpu },
      { name: 'Chatbots & Agents', desc: 'RAG assistants, lead bots', href: '/services/chatbots-agents', icon: MessageSquare },
      { name: 'CRM & Workflow', desc: 'Marketing & CRM automation', href: '/services/marketing-automation', icon: Workflow },
      { name: 'Cloud & DevOps', desc: 'AWS/Azure, CI/CD, monitoring', href: '/services/cloud-devops', icon: Cloud },
    ],
  },
];

const INDUSTRIES: Item[] = [
  { name: 'Healthcare & Clinics', desc: 'Booking, local search, funnels', href: '/industries/healthcare', icon: Stethoscope },
  { name: 'Education & EdTech', desc: 'Admissions & learning platforms', href: '/industries/education', icon: GraduationCap },
  { name: 'Real Estate', desc: 'Listings & lead generation', href: '/industries/real-estate', icon: Building2 },
  { name: 'E-commerce & Retail', desc: 'D2C store growth', href: '/industries/ecommerce-retail', icon: Store },
  { name: 'SaaS & Technology', desc: 'Product-led growth sites', href: '/industries/saas-technology', icon: Layers },
  { name: 'Hospitality', desc: 'Ordering, bookings, brand', href: '/industries/hospitality', icon: UtensilsCrossed },
  { name: 'Professional Services', desc: 'B2B lead generation', href: '/industries/professional-services', icon: Briefcase },
];

const LINKS = [
  { to: '/work', label: 'Our Work' },
  { to: '/about', label: 'About Us' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
    isActive ? 'text-white' : 'text-fg-soft hover:text-white'
  }`;

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<'services' | 'industries' | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState<'services' | 'industries' | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close everything on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpen(null);
    setMobile(false);
    setMobileSection(null);
  }

  // lock body scroll when the mobile menu is open + Escape to close
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(null); setMobile(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [mobile]);

  // click outside closes mega menu
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  const hoverOpen = useCallback((k: 'services' | 'industries') => {
    window.clearTimeout(closeTimer.current);
    setOpen(k);
  }, []);
  const hoverClose = useCallback(() => {
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  }, []);

  const triggerCls = (active: boolean) =>
    `flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
      active ? 'text-white' : 'text-fg-soft hover:text-white'
    }`;

  const inServices = location.pathname.startsWith('/services');
  const inIndustries = location.pathname.startsWith('/industries');

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50">
      <div className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-6xl px-3 pt-3' : 'max-w-7xl px-4 pt-5 sm:px-6 lg:px-8'}`}>
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'rounded-full border border-line-strong bg-ink/80 px-5 py-2.5 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl'
              : 'rounded-full px-1 py-1'
          }`}
        >
          <Link to="/" aria-label="Qevnaro home" className="flex items-center">
            <QevnaroLogo tone="dark" markSize={scrolled ? 30 : 34} />
          </Link>

          {/* Desktop */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            <NavLink to="/" end className={linkCls}>
              {({ isActive }) => (<>{isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" />}Home</>)}
            </NavLink>

            {(['services', 'industries'] as const).map((k) => (
              <div key={k} className="relative" onMouseEnter={() => hoverOpen(k)} onMouseLeave={hoverClose}>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={open === k}
                  onClick={() => setOpen(open === k ? null : k)}
                  className={triggerCls(open === k || (k === 'services' ? inServices : inIndustries))}
                >
                  {k === 'services' ? 'Services' : 'Industries'}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open === k ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}

            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls}>
                {({ isActive }) => (<>{isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" />}{l.label}</>)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Let's Talk CTA */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-brand-blue via-[#2e74fe] to-[#1e5bee] border border-white/20 shadow-[0_4px_24px_-2px_rgba(46,110,254,0.6)] hover:shadow-[0_8px_32px_-2px_rgba(46,110,254,0.8)] transition-all active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Premium Mobile Compact CTA Pill */}
            <Link
              to="/contact"
              className="inline-flex lg:hidden items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-brand-blue via-[#2e74fe] to-[#1e5bee] text-white text-[11px] sm:text-xs font-bold tracking-wide shadow-[0_2px_18px_rgba(46,110,254,0.45)] border border-white/20 transition-all active:scale-95 shrink-0 whitespace-nowrap"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-3 w-3" />
            </Link>

            <button
              type="button"
              className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-line-strong bg-white/[0.04] text-fg hover:text-white lg:hidden transition-colors"
              aria-label={mobile ? 'Close menu' : 'Open menu'}
              aria-expanded={mobile}
              aria-controls="mobile-menu"
              onClick={() => setMobile((v) => !v)}
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mega panels */}
        <AnimatePresence>
          {open && (
            <motion.div
              key={open}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => hoverOpen(open)}
              onMouseLeave={hoverClose}
              className="absolute left-1/2 top-full mt-3 hidden w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[var(--radius-xl)] border border-line-strong bg-surface/95 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl lg:block"
            >
              <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-brand-blue/20 blur-[90px]" />
              {open === 'services' ? (
                <div className="relative grid grid-cols-4 gap-6 p-7">
                  {GROUPS.map((g) => (
                    <div key={g.title}>
                      <div className="mb-3 border-b border-line pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-sky">{g.title}</div>
                      <ul className="space-y-0.5">
                        {g.items.map((it) => (
                          <li key={it.href}>
                            <Link to={it.href} className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.06]">
                              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.04] text-brand-sky transition-colors group-hover:border-brand-blue/50 group-hover:bg-brand-blue/15">
                                <it.icon className="h-4 w-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-fg">{it.name}</span>
                                <span className="block text-xs leading-snug text-fg-muted">{it.desc}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link to="/services" className="group col-span-4 mt-1 flex items-center justify-between rounded-xl border border-line bg-white/[0.03] px-5 py-3 text-sm transition-colors hover:border-brand-blue/50">
                    <span className="text-fg-soft">Not sure where to start? <span className="font-semibold text-fg">Explore all services</span></span>
                    <ArrowUpRight className="h-4 w-4 text-brand-sky transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              ) : (
                <div className="relative grid grid-cols-12 gap-6 p-7">
                  <div className="col-span-4">
                    <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-sky">Industries</div>
                    <p className="mb-5 text-sm leading-relaxed text-fg-soft">Digital solutions built around how your industry actually buys, books and decides.</p>
                    <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-brand-sky">All industries <ArrowUpRight className="h-4 w-4" /></Link>
                  </div>
                  <ul className="col-span-8 grid grid-cols-2 gap-1">
                    {INDUSTRIES.map((it) => (
                      <li key={it.href}>
                        <Link to={it.href} className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.06]">
                          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.04] text-brand-sky group-hover:bg-brand-blue/15">
                            <it.icon className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold">{it.name}</span>
                            <span className="block text-xs text-fg-muted">{it.desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* scroll progress */}
      <motion.div className="absolute bottom-0 left-0 right-0 h-px origin-left bg-brand-blue/70" style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }} aria-hidden="true" />

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[-1] overflow-y-auto bg-ink pt-24 lg:hidden"
          >
            <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
            <motion.div
              className="relative mx-auto max-w-lg px-6 pb-16"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
            >
              {[{ to: '/', label: 'Home' }].map((l) => (
                <MobileRow key={l.to}><Link to={l.to} className="block py-4 font-display text-3xl font-bold">{l.label}</Link></MobileRow>
              ))}

              {(['services', 'industries'] as const).map((k) => (
                <MobileRow key={k}>
                  <button
                    type="button"
                    aria-expanded={mobileSection === k}
                    onClick={() => setMobileSection(mobileSection === k ? null : k)}
                    className="flex w-full items-center justify-between py-4 font-display text-3xl font-bold"
                  >
                    {k === 'services' ? 'Services' : 'Industries'}
                    <ChevronDown className={`h-6 w-6 text-brand-sky transition-transform ${mobileSection === k ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileSection === k && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="space-y-5 pb-4 pl-1">
                          {(k === 'services' ? GROUPS : [{ title: 'Industries', items: INDUSTRIES }]).map((g) => (
                            <div key={g.title}>
                              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-sky">{g.title}</div>
                              <ul className="space-y-1">
                                {g.items.map((it) => (
                                  <li key={it.href}>
                                    <Link to={it.href} className="flex items-center gap-3 rounded-lg py-2 text-fg-soft active:text-white">
                                      <it.icon className="h-4 w-4 text-brand-sky" /> {it.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <Link to={k === 'services' ? '/services' : '/industries'} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-sky">
                            View all <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MobileRow>
              ))}

              {LINKS.map((l) => (
                <MobileRow key={l.to}><Link to={l.to} className="block py-4 font-display text-3xl font-bold">{l.label}</Link></MobileRow>
              ))}

              <div className="pt-8 space-y-3">
                <Button to="/contact" size="md" className="w-full !py-3.5 text-sm font-bold shadow-[0_0_30px_rgba(46,110,254,0.45)]">
                  Let&apos;s Talk
                </Button>
                <a
                  href="https://wa.me/918796530323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 px-6 py-3.5 text-xs font-bold font-mono text-emerald-400 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4 fill-current text-emerald-400" />
                  <span>Chat on WhatsApp Directly</span>
                  <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                </a>
                <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] font-mono text-fg-muted">
                  <span>⚡ Direct line · Typical reply in &lt;15 mins</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MobileRow = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
    className="border-b border-line"
  >
    {children}
  </motion.div>
);

export default Navbar;
