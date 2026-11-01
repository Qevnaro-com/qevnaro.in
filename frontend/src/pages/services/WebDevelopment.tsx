import { Code2 } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Technology & Development · Web Development',
  title: 'Website Development That Turns Visitors Into Customers.',
  subtitle: 'Business websites, landing pages, online stores and custom web applications, planned around what your visitors need to do and built to load fast, rank well and be easy to maintain.',
  slug: 'web-development',
  art: 'code',
  icon: Code2,
  seoTitle: 'Website Development Services | Qevnaro',
  seoDescription: 'Custom business websites, landing pages, e-commerce stores and web apps built for speed, search visibility and conversion. Talk to Qevnaro.',
  overview: [
    'A website is rarely just a brochure. It is where search traffic lands, where ad clicks are judged in seconds and where a buyer decides whether your business feels credible. Qevnaro treats every build as a commercial tool: we start from the action you want a visitor to take and work backwards into structure, design and code.',
    'We build with modern, component-based front ends and well-documented back ends, so pages stay fast, accessible and straightforward for your team to extend. You receive a site you own outright, with clean handover documentation instead of a dependency on us.'
  ],
  whyNeeded: {
    heading: 'Why the quality of the build matters',
    points: [
      { title: 'First impressions are judged on speed', desc: 'Slow or unstable pages lose visitors before your message is read, especially on mobile networks.' },
      { title: 'Search engines read your structure', desc: 'Semantic markup, sensible URLs and structured data help crawlers and AI search tools understand what you offer.' },
      { title: 'Every page needs a job', desc: 'Pages designed around one clear next step convert better than pages that try to say everything.' },
      { title: 'Maintenance is a long-term cost', desc: 'Clean architecture and documented code keep future changes quick and inexpensive.' }
    ]
  },
  problemsSolved: [
    { title: 'Visitors leave before they act', problem: 'Heavy themes, unoptimised images and layout shifts make pages feel slow and untrustworthy on phones.', solution: 'Lean bundles, optimised media, responsive layouts and performance budgets checked before launch.' },
    { title: 'The site cannot do what the business needs', problem: 'Template limits block custom quoting tools, booking flows, portals or CRM connections.', solution: 'A modular build that connects cleanly to payment, CRM, email and internal systems through APIs.' },
    { title: 'Great content that nobody finds', problem: 'Poor structure, missing metadata and weak internal linking leave pages hard for crawlers to interpret.', solution: 'SEO-ready architecture with clean URLs, metadata, sitemaps and schema built in from day one.' }
  ],
  deliverables: [
    'Sitemap and page-level content structure',
    'Responsive UI design for mobile, tablet and desktop',
    'Front-end build in React / TypeScript or your agreed stack',
    'Back-end logic, forms and database where required',
    'API and third-party integrations (CRM, payments, email, maps)',
    'On-page SEO foundations: metadata, schema, sitemap, redirects',
    'Accessibility pass against common WCAG practices',
    'Cross-browser and device QA report',
    'Production deployment with SSL and analytics set up',
    'Handover documentation and a maintenance option'
  ],
  subServices: [
    { title: 'Business and corporate websites', desc: 'Multi-page sites for service companies, clinics, firms and manufacturers that need credibility and lead capture.' },
    { title: 'Landing pages', desc: 'Single-purpose pages for campaigns, built to match ad messaging and measure every conversion step.' },
    { title: 'E-commerce websites', desc: 'Storefronts with catalogues, carts, payments and order management, built on Shopify, WooCommerce or custom stacks.' },
    { title: 'Custom web applications', desc: 'Dashboards, portals, booking systems and internal tools with authentication and role-based access.' },
    { title: 'Website redesign and migration', desc: 'Rebuilding outdated sites while preserving search equity through redirect mapping and content audits.' },
    { title: 'CMS and headless CMS setup', desc: 'Editing interfaces your team can use without developers, using WordPress, Sanity, Strapi or similar.' },
    { title: 'API development and integration', desc: 'REST and webhook connections between your site and the tools your business already runs on.' },
    { title: 'Performance and Core Web Vitals tuning', desc: 'Auditing and fixing load speed, interaction delay and layout stability on existing sites.' },
    { title: 'Maintenance and support', desc: 'Updates, security patching, backups, monitoring and small improvements on an agreed schedule.' }
  ],
  methodology: [
    { step: '01', title: 'Discovery and planning', desc: 'We define goals, audiences, content, integrations and success measures, then agree scope and sitemap.' },
    { step: '02', title: 'UX and UI design', desc: 'Wireframes and high-fidelity designs reviewed with you before any code is written.' },
    { step: '03', title: 'Front-end and back-end build', desc: 'Components, data models, APIs and database work progress in reviewable staging releases.' },
    { step: '04', title: 'Quality assurance', desc: 'Functional, device, accessibility, performance and security checks against an agreed checklist.' },
    { step: '05', title: 'Deployment and maintenance', desc: 'Controlled launch, monitoring, handover and optional ongoing support.' }
  ],
  toolsAndTech: [
    { category: 'Front end', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Back end and data', items: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Headless CMS'] },
    { category: 'Delivery', items: ['Git workflows', 'Cloudflare / AWS', 'Lighthouse', 'Google Analytics 4', 'Search Console'] }
  ],
  whoNeedsThis: [
    'Service businesses that depend on enquiries from their website',
    'Companies running a site on an outdated or unsupported platform',
    'Startups that need a launch site or a first product interface',
    'Brands preparing paid campaigns that need dedicated landing pages',
    'Retailers moving from marketplaces to their own storefront',
    'Teams that need an internal portal or booking system'
  ],
  businessOutcomes: [
    { metric: 'Faster', label: 'Page experience', desc: 'Pages built and tested for quicker loading and smoother interaction on real devices.' },
    { metric: 'Clearer', label: 'Visitor journeys', desc: 'Structure and content designed so visitors always know the next step.' },
    { metric: 'Measurable', label: 'Conversions', desc: 'Forms, calls and purchases tracked so you can see what the site actually produces.' }
  ],
  relatedCaseStudies: [
    { title: 'PulsenCare', desc: 'A healthcare-focused digital product build from our portfolio.', href: '/work/pulsencare', tag: 'Case study' },
    { title: 'MenuSQR', desc: 'A digital menu and ordering experience from our portfolio.', href: '/work/menusqr', tag: 'Case study' }
  ],
  relatedServices: [
    { title: 'UI/UX Design', desc: 'Research-led interface design before development begins.', href: '/services/ui-ux-design' },
    { title: 'SEO', desc: 'Help the new site get found in search.', href: '/services/seo' },
    { title: 'Cloud and DevOps', desc: 'Hosting, pipelines and monitoring for your site.', href: '/services/cloud-devops' }
  ],
  faqs: [
    { q: 'What is the difference between a business website, a landing page, an online store and a web app?', a: 'See the comparison above. In short, a business website explains many things, a landing page drives one action, a store sells products and a web app lets users perform tasks after logging in.' },
    { q: 'How long does a website project take?', a: 'It depends on scope, content readiness and integrations. A focused business site often takes several weeks, while custom applications take longer. We give a phased timeline after discovery.' },
    { q: 'Will I be able to edit the content myself?', a: 'Yes. We set up a CMS suited to your team and provide training and documentation for routine updates.' },
    { q: 'Do you handle hosting and maintenance?', a: 'We can deploy to your own accounts or manage hosting for you, and offer maintenance plans covering updates, backups and monitoring.' },
    { q: 'Can you redesign my site without losing search rankings?', a: 'We audit current pages, map redirects and preserve high-value content to reduce risk. No redesign can promise unchanged rankings, but careful migration limits avoidable losses.' }
  ],
  extraSections: [
    {
      eyebrow: 'Choosing the right build',
      title: 'Business website, landing page, store or web app?',
      intro: 'These four are often confused. Each solves a different problem and is scoped, priced and measured differently.',
      columns: [
        { title: 'Business website', items: ['Several pages: home, services, about, contact', 'Builds trust and supports search visibility', 'Content managed by your team', 'Best for service companies and brands'] },
        { title: 'Landing page', items: ['One page, one goal', 'Matches a specific ad or campaign', 'Minimal navigation, strong call to action', 'Best for lead generation and promotions'] },
        { title: 'E-commerce store', items: ['Product catalogue, cart and checkout', 'Payments, tax, shipping and inventory', 'Order and customer management', 'Best for businesses selling online'] },
        { title: 'Custom web app', items: ['Logged-in users and roles', 'Custom workflows, dashboards and data', 'Database and API driven', 'Best for portals, SaaS and internal tools'] }
      ]
    },
    {
      eyebrow: 'Lifecycle',
      title: 'From first conversation to ongoing maintenance',
      columns: [
        { title: 'Plan and design', items: ['Discovery', 'UX structure', 'UI design'] },
        { title: 'Build', items: ['Front end', 'Back end', 'API integration', 'Database'] },
        { title: 'Verify and run', items: ['QA testing', 'Deployment', 'Maintenance'] }
      ]
    }
  ]
};

export const WebDevelopment = () => <ServiceDetailLayout data={DATA} />;
export default WebDevelopment;
