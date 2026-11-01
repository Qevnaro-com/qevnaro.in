import { Smartphone } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Technology & Development · Mobile Apps',
  title: 'Mobile Experiences Designed for Real-World Use.',
  subtitle: 'Android, iOS and cross-platform apps built around how people actually use their phones: one-handed, on unreliable networks and in a hurry.',
  slug: 'mobile-app-development',
  art: 'code',
  icon: Smartphone,
  seoTitle: 'Mobile App Development (Android, iOS, Flutter) | Qevnaro',
  seoDescription: 'Native Android and iOS apps and cross-platform builds in React Native or Flutter, with backend, payments and third-party integrations.',
  overview: [
    'A good mobile app earns a place on the home screen by doing one job well. We begin with the user journey, the devices your audience really owns and the connectivity they really have, and only then choose the technology.',
    'Qevnaro builds the full stack behind the screen: the app, the backend, authentication, push notifications, payment flows and the integrations that connect it to your existing systems. We also handle store submission and post-launch updates.'
  ],
  whyNeeded: {
    heading: 'When a mobile app is the right answer',
    points: [
      { title: 'Repeat, habitual use', desc: 'Apps suit tasks customers perform often, such as ordering, booking, tracking or learning.' },
      { title: 'Device capabilities', desc: 'Camera, location, biometrics, offline storage and notifications are far richer than in a browser.' },
      { title: 'Operational efficiency', desc: 'Field staff, delivery teams and technicians work faster with purpose-built mobile tools.' },
      { title: 'Direct engagement', desc: 'Push notifications and in-app messaging give you a consented channel to reach customers.' }
    ]
  },
  problemsSolved: [
    { title: 'Apps that feel awkward on a phone', problem: 'Desktop thinking squeezed into small screens leads to confusing navigation and abandoned tasks.', solution: 'Thumb-friendly flows, platform conventions and prototype testing before development.' },
    { title: 'Doubling cost across two platforms', problem: 'Separate Android and iOS teams multiply cost and cause feature drift.', solution: 'We recommend native or cross-platform per use case, and share logic where it is safe to do so.' },
    { title: 'An app disconnected from the business', problem: 'Apps that do not talk to billing, inventory or CRM create manual re-entry.', solution: 'Backend and API design that links the app to the systems your team already uses.' }
  ],
  deliverables: [
    'User flows, wireframes and clickable prototype',
    'App UI design aligned to Material and Apple guidelines',
    'Android and/or iOS application build',
    'Backend services, database and admin panel',
    'Authentication and role management',
    'Payment gateway and third-party SDK integration',
    'Push notification setup',
    'Device and OS compatibility testing',
    'App Store and Google Play submission support',
    'Release notes, documentation and source handover'
  ],
  subServices: [
    { title: 'Native Android development', desc: 'Kotlin-based apps that use the full Android platform and performance profile.' },
    { title: 'Native iOS development', desc: 'Swift-based apps that follow Apple design and review requirements.' },
    { title: 'React Native apps', desc: 'One JavaScript/TypeScript codebase delivering iOS and Android, ideal for teams with web expertise.' },
    { title: 'Flutter apps', desc: 'Dart-based cross-platform apps with consistent custom interfaces and strong animation support.' },
    { title: 'Backend and API development', desc: 'Secure server logic, databases and APIs that power the app and scale with usage.' },
    { title: 'Payment integration', desc: 'UPI, cards and wallets through established payment gateways, with refund and reconciliation flows.' },
    { title: 'Third-party integrations', desc: 'Maps, SMS, email, analytics, CRM, ERP and social login connected through documented APIs.' },
    { title: 'Mobile UI/UX design', desc: 'Interface design focused on accessibility, onboarding and clear task completion.' },
    { title: 'Store deployment', desc: 'Listing assets, privacy declarations, review handling and release management.' },
    { title: 'Maintenance and updates', desc: 'OS compatibility updates, bug fixes, dependency upgrades and feature releases.' }
  ],
  methodology: [
    { step: '01', title: 'Scope and platform choice', desc: 'We define the core journey and choose native, React Native or Flutter based on your needs and budget.' },
    { step: '02', title: 'Design and prototype', desc: 'Interactive prototypes are tested with real users before engineering starts.' },
    { step: '03', title: 'Build in sprints', desc: 'App, backend and integrations are delivered in builds you can install and review.' },
    { step: '04', title: 'Test on real devices', desc: 'We test across screen sizes, OS versions and poor network conditions.' },
    { step: '05', title: 'Release and support', desc: 'Store submission, monitoring crash reports and planned post-launch updates.' }
  ],
  toolsAndTech: [
    { category: 'App frameworks', items: ['Kotlin', 'Swift', 'React Native', 'Flutter'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Firebase', 'REST / GraphQL'] },
    { category: 'Services', items: ['Push notifications', 'Payment gateways', 'Crash reporting', 'Analytics SDKs'] }
  ],
  whoNeedsThis: [
    'Startups building a mobile-first product',
    'Retail and food businesses wanting ordering or loyalty apps',
    'Service companies with field teams needing mobile workflows',
    'Healthcare and wellness providers offering booking or tracking',
    'Education businesses delivering content and progress tracking',
    'Companies replacing paper or spreadsheet processes'
  ],
  businessOutcomes: [
    { metric: 'Smoother', label: 'User journeys', desc: 'Flows tested on real devices so customers complete tasks with less friction.' },
    { metric: 'Connected', label: 'Operations', desc: 'App data flowing into your backend and business tools without re-entry.' },
    { metric: 'Maintainable', label: 'Codebase', desc: 'Documented, versioned code that your team or ours can extend.' }
  ],
  relatedCaseStudies: [
    { title: 'PulsenCare', desc: 'A healthcare-focused product from our portfolio.', href: '/work/pulsencare', tag: 'Case study' },
    { title: 'MenuSQR', desc: 'A digital menu and ordering product from our portfolio.', href: '/work/menusqr', tag: 'Case study' }
  ],
  relatedServices: [
    { title: 'UI/UX Design', desc: 'Research and prototyping for app interfaces.', href: '/services/ui-ux-design' },
    { title: 'Web Development', desc: 'Web companions, admin panels and landing pages.', href: '/services/web-development' },
    { title: 'Cloud and DevOps', desc: 'Scalable backend hosting and release pipelines.', href: '/services/cloud-devops' }
  ],
  faqs: [
    { q: 'Native or cross-platform: which should I choose?', a: 'Native suits performance-critical or platform-specific features. React Native or Flutter suit most business apps where one codebase reduces cost and speeds delivery. We recommend based on your requirements.' },
    { q: 'Do you build the backend too?', a: 'Yes. We design the database, APIs, admin panel and authentication, or connect to your existing backend.' },
    { q: 'Can you integrate payments?', a: 'Yes, through established payment gateways. Gateway approval and fees are set by the provider, and we guide you through onboarding.' },
    { q: 'Do you publish the app to the stores?', a: 'We prepare listings and submit builds. Store approval is at the discretion of Apple and Google, so we design to their guidelines to reduce rejections.' },
    { q: 'Who owns the source code?', a: 'You do, subject to the agreement, with documentation provided at handover.' }
  ]
};

export const MobileAppDevelopment = () => <ServiceDetailLayout data={DATA} />;
export default MobileAppDevelopment;
