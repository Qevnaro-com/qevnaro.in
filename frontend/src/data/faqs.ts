export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export const GLOBAL_FAQS: FAQItem[] = [
  {
    q: 'What services does Qevnaro provide?',
    a: 'Qevnaro is a technology and digital growth agency. We design and build websites, web applications and mobile apps, and we run the marketing that helps them perform: SEO and GEO, paid advertising, social media, branding and content. We also integrate AI and automation into business workflows and provide ongoing technical support.',
    category: 'General',
  },
  {
    q: 'Can I hire Qevnaro for only one service?',
    a: 'Yes. Many engagements start with a single need, such as a website, a Google Ads setup or a brand refresh. Because our design, engineering and marketing teams work together, you can add other services later without starting from scratch or re-briefing a new vendor.',
    category: 'Engagements',
  },
  {
    q: 'Do you build custom websites and mobile apps?',
    a: 'Yes. We build custom websites, web applications and mobile apps, including cross-platform apps with technologies such as React Native and Flutter. We choose the stack according to your goals, budget and long-term needs, and we can also build on top of platforms like Shopify or WooCommerce where that is the better fit.',
    category: 'Engineering',
  },
  {
    q: 'Do you offer website maintenance?',
    a: 'Yes. Maintenance can include updates, security patches, backups, performance monitoring, content changes and small improvements. Scope and frequency depend on your site and how critical it is to your business, and we agree this with you in writing.',
    category: 'Engineering',
  },
  {
    q: 'What does digital marketing include?',
    a: 'Depending on your goals, it can include search engine optimisation, paid campaigns on Google, Meta and LinkedIn, social media management, content, email and analytics. We start by agreeing which channels make sense for your audience and budget, then set up tracking so results can be measured and the plan adjusted.',
    category: 'Marketing',
  },
  {
    q: 'What is the difference between SEO and GEO?',
    a: 'SEO (search engine optimisation) focuses on helping your pages rank in traditional search results. GEO (generative engine optimisation) focuses on making your content clear, structured and trustworthy so AI-powered answer engines can understand and reference it. Neither can guarantee rankings or citations.',
    category: 'Search',
  },
  {
    q: 'How long does a website project take?',
    a: 'We do not offer a fixed timeline up front because it depends on several factors: the number and complexity of pages, custom features and integrations, how much design and content work is needed, and how quickly feedback and approvals come in. After discovery, we give you a scoped plan with milestones so you know what to expect.',
    category: 'Process',
  },
  {
    q: 'Can you manage our social media accounts?',
    a: 'Yes. We can plan content, create posts and creative, schedule publishing, engage with your audience and report on performance. We agree the platforms, posting cadence and approval process with you first so the voice stays consistent with your brand.',
    category: 'Marketing',
  },
  {
    q: 'Do you manage Google and Meta Ads?',
    a: 'Yes. We handle campaign strategy, setup, creative, audience targeting, conversion tracking, optimisation and reporting. Advertising spend is paid directly to the platforms and is separate from our management fees. We cannot guarantee specific results, but we focus on measurement and continuous improvement.',
    category: 'Marketing',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. We work with startups, small and growing businesses as well as established companies. For earlier-stage teams we can recommend a phased approach: launch the essentials first, then expand as the business grows.',
    category: 'Engagements',
  },
  {
    q: 'Can AI be integrated into our existing business?',
    a: 'In many cases, yes. Typical examples include chat assistants using LLM integrations, retrieval-augmented generation over your own documents, workflow automation and CRM integrations. We start by identifying a use case with clear value and then assess data, privacy and integration needs before building.',
    category: 'AI & Automation',
  },
  {
    q: 'Do you provide ongoing technical support?',
    a: 'Yes. After launch we can provide ongoing support for fixes, monitoring, hosting and infrastructure, feature updates and optimisation. Support arrangements are tailored to your needs and agreed in advance.',
    category: 'Engineering',
  },
  {
    q: 'How do I contact Qevnaro?',
    a: 'Connect directly with us on WhatsApp (+91 87965 30323), email qevnaro@gmail.com, or give us a direct call. We respond in under 15 minutes during IST working hours.',
    category: 'General',
  },
];
