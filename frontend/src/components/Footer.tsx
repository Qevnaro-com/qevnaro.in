import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { QevnaroLogo } from './common/QevnaroLogo';
import { Button } from './ui/Button';
import { site, whatsappLink } from '../lib/site';

const YEAR = new Date().getFullYear();

const COMPANY = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Our Work' },
  { to: '/industries', label: 'Industries' },
  { to: '/process', label: 'Process' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

const SERVICES = [
  { to: '/services/web-development', label: 'Web Development' },
  { to: '/services/mobile-app-development', label: 'App Development' },
  { to: '/services/digital-marketing', label: 'Digital Marketing' },
  { to: '/services/seo', label: 'SEO' },
  { to: '/services/geo-aeo', label: 'GEO / AEO' },
  { to: '/services/social-media-marketing', label: 'Social Media' },
  { to: '/services/branding', label: 'Branding' },
  { to: '/services/ai-automation', label: 'AI Automation' },
];

const SOCIALS: { key: keyof typeof site.social; label: string; path: string }[] = [
  { key: 'linkedin', label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
  { key: 'instagram', label: 'Instagram', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm5.5-1.5h.01' },
  { key: 'x', label: 'X', path: 'M4 4l16 16M20 4L4 20' },
  { key: 'youtube', label: 'YouTube', path: 'M2 12c0-3 .3-4.6 1-5.4C4 5.5 6 5.3 12 5.3s8 .2 9 1.3c.7.8 1 2.4 1 5.4s-.3 4.6-1 5.4c-1 1.1-3 1.3-9 1.3s-8-.2-9-1.3c-.7-.8-1-2.4-1-5.4zM10 9l5 3-5 3z' },
];

const colTitle = 'mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sky';
const linkCls = 'text-sm text-fg-soft transition-colors hover:text-white';

export const Footer: React.FC = () => {
  const wa = whatsappLink();
  const socials = SOCIALS.filter((s) => site.social[s.key]);

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-surface">
      {/* CTA band */}
      <div className="relative border-b border-white/[0.08]">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-8 sm:py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
          <h2 className="max-w-2xl font-display text-2xl font-medium leading-tight text-fg sm:text-4xl">
            Build better. <span className="text-brand-sky italic font-normal">Grow smarter.</span> Move forward.
          </h2>
          <Button to="/contact">Start a project</Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Qevnaro home" className="mb-5 inline-flex"><QevnaroLogo tone="dark" markSize={40} /></Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-fg-soft">
              A technology, creative and digital growth partner. We build websites and apps, grow search and social visibility, and automate the work that slows businesses down.
            </p>
            {socials.length > 0 && (
              <ul className="flex gap-2">
                {socials.map((s) => (
                  <li key={s.key}>
                    <a href={site.social[s.key]} target="_blank" rel="noreferrer" aria-label={s.label}
                       className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-fg-soft transition-all hover:border-brand-blue hover:bg-brand-blue/15 hover:text-white">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={s.path} /></svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <h3 className={colTitle}>Company</h3>
            <ul className="space-y-3">{COMPANY.map((l) => <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>)}</ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <h3 className={colTitle}>Services</h3>
            <ul className="space-y-3">{SERVICES.map((l) => <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>)}</ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className={colTitle}>Contact</h3>
            <ul className="space-y-4 text-sm text-fg-soft">
              {site.email && <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-sky" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>}
              {site.phone && <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand-sky" /><a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a></li>}
              {wa && <li className="flex gap-3"><MessageCircle className="mt-0.5 h-4 w-4 text-brand-sky" /><a href={wa} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp us</a></li>}
              {site.address && <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-sky" /><span>{site.address}</span></li>}
              <li>
                <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-white hover:text-brand-sky">
                  Send us an enquiry →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-fg-muted sm:flex-row sm:items-center">
          <p>© {YEAR} Qevnaro. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link to="/cookies-policy" className="hover:text-white">Cookie Policy</Link></li>
          </ul>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 transition-colors hover:border-brand-blue hover:text-white"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
