import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, SplitHeading, Eyebrow } from './ui/Reveal';
import { Button } from './ui/Button';
import { EASE, viewport } from '../lib/motion';

const ROWS = [
  { n: '01', title: 'Business websites', desc: 'Fast, clear sites that explain what you do and turn visitors into enquiries.', href: '/services/web-development' },
  { n: '02', title: 'Web & mobile apps', desc: 'Custom portals, platforms and apps built around how your team and customers work.', href: '/services/mobile-app-development' },
  { n: '03', title: 'Brands that hold together', desc: 'Identity, logo and creative systems that look consistent everywhere you show up.', href: '/services/branding' },
  { n: '04', title: 'Lead generation', desc: 'Paid campaigns and landing pages tuned to bring in qualified conversations.', href: '/services/performance-marketing' },
  { n: '05', title: 'Organic search', desc: 'Technical, on-page and content SEO so the right people find you on Google.', href: '/services/seo' },
  { n: '06', title: 'AI-search visibility', desc: 'Structure your content so answer engines can understand and cite your business.', href: '/services/geo-aeo' },
  { n: '07', title: 'Social media', desc: 'Planned content and community management that keeps your brand active.', href: '/services/social-media-marketing' },
  { n: '08', title: 'Workflow automation', desc: 'Connect forms, CRM, messaging and AI to remove repetitive manual work.', href: '/services/marketing-automation' },
];

export const AgencyIntro: React.FC = () => (
  <section className="relative border-b border-white/[0.08] bg-ink py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Editorial left */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Who we are</Eyebrow>
            <SplitHeading
              as="h2"
              text="One Partner. Multiple Ways to Move Your Business Forward."
              className="mt-4 text-3xl font-medium leading-[1.08] tracking-tight text-fg sm:text-4xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-fg-soft">
                Qevnaro is a digital agency that designs, builds and grows. We work with startups, growing
                businesses and established teams who are tired of juggling separate vendors for their website,
                marketing, branding and software.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                The usual problems: a site that does not generate enquiries, ads that spend without learning,
                a brand that looks different on every channel, and manual processes that eat the week. We
                handle them together, so strategy, design, engineering and marketing pull in the same direction.
              </p>
            </Reveal>

            <motion.figure
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: EASE }}
              className="group relative mt-6 overflow-hidden rounded-xl border border-white/[0.08]"
            >
              <div className="aspect-[16/9]">
                <img
                  src="/assets/banners/qevnaro-hero-spatial-banner.jpg"
                  alt="Abstract spatial visual representing connected digital services"
                  width={1376}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-soft">
                Strategy / Design / Engineering / Growth
              </figcaption>
            </motion.figure>

            <Reveal delay={0.15} className="mt-6">
              <Button to="/about" variant="ghost">About Qevnaro</Button>
            </Reveal>
          </div>
        </div>

        {/* Rows right */}
        <motion.ul
          className="lg:col-span-7"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {ROWS.map((r) => (
            <motion.li
              key={r.n}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="border-t border-white/[0.08] last:border-b"
            >
              <Link to={r.href} className="group relative flex items-start gap-4 py-5 sm:gap-6 sm:py-6">
                <span className="absolute inset-y-0 -inset-x-3 -z-10 rounded-xl bg-white/[0.02] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <span className="pt-1 font-mono text-xs text-brand-sky/70">{r.n}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-medium tracking-tight text-fg transition-transform duration-200 group-hover:translate-x-1 sm:text-xl">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-fg-muted transition-colors duration-200 group-hover:text-fg-soft">
                    {r.desc}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-fg-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-sky" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  </section>
);

export default AgencyIntro;
