export type InsightCategory =
  | 'Web Development'
  | 'App Development'
  | 'Digital Marketing'
  | 'SEO'
  | 'GEO & AI Search'
  | 'Social Media'
  | 'Branding'
  | 'Business Technology'
  | 'Artificial Intelligence'
  | 'Automation';

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  'Web Development',
  'App Development',
  'Digital Marketing',
  'SEO',
  'GEO & AI Search',
  'Social Media',
  'Branding',
  'Business Technology',
  'Artificial Intelligence',
  'Automation',
];

export type InsightBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean };

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  featured?: boolean;
  related?: string[];
  blocks: InsightBlock[];
}

export const AUTHOR = 'Qevnaro Editorial Team';

export const slugifyHeading = (t: string) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const wordsOf = (blocks: InsightBlock[]) =>
  blocks.reduce((n, b) => n + (b.type === 'list' ? b.items.join(' ') : b.text).split(/\s+/).length, 0);

const raw: Omit<Insight, 'readingMinutes'>[] = [
  {
    slug: 'seo-vs-geo-aeo-explained',
    title: 'SEO vs GEO vs AEO: what is actually different, and what is just rebranding',
    excerpt:
      'Search now includes AI-generated answers. Here is an honest look at what changes, what stays the same, and where to spend effort.',
    category: 'GEO & AI Search',
    author: AUTHOR,
    date: '2026-09-18',
    featured: true,
    related: ['core-web-vitals-plain-language', 'landing-page-website-store-or-web-app'],
    blocks: [
      { type: 'paragraph', text: 'Over the last few years, people have started asking questions to AI assistants and reading AI-written summaries at the top of search results. A new vocabulary followed: GEO (generative engine optimization), AEO (answer engine optimization), and sometimes LLMO. Agencies sell them as brand-new disciplines. The reality is more nuanced, and understanding it will save you money.' },
      { type: 'heading', text: 'The three terms, defined plainly' },
      { type: 'list', items: [
        'SEO (search engine optimization) is the practice of making a site easy for search engines to crawl, understand and rank, so that people searching find it. It covers technical health, content, and authority signals such as links and mentions.',
        'AEO (answer engine optimization) means structuring content so that it can be lifted as a direct answer: featured snippets, voice answers, and "people also ask" style results.',
        'GEO (generative engine optimization) means making your content and brand more likely to be used, cited or mentioned when an AI system composes an answer from multiple sources.',
      ] },
      { type: 'paragraph', text: 'These overlap heavily. A page that is clear, accurate, well structured and trusted tends to do better in all three. Treat them as lenses on the same underlying work rather than three separate budgets.' },
      { type: 'heading', text: 'What stays the same' },
      { type: 'paragraph', text: 'AI answers are generally built on top of content that already exists on the web, often found through conventional search indexes. That means the fundamentals still decide whether you are even considered: your pages must be crawlable, indexable, fast enough to be fetched reliably, and genuinely useful. If a search engine cannot find or understand your page, an AI system that relies on that index is unlikely to use it either.' },
      { type: 'list', items: [
        'Technical foundations: working links, sensible URLs, a sitemap, no accidental blocking in robots rules.',
        'Original, accurate content that answers real questions better than the alternatives.',
        'Clear authorship and business identity, so readers and systems can tell who is behind the information.',
        'Reputation: being mentioned and recommended by credible third parties.',
      ] },
      { type: 'heading', text: 'What genuinely changes' },
      { type: 'paragraph', text: 'A few things do shift when answers are generated rather than listed. First, the unit of competition moves from the page to the passage. AI systems tend to pull short, self-contained explanations, so a paragraph that states a claim, gives the reason and stands on its own is more reusable than a long narrative that needs the surrounding context.' },
      { type: 'paragraph', text: 'Second, visibility is less about a single ranking position. In a generated answer you may be cited, paraphrased, mentioned by name, or absent. Measurement is correspondingly fuzzier, and results can vary between runs and between tools. Be wary of anyone who promises a guaranteed placement in AI answers; no one controls those systems.' },
      { type: 'paragraph', text: 'Third, entity clarity matters more. If your business name, services, location and expertise are described consistently across your site and the wider web, systems are less likely to confuse you with someone else or to leave you out.' },
      { type: 'heading', text: 'Practical steps that help across all three' },
      { type: 'list', ordered: true, items: [
        'Lead each page and section with a direct answer, then add detail. Write headings the way people phrase questions.',
        'Use structured data (schema markup) where it accurately describes the page, such as Organization, Article, FAQ content that genuinely appears on the page, or Product.',
        'Keep factual claims specific and checkable. Link to primary sources where it helps the reader.',
        'Make the About, Contact and author information easy to find and consistent everywhere you appear.',
        'Do not block legitimate crawlers by accident. Decide deliberately which bots you allow, and check your robots rules.',
        'Earn mentions: case studies, partnerships, press, directory listings and useful public resources.',
      ] },
      { type: 'heading', text: 'What to be sceptical about' },
      { type: 'paragraph', text: 'Be cautious with tactics that promise to "trick" AI systems: hidden text, mass-produced pages, or fabricated reviews. They carry real risk, they tend to age badly, and they work against the trust that all of these systems try to measure. Likewise, treat single-number "AI visibility scores" as directional indicators at best.' },
      { type: 'heading', text: 'Where to start' },
      { type: 'paragraph', text: 'If your site has technical problems or thin content, fix those first. That is classic SEO and it is the base for everything else. If the basics are sound, review your most important pages for clear answers, consistent entity information and good structure. Then track outcomes that matter to the business, such as enquiries and qualified traffic, rather than chasing every new acronym.' },
    ],
  },
  {
    slug: 'how-long-does-a-website-project-take',
    title: 'How long does a website project really take?',
    excerpt:
      'Timelines are driven less by design or code and more by decisions, content and feedback. Here is what moves the schedule.',
    category: 'Web Development',
    author: AUTHOR,
    date: '2026-08-27',
    related: ['landing-page-website-store-or-web-app', 'core-web-vitals-plain-language'],
    blocks: [
      { type: 'paragraph', text: 'Ask ten agencies how long a website takes and you will hear ten answers, usually followed by "it depends". That is honest, but not very useful. The good news is that what it depends on is fairly predictable. Once you know the drivers, you can plan a realistic schedule and avoid most delays.' },
      { type: 'heading', text: 'Rough ranges by project type' },
      { type: 'paragraph', text: 'These are general ranges from the industry, not promises. They assume reasonably prompt feedback and that content is available when needed.' },
      { type: 'list', items: [
        'A focused landing page: often one to three weeks.',
        'A small business website of five to ten pages: commonly four to eight weeks.',
        'A larger marketing site with many templates, integrations or multiple languages: eight to sixteen weeks or more.',
        'An online store: frequently six to twelve weeks, depending on catalogue size, payment and shipping setup.',
        'A custom web application: usually measured in months, often delivered in phases.',
      ] },
      { type: 'heading', text: 'What actually drives the timeline' },
      { type: 'paragraph', text: 'Design and development effort is the part people think about, and it is real. But in practice the schedule is mostly shaped by the following factors.' },
      { type: 'list', items: [
        'Scope clarity. A vague brief produces rework. Knowing your pages, goals and must-have features up front is the single biggest time saver.',
        'Content readiness. Copy, photos, product data and case studies are the most common cause of delay. A site cannot launch with placeholder text.',
        'Decision speed. Every review round that waits a week adds a week. A single named decision-maker shortens projects noticeably.',
        'Number of revision rounds. Two structured rounds are typical. Open-ended feedback stretches schedules.',
        'Integrations. Payment gateways, CRMs, booking systems and analytics each need setup and testing.',
        'Custom functionality. Anything beyond standard page types, such as calculators, portals or logins, adds design, build and testing time.',
        'Migration. Moving content from an old site, and setting up redirects to protect search visibility, takes careful work.',
      ] },
      { type: 'heading', text: 'The typical phases' },
      { type: 'list', ordered: true, items: [
        'Discovery and planning: goals, audience, sitemap, and content plan.',
        'Design: layouts and visual direction, reviewed and refined.',
        'Build: development, content entry and integrations.',
        'Testing: devices, browsers, forms, speed, accessibility and search basics.',
        'Launch: DNS, redirects, analytics, monitoring and a rollback plan.',
        'Post-launch: fixes, measurement and iteration.',
      ] },
      { type: 'paragraph', text: 'Phases can overlap. Content writing can start during design, and development of reusable components can begin before every page is signed off. Good planning uses this overlap without skipping the checkpoints that prevent expensive changes later.' },
      { type: 'heading', text: 'How to shorten a project without cutting corners' },
      { type: 'list', items: [
        'Start collecting content on day one, even in rough form.',
        'Nominate one decision-maker and agree review windows in advance.',
        'Launch a focused first version and add secondary pages afterwards.',
        'Reuse proven patterns for standard pages instead of designing everything from scratch.',
        'Agree what is explicitly out of scope, and put changes into a later phase.',
      ] },
      { type: 'heading', text: 'Red flags in a quoted timeline' },
      { type: 'paragraph', text: 'Be wary of extremely short promises for complex work, or timelines that do not mention your responsibilities such as content and feedback. A credible plan states assumptions, lists what is needed from you and by when, and explains what happens if those slip.' },
      { type: 'paragraph', text: 'A website is also never truly finished. Launch is the start of measurement and improvement. Plan for a short stabilisation period after go-live, and for ongoing updates, because the sites that perform best are the ones that keep evolving.' },
    ],
  },
  {
    slug: 'landing-page-website-store-or-web-app',
    title: 'Landing page, business website, online store or web app: which do you need?',
    excerpt:
      'Choosing the wrong format wastes budget. A simple way to match what you are building to what your business needs.',
    category: 'Business Technology',
    author: AUTHOR,
    date: '2026-07-14',
    related: ['how-long-does-a-website-project-take', 'rule-based-automation-vs-ai-assistants-vs-agents'],
    blocks: [
      { type: 'paragraph', text: 'Many projects start with the sentence "we need a website". Behind that sentence can be four quite different things, each with a different cost, timeline and maintenance burden. Choosing the right one early is one of the cheapest ways to avoid a project that disappoints.' },
      { type: 'heading', text: 'Landing page: one goal, one audience' },
      { type: 'paragraph', text: 'A landing page is a single focused page designed to get one action: a booking, a sign-up, a call. It suits campaigns, product launches, event registrations and testing a new offer. Because it has little navigation and one message, it is quick to build and easy to measure.' },
      { type: 'list', items: [
        'Choose it when you are running paid or social campaigns to a specific offer.',
        'Choose it when you need to validate demand before investing more.',
        'It is not enough on its own to explain a full business or rank for many topics.',
      ] },
      { type: 'heading', text: 'Business website: credibility and discovery' },
      { type: 'paragraph', text: 'A business website is a set of pages that explain who you are, what you do, and why someone should trust you: home, services, about, case studies, contact, and often a blog. It is the right default for service businesses, clinics, consultancies and professional firms, where visitors want to evaluate you before getting in touch.' },
      { type: 'list', items: [
        'Choose it when people research you before buying.',
        'Choose it when search visibility across several services matters.',
        'Add a content plan, since pages that answer real questions are what attract search traffic over time.',
      ] },
      { type: 'heading', text: 'Online store: catalogue, cart and fulfilment' },
      { type: 'paragraph', text: 'An online store lets people browse products, pay, and receive an order. It brings extra responsibilities: product data, payments, taxes, shipping rules, returns, inventory and customer support. Established store platforms handle much of this, and for most small and mid-sized sellers using one is more sensible than building from scratch.' },
      { type: 'list', items: [
        'Choose it when you sell a repeatable set of products or bookable services online.',
        'Plan operations, not just design: who packs, ships, and handles returns?',
        'Budget for ongoing work such as catalogue updates and performance tuning.',
      ] },
      { type: 'heading', text: 'Web application: custom logic and user accounts' },
      { type: 'paragraph', text: 'A web application is software that happens to run in the browser: dashboards, portals, booking engines, internal tools, marketplaces. Users log in, data is stored, and rules are applied. It is the most flexible option and also the most demanding, in cost, testing, security and long-term maintenance.' },
      { type: 'list', items: [
        'Choose it when your process or product cannot be handled by a standard plugin or platform.',
        'Start with the smallest version that proves value, then expand.',
        'Plan for security, backups, monitoring and support from the beginning.',
      ] },
      { type: 'heading', text: 'A quick way to decide' },
      { type: 'list', ordered: true, items: [
        'What single action do you want visitors to take? If it is just one, start with a landing page.',
        'Do people need to learn about you before they act? Then you need a business website.',
        'Are you taking payment for products? Consider a store on an established platform.',
        'Do users need accounts, saved data, or custom workflows? That points to a web application.',
      ] },
      { type: 'paragraph', text: 'These are not exclusive. A common path is a landing page first, a fuller business site as the business grows, then a store or application layered on when there is clear demand. Starting small and building on evidence usually beats building everything at once.' },
    ],
  },
  {
    slug: 'small-business-digital-marketing-channel-mix',
    title: 'A sensible digital marketing channel mix for a small business',
    excerpt:
      'You cannot do everything. How to choose a few channels, sequence them, and judge them on the numbers that matter.',
    category: 'Digital Marketing',
    author: AUTHOR,
    date: '2026-06-09',
    related: ['seo-vs-geo-aeo-explained', 'landing-page-website-store-or-web-app'],
    blocks: [
      { type: 'paragraph', text: 'Small businesses are told to be on every platform at once: search, social, email, video, ads, marketplaces. With a small team and limited budget, that approach usually produces a thin presence everywhere and results nowhere. A better approach is to build a deliberate mix, starting with the channels closest to buying intent.' },
      { type: 'heading', text: 'Start with how customers actually find you' },
      { type: 'paragraph', text: 'Before choosing channels, ask your best recent customers how they found you and what they looked at before deciding. Look at your own enquiry history. The answer often reveals that one or two sources matter far more than the rest. Your channel mix should follow customer behaviour, not trends.' },
      { type: 'heading', text: 'The core channels and what each is good for' },
      { type: 'list', items: [
        'Search engine optimization: builds visibility for people already looking for what you offer. Slower to start, but compounds over time and does not stop when you stop paying.',
        'Paid search: captures high-intent demand quickly and is useful for testing offers. You pay per click, so tracking and landing page quality matter.',
        'Google Business Profile and local presence: essential for businesses serving a local area. Accurate details, photos, services and genuine reviews make a real difference.',
        'Email: owned, low-cost, and effective for repeat customers, follow-ups and nurturing leads. Build the list ethically with consent.',
        'Social media organic: good for trust, showing the work and the people. It rarely drives direct sales alone but supports every other channel.',
        'Paid social: strong for awareness and for reaching defined audiences, particularly for visual or impulse products.',
        'Partnerships and referrals: often the cheapest quality leads for service businesses.',
      ] },
      { type: 'heading', text: 'A simple sequencing approach' },
      { type: 'list', ordered: true, items: [
        'Foundation: a fast, clear website with tracked contact forms or calls, and a complete business profile.',
        'Capture demand: local and search presence, with paid search if you need leads sooner.',
        'Build owned audience: an email list or similar way to stay in touch.',
        'Add reach: social content and paid social once you know which offers convert.',
        'Scale what works: move budget gradually toward channels with proven returns.',
      ] },
      { type: 'heading', text: 'Match the mix to the business type' },
      { type: 'paragraph', text: 'A local service provider often does best with local search, reviews, and referrals, plus a simple site. An online seller usually combines search, email and paid social with strong product pages. A B2B firm with long sales cycles tends to benefit from useful content, search, LinkedIn presence and direct outreach. These are tendencies, not rules; test against your own data.' },
      { type: 'heading', text: 'Measure what matters' },
      { type: 'paragraph', text: 'Vanity numbers such as followers and impressions are easy to collect and rarely pay the bills. Track enquiries, qualified leads, cost per lead or acquisition, conversion rate from visit to enquiry, and, where possible, revenue by source. Even a basic spreadsheet that records where each lead came from will outperform guesswork.' },
      { type: 'list', items: [
        'Set up analytics and conversion tracking before spending on ads.',
        'Use unique contact points or a "how did you hear about us" field to attribute leads.',
        'Review monthly and change one thing at a time so you can learn from it.',
        'Give a channel enough time and budget to produce a signal before judging it.',
      ] },
      { type: 'heading', text: 'Common mistakes' },
      { type: 'list', items: [
        'Spreading budget across too many channels to learn anything.',
        'Sending paid traffic to a generic home page instead of a relevant, focused page.',
        'Ignoring follow-up; many leads are lost to slow responses.',
        'Expecting immediate results from slow-building channels such as SEO and organic social.',
      ] },
      { type: 'paragraph', text: 'The right mix is rarely the largest one. Pick two or three channels you can execute well, measure them honestly, and expand only when the numbers justify it.' },
    ],
  },
  {
    slug: 'rule-based-automation-vs-ai-assistants-vs-agents',
    title: 'Rule-based automation, AI assistants and AI agents: how to choose',
    excerpt:
      'Three different tools often get lumped together. Knowing the difference helps you pick the cheapest, safest option that does the job.',
    category: 'Automation',
    author: AUTHOR,
    date: '2026-05-20',
    related: ['small-business-digital-marketing-channel-mix', 'landing-page-website-store-or-web-app'],
    blocks: [
      { type: 'paragraph', text: 'Automation used to mean a fixed sequence of steps. Today the word covers everything from a simple email trigger to AI systems that plan and take actions. The tools are not interchangeable, and choosing the most advanced one is often the wrong decision. Here is a practical way to tell them apart.' },
      { type: 'heading', text: 'Rule-based automation' },
      { type: 'paragraph', text: 'Rule-based automation follows explicit instructions: when X happens, do Y. A form submission creates a CRM record and sends a confirmation. An invoice becomes overdue and a reminder is sent. The behaviour is predictable, testable and cheap to run.' },
      { type: 'list', items: [
        'Best for: structured, repeatable processes with clear conditions.',
        'Strengths: reliable, auditable, inexpensive, easy to debug.',
        'Limits: it cannot handle messy input or situations nobody anticipated.',
      ] },
      { type: 'heading', text: 'AI assistants' },
      { type: 'paragraph', text: 'An AI assistant uses a language model to understand and generate text in response to a person. It might draft replies, summarise documents, answer questions from a knowledge base or classify incoming messages. A human usually reads the output and decides what to do with it.' },
      { type: 'list', items: [
        'Best for: unstructured language tasks where a human stays in the loop.',
        'Strengths: handles varied wording, saves drafting and reading time.',
        'Limits: can produce plausible but wrong answers, so important outputs need review and grounding in your real data.',
      ] },
      { type: 'heading', text: 'AI agents' },
      { type: 'paragraph', text: 'An agent goes further: it is given a goal, can choose among tools or steps, and can take actions such as searching, updating records or sending messages, often over several steps. This flexibility is powerful for open-ended tasks, but it also means behaviour is less predictable and mistakes can have real consequences.' },
      { type: 'list', items: [
        'Best for: multi-step tasks with variable paths, where the cost of an error is low or well controlled.',
        'Strengths: can complete complex workflows without a rule for every case.',
        'Limits: harder to test, more expensive to run, needs guardrails, permissions and monitoring.',
      ] },
      { type: 'heading', text: 'A decision guide' },
      { type: 'list', ordered: true, items: [
        'Can you write the steps down as clear if-then rules? Use rule-based automation.',
        'Is the input free-form language, but the output only needs to help a person? Use an AI assistant with human review.',
        'Does the task need judgement across several steps and tools? Consider an agent, with limited permissions and approval for risky actions.',
      ] },
      { type: 'paragraph', text: 'Most real systems combine them. For example, a rule triggers when a message arrives, an assistant classifies and drafts a response, and a person approves anything unusual before it is sent.' },
      { type: 'heading', text: 'Risks to plan for' },
      { type: 'list', items: [
        'Accuracy: ground answers in your own documents and show sources where possible.',
        'Data privacy: know what data is sent to which provider, and avoid sending sensitive information without a proper basis and agreement.',
        'Permissions: give automated systems the minimum access they need.',
        'Failure handling: define what happens when the system is unsure, and make handing over to a human easy.',
        'Cost: usage-based pricing can grow quickly; monitor it.',
      ] },
      { type: 'heading', text: 'Start small' },
      { type: 'paragraph', text: 'Pick one process that is repetitive, well understood and low risk. Automate it with the simplest tool that works, measure time saved and error rates, then expand. The goal is not to use AI; it is to remove work reliably.' },
    ],
  },
  {
    slug: 'core-web-vitals-plain-language',
    title: 'Core Web Vitals in plain language',
    excerpt:
      'Three measurements describe whether a page feels fast, stable and responsive. What they mean and how to improve them.',
    category: 'SEO',
    author: AUTHOR,
    date: '2026-04-22',
    related: ['how-long-does-a-website-project-take', 'seo-vs-geo-aeo-explained'],
    blocks: [
      { type: 'paragraph', text: 'Core Web Vitals are a set of measurements, defined by Google, that describe how a page feels to real visitors. They focus on three moments: how quickly the main content appears, how stable the layout is while loading, and how quickly the page responds when someone interacts. They are one input among many for search, and more importantly, they reflect real user experience.' },
      { type: 'heading', text: 'Largest Contentful Paint: does it load quickly?' },
      { type: 'paragraph', text: "Largest Contentful Paint (LCP) measures how long it takes for the biggest visible element, often a hero image or main heading, to appear. Google's published guidance treats about 2.5 seconds or less as good, measured for most visits." },
      { type: 'list', items: [
        'Compress images and serve modern formats such as WebP or AVIF.',
        'Size images correctly for the screen instead of shipping huge originals.',
        'Do not lazy-load the main hero image; load it with priority.',
        'Use fast hosting and a CDN, and enable caching.',
        'Reduce render-blocking CSS and JavaScript.',
      ] },
      { type: 'heading', text: 'Cumulative Layout Shift: does it stay still?' },
      { type: 'paragraph', text: "Cumulative Layout Shift (CLS) measures unexpected movement. You know the feeling: you go to tap a button and the page jumps because an image or ad loaded above it. Lower is better, and Google's guidance treats 0.1 or less as good." },
      { type: 'list', items: [
        'Set width and height (or aspect ratio) on images and video so space is reserved.',
        'Reserve space for ads, embeds and banners.',
        'Avoid inserting content above existing content after load.',
        'Load web fonts carefully so text does not jump when the font swaps in.',
      ] },
      { type: 'heading', text: 'Interaction to Next Paint: does it respond?' },
      { type: 'paragraph', text: "Interaction to Next Paint (INP) replaced the older First Input Delay metric. It looks at how long the page takes to visibly respond after taps, clicks and key presses throughout a visit. Google's guidance treats 200 milliseconds or less as good." },
      { type: 'list', items: [
        'Ship less JavaScript; remove unused libraries and split code so pages load only what they need.',
        'Break up long tasks so the browser can respond between chunks of work.',
        'Be careful with heavy third-party scripts such as chat widgets, tag managers and trackers.',
        'Keep event handlers light and defer non-essential work.',
      ] },
      { type: 'heading', text: 'Lab data versus field data' },
      { type: 'paragraph', text: 'Lab tools, such as Lighthouse, test a page once under controlled conditions. They are excellent for debugging. Field data comes from real users on real devices and networks, and is what Google uses for assessment. Both matter: use lab tests to find problems and field data to confirm that real visitors benefit. Tools like PageSpeed Insights and Search Console show both where available.' },
      { type: 'heading', text: 'How much do they matter for rankings?' },
      { type: 'paragraph', text: 'Page experience is one signal among many, and relevance and content quality generally matter more. Good scores will not rescue a page that does not answer the query. But slow, jumpy pages also lose visitors directly, which hurts conversions regardless of rankings. That is the stronger reason to care.' },
      { type: 'heading', text: 'A practical checklist' },
      { type: 'list', ordered: true, items: [
        'Test your key pages (home, top service pages, checkout or contact) on mobile.',
        'Fix the largest image and layout issues first; they are usually the quickest wins.',
        'Audit third-party scripts and remove any you do not need.',
        'Re-test after changes and monitor monthly, since new content and plugins can undo progress.',
      ] },
      { type: 'paragraph', text: 'Thresholds and the exact metrics set can change over time, so check current documentation when you plan the work. The underlying goal stays constant: pages that load fast, stay stable and respond instantly.' },
    ],
  },
];

export const INSIGHTS: Insight[] = raw
  .map((a) => ({ ...a, readingMinutes: Math.max(3, Math.round(wordsOf(a.blocks) / 220)) }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const getInsight = (slug: string) => INSIGHTS.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
