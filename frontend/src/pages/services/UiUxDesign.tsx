import { PenTool } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Technology & Development · UI/UX Design',
  title: 'Interfaces People Understand the First Time.',
  subtitle: 'Research-driven UX and polished UI design for websites, apps and dashboards, validated with real users before a line of code is written.',
  slug: 'ui-ux-design',
  art: 'design',
  icon: PenTool,
  seoTitle: 'UI/UX Design Services: Research, Prototypes, Design Systems | Qevnaro',
  seoDescription: 'UX research, information architecture, wireframes, prototypes, UI design, design systems and usability testing for web and mobile products.',
  overview: [
    'Design decisions made early are the cheapest to change. Qevnaro starts by understanding who uses your product, what they are trying to do and where they get stuck, then shapes structure and interface around those findings rather than around opinion.',
    'The result is a set of tested flows, a consistent visual language and a component library that developers can build from directly, which reduces rework and keeps future screens consistent.'
  ],
  whyNeeded: {
    heading: 'Why design deserves its own phase',
    points: [
      { title: 'Confusion is expensive', desc: 'Unclear navigation and labels create support requests and abandoned sign-ups.' },
      { title: 'Prototypes are cheaper than code', desc: 'Testing a clickable prototype surfaces problems before engineering time is spent.' },
      { title: 'Consistency builds trust', desc: 'A shared design system makes products feel coherent and speeds up new feature work.' },
      { title: 'Accessibility widens reach', desc: 'Readable contrast, keyboard support and clear structure help more people use your product.' }
    ]
  },
  problemsSolved: [
    { title: 'Features nobody can find', problem: 'Organic growth of menus and screens leaves users lost.', solution: 'Information architecture and card-sorting to restructure navigation around user mental models.' },
    { title: 'Design and development disagree', problem: 'Hand-offs without specifications cause inconsistent implementation.', solution: 'Component libraries, tokens and annotated specs developers can build from.' },
    { title: 'Opinion-driven redesigns', problem: 'Stakeholder preferences override evidence from users.', solution: 'Usability testing and analytics review to ground decisions in observed behaviour.' }
  ],
  deliverables: [
    'Stakeholder and user research summary',
    'Personas and journey maps',
    'Information architecture and sitemap',
    'Low-fidelity wireframes',
    'High-fidelity UI screens for all key states',
    'Interactive prototype',
    'Design system with tokens and components',
    'Usability test report with recommendations',
    'Accessibility review notes',
    'Developer hand-off files and specifications'
  ],
  subServices: [
    { title: 'UX research', desc: 'Interviews, surveys, competitor review and analytics analysis to understand real needs.' },
    { title: 'Information architecture', desc: 'Sitemaps, navigation models and content hierarchy that make sense to users.' },
    { title: 'User flows and journey mapping', desc: 'Task-by-task paths showing steps, decisions and friction points.' },
    { title: 'Wireframing', desc: 'Low-fidelity layouts that settle structure before visual styling.' },
    { title: 'Prototyping', desc: 'Clickable Figma prototypes for stakeholder review and user testing.' },
    { title: 'UI design', desc: 'Typography, colour, spacing, iconography and layouts for web and mobile.' },
    { title: 'Design systems', desc: 'Reusable tokens, components and usage guidelines for scalable consistency.' },
    { title: 'Usability testing', desc: 'Moderated or remote sessions that reveal where users hesitate or fail.' },
    { title: 'Dashboard and SaaS design', desc: 'Data-dense interfaces designed for clarity, filtering and role-based views.' },
    { title: 'UX audit and redesign', desc: 'Heuristic evaluation of existing products with prioritised fixes.' }
  ],
  methodology: [
    { step: '01', title: 'Understand', desc: 'Goals, users, constraints and existing data are reviewed.' },
    { step: '02', title: 'Structure', desc: 'Information architecture, flows and wireframes establish the skeleton.' },
    { step: '03', title: 'Design', desc: 'Visual design and a design system give the product its look and consistency.' },
    { step: '04', title: 'Test', desc: 'Prototypes are tested with representative users and refined.' },
    { step: '05', title: 'Hand off', desc: 'Specifications and assets are delivered, with support during implementation.' }
  ],
  toolsAndTech: [
    { category: 'Design', items: ['Figma', 'FigJam', 'Prototyping', 'Design tokens'] },
    { category: 'Research', items: ['Interviews', 'Surveys', 'Heatmaps', 'Session recordings'] },
    { category: 'Hand-off', items: ['Component libraries', 'Annotated specs', 'Storybook-ready naming'] }
  ],
  whoNeedsThis: [
    'Teams planning a new product or major redesign',
    'SaaS companies with high drop-off during onboarding',
    'Businesses whose site gets traffic but few enquiries',
    'Startups needing a clickable prototype for investors or pilots',
    'Companies with inconsistent screens across products',
    'Internal tool owners whose staff avoid the current system'
  ],
  businessOutcomes: [
    { metric: 'Clearer', label: 'Navigation', desc: 'Structures that match how users think about your product.' },
    { metric: 'Faster', label: 'Development', desc: 'Specifications and components that reduce back-and-forth in build.' },
    { metric: 'Validated', label: 'Decisions', desc: 'Design choices supported by testing instead of guesswork.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'Web Development', desc: 'Build the approved design.', href: '/services/web-development' },
    { title: 'Mobile App Development', desc: 'Turn prototypes into apps.', href: '/services/mobile-app-development' },
    { title: 'Branding', desc: 'Align the interface with a strong identity.', href: '/services/branding' }
  ],
  faqs: [
    { q: 'What is the difference between UX and UI?', a: 'UX covers research, structure and flows: how it works. UI covers the visual layer: how it looks and feels. Both are needed.' },
    { q: 'Do I get editable design files?', a: 'Yes. You receive the Figma files, design system and exports.' },
    { q: 'Can you redesign only part of my product?', a: 'Yes. We can scope an audit, a single flow or a full redesign.' },
    { q: 'How do you test usability?', a: 'We run task-based sessions on prototypes with representative users and summarise findings with prioritised changes.' },
    { q: 'Will developers be able to use the designs?', a: 'Yes. Components, spacing and states are documented so any developer can implement them, including ours.' }
  ]
};

export const UiUxDesign = () => <ServiceDetailLayout data={DATA} />;
export default UiUxDesign;
