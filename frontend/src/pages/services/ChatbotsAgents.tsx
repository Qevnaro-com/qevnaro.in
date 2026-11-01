

import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';
import { Eyebrow, SplitHeading } from '../../components/ui/Reveal';

const DATA: ServicePageData = {
  badge: 'Category F · Conversational Systems',
  title: 'AI Chatbots & Conversational Systems That Never Sleep',
  subtitle: 'Deploy intelligent website and WhatsApp chatbots trained on your business data to answer inquiries, qualify leads, and book sales meetings 24 hours a day.',
  overview: [
    'Traditional rule-based chatbots with rigid button menus frustrate customers and fail whenever a user types an unexpected question. Conversely, unconstrained AI bots risk hallucinating incorrect prices or embarrassing the brand.',
    'At Qevnaro, we engineer reliable, grounded conversational systems. Our bots combine large language models with strict knowledge retrieval (RAG) and API tools — allowing them to understand natural language, check real-time database availability, qualify leads, and hand off seamlessly to human reps when necessary.'
  ],
  whyNeeded: {
    heading: 'Why Intelligent Conversational Bots Outperform Static Lead Forms',
    points: [
      { title: 'Zero Wait Times', desc: 'Engage website visitors and WhatsApp users within 1 second, when buying intent is at its highest point.' },
      { title: 'Interactive Lead Qualification', desc: 'Ask natural conversational questions to screen budget, timeline, and company size before booking calls.' },
      { title: '70%+ Ticket Deflection', desc: 'Automatically resolve repetitive tier-1 customer inquiries regarding hours, pricing, and common policies.' },
      { title: 'Omnichannel Deployment', desc: 'Deploy a single unified conversational brain across your web portal, mobile app, and WhatsApp Business API.' }
    ]
  },
  problemsSolved: [
    {
      title: 'Frustrating "I Don’t Understand" Menu Bots',
      problem: 'Old-fashioned decision-tree bots that break whenever a customer asks a question outside of pre-set options.',
      solution: 'Natural language semantic parsing powered by modern LLMs that understand typos, slang, and context.'
    },
    {
      title: 'Lost Leads Outside Business Hours',
      problem: 'Prospects browsing your website at 10 PM on a Saturday leave without converting because nobody is online.',
      solution: '24/7 AI agents that answer questions, capture contact details, and book calendar appointments in real time.'
    },
    {
      title: 'Support Agents Overwhelmed by FAQs',
      problem: 'Support teams spending half their workday answering the same repetitive questions over and over.',
      solution: 'RAG-grounded assistants answering standard queries instantly with direct links to relevant documentation.'
    }
  ],
  deliverables: [
    'Custom AI conversational chatbot widget designed to match your brand website',
    'Official WhatsApp Business API chatbot integration with multi-agent inbox handoff',
    'RAG vector knowledge base trained on your company FAQs, PDFs, and product catalogs',
    'CRM and calendar integration (HubSpot, Salesforce, Calendly, Google Calendar)',
    'Strict guardrails and prompt safety layers to eliminate hallucinations and off-topic chat',
    'Human-agent takeover dashboard allowing staff to intervene in live conversations seamlessly',
    'Monthly conversation analytics tracking resolution rate, lead captures, and sentiment'
  ],
  subServices: [
    { title: 'Website AI Chatbots', desc: 'Custom floating chat widgets embedded into your website or web application.' },
    { title: 'WhatsApp Business Bots', desc: 'Interactive conversational assistants operating inside official WhatsApp accounts.' },
    { title: 'Lead Qualification Bots', desc: 'Conversational screening flows that capture and score high-value business leads.' },
    { title: 'Customer Support Assistants', desc: 'Instant 24/7 resolution for common customer service and account inquiries.' },
    { title: 'Knowledge Base & RAG Bots', desc: 'Chatbots that cite specific paragraphs from your internal SOPs and manuals.' },
    { title: 'CRM & Calendar Bookers', desc: 'Directly checking sales rep calendar availability and scheduling meetings.' }
  ],
  methodology: [
    { step: '01', title: 'Knowledge Ingestion & Scope', desc: 'Collecting company documentation, FAQs, product catalogs, and defining bot boundaries.' },
    { step: '02', title: 'Personality & Prompt Guardrails', desc: 'Setting brand tone of voice, formatting rules, and strict negative constraints.' },
    { step: '03', title: 'Integration & API Tool Setup', desc: 'Connecting the bot to your CRM, calendar, email, and human escalation inbox.' },
    { step: '04', title: 'Adversarial Testing & Launch', desc: 'Stress-testing with edge-case and trick questions to ensure 100% reliable behavior.' }
  ],
  toolsAndTech: [
    { category: 'AI Inference Engines', items: ['OpenAI GPT-4o mini', 'Google Gemini 2.5 Flash', 'Claude 3.5 Haiku', 'Custom Local LLMs'] },
    { category: 'Chat Interfaces', items: ['Custom React Chat Widget', 'WhatsApp Cloud API', 'Slack / Teams Bots', 'Telegram API'] },
    { category: 'Integrations & Storage', items: ['Pinecone Vector DB', 'Calendly API', 'HubSpot CRM Webhooks', 'Zendesk / Intercom'] }
  ],
  whoNeedsThis: [
    'Companies receiving high volumes of inbound website visitors or WhatsApp inquiries.',
    'Healthcare clinics needing an automated appointment booking and clinic hours assistant.',
    'B2B SaaS companies wanting to qualify leads and book demos without manual rep emails.',
    'E-commerce brands answering sizing, shipping, and order tracking inquiries 24/7.'
  ],
  businessOutcomes: [
    { metric: '< 2s', label: 'Response Time', desc: 'Instantaneous conversational engagement eliminating lead drop-off.' },
    { metric: '70%+', label: 'Deflection Rate', desc: 'Standard support questions resolved without human agent intervention.' },
    { metric: 'Zero', label: 'Hallucinations', desc: 'Strict negative constraints ensuring the bot only cites verified knowledge.' }
  ],
  relatedCaseStudies: [
    { title: 'MenuSQR Instant Dining Support Engine', desc: 'Automated table-side dining assistant answering ingredient and order queries.', href: '/case-studies/menusqr', tag: 'Conversational POS' }
  ],
  relatedServices: [
    { title: 'AI Business Automation', desc: 'Extending conversational bots into full back-office automated workflows.', href: '/services/ai-automation' },
    { title: 'Email & WhatsApp Marketing', desc: 'Combining conversational chat with automated marketing nurture sequences.', href: '/services/email-marketing' },
    { title: 'Web Development', desc: 'Embedding lightweight, responsive chat widgets into your website.', href: '/services/web-development' }
  ],
  faqs: [
    { q: 'Can a human staff member take over the conversation from the AI bot?', a: 'Yes. Every chatbot system we deploy includes a human-escalation protocol. If a customer asks to speak with a human, or if the AI detects complex sentiment or a request outside its knowledge base, it notifies your team via email, Slack, or your CRM inbox so a live agent can step in immediately.' },
    { q: 'Can the chatbot book appointments directly onto our team’s calendar?', a: 'Yes. We integrate directly with calendar tools like Calendly, Google Calendar, or Microsoft Outlook. The bot checks live availability in real time, offers available time slots in chat, and confirms the meeting directly without requiring external links.' },
    { q: 'How difficult is it to update the bot’s knowledge when our policies or prices change?', a: 'Very easy. We build an administrative management interface or sync the bot directly with a Google Sheet, Notion database, or knowledge folder. Whenever you update text in your document, the bot’s knowledge base updates automatically within minutes.' }
  ],
  icon: MessageSquare
};



interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const PRESET_CONVERSATIONS: Record<string, string> = {
  'How do you integrate with WhatsApp?':
    'We use the official Meta WhatsApp Business Cloud API. The bot connects to your verified business phone number, supports interactive message buttons and lists, and automatically routes complex tickets to your team via live chat tools like Zoho, HubSpot, or a shared team inbox.',
  'Can you qualify leads for my sales team?':
    'Yes! The agent asks custom qualification questions (such as budget, timeline, company size, and specific needs). When a lead meets your qualification threshold, the bot directly checks your reps’ live calendar and schedules an introductory meeting in real-time.',
  'How do you prevent hallucinations?':
    'We employ Retrieval-Augmented Generation (RAG) with strict negative guardrails. The model is forced to answer exclusively from your verified documentation and product databases. If a question is outside its verified scope, it gracefully acknowledges it and flags a human team member.',
  'How long does implementation take?':
    'A typical enterprise knowledge bot or lead-capture agent is delivered within a 2 to 3 week agile sprint, including knowledge ingestion, prompt engineering, CRM testing, human-handoff rules, and staff training.',
};

const DemoChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! I am Qevnaro’s intelligent agent prototype. Tap any prompt below or test my knowledge on conversational architecture.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleAsk = (question: string) => {
    if (!question.trim() || isTyping) return;

    setMessages((prev) => [...prev, { sender: 'user', text: question }]);
    setInput('');
    setIsTyping(true);

    const answer =
      PRESET_CONVERSATIONS[question] ||
      `Thanks for asking about "${question}". Our agents are grounded in your proprietary documentation and APIs to answer accurately. For custom queries, we map your workflows during our sprint kickoff!`;

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: answer }]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: 'Conversation reset. Tap any prompt below to explore how our conversational systems behave in production.',
      },
    ]);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <Eyebrow>Interactive Prototype</Eyebrow>
        <SplitHeading as="h2" text="Experience an Intelligent Conversational Flow" className="mt-4 font-display text-3xl font-bold sm:text-4xl" />
        <p className="mt-4 text-sm leading-relaxed text-fg-soft">
          Test our prototype conversational UI. See how our RAG-grounded assistants respond with natural tone, zero hallucination, and clear commercial call-to-actions.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {Object.keys(PRESET_CONVERSATIONS).map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => handleAsk(q)}
              className="rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-xs text-fg-soft transition-colors hover:border-brand-sky hover:text-white cursor-pointer text-left"
            >
              <Sparkles className="mr-1.5 inline-block h-3 w-3 text-brand-sky" />
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="mx-auto max-w-lg rounded-[var(--radius-xl)] border border-line bg-surface shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line bg-elevated px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue/20 text-brand-sky border border-brand-blue/40">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-fg">Qevnaro Lead &amp; Support Agent</span>
                <span className="flex items-center gap-1.5 text-[10px] text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse" /> Live System Demo
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg p-1.5 text-fg-muted hover:bg-white/[0.05] hover:text-white transition-colors"
              title="Reset conversation"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="h-80 overflow-y-auto p-4 space-y-3.5 bg-ink/50 text-xs leading-relaxed">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2.5 max-w-[88%] ${
                  m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                    m.sender === 'user'
                      ? 'bg-brand-blue text-white'
                      : 'bg-elevated text-brand-sky border border-line-strong'
                  }`}
                >
                  {m.sender === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                </div>
                <div
                  className={`rounded-2xl px-4 py-2.5 ${
                    m.sender === 'user'
                      ? 'bg-brand-blue text-white rounded-br-xs'
                      : 'bg-elevated border border-line text-fg-soft rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-fg-muted">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-elevated border border-line-strong text-brand-sky">
                  <Bot className="h-3 w-3" />
                </div>
                <div className="rounded-2xl bg-elevated border border-line px-4 py-2">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-bounce [animation-delay:0.4s]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(input);
            }}
            className="flex items-center gap-2 border-t border-line bg-elevated p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question or tap a prompt..."
              className="flex-1 rounded-xl border border-line-strong bg-ink/70 px-3.5 py-2 text-xs text-fg placeholder:text-fg-muted/60 focus:border-brand-sky focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="grid h-8 w-8 place-items-center rounded-xl bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const ChatbotsAgents: React.FC = () => {
  return (
    <ServiceDetailLayout data={DATA}>
      <DemoChat />
    </ServiceDetailLayout>
  );
};

export default ChatbotsAgents;
