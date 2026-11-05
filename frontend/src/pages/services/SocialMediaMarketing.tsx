import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Play, Heart, MessageCircle, Bookmark, Layers, Eye } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';
import { Eyebrow, SplitHeading } from '../../components/ui/Reveal';

const DATA: ServicePageData = {
  badge: 'Digital Marketing & Growth · Social Media',
  title: 'Social Media That Builds a Brand People Remember.',
  subtitle: 'Content creation, organic page management and paid social planned together, with a calendar, a consistent voice and reporting you can read.',
  slug: 'social-media-marketing',
  art: 'brand',
  icon: Share2,
  seoTitle: 'Social Media Marketing Services | Qevnaro',
  seoDescription: 'Social media content creation, page management and paid social campaigns for Instagram, Facebook, LinkedIn and YouTube with clear reporting.',
  overview: [
    'Social media works when a brand shows up consistently with something worth seeing. That takes a clear voice, a repeatable content system and a team that responds to the audience, not only a posting schedule.',
    'Qevnaro separates three jobs that are often blurred together: creating the content, managing the organic presence and running paid social. You can engage us for any one or combine them under a single plan.'
  ],
  whyNeeded: {
    heading: 'What social media does for a business',
    points: [
      { title: 'Visible credibility', desc: 'Prospects often check your profiles before they contact you. An active, coherent presence reassures them.' },
      { title: 'Audience relationships', desc: 'Comments, messages and community moments create trust that ads alone cannot.' },
      { title: 'Content that travels', desc: 'Short video, carousels and stories give audiences easy ways to share your work.' },
      { title: 'Precise paid reach', desc: 'Platform targeting lets you reach defined groups when organic reach is limited.' }
    ]
  },
  problemsSolved: [
    { title: 'Irregular posting', problem: 'Content appears in bursts and then disappears when the team is busy.', solution: 'A content calendar, batch production and approval workflow that keeps cadence steady.' },
    { title: 'Content with no point of view', problem: 'Generic posts do not distinguish the brand from competitors.', solution: 'Content pillars and a defined voice grounded in your real expertise and offers.' },
    { title: 'Followers that never become customers', problem: 'Engagement is not connected to enquiries or sales.', solution: 'Clear calls to action, link tracking and lead capture from social to site or WhatsApp.' }
  ],
  deliverables: [
    'Social account and competitor audit',
    'Content pillars and tone-of-voice guide',
    'Monthly content calendar',
    'Designed posts, carousels and stories',
    'Short-form video and reel production',
    'Caption writing and hashtag research',
    'Scheduled publishing across platforms',
    'Community management and comment responses',
    'Paid social campaign setup where selected',
    'Monthly analytics report with recommendations'
  ],
  subServices: [
    { title: 'Social media strategy', desc: 'Platform selection, audience definition, pillars and goals.' },
    { title: 'Content creation', desc: 'Graphics, carousels, reels and stories designed to your brand system.' },
    { title: 'Organic page management', desc: 'Scheduling, publishing, replying and keeping profiles current.' },
    { title: 'Instagram and Facebook marketing', desc: 'Feed, reels, stories and groups for consumer and local brands.' },
    { title: 'LinkedIn marketing', desc: 'Company page and thought-leadership content for B2B audiences.' },
    { title: 'YouTube channel support', desc: 'Channel setup, titles, thumbnails and publishing cadence.' },
    { title: 'Paid social campaigns', desc: 'Meta and LinkedIn ads for awareness, leads and retargeting.' },
    { title: 'Influencer and creator outreach', desc: 'Shortlisting and coordinating creators suited to your audience.' },
    { title: 'Social listening and community', desc: 'Monitoring mentions and handling messages and reviews.' },
    { title: 'Reporting and analytics', desc: 'Reach, engagement, clicks and conversions reviewed monthly.' }
  ],
  methodology: [
    { step: '01', title: 'Account audit', desc: 'We review profiles, past content, audience and competitors.' },
    { step: '02', title: 'Pillars and calendar', desc: 'Themes and a publishing plan are agreed before production.' },
    { step: '03', title: 'Create and publish', desc: 'Content is produced, approved and scheduled.' },
    { step: '04', title: 'Engage', desc: 'We respond to comments and messages within agreed hours.' },
    { step: '05', title: 'Analyse and report', desc: 'Performance is reviewed and next month is adjusted accordingly.' }
  ],
  toolsAndTech: [
    { category: 'Creation', items: ['Figma', 'Adobe Creative Suite', 'CapCut / Premiere', 'Canva for templates'] },
    { category: 'Publishing', items: ['Meta Business Suite', 'LinkedIn', 'Scheduling tools', 'YouTube Studio'] },
    { category: 'Analytics', items: ['Platform insights', 'UTM links', 'GA4', 'Looker Studio'] }
  ],
  whoNeedsThis: [
    'Consumer brands wanting a visible Instagram and Facebook presence',
    'B2B firms building authority on LinkedIn',
    'Restaurants, clinics and retailers with local audiences',
    'Founders who lack time to post consistently',
    'Brands launching a product that needs awareness',
    'Companies with followers but no clear route to leads'
  ],
  businessOutcomes: [
    { metric: 'Consistent', label: 'Presence', desc: 'Regular, on-brand publishing instead of occasional bursts.' },
    { metric: 'Engaged', label: 'Community', desc: 'Prompt responses that make followers feel heard.' },
    { metric: 'Accountable', label: 'Reporting', desc: 'Monthly insight into what content is working and why.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'Video and Creative Production', desc: 'Reels and brand video.', href: '/services/video-creative-production' },
    { title: 'Performance Marketing', desc: 'Scale winning content with ads.', href: '/services/performance-marketing' },
    { title: 'Branding', desc: 'A strong identity to post from.', href: '/services/branding' }
  ],
  faqs: [
    { q: 'Which platforms should my business be on?', a: 'We choose based on where your audience spends time and what content you can sustain. Fewer platforms done well beat many done poorly.' },
    { q: 'Do you need access to my accounts?', a: 'We work through business-level access such as Meta Business Suite so you keep ownership of your accounts.' },
    { q: 'Can I approve posts before they go live?', a: 'Yes. Our workflow includes a review step before scheduling.' },
    { q: 'Is ad budget included?', a: 'No. Paid social spend goes directly to the platform and is separate from our management fee unless agreed otherwise.' },
    { q: 'How do you handle negative comments?', a: 'We agree escalation rules in advance, respond politely where appropriate and flag serious issues to you.' }
  ],
  extraSections: [
    {
      eyebrow: 'Three different jobs',
      title: 'Content creation, organic management and paid social',
      intro: 'These are related but distinct. Knowing which you need prevents paying for work you will not use.',
      columns: [
        { title: 'Content creation', items: ['Designs, carousels and reels', 'Copywriting and captions', 'Brand-consistent templates', 'Delivered as ready-to-post assets'] },
        { title: 'Organic management', items: ['Calendar and scheduling', 'Publishing and profile upkeep', 'Comment and message responses', 'Monthly analytics'] },
        { title: 'Paid social', items: ['Audience targeting and budgets', 'Ad creative variations', 'Retargeting and lead forms', 'Ad spend billed by platform'] }
      ]
    }
  ]
};

const SampleSocialLayouts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'carousel' | 'reel' | 'infographic'>('carousel');

  return (
    <div>
      <div className="mb-10 max-w-3xl">
        <Eyebrow>Creative Archetypes</Eyebrow>
        <SplitHeading as="h2" text="Sample Content Layouts Designed for Engagement" className="mt-4 font-display text-3xl font-bold sm:text-4xl" />
        <p className="mt-4 text-sm leading-relaxed text-fg-soft">
          We engineer post formats around user psychology: carousel breakdowns for retention, vertical video hooks for reach, and proof cards for commercial conversion.
        </p>

        {/* Tab switchers */}
        <div className="relative mt-6">
          <div className="mask-fade-x -mx-4 overflow-x-auto px-4 py-2 sm:mx-0 sm:px-0 no-scrollbar">
            <div className="glass-dock inline-flex gap-1.5 rounded-full p-1.5">
              {(
                [
                  { key: 'carousel', label: 'Multi-Slide Carousel' },
                  { key: 'reel', label: '9:16 Video / Reel Hook' },
                  { key: 'infographic', label: 'Commercial Proof Card' },
                ] as const
              ).map((t) => {
                const on = activeTab === t.key;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setActiveTab(t.key)}
                    className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                      on ? 'text-white' : 'text-fg-soft hover:text-white'
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="social-archetype-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-brand-blue glow-pill-active"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mockup Canvas */}
      <div className="mx-auto max-w-4xl rounded-[var(--radius-xl)] border border-line bg-ink p-5 sm:p-10 shadow-2xl overflow-hidden">
        {activeTab === 'carousel' && (
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-surface p-5 flex flex-col justify-between min-h-[290px] sm:aspect-[4/5] shadow-lg">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-brand-sky uppercase">
                  <span>Slide 01/05</span>
                  <Layers className="h-3.5 w-3.5" />
                </div>
                <h4 className="mt-6 font-display text-base font-bold text-fg leading-snug">
                  Why 90% of SaaS Landing Pages Leak High-Intent Clicks.
                </h4>
                <p className="mt-3 text-xs text-fg-soft leading-relaxed">
                  Most founders describe features instead of diagnosing customer friction. Here is the 3-step fix:
                </p>
              </div>
              <div className="pt-4 border-t border-line text-[10px] text-fg-muted font-mono">
                Swipe left for step 1 →
              </div>
            </div>

            <div className="rounded-2xl border border-brand-blue/40 bg-surface p-5 flex flex-col justify-between min-h-[290px] sm:aspect-[4/5] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-brand-blue/10 rounded-full blur-xl" />
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-brand-sky uppercase">
                  <span>Slide 02/05</span>
                  <span className="text-ok font-bold">Friction Fix</span>
                </div>
                <h4 className="mt-6 font-display text-base font-bold text-fg leading-snug">
                  1. Eliminate the 12-Field Lead Form.
                </h4>
                <p className="mt-3 text-xs text-fg-soft leading-relaxed">
                  Every redundant field cuts conversion by ~7%. Ask only for business email and name at first contact.
                </p>
              </div>
              <div className="pt-4 border-t border-line flex justify-between text-[10px] text-fg-muted font-mono">
                <span>Swipe →</span>
                <span className="text-brand-sky font-semibold">+34% lift avg.</span>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-5 flex flex-col justify-between min-h-[290px] sm:aspect-[4/5] shadow-lg">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-brand-sky uppercase">
                  <span>Slide 05/05</span>
                  <span>CTA</span>
                </div>
                <h4 className="mt-6 font-display text-base font-bold text-fg leading-snug">
                  Save This Checklist for Your Next Sprint.
                </h4>
                <p className="mt-3 text-xs text-fg-soft leading-relaxed">
                  Want our team to audit your conversion funnel? Send us a DM or follow @qevnaro for weekly teardowns.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-line text-fg-muted">
                <div className="flex gap-3">
                  <Heart className="h-4 w-4" />
                  <MessageCircle className="h-4 w-4" />
                </div>
                <Bookmark className="h-4 w-4 text-brand-sky" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reel' && (
          <div className="mx-auto max-w-sm rounded-[2.5rem] border-4 border-line-strong bg-surface p-3 shadow-2xl">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-gradient-to-b from-brand-navy via-elevated to-ink p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span className="font-mono text-[10px] bg-white/10 px-2 py-0.5 rounded-full">Reel Teardown</span>
                <Eye className="h-3.5 w-3.5" />
              </div>

              <div className="my-auto text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand-blue text-white shadow-lg cursor-pointer">
                  <Play className="h-6 w-6 ml-1" />
                </div>
                <span className="inline-block rounded-full bg-bad/20 text-bad border border-bad/30 px-3 py-1 font-mono text-[11px] font-semibold">
                  HOOK: 00:00 - 00:03
                </span>
                <h4 className="mt-3 font-display text-lg font-bold text-white leading-snug">
                  "Stop building complex websites before you test this one metric..."
                </h4>
              </div>

              <div className="space-y-2 pt-4 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-brand-blue text-white text-[10px] grid place-items-center font-bold">Q</span>
                  <span className="font-semibold text-white">qevnaro</span>
                </div>
                <p className="text-[11px] text-white/70 line-clamp-2">
                  Engineering first impressions that convert cold traffic into booked consultations. Tap link in bio.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'infographic' && (
          <div className="rounded-2xl border border-line bg-surface p-8 max-w-2xl mx-auto shadow-xl">
            <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-sky font-semibold">
                Commercial Proof Spotlight
              </span>
              <span className="font-mono text-xs text-fg-muted">Case: Pulse n Care</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center my-6">
              <div className="rounded-xl border border-line bg-ink p-4">
                <div className="font-display text-3xl font-extrabold text-gradient">&lt; 1.2s</div>
                <div className="mt-1 text-xs text-fg-muted">Mobile LCP Speed</div>
              </div>
              <div className="rounded-xl border border-line bg-ink p-4">
                <div className="font-display text-3xl font-extrabold text-ok">100%</div>
                <div className="mt-1 text-xs text-fg-muted">Verified Core Web Vitals</div>
              </div>
              <div className="rounded-xl border border-line bg-ink p-4">
                <div className="font-display text-3xl font-extrabold text-brand-sky">Zero</div>
                <div className="mt-1 text-xs text-fg-muted">Client Data Leakage</div>
              </div>
            </div>

            <p className="text-xs text-fg-soft leading-relaxed text-center">
              Clean, defensible results posted as verified visual proof cards build compound brand authority across LinkedIn and Twitter/X feeds.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const SocialMediaMarketing = () => (
  <ServiceDetailLayout data={DATA}>
    <SampleSocialLayouts />
  </ServiceDetailLayout>
);

export default SocialMediaMarketing;
