import React from 'react';
import { LegalLayout, type LegalSection } from './LegalLayout';
import { contactLine } from './legalConstants';

const sections: LegalSection[] = [
  { id: 'agreement', title: 'Agreement to these terms', body: [
    'By using qevnaro.in or engaging Qevnaro ("we", "us") for services, you agree to these terms. If you are agreeing on behalf of a business, you confirm you have authority to do so. Specific projects will usually also have a written proposal or agreement, which takes priority over these general terms where they conflict.',
  ] },
  { id: 'services', title: 'Scope of services', body: [
    'We provide web design and development, digital marketing, SEO, branding, automation and related digital services. The exact scope, deliverables, timeline and fees for each engagement are set out in a proposal or statement of work. Work outside the agreed scope will be quoted separately and requires your approval.',
  ] },
  { id: 'responsibilities', title: 'Client responsibilities', body: [
    [
      'Provide timely information, content, access and feedback needed to deliver the work.',
      'Ensure you own or have the right to use materials you give us.',
      'Review deliverables within the agreed period. Delays on your side may move the schedule.',
    ],
  ] },
  { id: 'payments', title: 'Fees and payments', body: [
    'Fees, payment schedule and accepted payment methods are set out in your proposal. Unless agreed otherwise, invoices are due within the period stated on the invoice. We may pause work on overdue accounts. Third-party costs such as domains, hosting, software licences and advertising spend are separate unless stated. Taxes are added where applicable.',
  ] },
  { id: 'results', title: 'No guaranteed outcomes', body: [
    'Outcomes such as search rankings, traffic, leads, sales or visibility in AI-generated answers depend on factors outside our control, including search engine and platform decisions, competition and market conditions. We will apply professional skill and care, but we do not guarantee specific results.',
  ] },
  { id: 'ip', title: 'Intellectual property', body: [
    'Subject to full payment, ownership of the final custom deliverables created for you transfers to you, except for third-party materials, open-source components and our pre-existing tools, frameworks and know-how, which remain subject to their own licences or ours. You grant us permission to use materials you supply for the purpose of delivering the services. Unless you tell us otherwise, we may reference the project in our portfolio. Final IP terms are to be confirmed in the legal review.',
  ] },
  { id: 'confidentiality', title: 'Confidentiality', body: [
    'Each party will keep the other\'s non-public business information confidential and use it only for the purposes of the engagement, except where disclosure is required by law.',
  ] },
  { id: 'website-use', title: 'Use of this website', body: [
    [
      'Do not misuse the site, attempt unauthorised access or interfere with its operation.',
      'Do not copy or republish our content without permission, except as permitted by law.',
    ],
    'Content on this site is provided for general information and does not constitute professional advice for your specific circumstances.',
  ] },
  { id: 'third-party', title: 'Third-party services', body: [
    'Our work may rely on third-party platforms and tools. Their availability, pricing and terms are outside our control and we are not liable for changes made by them.',
  ] },
  { id: 'liability', title: 'Limitation of liability', body: [
    'To the fullest extent permitted by law, we are not liable for indirect, incidental or consequential loss, or for loss of profit, revenue, data or goodwill. Our total liability arising from an engagement is limited to the fees you paid us for the services giving rise to the claim. Nothing in these terms limits liability that cannot be limited by law. The exact limits are to be finalised in the legal review.',
  ] },
  { id: 'warranty', title: 'Disclaimer', body: [
    'Except as stated in a written agreement, the website and services are provided "as is" without warranties of any kind to the extent permitted by law.',
  ] },
  { id: 'termination', title: 'Termination', body: [
    'Either party may end an engagement by written notice as described in the proposal. You will pay for work performed and costs incurred up to the termination date.',
  ] },
  { id: 'law', title: 'Governing law', body: [
    'These terms are governed by the laws of [jurisdiction to be confirmed], and disputes will be subject to the courts of [jurisdiction to be confirmed].',
  ] },
  { id: 'changes', title: 'Changes to these terms', body: [
    'We may update these terms from time to time. Continued use of the site after an update means you accept the revised terms.',
  ] },
  { id: 'contact', title: 'Contact', body: [
    `Questions about these terms can be sent to us ${contactLine}.`,
  ] },
];

export const TermsAndConditions: React.FC = () => (
  <LegalLayout
    title="Terms and Conditions"
    description="The terms that apply to using the Qevnaro website and engaging Qevnaro for digital services."
    path="/terms-and-conditions"
    intro="These terms explain the basis on which we provide our website and services. Please read them carefully."
    sections={sections}
  />
);

export default TermsAndConditions;
