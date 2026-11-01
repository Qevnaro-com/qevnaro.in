import { Sparkles } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Search Visibility · GEO / AEO',
  title: 'Prepare Your Brand for the Next Generation of Search.',
  subtitle: 'Answer Engine Optimisation and Generative Engine Optimisation: structuring your expertise so AI assistants and answer engines can understand, trust and reference it.',
  slug: 'geo-aeo',
  art: 'search',
  icon: Sparkles,
  seoTitle: 'GEO and AEO Services: AI Search Optimisation | Qevnaro',
  seoDescription: 'Prepare your brand for AI answers: entity audits, schema, topical authority and citation-ready content for generative and answer engines.',
  disclaimer: 'AI platforms control their own citation and answer systems. No agency can guarantee mentions, citations or placement in AI-generated answers. We improve the quality and clarity of your signals; platforms decide what to show.',
  overview: [
    'Search is changing. People increasingly ask full questions of AI assistants and answer engines and receive a summarised response instead of a list of links. Brands that are clearly described, consistently referenced and backed by credible sources are better positioned to be understood by these systems.',
    'Qevnaro approaches GEO and AEO as an extension of strong SEO, not a replacement. We audit how your brand is represented across the web, then strengthen entity clarity, answer-focused content, structured data and third-party credibility. We monitor visibility where reliable methods exist and are transparent where they do not.'
  ],
  whyNeeded: {
    heading: 'Why this is worth preparing for now',
    points: [
      { title: 'Questions are getting longer', desc: 'Conversational queries need direct, well-structured answers rather than keyword-stuffed pages.' },
      { title: 'Entities matter', desc: 'AI systems rely on a consistent picture of who you are, what you offer and where you operate.' },
      { title: 'Credibility signals are weighed', desc: 'Authorship, original information and references from reputable sources influence what gets surfaced.' },
      { title: 'Overlap with SEO', desc: 'Most of this work also benefits traditional rankings, so effort is rarely wasted.' }
    ]
  },
  problemsSolved: [
    { title: 'Inconsistent brand information', problem: 'Different names, descriptions and facts across profiles and directories confuse machines and people.', solution: 'Entity audit and clean-up so core facts are consistent everywhere.' },
    { title: 'Content that does not answer questions', problem: 'Long, vague pages bury the answer that an assistant would need to quote.', solution: 'Answer-first formatting, clear headings, definitions and supporting evidence.' },
    { title: 'No visible expertise', problem: 'Anonymous content with no author credentials is harder to trust.', solution: 'Author profiles, expert review, original data and citation to reputable sources.' }
  ],
  deliverables: [
    'Entity and brand-mention audit',
    'Conversational and question-based query research',
    'Topical authority map',
    'Answer-focused content briefs and rewrites',
    'Schema markup and structured data plan',
    'Author credibility and E-E-A-T improvements',
    'Digital PR and citation opportunity list',
    'Citation-readiness review of key pages',
    'Crawler-access and robots review for AI user agents',
    'Visibility monitoring where reliable tools exist'
  ],
  subServices: [
    { title: 'Entity audit', desc: 'Reviewing how your brand, people, products and locations are described across the web and knowledge sources.' },
    { title: 'Conversational query research', desc: 'Identifying the questions buyers ask assistants at each stage of their decision.' },
    { title: 'Topical authority building', desc: 'Planning content clusters that demonstrate depth across a subject, not just single keywords.' },
    { title: 'Answer-focused content', desc: 'Concise definitions, step lists, comparisons and FAQs structured for extraction.' },
    { title: 'Schema and structured data', desc: 'Organization, Service, FAQ, Article, Product and Person markup where it is valid and useful.' },
    { title: 'Author credibility', desc: 'Bios, credentials, editorial standards and first-hand experience made visible.' },
    { title: 'Digital PR', desc: 'Earning mentions and references from relevant publications and industry sources.' },
    { title: 'Citation readiness', desc: 'Making facts, statistics and claims easy to attribute and verify.' },
    { title: 'AI visibility monitoring', desc: 'Sampling prompts and tracking mentions where tools allow, with honest limits on accuracy.' }
  ],
  methodology: [
    { step: '01', title: 'Entity and visibility audit', desc: 'We check how you appear in search, knowledge sources and sampled AI answers.' },
    { step: '02', title: 'Query and topic mapping', desc: 'Questions and topics are mapped to pages that should answer them.' },
    { step: '03', title: 'Content and markup work', desc: 'Pages are rewritten, structured and marked up for clarity and credibility.' },
    { step: '04', title: 'Authority building', desc: 'Digital PR and citations strengthen external signals.' },
    { step: '05', title: 'Monitor and refine', desc: 'Periodic checks track changes, understanding that results vary by platform.' }
  ],
  toolsAndTech: [
    { category: 'Research', items: ['Search Console', 'Question research tools', 'SERP feature analysis', 'Prompt sampling'] },
    { category: 'Implementation', items: ['JSON-LD schema', 'Content management systems', 'Schema validators'] },
    { category: 'Monitoring', items: ['Brand mention tracking', 'Third-party AI visibility tools (limited accuracy)', 'Server log review'] }
  ],
  whoNeedsThis: [
    'Service and consulting firms whose buyers research with AI tools',
    'B2B and SaaS brands competing on expertise',
    'Healthcare, finance and education brands where trust is central',
    'Publishers and knowledge-heavy businesses',
    'Brands with strong SEO who want to stay ahead of the shift',
    'Companies noticing competitors being named in AI answers'
  ],
  businessOutcomes: [
    { metric: 'Clearer', label: 'Brand identity online', desc: 'Consistent facts that people and machines can interpret correctly.' },
    { metric: 'Stronger', label: 'Content quality', desc: 'Pages that answer questions directly and show real expertise.' },
    { metric: 'Informed', label: 'Visibility insight', desc: 'A grounded view of how you appear, with honest caveats on measurement.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'SEO', desc: 'The foundation GEO builds on.', href: '/services/seo' },
    { title: 'Content Marketing', desc: 'Expert, answer-led content.', href: '/services/content-marketing' },
    { title: 'Web Development', desc: 'Structured, crawlable sites.', href: '/services/web-development' }
  ],
  faqs: [
    { q: 'What is the difference between SEO, AEO and GEO?', a: 'SEO aims to rank pages in search results. AEO structures content to be the direct answer to a question. GEO aims to make your brand understandable and referenceable by generative AI systems. They overlap heavily.' },
    { q: 'Can you get my brand cited by ChatGPT or other AI tools?', a: 'No one can guarantee that. We improve the signals these systems tend to rely on, but each platform controls what it cites.' },
    { q: 'Is this replacing SEO?', a: 'No. Search engines and AI assistants both depend on strong, crawlable, credible content, so SEO remains a core input.' },
    { q: 'How do you measure results?', a: 'We combine Search Console data, referral traffic, brand-mention tracking and sampled prompts. These methods are imperfect and we report them as indicators, not proof.' },
    { q: 'Do I need an llms.txt file?', a: 'It is optional and not a ranking factor for Google. We may suggest it as a low-cost addition, but the priority is content and credibility.' }
  ],
  extraSections: [
    {
      eyebrow: 'Know the difference',
      title: 'Traditional SEO vs AEO vs GEO',
      columns: [
        { title: 'Traditional SEO', items: ['Goal: rank pages in result lists', 'Focus: keywords, links, technical health', 'Success: clicks and visits', 'Output: optimised pages'] },
        { title: 'AEO (Answer Engine Optimisation)', items: ['Goal: be the direct answer', 'Focus: concise, structured answers and schema', 'Success: featured snippets and voice answers', 'Output: answer-first content blocks'] },
        { title: 'GEO (Generative Engine Optimisation)', items: ['Goal: be understood and referenced by AI models', 'Focus: entities, authority, citations, clarity', 'Success: accurate brand mentions where platforms allow', 'Output: credible, consistent brand footprint'] }
      ]
    },
    {
      eyebrow: 'What we deliver',
      title: 'Our GEO and AEO work includes',
      columns: [
        { title: 'Foundation', items: ['Entity audit', 'Conversational query research', 'Topical authority map'] },
        { title: 'Content and markup', items: ['Answer-focused content', 'Schema implementation', 'Author credibility'] },
        { title: 'Authority and tracking', items: ['Digital PR', 'Citation-readiness review', 'Monitoring where reliable'] }
      ]
    }
  ]
};

export const GeoAeo = () => <ServiceDetailLayout data={DATA} />;
export default GeoAeo;
