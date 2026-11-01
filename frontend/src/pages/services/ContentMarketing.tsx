import { FileText } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Content & Communication · Content Marketing',
  title: 'Content That Answers Questions and Earns Trust.',
  subtitle: 'Strategy, blog articles, website copy, case studies and sales content written to help buyers decide, and to give search engines something worth surfacing.',
  slug: 'content-marketing',
  art: 'brand',
  icon: FileText,
  seoTitle: 'Content Marketing & Copywriting Services | Qevnaro',
  seoDescription: 'Content strategy, blog writing, website copy, case studies and email copy that educate buyers and support search visibility.',
  overview: [
    'Buyers research before they talk to a salesperson. Content marketing puts useful, honest answers in front of them at each step, so by the time they enquire they already understand what you do and why you are credible.',
    'Qevnaro plans content around real customer questions and search demand, then produces it with subject-matter input from your team. Every piece has a purpose, an audience and a next step.'
  ],
  whyNeeded: {
    heading: 'What good content achieves',
    points: [
      { title: 'Builds authority', desc: 'Detailed, accurate content shows you know your field.' },
      { title: 'Captures search demand', desc: 'Articles and guides can rank for the questions your buyers ask.' },
      { title: 'Shortens sales conversations', desc: 'Case studies and explainers answer objections before they come up.' },
      { title: 'Fuels other channels', desc: 'One strong article becomes emails, social posts, scripts and sales material.' }
    ]
  },
  problemsSolved: [
    { title: 'No time to write', problem: 'Subject experts are busy and content gets postponed indefinitely.', solution: 'Short interviews and briefs that let us draft in your voice and send for quick review.' },
    { title: 'Content that sounds generic', problem: 'Surface-level articles repeat what every competitor says.', solution: 'Original angles, first-hand examples and clear editorial standards.' },
    { title: 'Content with no strategy', problem: 'Topics are chosen at random without link to search or sales needs.', solution: 'A topic map tied to the buyer journey, keywords and business offers.' }
  ],
  deliverables: [
    'Content audit and gap analysis',
    'Audience, keyword and topic research',
    'Editorial calendar',
    'Briefs for each piece',
    'Blog articles and long-form guides',
    'Website and landing page copy',
    'Case studies and customer stories',
    'Email and newsletter copy',
    'Content refresh of ageing pages',
    'Performance review and content roadmap'
  ],
  subServices: [
    { title: 'Content strategy', desc: 'Goals, personas, topic clusters and distribution plans.' },
    { title: 'Blog and article writing', desc: 'Researched, structured articles written for readers first and search second.' },
    { title: 'Website copywriting', desc: 'Clear service, product and about-page copy that supports conversion.' },
    { title: 'Case studies', desc: 'Client stories with context, approach and honest outcomes, with permission.' },
    { title: 'Whitepapers and guides', desc: 'Long-form resources suited to lead capture and B2B nurturing.' },
    { title: 'Email and newsletter copy', desc: 'Welcome, nurture and campaign sequences written to a consistent voice.' },
    { title: 'Social and script writing', desc: 'Captions, video scripts and short-form hooks.' },
    { title: 'Content editing and refresh', desc: 'Updating and consolidating older pages to improve accuracy and performance.' },
    { title: 'Content distribution', desc: 'Repurposing and publishing across owned channels and partners.' }
  ],
  methodology: [
    { step: '01', title: 'Audit and research', desc: 'Existing content, competitors, search demand and customer questions are reviewed.' },
    { step: '02', title: 'Plan', desc: 'A calendar and briefs define topics, formats and goals.' },
    { step: '03', title: 'Create', desc: 'Drafting with expert input, editing and fact-checking.' },
    { step: '04', title: 'Publish and promote', desc: 'Formatting, on-page SEO and distribution.' },
    { step: '05', title: 'Measure and improve', desc: 'Traffic, engagement and lead data guide refreshes and new topics.' }
  ],
  toolsAndTech: [
    { category: 'Research', items: ['Search Console', 'Keyword tools', 'Customer interviews', 'Sales team input'] },
    { category: 'Production', items: ['Google Docs workflows', 'CMS publishing', 'Grammar and style tools', 'Fact-check process'] },
    { category: 'Measurement', items: ['GA4', 'Content dashboards', 'CRM attribution'] }
  ],
  whoNeedsThis: [
    'B2B companies with complex, considered purchases',
    'Service businesses wanting steady organic enquiries',
    'Brands needing website copy that explains clearly',
    'Founders needing thought-leadership content',
    'Firms with case studies that have never been written up',
    'Websites with outdated or thin pages'
  ],
  businessOutcomes: [
    { metric: 'Clearer', label: 'Messaging', desc: 'Language that explains what you do in terms buyers recognise.' },
    { metric: 'Reusable', label: 'Assets', desc: 'Content that supports search, email, social and sales conversations.' },
    { metric: 'Trusted', label: 'Authority', desc: 'Accurate, specific material that builds credibility over time.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'SEO', desc: 'Make content discoverable.', href: '/services/seo' },
    { title: 'Email Marketing', desc: 'Distribute content to subscribers.', href: '/services/email-marketing' },
    { title: 'GEO and AEO', desc: 'Answer-ready content for AI search.', href: '/services/geo-aeo' }
  ],
  faqs: [
    { q: 'Do you use AI to write content?', a: 'We may use AI tools for research and drafting support, but every piece is edited, fact-checked and shaped by a human editor with your input.' },
    { q: 'How do you learn about our industry?', a: 'Through briefing calls, interviews with your experts, existing materials and independent research.' },
    { q: 'How often should we publish?', a: 'Quality and consistency matter more than volume. We recommend a sustainable cadence based on your goals and resources.' },
    { q: 'Can you write in regional languages?', a: 'Availability depends on the language and subject. Ask us and we will confirm before scoping.' },
    { q: 'Who owns the content?', a: 'You do, once the work is paid for under the agreement.' }
  ]
};

export const ContentMarketing = () => <ServiceDetailLayout data={DATA} />;
export default ContentMarketing;
