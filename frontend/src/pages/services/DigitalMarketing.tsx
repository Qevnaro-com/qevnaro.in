import { TrendingUp } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Digital Marketing & Growth · Strategy',
  title: 'Digital Marketing That Connects Businesses With the Right Audience.',
  subtitle: 'A joined-up approach to search, social, paid media, content and email, so each channel supports the others and every rupee of effort can be measured.',
  slug: 'digital-marketing',
  art: 'growth',
  icon: TrendingUp,
  seoTitle: 'Digital Marketing Agency Services | Qevnaro',
  seoDescription: 'Integrated digital marketing: SEO, paid ads, social media, content and email working together with clear tracking and reporting.',
  overview: [
    'Most businesses use digital channels in isolation: an agency for ads, a freelancer for posts, a developer for the site. Visitors arrive from one place and meet a different message in the next. Qevnaro plans channels as one system, with a shared audience definition, consistent messaging and common measurement.',
    'We start with who you want to reach and what a customer is worth to you, then choose the mix of channels that fits your budget and sales cycle. Reporting focuses on business results such as enquiries and sales, not vanity metrics.'
  ],
  whyNeeded: {
    heading: 'Why a coordinated approach beats scattered activity',
    points: [
      { title: 'Customers use many touchpoints', desc: 'A buyer may see an ad, search your name, read a blog post and then open an email before enquiring.' },
      { title: 'Channels cover different intent', desc: 'Search captures existing demand, social builds awareness and email nurtures. Each has a role.' },
      { title: 'Shared data improves decisions', desc: 'Unified tracking shows which combination of channels actually produces customers.' },
      { title: 'Budget goes further', desc: 'Retargeting, content reuse and consistent creative reduce waste across channels.' }
    ]
  },
  problemsSolved: [
    { title: 'Activity without direction', problem: 'Posting, advertising and emailing happen without a shared goal or audience.', solution: 'A written strategy defining audiences, channel roles, messaging and success measures.' },
    { title: 'Unclear what is working', problem: 'Each platform reports its own numbers and nobody sees the whole picture.', solution: 'Central analytics, UTM discipline and a single monthly report tied to leads and sales.' },
    { title: 'Leads that go cold', problem: 'Enquiries arrive but follow-up is slow or inconsistent.', solution: 'Lead capture, CRM routing and nurture sequences that respond promptly.' }
  ],
  deliverables: [
    'Marketing audit of current channels and assets',
    'Audience and competitor analysis',
    'Channel strategy and budget recommendation',
    'Messaging and content framework',
    'Campaign setup across agreed channels',
    'Analytics, conversion tracking and UTM structure',
    'Landing page recommendations',
    'Lead capture and follow-up workflow',
    'Monthly reporting and review calls',
    'Quarterly strategy refresh'
  ],
  subServices: [
    { title: 'Marketing strategy and planning', desc: 'Goals, audiences, positioning and a channel roadmap tied to revenue targets.' },
    { title: 'Search engine optimisation', desc: 'Organic visibility through technical, content and authority work.' },
    { title: 'Performance advertising', desc: 'Google and Meta campaigns focused on leads or sales with clear tracking.' },
    { title: 'Social media marketing', desc: 'Content, community and paid social that support brand and demand.' },
    { title: 'Content marketing', desc: 'Articles, guides and case studies that answer buyer questions.' },
    { title: 'Email and WhatsApp marketing', desc: 'Consent-based communication for nurturing and retention.' },
    { title: 'Conversion rate optimisation', desc: 'Page and funnel improvements guided by behaviour data.' },
    { title: 'Analytics and reporting', desc: 'GA4, tag management and dashboards that show real outcomes.' },
    { title: 'Reputation and review management', desc: 'Processes to request, monitor and respond to customer reviews.' }
  ],
  methodology: [
    { step: '01', title: 'Audit and research', desc: 'Current performance, audience, competitors and tracking gaps are reviewed.' },
    { step: '02', title: 'Strategy', desc: 'We choose channels, set budgets and define how success will be measured.' },
    { step: '03', title: 'Launch', desc: 'Campaigns, content and tracking go live in a planned sequence.' },
    { step: '04', title: 'Optimise', desc: 'Weekly checks and monthly reviews adjust targeting, creative and spend.' },
    { step: '05', title: 'Report', desc: 'Clear reporting links activity to enquiries, sales and learning.' }
  ],
  toolsAndTech: [
    { category: 'Analytics', items: ['Google Analytics 4', 'Google Tag Manager', 'Search Console', 'Looker Studio'] },
    { category: 'Channels', items: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Email platforms'] },
    { category: 'Operations', items: ['CRM integrations', 'Social schedulers', 'Heatmap tools', 'UTM tracking'] }
  ],
  whoNeedsThis: [
    'Small and mid-sized businesses without an in-house marketing team',
    'Companies running disconnected campaigns across channels',
    'Startups preparing a market launch',
    'Local businesses wanting steady enquiries online',
    'B2B firms with long sales cycles needing nurture',
    'Brands whose reporting does not connect to revenue'
  ],
  businessOutcomes: [
    { metric: 'Aligned', label: 'Channels', desc: 'Search, social, ads and email working from one plan and one message.' },
    { metric: 'Measurable', label: 'Results', desc: 'Reporting tied to enquiries and sales instead of impressions alone.' },
    { metric: 'Efficient', label: 'Spend', desc: 'Budget moved toward channels that show evidence of working for you.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'SEO', desc: 'Long-term organic visibility.', href: '/services/seo' },
    { title: 'Performance Marketing', desc: 'Paid media with clear tracking.', href: '/services/performance-marketing' },
    { title: 'Social Media Marketing', desc: 'Content, community and paid social.', href: '/services/social-media-marketing' }
  ],
  faqs: [
    { q: 'Which channel should I start with?', a: 'It depends on your market and sales cycle. Search and ads capture existing demand quickly, while SEO and content compound over time. We recommend a mix after an audit.' },
    { q: 'How soon will I see results?', a: 'Paid channels can generate traffic within days, while SEO and content typically take months. We set expectations per channel and never promise specific outcomes.' },
    { q: 'Is ad spend included in your fee?', a: 'No, unless agreed otherwise in writing. Ad spend is paid directly to platforms.' },
    { q: 'How do you report progress?', a: 'A monthly report covering traffic, leads, costs and learnings, plus a review call to agree next actions.' },
    { q: 'Do I need a new website first?', a: 'Not always. We audit the current site and advise whether targeted fixes or a rebuild will serve your goals.' }
  ],
  extraSections: [
    {
      eyebrow: 'How channels work together',
      title: 'One audience, several roles',
      intro: 'Each channel plays a different part in the same customer journey.',
      columns: [
        { title: 'Be found', items: ['SEO and local search', 'Google Ads for existing demand', 'Content answering buyer questions'] },
        { title: 'Build interest', items: ['Social media content', 'Paid social and video', 'Retargeting past visitors'] },
        { title: 'Convert and retain', items: ['Landing pages and forms', 'Email and WhatsApp follow-up', 'Reviews and referrals'] }
      ]
    }
  ]
};

export const DigitalMarketing = () => <ServiceDetailLayout data={DATA} />;
export default DigitalMarketing;
