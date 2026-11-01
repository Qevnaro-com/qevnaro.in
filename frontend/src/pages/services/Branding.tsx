import { Palette } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Creative & Branding · Branding',
  title: 'A Brand Identity Built on Strategy, Not Just Style.',
  subtitle: 'Brand strategy, naming support, logo and visual identity, and guidelines that keep every touchpoint consistent as you grow.',
  slug: 'branding',
  art: 'brand',
  icon: Palette,
  seoTitle: 'Branding Services: Strategy, Logo, Identity, Guidelines | Qevnaro',
  seoDescription: 'Brand strategy, logo and visual identity design, tone of voice and brand guidelines for businesses that want to stand out and stay consistent.',
  overview: [
    'A brand is the set of impressions people carry about your business. A logo is only one part of it. Qevnaro begins with strategy: who you serve, what you stand for and where you are different from competitors. Visual identity then expresses that position consistently.',
    'We deliver a complete system, including logo variations, colour, typography, imagery direction, tone of voice and usage guidelines, so internal teams and external vendors can apply the brand without guessing.'
  ],
  whyNeeded: {
    heading: 'Why brand work pays off across the business',
    points: [
      { title: 'Differentiation', desc: 'A clear position makes you easier to remember and harder to compare purely on price.' },
      { title: 'Consistency', desc: 'Shared rules keep the website, packaging, social and sales material looking like one company.' },
      { title: 'Trust', desc: 'Professional presentation signals reliability, especially to first-time customers.' },
      { title: 'Speed for teams', desc: 'Templates and guidelines reduce time spent making design decisions from scratch.' }
    ]
  },
  problemsSolved: [
    { title: 'Inconsistent presentation', problem: 'Different fonts, colours and tones across channels weaken recognition.', solution: 'A documented identity system with approved assets and clear usage rules.' },
    { title: 'Looking like everyone else', problem: 'Generic logos and stock phrasing fail to communicate what is distinctive.', solution: 'Competitor mapping and positioning work that informs original visual and verbal direction.' },
    { title: 'Brand that does not scale', problem: 'A logo that works on a card fails on social avatars, signage or packaging.', solution: 'Flexible logo suites and application mockups tested across real formats.' }
  ],
  deliverables: [
    'Brand discovery workshop and positioning summary',
    'Competitor and audience review',
    'Logo suite: primary, secondary, icon and mono versions',
    'Colour palette with accessibility checks',
    'Typography system',
    'Tone of voice and messaging guide',
    'Imagery and iconography direction',
    'Stationery and social media templates',
    'Brand guidelines document',
    'Final asset package in print and digital formats'
  ],
  subServices: [
    { title: 'Brand strategy', desc: 'Positioning, values, audience, personality and messaging pillars.' },
    { title: 'Naming and taglines', desc: 'Name exploration and shortlisting with basic availability checks.' },
    { title: 'Logo design', desc: 'Concept development, refinement and a complete logo suite.' },
    { title: 'Visual identity', desc: 'Colour, type, graphic language and imagery direction.' },
    { title: 'Tone of voice', desc: 'Writing principles and example copy for key situations.' },
    { title: 'Brand guidelines', desc: 'A practical manual covering rules, do and don\'t examples and file usage.' },
    { title: 'Packaging and print design', desc: 'Labels, brochures, cards and collateral aligned with the system.' },
    { title: 'Rebranding', desc: 'Evolving an existing identity while keeping valuable recognition.' },
    { title: 'Brand applications', desc: 'Pitch decks, social kits, email signatures and signage templates.' }
  ],
  methodology: [
    { step: '01', title: 'Discover', desc: 'Workshops and research establish goals, audience and competitive context.' },
    { step: '02', title: 'Define strategy', desc: 'Positioning, personality and messaging are agreed before design begins.' },
    { step: '03', title: 'Design identity', desc: 'Logo and visual system concepts are presented, refined and finalised.' },
    { step: '04', title: 'Document guidelines', desc: 'Rules and templates are compiled into a usable brand guide.' },
    { step: '05', title: 'Roll out', desc: 'Assets are delivered and applied to priority touchpoints.' }
  ],
  toolsAndTech: [
    { category: 'Design', items: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'] },
    { category: 'Strategy', items: ['Positioning canvases', 'Competitor mapping', 'Audience interviews'] },
    { category: 'Delivery', items: ['Brand guideline PDFs', 'Template libraries', 'Print-ready exports'] }
  ],
  whoNeedsThis: [
    'New businesses preparing to launch',
    'Established companies with outdated or inconsistent visuals',
    'Startups heading into funding or partnership conversations',
    'Businesses expanding into new products or markets',
    'Companies merging or restructuring',
    'Retail and food brands needing packaging and signage'
  ],
  businessOutcomes: [
    { metric: 'Distinct', label: 'Positioning', desc: 'A clear, defensible answer to why customers should choose you.' },
    { metric: 'Consistent', label: 'Presentation', desc: 'Every touchpoint following the same visual and verbal rules.' },
    { metric: 'Usable', label: 'Assets', desc: 'Files and templates your team can apply without a designer on call.' }
  ],
  relatedCaseStudies: [
    { title: 'PulsenCare', desc: 'A brand and product build from our portfolio.', href: '/work/pulsencare', tag: 'Case study' },
    { title: 'MenuSQR', desc: 'A brand and product build from our portfolio.', href: '/work/menusqr', tag: 'Case study' }
  ],
  relatedServices: [
    { title: 'UI/UX Design', desc: 'Apply the brand to digital products.', href: '/services/ui-ux-design' },
    { title: 'Social Media Marketing', desc: 'Bring the brand to life in feeds.', href: '/services/social-media-marketing' },
    { title: 'Video and Creative Production', desc: 'Brand films and visual storytelling.', href: '/services/video-creative-production' }
  ],
  faqs: [
    { q: 'What is the difference between a logo and a brand?', a: 'A logo is a mark. A brand is the full experience and perception of your business, including voice, visuals, behaviour and promise.' },
    { q: 'How many logo concepts will I see?', a: 'We present a focused set of strategic directions rather than many random options, then refine the chosen one with your feedback.' },
    { q: 'Do I own the final design?', a: 'Yes. Ownership of final approved assets transfers on full payment, per the agreement.' },
    { q: 'Can you refresh our brand rather than replace it?', a: 'Yes. Evolutionary rebrands preserve existing recognition while modernising execution.' },
    { q: 'Do you handle trademark registration?', a: 'No. We recommend consulting a trademark professional. We can provide design files for the filing.' }
  ]
};

export const Branding = () => <ServiceDetailLayout data={DATA} />;
export default Branding;
