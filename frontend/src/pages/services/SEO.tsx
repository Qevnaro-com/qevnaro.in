import { Search } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Search Visibility · SEO',
  title: 'Get Found by the People Who Are Already Searching for You.',
  subtitle: 'Technical, on-page, off-page, local and e-commerce SEO delivered as a clear, audited and reported programme rather than a list of vague monthly tasks.',
  slug: 'seo',
  art: 'search',
  icon: Search,
  seoTitle: 'SEO Services: Technical, On-Page, Local, E-commerce | Qevnaro',
  seoDescription: 'Search engine optimisation covering technical audits, on-page, link building, local and e-commerce SEO, with transparent reporting.',
  disclaimer: 'SEO outcomes depend on competition, site history and search engine decisions. We do not guarantee rankings or traffic, and we do not use tactics that put your site at risk.',
  overview: [
    'People searching for your service have already shown intent. SEO is the work of making your site easy for search engines to crawl and understand, relevant to what people ask, and credible enough to be shown above alternatives.',
    'Qevnaro begins with an audit that separates quick technical fixes from longer content and authority work. We then implement, monitor and report in plain language, so you always know what changed, why and what we plan next.'
  ],
  whyNeeded: {
    heading: 'Why organic search is worth the patience',
    points: [
      { title: 'Intent is already present', desc: 'Searchers are looking for solutions now, so visits tend to be relevant.' },
      { title: 'Results compound', desc: 'Good pages and earned authority keep working after the initial effort, unlike paused ad spend.' },
      { title: 'Trust signals', desc: 'Prominent organic placement and strong reviews influence how credible a business appears.' },
      { title: 'Foundation for AI search', desc: 'Clear structure, authority and entities also help AI-driven search experiences understand your brand.' }
    ]
  },
  problemsSolved: [
    { title: 'Pages not indexed or crawled well', problem: 'Broken links, duplicate URLs, blocked resources and slow templates waste crawl budget and hide pages.', solution: 'Technical audit and fixes covering indexation, canonicals, sitemaps, speed and structured data.' },
    { title: 'Content that does not match search intent', problem: 'Pages target the wrong keywords or fail to answer the real question behind a query.', solution: 'Keyword and intent mapping, then page rewrites and new content aligned to each stage of the buyer journey.' },
    { title: 'Low authority against competitors', problem: 'Few quality references from other sites make it hard to compete on contested queries.', solution: 'Ethical outreach, digital PR and citation building focused on relevance and quality.' }
  ],
  deliverables: [
    'Full technical SEO audit with prioritised actions',
    'Keyword research and search intent mapping',
    'Site architecture and internal linking plan',
    'Title, description and heading optimisation',
    'Content briefs and optimised page copy',
    'Schema markup implementation',
    'Core Web Vitals recommendations',
    'Link-building and citation outreach plan',
    'Google Search Console and GA4 setup',
    'Monthly ranking, traffic and action report'
  ],
  subServices: [
    { title: 'Technical SEO', desc: 'Crawlability, indexation, site speed, mobile usability, structured data and JavaScript rendering checks.' },
    { title: 'On-page SEO', desc: 'Metadata, headings, content depth, internal links and image optimisation for each target page.' },
    { title: 'Off-page SEO', desc: 'Link acquisition, digital PR, brand mentions and directory citations from reputable sources.' },
    { title: 'Local SEO', desc: 'Google Business Profile, NAP consistency, local citations, reviews and location pages.' },
    { title: 'E-commerce SEO', desc: 'Category and product page optimisation, faceted navigation handling, product schema and feed hygiene.' },
    { title: 'Keyword and competitor research', desc: 'Identifying demand, gaps and realistic targets in your market.' },
    { title: 'Content optimisation', desc: 'Refreshing underperforming pages and building topic clusters.' },
    { title: 'Site migration SEO', desc: 'Redirect mapping and monitoring during redesigns or domain changes.' },
    { title: 'SEO reporting', desc: 'Dashboards covering visibility, clicks, conversions and technical health.' }
  ],
  methodology: [
    { step: '01', title: 'Audit', desc: 'Technical, content and competitive review identifies what is limiting visibility today.' },
    { step: '02', title: 'Implementation', desc: 'Fixes and content work are prioritised by impact and effort, then delivered in batches.' },
    { step: '03', title: 'Monitoring', desc: 'Search Console, crawls and rank tracking watch for gains and regressions.' },
    { step: '04', title: 'Reporting', desc: 'Monthly reports explain results, learnings and the next set of actions.' }
  ],
  toolsAndTech: [
    { category: 'Google tools', items: ['Search Console', 'GA4', 'PageSpeed Insights', 'Tag Manager'] },
    { category: 'Crawling and research', items: ['Screaming Frog', 'Ahrefs / Semrush', 'Schema validators', 'Log analysis where available'] },
    { category: 'Reporting', items: ['Looker Studio', 'Rank tracking', 'Backlink monitoring'] }
  ],
  whoNeedsThis: [
    'Businesses that rely on enquiries from Google',
    'Local service providers competing in map results',
    'Online stores with many product and category pages',
    'Publishers and B2B firms building topical authority',
    'Companies planning a redesign who must protect traffic',
    'Brands whose competitors consistently outrank them'
  ],
  businessOutcomes: [
    { metric: 'Healthier', label: 'Site foundations', desc: 'A crawlable, fast and well-structured site search engines can interpret.' },
    { metric: 'More relevant', label: 'Visitors', desc: 'Pages aligned to what your buyers actually search for.' },
    { metric: 'Transparent', label: 'Progress', desc: 'Clear reporting on actions taken and measured effects over time.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'GEO and AEO', desc: 'Visibility in AI answer engines.', href: '/services/geo-aeo' },
    { title: 'Content Marketing', desc: 'Content that earns search visibility.', href: '/services/content-marketing' },
    { title: 'Web Development', desc: 'Technically sound builds.', href: '/services/web-development' }
  ],
  faqs: [
    { q: 'How long does SEO take to work?', a: 'Technical fixes may show effects within weeks, while content and authority typically take several months. Timelines vary by competition and site history.' },
    { q: 'Can you guarantee first-page rankings?', a: 'No. Nobody outside the search engine can. Be cautious of anyone who does. We commit to the work and reporting, not to specific positions.' },
    { q: 'What is the difference between on-page and off-page SEO?', a: 'On-page covers what is on your site: content, markup and structure. Off-page covers signals from elsewhere, mainly links and mentions.' },
    { q: 'Do you do local SEO for businesses with one location?', a: 'Yes. Single-location and multi-location setups both benefit from a well-managed Business Profile and consistent listings.' },
    { q: 'What will I receive each month?', a: 'A report with completed actions, visibility and traffic trends, issues found and the plan for the next month.' }
  ],
  extraSections: [
    {
      eyebrow: 'Scope of work',
      title: 'Five disciplines of SEO',
      intro: 'Depending on your business, we focus on some or all of these areas.',
      columns: [
        { title: 'Technical SEO', items: ['Crawl and index audit', 'XML sitemap and robots rules', 'Core Web Vitals and speed', 'Structured data', 'Canonical and redirect management'] },
        { title: 'On-page SEO', items: ['Keyword and intent mapping', 'Titles, descriptions, headings', 'Content depth and quality', 'Internal linking', 'Image alt text and media'] },
        { title: 'Off-page SEO', items: ['Link prospecting and outreach', 'Digital PR and mentions', 'Competitor backlink gaps', 'Toxic link review', 'Brand citations'] },
        { title: 'Local SEO', items: ['Google Business Profile optimisation', 'NAP consistency', 'Local citations', 'Review strategy', 'Location landing pages'] },
        { title: 'E-commerce SEO', items: ['Category page optimisation', 'Product page templates', 'Product and review schema', 'Faceted navigation control', 'Merchant feed alignment'] }
      ]
    }
  ]
};

export const SEO = () => <ServiceDetailLayout data={DATA} />;
export default SEO;
