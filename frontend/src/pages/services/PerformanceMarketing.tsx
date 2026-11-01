import { Target } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Digital Marketing & Growth · Performance Marketing',
  title: 'Paid Advertising Built Around Measurable Business Results.',
  subtitle: 'Google, YouTube, Meta and LinkedIn campaigns with proper conversion tracking, structured testing and reporting tied to leads and sales.',
  slug: 'performance-marketing',
  art: 'growth',
  icon: Target,
  seoTitle: 'Performance Marketing & Paid Ads Management | Qevnaro',
  seoDescription: 'Google Ads, Meta, LinkedIn and YouTube campaigns with retargeting and conversion tracking, managed for leads and sales.',
  disclaimer: 'Ad spend is paid directly to the advertising platforms and is separate from our management fee unless agreed otherwise in writing. Results vary by market, offer and budget; we do not guarantee specific returns.',
  overview: [
    'Paid media can produce demand quickly, but it can also consume budget just as fast when tracking is weak or targeting is loose. Our approach is to establish measurement first, launch a controlled set of campaigns and let data decide where budget goes.',
    'Qevnaro manages campaigns across search, display, video and social, aligns ad messages with dedicated landing pages and reports on cost per lead or cost per sale rather than clicks alone.'
  ],
  whyNeeded: {
    heading: 'Why performance marketing needs discipline',
    points: [
      { title: 'Speed to market', desc: 'Campaigns can start reaching defined audiences within days of approval.' },
      { title: 'Precise targeting', desc: 'Intent keywords, interests, demographics and retargeting lists focus spend on likely buyers.' },
      { title: 'Direct measurement', desc: 'Every click and conversion can be tracked, if tracking is set up correctly.' },
      { title: 'Learning for the whole business', desc: 'Ad tests reveal which messages and offers resonate, which helps other channels too.' }
    ]
  },
  problemsSolved: [
    { title: 'Spend without attribution', problem: 'Conversions are not tracked correctly, so nobody knows what the budget achieved.', solution: 'GA4, Tag Manager, pixels and conversion API setup before any campaign scales.' },
    { title: 'Clicks that do not convert', problem: 'Ads send traffic to generic pages that do not match the promise.', solution: 'Dedicated landing pages and message matching, tested iteratively.' },
    { title: 'Missed second chances', problem: 'Most visitors leave without enquiring and are never reached again.', solution: 'Retargeting audiences and sequenced creative for visitors, cart abandoners and past customers.' }
  ],
  deliverables: [
    'Account and tracking audit',
    'Campaign structure and keyword or audience plan',
    'Ad copy and creative variations',
    'Conversion tracking and pixel setup',
    'Landing page recommendations and tests',
    'Retargeting audiences and campaigns',
    'Budget pacing and bid management',
    'Weekly optimisation log',
    'Monthly performance report',
    'Quarterly strategy review'
  ],
  subServices: [
    { title: 'Google Search ads', desc: 'Intent-driven keyword campaigns with negative keyword control and ad extensions.' },
    { title: 'Google Display ads', desc: 'Visual placements and remarketing across the Google network.' },
    { title: 'YouTube ads', desc: 'In-stream and discovery video ads for awareness and consideration.' },
    { title: 'Meta ads', desc: 'Campaigns across Instagram and Facebook using interest, lookalike and custom audiences.' },
    { title: 'Instagram and Facebook lead generation', desc: 'Lead forms and conversation ads connected to your CRM or WhatsApp.' },
    { title: 'LinkedIn ads', desc: 'Job title and company targeting for B2B lead generation.' },
    { title: 'Retargeting', desc: 'Reaching previous visitors and engaged users with relevant follow-up ads.' },
    { title: 'Shopping and catalogue ads', desc: 'Product feed driven campaigns for e-commerce stores.' },
    { title: 'Tracking and attribution', desc: 'GA4 events, server-side tagging, UTM structure and offline conversion imports.' },
    { title: 'Creative testing', desc: 'Structured A/B tests on headlines, images, video hooks and offers.' }
  ],
  methodology: [
    { step: '01', title: 'Measurement first', desc: 'Goals, conversion events and tracking are set up and verified.' },
    { step: '02', title: 'Campaign build', desc: 'Structure, audiences, creative and landing pages are prepared for launch.' },
    { step: '03', title: 'Launch and learn', desc: 'Initial budgets gather data while we monitor quality and cost.' },
    { step: '04', title: 'Optimise', desc: 'Budgets shift to what works while weak ads and audiences are paused.' },
    { step: '05', title: 'Report', desc: 'Transparent reporting on spend, results and recommended next steps.' }
  ],
  toolsAndTech: [
    { category: 'Ad platforms', items: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'YouTube Ads'] },
    { category: 'Tracking', items: ['GA4', 'Google Tag Manager', 'Meta Pixel and Conversions API', 'UTM conventions'] },
    { category: 'Analysis', items: ['Looker Studio', 'CRM exports', 'Call tracking where required'] }
  ],
  whoNeedsThis: [
    'Businesses that need enquiries or sales on a defined timeline',
    'Brands launching a new product or service',
    'Stores wanting to scale revenue from paid traffic',
    'B2B teams targeting specific roles and industries',
    'Companies whose current ads lack reliable tracking',
    'Local businesses seeking calls and visits'
  ],
  businessOutcomes: [
    { metric: 'Accurate', label: 'Tracking', desc: 'Reliable measurement of leads and sales attributed to each campaign.' },
    { metric: 'Focused', label: 'Budget', desc: 'Spend steered toward audiences and messages that show results.' },
    { metric: 'Faster', label: 'Learning', desc: 'Rapid testing that reveals which offers and creative resonate.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'Web Development', desc: 'Landing pages built for conversion.', href: '/services/web-development' },
    { title: 'Email Marketing', desc: 'Nurture the leads you generate.', href: '/services/email-marketing' },
    { title: 'Social Media Marketing', desc: 'Organic content to support ads.', href: '/services/social-media-marketing' }
  ],
  faqs: [
    { q: 'How much should I spend on ads?', a: 'It depends on your margins, sales cycle and competition. We help set a testing budget and scale as data supports it.' },
    { q: 'Is ad spend included in your fee?', a: 'No. Ad spend goes to the platforms directly and is separate from our management fee unless agreed otherwise.' },
    { q: 'Which platforms are best for my business?', a: 'Search for existing demand, Meta for visual and consumer products, LinkedIn for B2B targeting, YouTube for storytelling. We recommend after reviewing your goals.' },
    { q: 'Do I own the ad accounts?', a: 'Yes. We work inside accounts you own so you keep all data and history.' },
    { q: 'Can you promise a specific cost per lead?', a: 'No. We can set targets and report against them, but platform costs and competition vary.' }
  ]
};

export const PerformanceMarketing = () => <ServiceDetailLayout data={DATA} />;
export default PerformanceMarketing;
