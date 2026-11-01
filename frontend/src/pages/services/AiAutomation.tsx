import React, { lazy, Suspense } from 'react';
import { Bot } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';
import { Eyebrow, SplitHeading } from '../../components/ui/Reveal';

const CathodeSession = lazy(() => import('../../components/ui/CathodeSession'));

const DATA: ServicePageData = {
  badge: 'Category F · Artificial Intelligence',
  title: 'Make Your Business Work Smarter With AI',
  subtitle: 'Custom Retrieval-Augmented Generation (RAG) assistants, intelligent document extraction pipelines, autonomous lead qualification, and cross-platform workflow automation.',
  overview: [
    'Artificial Intelligence is no longer an experimental toy; it is an operational multiplier that separates market leaders from companies bogged down by manual administrative overhead. Repetitive tasks like sorting lead inquiries, answering standard customer questions, and re-typing invoices cost thousands of hours every year.',
    'At Qevnaro, we architect pragmatic, secure AI business solutions. We build custom RAG (Retrieval-Augmented Generation) knowledge assistants grounded strictly in your proprietary documentation, multimodal OCR pipelines that extract data from physical documents in seconds, and autonomous agent workflows that connect your CRM, emails, and databases with human-in-the-loop oversight.'
  ],
  whyNeeded: {
    heading: 'Understanding AI Maturity: Rule-Based vs. AI Assistants vs. Autonomous Agents',
    points: [
      { title: 'Level 1: Rule-Based Automation', desc: 'Pre-programmed "If This, Then That" triggers for structured data (e.g. sending a confirmation email when a form is submitted).' },
      { title: 'Level 2: AI Assistants & RAG', desc: 'Language models connected to your private knowledge base to answer nuanced questions, summarize documents, and draft responses.' },
      { title: 'Level 3: Autonomous Multi-Step Agents', desc: 'AI systems capable of executing multi-stage tasks: researching a lead, cross-referencing inventory, updating a CRM, and alerting a human.' },
      { title: 'Enterprise Privacy & Guardrails', desc: 'Your private corporate data is never used to train public models; we enforce strict access control and audit logging.' }
    ]
  },
  problemsSolved: [
    {
      title: 'Hours Wasted on Repetitive Administrative Tasks',
      problem: 'Employees spending hours manually extracting data from PDF invoices, emails, or physical forms.',
      solution: 'We build multimodal vision OCR pipelines that extract structured JSON data in under 2 seconds with 99%+ accuracy.'
    },
    {
      title: 'Slow Inbound Lead Response Times',
      problem: 'Leads submitting inquiries on your website or WhatsApp wait hours for a reply, by which time they have contacted a competitor.',
      solution: '24/7 AI qualification agents that engage instantly, ask qualifying questions, and book calendar meetings.'
    },
    {
      title: 'Dispersed, Hard-to-Find Company Knowledge',
      problem: 'Staff wasting time asking colleagues where internal policies, product specs, or SOP documents are stored.',
      solution: 'A private RAG knowledge assistant in Slack or web portal that searches all company documents and answers instantly.'
    }
  ],
  deliverables: [
    'Comprehensive operational workflow audit identifying high-ROI AI automation opportunities',
    'Custom RAG knowledge base connected to your private documentation, PDFs, and databases',
    'AI customer support or internal operations chatbot with custom guardrails and personality',
    'Multimodal OCR pipeline for automated document, menu, or invoice parsing',
    'Multi-app workflow automation connecting CRMs (HubSpot, Salesforce), Google Sheets, and databases',
    'Human-in-the-loop review interface for critical approvals and edge-case exceptions',
    'Complete technical documentation, API keys security setup, and staff onboarding'
  ],
  subServices: [
    { title: 'RAG Knowledge Assistants', desc: 'Grounded AI assistants that answer questions based exclusively on your company documents.' },
    { title: 'Document & OCR Automation', desc: 'Extracting structured data from paper receipts, medical forms, and menus.' },
    { title: 'Lead Qualification Agents', desc: 'Conversational agents that pre-screen buyers and schedule sales consultations.' },
    { title: 'Customer Support Automation', desc: 'Resolving up to 70% of tier-1 support tickets instantly across web and WhatsApp.' },
    { title: 'CRM & Workflow Integration', desc: 'Connecting disconnected SaaS apps with intelligent webhook and API rails.' },
    { title: 'AI Governance & Privacy Guardrails', desc: 'Implementing strict prompt guardrails to prevent hallucinations and secure private data.' }
  ],
  methodology: [
    { step: '01', title: 'Workflow Audit & ROI Mapping', desc: 'Interviewing team members to identify manual tasks that can be automated safely.' },
    { step: '02', title: 'Data Cleaning & Vector Indexing', desc: 'Formatting your proprietary documents into vector embeddings for accurate retrieval.' },
    { step: '03', title: 'Agent Prompting & Integration', desc: 'Writing system instructions, connecting API tools, and building human review checkpoints.' },
    { step: '04', title: 'Testing, Benchmarking & Deployment', desc: 'Benchmarking accuracy, eliminating hallucinations, and deploying into production.' }
  ],
  toolsAndTech: [
    { category: 'AI Models Deployed', items: ['Google Gemini 2.5 Flash', 'OpenAI GPT-4o / GPT-4o mini', 'Claude 3.5 Sonnet', 'Ollama Local Models'] },
    { category: 'RAG & Vector Stacks', items: ['LangChain', 'LlamaIndex', 'ChromaDB', 'Pinecone Vector DB', 'pgvector'] },
    { category: 'Automation & Orchestration', items: ['FastAPI Python', 'Zapier / Make', 'n8n Workflow Automation', 'Webhook Bridges'] }
  ],
  whoNeedsThis: [
    'Fast-growing companies receiving hundreds of customer inquiries per week.',
    'Healthcare clinics handling high volumes of appointment queries and patient records.',
    'Logistics and B2B suppliers processing physical invoices, bills of lading, and RFQs.',
    'Professional consulting and legal firms needing instant search across thousands of case files.'
  ],
  businessOutcomes: [
    { metric: 'Sub-2s', label: 'Document Extraction', desc: 'Instant extraction of multi-page paper documents into clean database records.' },
    { metric: '24/7/365', label: 'Instant Lead Capture', desc: 'Zero delayed responses to new inbound inquiries, even on weekends.' },
    { metric: '100% Private', label: 'Zero Model Training', desc: 'Enterprise zero-data-retention APIs ensuring your intellectual property remains private.' }
  ],
  relatedCaseStudies: [
    { title: 'MenuSQR Multimodal Gemini OCR Ingestion', desc: 'Extracting 48+ multilingual restaurant dish records from photos in 1.12 seconds.', href: '/case-studies/menusqr', tag: 'Vision AI Case Study' },
    { title: 'Pulse n Care ABHA Cryptographic Verification', desc: 'Automated patient identity token verification and clinical nurse dispatch.', href: '/case-studies/pulsencare', tag: 'Automated Operations' }
  ],
  relatedServices: [
    { title: 'AI Chatbots & Agents', desc: 'Specialized conversational assistants for websites and WhatsApp.', href: '/services/chatbots-agents' },
    { title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure hosting your AI microservices.', href: '/services/cloud-devops' },
    { title: 'Web Development', desc: 'Integrating custom AI tools into your business web applications.', href: '/services/web-development' }
  ],
  faqs: [
    { q: 'Will our proprietary company data be used to train public AI models?', a: 'No. We exclusively use commercial enterprise API tiers (such as Google Cloud Vertex AI, OpenAI Enterprise APIs, or self-hosted open-source models via Ollama) that contractually guarantee zero data retention and zero training on customer data. Your intellectual property remains completely private, encrypted, and isolated to your company.' },
    { q: 'How do you prevent AI assistants from "hallucinating" false information?', a: 'We employ Retrieval-Augmented Generation (RAG) combined with strict negative constraints in our system prompts. The AI model is explicitly instructed to answer only using retrieved excerpts from your verified knowledge base. If the required information is not found in your documentation, the AI is programmed to state that it does not know and route the inquiry to a human team member.' },
    { q: 'What is a "human-in-the-loop" workflow?', a: 'A human-in-the-loop workflow means that for critical, high-risk actions (such as sending financial quotes, issuing medical advice, or deleting database records), the AI performs the heavy research and drafts the response, but pauses for a human manager to click "Approve" before the action is executed.' }
  ],
  icon: Bot
};

export const AiAutomation: React.FC = () => {
  return (
    <ServiceDetailLayout data={DATA}>
      <div className="mb-10 max-w-3xl">
        <Eyebrow>Telemetry &amp; Workstations</Eyebrow>
        <SplitHeading as="h2" text="Automated Agent Session Monitoring" className="mt-4 font-display text-3xl font-bold sm:text-4xl" />
        <p className="mt-4 text-sm leading-relaxed text-fg-soft">
          A concept visualization of autonomous workflow telemetry: real-time signal inspection, request processing pipelines, and agent health monitors.
        </p>
      </div>
      <div className="relative">
        <Suspense fallback={<div className="grid h-64 place-items-center font-mono text-xs text-fg-muted">Mounting workstation console...</div>}>
          <CathodeSession className="w-full" />
        </Suspense>
      </div>
    </ServiceDetailLayout>
  );
};

export default AiAutomation;
