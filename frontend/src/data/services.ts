export interface ServiceMeta {
  slug: string;
  category: 'Digital Experience' | 'Digital Growth' | 'Creative & Brand' | 'Technology & Automation';
  badge: string;
  title: string;
  shortDesc: string;
  iconName: string;
  artKind: 'code' | 'design' | 'growth' | 'ai' | 'cloud' | 'search' | 'brand' | 'globe';
}

export const SERVICES_LIST: ServiceMeta[] = [
  // Digital Experience
  {
    slug: 'web-development',
    category: 'Digital Experience',
    badge: 'Technology & Development · Web Development',
    title: 'Website Development',
    shortDesc: 'Custom business websites, web applications, and landing pages engineered for speed and conversion.',
    iconName: 'Code2',
    artKind: 'code',
  },
  {
    slug: 'mobile-app-development',
    category: 'Digital Experience',
    badge: 'Technology & Development · Mobile Apps',
    title: 'Mobile App Development',
    shortDesc: 'iOS, Android and cross-platform mobile apps built with clean code and intuitive UX.',
    iconName: 'Smartphone',
    artKind: 'code',
  },
  {
    slug: 'ecommerce-development',
    category: 'Digital Experience',
    badge: 'Digital Commerce · Stores',
    title: 'E-commerce Development',
    shortDesc: 'High-performing storefronts on Shopify, WooCommerce or custom headless architecture.',
    iconName: 'ShoppingBag',
    artKind: 'globe',
  },
  {
    slug: 'ui-ux-design',
    category: 'Digital Experience',
    badge: 'Design & Creative · UI/UX',
    title: 'UI/UX Design',
    shortDesc: 'User research, wireframes, prototypes and design systems built around customer clarity.',
    iconName: 'Palette',
    artKind: 'design',
  },

  // Digital Growth
  {
    slug: 'digital-marketing',
    category: 'Digital Growth',
    badge: 'Digital Marketing & Growth · Strategy',
    title: 'Digital Marketing',
    shortDesc: 'Full-funnel digital strategy connecting organic, paid and retention channels.',
    iconName: 'TrendingUp',
    artKind: 'growth',
  },
  {
    slug: 'seo',
    category: 'Digital Growth',
    badge: 'Search Visibility · SEO',
    title: 'Search Engine Optimization',
    shortDesc: 'Technical, on-page, off-page, local and e-commerce SEO with transparent reporting.',
    iconName: 'Search',
    artKind: 'search',
  },
  {
    slug: 'geo-aeo',
    category: 'Digital Growth',
    badge: 'Search Visibility · GEO / AEO',
    title: 'GEO & AEO (AI Search)',
    shortDesc: 'Structuring brand entities and knowledge for generative engines and conversational AI.',
    iconName: 'Bot',
    artKind: 'search',
  },
  {
    slug: 'social-media-marketing',
    category: 'Digital Growth',
    badge: 'Digital Marketing & Growth · Social Media',
    title: 'Social Media Marketing',
    shortDesc: 'Consistent organic publishing, community management and short-form video production.',
    iconName: 'Share2',
    artKind: 'brand',
  },
  {
    slug: 'performance-marketing',
    category: 'Digital Growth',
    badge: 'Digital Marketing & Growth · Performance',
    title: 'Performance Marketing (Ads)',
    shortDesc: 'Google, YouTube, Meta and LinkedIn campaigns focused on cost-per-lead and ROI.',
    iconName: 'Target',
    artKind: 'growth',
  },

  // Creative & Brand
  {
    slug: 'branding',
    category: 'Creative & Brand',
    badge: 'Creative & Brand · Identity',
    title: 'Branding & Identity',
    shortDesc: 'Brand strategy, logos, typography, visual guidelines and distinct market positioning.',
    iconName: 'Sparkles',
    artKind: 'brand',
  },
  {
    slug: 'content-marketing',
    category: 'Creative & Brand',
    badge: 'Creative & Brand · Content',
    title: 'Content Marketing',
    shortDesc: 'Editorial strategy, SEO articles, whitepapers and customer case stories.',
    iconName: 'FileText',
    artKind: 'brand',
  },
  {
    slug: 'video-creative-production',
    category: 'Creative & Brand',
    badge: 'Creative & Brand · Video',
    title: 'Video & Creative Production',
    shortDesc: 'Reels, brand films, product demos and high-impact social video assets.',
    iconName: 'Video',
    artKind: 'design',
  },
  {
    slug: 'email-marketing',
    category: 'Creative & Brand',
    badge: 'Retention & CRM · Email & WhatsApp',
    title: 'Email & WhatsApp Marketing',
    shortDesc: 'Automated welcome sequences, abandoned cart triggers and lifecycle retention flows.',
    iconName: 'Mail',
    artKind: 'growth',
  },

  // Technology & Automation
  {
    slug: 'marketing-automation',
    category: 'Technology & Automation',
    badge: 'Technology · Marketing Automation',
    title: 'Marketing Automation',
    shortDesc: 'CRM integration, lead scoring, and automated cross-channel marketing workflows.',
    iconName: 'Workflow',
    artKind: 'ai',
  },
  {
    slug: 'ai-automation',
    category: 'Technology & Automation',
    badge: 'Technology · AI Automation',
    title: 'AI Business Automation',
    shortDesc: 'Custom RAG assistants, multimodal OCR extraction and autonomous workflow pipelines.',
    iconName: 'Cpu',
    artKind: 'ai',
  },
  {
    slug: 'chatbots-agents',
    category: 'Technology & Automation',
    badge: 'Technology · Conversational Systems',
    title: 'AI Chatbots & Agents',
    shortDesc: '24/7 website and WhatsApp conversational bots with live CRM and calendar sync.',
    iconName: 'MessageSquare',
    artKind: 'ai',
  },
  {
    slug: 'cloud-devops',
    category: 'Technology & Automation',
    badge: 'Infrastructure · Cloud & DevOps',
    title: 'Cloud & DevOps Engineering',
    shortDesc: 'AWS and Azure cloud setup, Docker containerization, CI/CD pipelines and 24/7 monitoring.',
    iconName: 'Cloud',
    artKind: 'cloud',
  },
];

export const getServiceMeta = (slug: string): ServiceMeta | undefined =>
  SERVICES_LIST.find((s) => s.slug === slug);
