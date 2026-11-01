import { Workflow } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'AI & Business Automation · Marketing Automation',
  title: 'Marketing Workflows That Run Without Manual Chasing.',
  subtitle: 'CRM setup, lead scoring, nurture journeys and cross-channel triggers that make sure every enquiry is captured, routed and followed up.',
  slug: 'marketing-automation',
  art: 'ai',
  icon: Workflow,
  seoTitle: 'Marketing Automation & CRM Workflows | Qevnaro',
  seoDescription: 'Marketing automation: CRM setup, lead capture, scoring, nurture sequences and cross-channel workflows that remove manual follow-up.',
  overview: [
    'Many businesses lose leads not to competitors but to slow follow-up: an enquiry sits in an inbox, a form entry never reaches the sales team, a past customer is never contacted again. Marketing automation closes those gaps with defined rules.',
    'Qevnaro maps your lead journey, selects or configures the right CRM and automation platform, then builds triggers, scoring, routing and messaging. Where it makes sense, we add AI-assisted steps while keeping people in control of important decisions.'
  ],
  whyNeeded: {
    heading: 'What automation fixes',
    points: [
      { title: 'Speed to respond', desc: 'Prompt replies keep interest warm while the enquiry is fresh.' },
      { title: 'One source of truth', desc: 'A CRM keeps contact history, stage and ownership visible to everyone.' },
      { title: 'Right message, right time', desc: 'Behaviour-based triggers send relevant content instead of generic blasts.' },
      { title: 'Less repetitive work', desc: 'Data entry, reminders and status updates happen automatically.' }
    ]
  },
  problemsSolved: [
    { title: 'Leads falling through gaps', problem: 'Forms, calls, WhatsApp and ads all feed different places.', solution: 'Centralised capture into a CRM with automatic assignment and alerts.' },
    { title: 'Sales chasing cold leads', problem: 'Every enquiry is treated the same regardless of readiness.', solution: 'Lead scoring based on actions and profile to prioritise outreach.' },
    { title: 'Customers never contacted again', problem: 'No process exists for repeat purchase or referrals.', solution: 'Post-sale journeys, reminders and win-back triggers.' }
  ],
  deliverables: [
    'Lead journey and process mapping',
    'CRM selection and configuration',
    'Form, ad and WhatsApp lead capture integrations',
    'Pipeline stages and automation rules',
    'Lead scoring model',
    'Nurture sequences across email and messaging',
    'Task and notification workflows for sales',
    'Dashboards for pipeline and campaign performance',
    'Data migration from spreadsheets',
    'Team training and documentation'
  ],
  subServices: [
    { title: 'CRM implementation', desc: 'Setup of HubSpot, Zoho, Pipedrive or similar with fields, stages and users.' },
    { title: 'Lead capture automation', desc: 'Connecting website forms, ad lead forms, calls and chats to a single pipeline.' },
    { title: 'Lead scoring and routing', desc: 'Rules that rank leads and assign them to the right person.' },
    { title: 'Email and WhatsApp nurture flows', desc: 'Consent-based sequences triggered by behaviour and stage.' },
    { title: 'Workflow automation', desc: 'Zapier, Make and n8n workflows that connect tools without code.' },
    { title: 'Appointment and reminder automation', desc: 'Booking links, confirmations and reminders to reduce no-shows.' },
    { title: 'Reporting dashboards', desc: 'Pipeline, source and campaign dashboards for managers.' },
    { title: 'Data cleaning and migration', desc: 'Deduplicating contacts and importing history into the new system.' },
    { title: 'Customer lifecycle journeys', desc: 'Onboarding, renewal, referral and win-back automations.' }
  ],
  methodology: [
    { step: '01', title: 'Map the journey', desc: 'We document how leads currently arrive, move and stall.' },
    { step: '02', title: 'Design the system', desc: 'Pipeline stages, scoring, triggers and tools are specified.' },
    { step: '03', title: 'Build and connect', desc: 'The CRM, forms, automations and messaging are configured and integrated.' },
    { step: '04', title: 'Test with real scenarios', desc: 'Edge cases, failures and duplicates are tested before going live.' },
    { step: '05', title: 'Train and refine', desc: 'Teams are trained and rules adjusted after real-world use.' }
  ],
  toolsAndTech: [
    { category: 'CRM', items: ['HubSpot', 'Zoho CRM', 'Pipedrive', 'Custom CRMs'] },
    { category: 'Automation', items: ['Zapier', 'Make', 'n8n', 'Webhooks and APIs'] },
    { category: 'Messaging', items: ['Email platforms', 'WhatsApp Business Platform', 'SMS gateways'] }
  ],
  whoNeedsThis: [
    'Businesses tracking leads in spreadsheets or inboxes',
    'Sales teams losing track of follow-ups',
    'Companies running ads that bring leads from several sources',
    'Service firms with appointment-driven sales',
    'Subscription and repeat-purchase businesses',
    'Teams spending hours on repetitive admin'
  ],
  businessOutcomes: [
    { metric: 'Faster', label: 'Response', desc: 'Leads acknowledged and routed as soon as they arrive.' },
    { metric: 'Visible', label: 'Pipeline', desc: 'A shared view of every opportunity and its next step.' },
    { metric: 'Lighter', label: 'Admin load', desc: 'Repetitive tasks handled by workflows instead of staff time.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'Email Marketing', desc: 'Messaging that runs inside your flows.', href: '/services/email-marketing' },
    { title: 'AI Automation', desc: 'Add AI to business processes.', href: '/services/ai-automation' },
    { title: 'Chatbots and Agents', desc: 'Capture and qualify leads in conversation.', href: '/services/chatbots-agents' }
  ],
  faqs: [
    { q: 'Which CRM should I choose?', a: 'It depends on team size, integrations and budget. We compare a short list against your needs and recommend one.' },
    { q: 'Can you move our spreadsheet data into a CRM?', a: 'Yes. We clean, deduplicate and import it with sensible field mapping.' },
    { q: 'Will automation make communication feel robotic?', a: 'Not if designed well. We write messages in your voice and keep human handoffs for important moments.' },
    { q: 'Is my customer data safe?', a: 'We use role-based access, minimal data collection and reputable platforms, and document where data flows.' },
    { q: 'Can the system grow later?', a: 'Yes. We build modular workflows so new stages, channels and tools can be added.' }
  ]
};

export const MarketingAutomation = () => <ServiceDetailLayout data={DATA} />;
export default MarketingAutomation;
