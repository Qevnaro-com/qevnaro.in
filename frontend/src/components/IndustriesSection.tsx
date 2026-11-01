import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { Button } from './ui/Button';
import { EASE } from '../lib/motion';

interface Industry {
  slug: string;
  name: string;
  line: string;
  challenge: string;
  solution: string;
  channels: string[];
  help: string;
}

const INDUSTRIES: Industry[] = [
  {
    slug: 'healthcare', name: 'Healthcare', line: 'Clear, trustworthy digital front doors.',
    challenge: 'Patients and families need to find providers, understand services and book without friction, often from a phone.',
    solution: 'Accessible websites, booking flows, patient-facing portals and informational content written in plain language.',
    channels: ['Local SEO', 'Google Ads', 'WhatsApp', 'Web portals'],
    help: 'We have built a home-care platform ourselves (Pulse n Care) and understand the importance of clarity and trust. We follow platform ad policies and never make medical claims.',
  },
  {
    slug: 'education', name: 'Education', line: 'Help learners find and enrol with confidence.',
    challenge: 'Institutions compete for attention in short admission windows, and prospective students compare many options online.',
    solution: 'Course and admissions sites, enquiry funnels, learning portals and content that explains programmes clearly.',
    channels: ['SEO', 'Meta Ads', 'Email', 'CRM follow-up'],
    help: 'We connect enquiry forms to follow-up workflows so admissions teams respond quickly and consistently.',
  },
  {
    slug: 'real-estate', name: 'Real Estate', line: 'Present properties and capture serious leads.',
    challenge: 'Buyers browse many listings; teams struggle to separate genuine enquiries from casual clicks.',
    solution: 'Listing sites, project landing pages, virtual presentation, lead capture and automated first response.',
    channels: ['Google Ads', 'Meta Ads', 'Local SEO', 'WhatsApp'],
    help: 'We build landing pages and lead pipelines so site visits turn into trackable conversations for your sales team.',
  },
  {
    slug: 'ecommerce-retail', name: 'E-commerce & Retail', line: 'Stores that load fast and convert.',
    challenge: 'Rising ad costs, abandoned carts and crowded categories make it hard to grow profitably.',
    solution: 'Storefront builds, product-page optimisation, catalogue SEO, retention email and performance campaigns.',
    channels: ['Shopping ads', 'Meta Ads', 'E-commerce SEO', 'Email'],
    help: 'We focus on the full path from product page to repeat purchase, with analytics set up so decisions rest on data.',
  },
  {
    slug: 'saas-technology', name: 'SaaS & Technology', line: 'Product-grade sites and growth for software teams.',
    challenge: 'Technical products are hard to explain, and long sales cycles need steady, relevant content.',
    solution: 'Marketing sites, docs and app front ends, product storytelling, SEO content and demo-request funnels.',
    channels: ['Content', 'Technical SEO', 'LinkedIn', 'Email'],
    help: 'Our engineering background means we can work comfortably with your product, APIs and design system.',
  },
  {
    slug: 'hospitality', name: 'Hospitality', line: 'Fill tables and rooms with less manual work.',
    challenge: 'Menus, offers and availability change daily, and guests expect quick, mobile-friendly experiences.',
    solution: 'QR menus and ordering, booking pages, local search presence and social content that shows the experience.',
    channels: ['Local SEO', 'Instagram', 'Google Business Profile', 'QR ordering'],
    help: 'We built MenuSQR, a QR ordering platform, so we know the day-to-day realities of restaurant operations.',
  },
  {
    slug: 'professional-services', name: 'Professional Services', line: 'Credibility online, before the first call.',
    challenge: 'Clients choose on trust, and expertise is hard to show on a generic website.',
    solution: 'Authority-focused sites, thought-leadership content, lead-generation campaigns and intake automation.',
    channels: ['SEO', 'LinkedIn', 'Google Ads', 'Email'],
    help: 'We help present your expertise clearly and keep communications compliant with the standards of your profession.',
  },
];

export const IndustriesSection: React.FC = () => {
  const [open, setOpen] = useState<string>(INDUSTRIES[0].slug);

  const hoverOpen = (slug: string) => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) setOpen(slug);
  };

  return (
    <section className="relative border-b border-line bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Eyebrow>Industries</Eyebrow>
            <SplitHeading
              as="h2"
              text="Digital Solutions Built Around Your Industry."
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl"
            />
          </div>
          <Reveal delay={0.1}>
            <Button to="/industries" variant="ghost">All industries</Button>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {INDUSTRIES.map((ind, i) => {
            const on = open === ind.slug;
            return (
              <div
                key={ind.slug}
                className="border-b border-line"
                onMouseEnter={() => hoverOpen(ind.slug)}
              >
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`ind-${ind.slug}`}
                  onClick={() => setOpen(on ? '' : ind.slug)}
                  className="group flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
                >
                  <span className={`font-mono text-xs transition-colors ${on ? 'text-brand-sky' : 'text-fg-muted'}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={`flex-1 text-2xl font-medium tracking-tight transition-all duration-500 sm:text-4xl lg:text-5xl ${on ? 'translate-x-2 text-fg' : 'text-fg-muted group-hover:text-fg-soft'}`}>
                    {ind.name}
                  </span>
                  <span className="hidden text-sm text-fg-muted md:block">{ind.line}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${on ? 'rotate-45 border-brand-sky bg-brand-blue/20 text-brand-sky' : 'border-line-strong text-fg-muted'}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      id={`ind-${ind.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 pl-0 sm:pl-14 lg:grid-cols-12 lg:gap-12">
                        <div className="space-y-6 lg:col-span-7">
                          <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">Common challenge</div>
                            <p className="mt-2 text-sm leading-relaxed text-fg-soft sm:text-base">{ind.challenge}</p>
                          </div>
                          <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">What we build</div>
                            <p className="mt-2 text-sm leading-relaxed text-fg-soft sm:text-base">{ind.solution}</p>
                          </div>
                          <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">How we help</div>
                            <p className="mt-2 text-sm leading-relaxed text-fg-soft sm:text-base">{ind.help}</p>
                          </div>
                        </div>
                        <div className="lg:col-span-5">
                          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">Typical channels</div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {ind.channels.map((c) => (
                              <span key={c} className="rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-xs text-fg-soft">{c}</span>
                            ))}
                          </div>
                          <Link to={`/industries/${ind.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-sky transition-all hover:gap-3">
                            {ind.name} solutions <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
