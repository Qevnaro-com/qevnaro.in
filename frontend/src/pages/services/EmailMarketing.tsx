import { Mail } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Content & Communication · Email and WhatsApp',
  title: 'Email and WhatsApp Marketing That Respects the Inbox.',
  subtitle: 'Consent-based campaigns, lifecycle flows and WhatsApp Business messaging that nurture leads and bring customers back, within platform rules and data-protection expectations.',
  slug: 'email-marketing',
  art: 'growth',
  icon: Mail,
  seoTitle: 'Email & WhatsApp Marketing Services | Qevnaro',
  seoDescription: 'Email campaigns, automated flows and WhatsApp Business messaging built on user consent, platform policies and data protection.',
  disclaimer: 'We message only people who have opted in, follow the policies of email providers and Meta\'s WhatsApp Business Platform, and recommend you seek legal advice on data-protection obligations for your market.',
  overview: [
    'Email and WhatsApp reach people who have already shown interest, which makes them among the most cost-effective channels. They also demand care. Messages sent without consent or relevance damage deliverability, brand reputation and compliance standing.',
    'Qevnaro builds list-growth, segmentation, campaigns and automated flows with consent at the centre. We set up authentication, design templates, write the copy and report on engagement and conversions, and we configure WhatsApp Business messaging through approved channels.'
  ],
  whyNeeded: {
    heading: 'Why owned channels matter',
    points: [
      { title: 'You own the list', desc: 'Unlike social reach, your subscriber base is not subject to algorithm changes.' },
      { title: 'Lifecycle messaging', desc: 'Welcome, abandoned-cart, post-purchase and re-engagement messages meet customers at the right moments.' },
      { title: 'Conversational convenience', desc: 'Many customers prefer to receive updates and ask questions on WhatsApp.' },
      { title: 'Low cost per contact', desc: 'Once a list exists, additional sends cost little compared with paid acquisition.' }
    ]
  },
  problemsSolved: [
    { title: 'Emails landing in spam', problem: 'Missing authentication, poor list hygiene or irrelevant content hurts deliverability.', solution: 'SPF, DKIM and DMARC setup, list cleaning, warm-up and engagement-based sending.' },
    { title: 'One message for everyone', problem: 'Blasting the entire list ignores differences in interest and stage.', solution: 'Segmentation by behaviour, purchase history and preferences, with tailored messages.' },
    { title: 'Leads waiting for a reply', problem: 'Manual follow-up on enquiries is slow and inconsistent.', solution: 'Automated sequences and WhatsApp responses that start the conversation promptly.' }
  ],
  deliverables: [
    'Email platform selection and setup',
    'Domain authentication and deliverability checks',
    'Consent capture forms and preference centre',
    'List segmentation plan',
    'Responsive email template design',
    'Campaign and newsletter copywriting',
    'Automated flows: welcome, nurture, cart, post-purchase',
    'WhatsApp Business Platform setup and message templates',
    'Reporting on opens, clicks and conversions',
    'Data-handling and unsubscribe process documentation'
  ],
  subServices: [
    { title: 'Email strategy', desc: 'Goals, segments, cadence and content plan.' },
    { title: 'Campaign and newsletter management', desc: 'Design, copy, scheduling and analysis of regular sends.' },
    { title: 'Lifecycle automation', desc: 'Welcome series, abandoned cart, win-back and post-purchase flows.' },
    { title: 'Lead nurture sequences', desc: 'Educational sequences for longer B2B and high-consideration sales.' },
    { title: 'List building and consent', desc: 'Opt-in forms, lead magnets and double opt-in where suitable.' },
    { title: 'Deliverability management', desc: 'Authentication, sender reputation monitoring and list hygiene.' },
    { title: 'WhatsApp Business messaging', desc: 'Official API setup, approved templates, broadcasts to opted-in contacts and catalogues.' },
    { title: 'WhatsApp customer support flows', desc: 'Order updates, appointment reminders and quick replies.' },
    { title: 'A/B testing', desc: 'Subject lines, send times, content and offers tested methodically.' },
    { title: 'CRM integration', desc: 'Syncing contacts, tags and events between your CRM, store and messaging tools.' }
  ],
  methodology: [
    { step: '01', title: 'Foundation', desc: 'Platform, authentication, consent mechanisms and data flows are set up.' },
    { step: '02', title: 'Segmentation and strategy', desc: 'Audiences and journeys are mapped to goals.' },
    { step: '03', title: 'Build', desc: 'Templates, copy and automations are created and tested.' },
    { step: '04', title: 'Send and monitor', desc: 'Campaigns launch while we watch deliverability and engagement.' },
    { step: '05', title: 'Refine', desc: 'Testing and reporting inform improved flows over time.' }
  ],
  toolsAndTech: [
    { category: 'Email platforms', items: ['Mailchimp', 'Klaviyo', 'Brevo', 'HubSpot'] },
    { category: 'WhatsApp', items: ['WhatsApp Business Platform (API)', 'Approved message templates', 'Official solution providers'] },
    { category: 'Data', items: ['CRM sync', 'Webhooks', 'Preference centres', 'Analytics and UTM tags'] }
  ],
  whoNeedsThis: [
    'E-commerce brands wanting repeat purchase and cart recovery',
    'Service firms with long enquiry-to-customer timelines',
    'Clinics, salons and studios sending reminders',
    'B2B companies nurturing leads over months',
    'Businesses with a list that is rarely contacted',
    'Teams wanting WhatsApp support without chaos'
  ],
  businessOutcomes: [
    { metric: 'Consistent', label: 'Follow-up', desc: 'Every lead and customer receives timely, relevant messages.' },
    { metric: 'Compliant', label: 'Practices', desc: 'Consent, opt-out and platform policies built into the process.' },
    { metric: 'Trackable', label: 'Engagement', desc: 'Clicks, replies and conversions tied back to campaigns.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'Marketing Automation', desc: 'Connect messaging to CRM workflows.', href: '/services/marketing-automation' },
    { title: 'Content Marketing', desc: 'Copy and content for your sends.', href: '/services/content-marketing' },
    { title: 'Chatbots and Agents', desc: 'Automate WhatsApp conversations.', href: '/services/chatbots-agents' }
  ],
  faqs: [
    { q: 'Can I email a purchased list?', a: 'We do not recommend or work with purchased lists. They breach most platform policies, hurt deliverability and often conflict with consent requirements.' },
    { q: 'How does WhatsApp marketing work?', a: 'Businesses use the official WhatsApp Business Platform. Marketing messages generally require opt-in and pre-approved templates, and Meta sets pricing and policy.' },
    { q: 'What about data protection?', a: 'We collect only needed data, record consent, honour unsubscribes and recommend you consult legal counsel regarding laws that apply to your audience, including India\'s DPDP Act.' },
    { q: 'Which email platform should I use?', a: 'It depends on list size, e-commerce needs and budget. We recommend after reviewing your stack.' },
    { q: 'How often should we send?', a: 'Frequency depends on audience and content value. We start modestly, test and adjust based on engagement and unsubscribe rates.' }
  ]
};

export const EmailMarketing = () => <ServiceDetailLayout data={DATA} />;
export default EmailMarketing;
