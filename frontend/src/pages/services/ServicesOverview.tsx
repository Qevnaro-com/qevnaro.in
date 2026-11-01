import { 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  Palette, 
  TrendingUp, 
  Search, 
  Bot, 
  Share2, 
  Target, 
  Sparkles, 
  FileText, 
  Video, 
  Mail, 
  Cpu, 
  MessageSquare, 
  Cloud,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICE_GROUPS = [
  {
    pillar: '01 · Digital Experience',
    title: 'Web & Product Engineering',
    desc: 'High-speed, conversion-focused websites, native mobile applications, e-commerce storefronts, and intuitive UI/UX design systems.',
    services: [
      { name: 'Website Development', desc: 'Custom business sites, corporate platforms, and web apps with sub-second speeds.', href: '/services/web-development', icon: Code2 },
      { name: 'Mobile App Development', desc: 'Native iOS and Android apps built with React Native and Flutter for real-world engagement.', href: '/services/mobile-app-development', icon: Smartphone },
      { name: 'E-commerce Development', desc: 'Custom Shopify, WooCommerce, and headless stores with 1-click UPI checkout.', href: '/services/ecommerce-development', icon: ShoppingBag },
      { name: 'UI/UX Design', desc: 'User research, wireframing, high-resolution interactive Figma prototypes, and design systems.', href: '/services/ui-ux-design', icon: Palette }
    ]
  },
  {
    pillar: '02 · Digital Growth',
    title: 'Customer Acquisition & Search Dominance',
    desc: 'Data-driven marketing campaigns, technical SEO, Generative AI search optimization, and hyper-targeted paid advertising.',
    services: [
      { name: 'Digital Marketing Strategy', desc: 'Full-funnel customer acquisition roadmaps connecting search, ads, and conversion.', href: '/services/digital-marketing', icon: TrendingUp },
      { name: 'Search Engine Optimization (SEO)', desc: 'Technical audits, on-page optimization, and local Google Business Profile dominance.', href: '/services/seo', icon: Search },
      { name: 'Generative Engine Optimization (GEO)', desc: 'Structuring your brand data so ChatGPT, Gemini, and Perplexity cite your company.', href: '/services/geo-aeo', icon: Bot },
      { name: 'Social Media Marketing', desc: 'Organic community growth, content calendars, and short-form video strategies.', href: '/services/social-media-marketing', icon: Share2 },
      { name: 'Performance Marketing & Paid Ads', desc: 'Disciplined, high-ROAS ad campaigns managed across Google, Meta, and LinkedIn.', href: '/services/performance-marketing', icon: Target }
    ]
  },
  {
    pillar: '03 · Creative & Brand',
    title: 'Brand Positioning & Persuasive Content',
    desc: 'Timeless visual identity systems, persuasive website copywriting, commercial video editing, and automated retention messaging.',
    services: [
      { name: 'Branding & Visual Identity', desc: 'Logo marks, brand guideline books, color systems, and corporate pitch decks.', href: '/services/branding', icon: Sparkles },
      { name: 'Content Marketing & Copywriting', desc: 'High-converting website copy, SEO pillar articles, and B2B whitepapers.', href: '/services/content-marketing', icon: FileText },
      { name: 'Video & Creative Production', desc: 'Short-form Instagram Reels, product walkthroughs, and commercial brand films.', href: '/services/video-creative-production', icon: Video },
      { name: 'Email & WhatsApp Automation', desc: 'Automated lifecycle nurture flows and official WhatsApp Business API messaging.', href: '/services/email-marketing', icon: Mail }
    ]
  },
  {
    pillar: '04 · Technology & Automation',
    title: 'AI Workflows & Resilient Infrastructure',
    desc: 'Custom artificial intelligence integrations, 24/7 conversational agents, and high-availability cloud container pipelines.',
    services: [
      { name: 'AI Business Automation', desc: 'Custom RAG assistants, multimodal document OCR, and automated lead workflows.', href: '/services/ai-automation', icon: Cpu },
      { name: 'AI Chatbots & Agents', desc: '24/7 intelligent customer support and lead qualification bots on web and WhatsApp.', href: '/services/chatbots-agents', icon: MessageSquare },
      { name: 'Cloud, DevOps & IT Infrastructure', desc: 'AWS/Azure cloud architecture, Docker containers, CI/CD, and 99.9% uptime monitoring.', href: '/services/cloud-devops', icon: Cloud }
    ]
  }
];

export const ServicesOverview: React.FC = () => {
  return (
    <div className="bg-[#FAFAF7] text-[#171717] select-none">
      
      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 border-b border-[#E8E7E2] overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2E6EFE]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8E7E2] text-xs font-mono font-medium text-[#0C1C36] mb-5 shadow-xs">
              <span>Full-Service Agency Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-[#171717] tracking-tight leading-[1.1] mb-6">
              Our Services &{' '}
              <span className="font-serif italic font-normal text-[#0C1C36]">
                Specialized Disciplines.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#686868] leading-relaxed mb-8">
              We bring software engineering, audience growth, brand storytelling, and AI automation together under one cohesive agency model. Explore our 16 specialized service offerings below.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0C1C36] hover:bg-[#152747] text-white text-sm font-semibold tracking-wide transition-all shadow-xs"
            >
              <span>Schedule a Scope Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Pillars Service Grid */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E8E7E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICE_GROUPS.map((group, idx) => (
            <div key={idx} className="pb-16 border-b border-[#E8E7E2] last:border-none last:pb-0">
              
              <div className="max-w-2xl mb-10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#2E6EFE] font-bold mb-2">
                  {group.pillar}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#171717] mb-3">
                  {group.title}
                </h2>
                <p className="text-sm text-[#686868] leading-relaxed">
                  {group.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.services.map((s) => (
                  <Link
                    key={s.name}
                    to={s.href}
                    className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E8E7E2] hover:border-[#D5D3CC] hover:bg-[#F4F3EF] transition-all flex flex-col justify-between group shadow-xs"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E8E7E2] text-[#0C1C36] group-hover:bg-[#0C1C36] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                        <s.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold font-display text-[#171717] group-hover:text-[#2E6EFE] transition-colors mb-2 leading-snug">
                        {s.name}
                      </h3>
                      <p className="text-xs text-[#686868] leading-relaxed mb-6">
                        {s.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E8E7E2]/70 flex items-center justify-between text-xs font-semibold text-[#0C1C36] group-hover:text-[#2E6EFE] transition-colors">
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 sm:py-28 bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0C1C36] text-white shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-bold font-display mb-4">
              Need a Custom Cross-Discipline Solution?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Most enterprise projects require a blend of software engineering, brand positioning, and search marketing. We tailor custom sprint scopes to your exact commercial goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2E6EFE] hover:bg-[#1E5BEE] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesOverview;
