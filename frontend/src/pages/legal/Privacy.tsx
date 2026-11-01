import React from 'react';
import { LegalLayout, type LegalSection } from './LegalLayout';
import { contactLine } from './legalConstants';

const sections: LegalSection[] = [
  { id: 'who', title: 'Who we are', body: [
    'Qevnaro ("we", "us") is a digital agency that provides web development, digital marketing and related services. This policy explains how we handle personal information collected through qevnaro.in.',
  ] },
  { id: 'collect', title: 'Information we collect', body: [
    'We collect only what we need to respond to you and to run the website.',
    [
      'Information you give us through the contact form: your name, email address, phone number if provided, company, the services you are interested in, and the message you write.',
      'Information you share when we correspond with you or work together on a project.',
      'Basic technical information such as IP address, browser type, device type, pages visited and referring page, collected through server logs and, where you consent, analytics tools.',
    ],
  ] },
  { id: 'use', title: 'How we use information', body: [
    [
      'To respond to your enquiry and provide proposals or services you request.',
      'To operate, secure and improve the website.',
      'To understand how the site is used, where analytics cookies are accepted.',
      'To meet legal, accounting and contractual obligations.',
      'To send you updates or marketing only where you have asked for them or consented, and you can opt out at any time.',
    ],
  ] },
  { id: 'basis', title: 'Why we are allowed to use it', body: [
    'Depending on where you are, we rely on your consent, on the need to take steps at your request before entering into a contract, on our legitimate interests in running and improving our business, or on legal obligations. Where we rely on consent you may withdraw it at any time.',
  ] },
  { id: 'share', title: 'Who we share it with', body: [
    'We do not sell your personal information. We may share it with service providers who help us operate, such as hosting, form handling, email delivery, analytics and project tools, and only as needed for those services. We may also disclose information if required by law or to protect our rights.',
  ] },
  { id: 'transfers', title: 'International transfers', body: [
    'Some of our providers may process data outside your country. Where that happens we take reasonable steps to make sure appropriate safeguards are in place.',
  ] },
  { id: 'retention', title: 'How long we keep it', body: [
    'We keep enquiry information for as long as needed to respond and for a reasonable period afterwards in case of follow-up questions, unless a longer period is needed for a contract, accounting or legal reasons. When information is no longer needed we delete or anonymise it. Retention periods are to be finalised in the legal review.',
  ] },
  { id: 'security', title: 'Security', body: [
    'We use reasonable technical and organisational measures to protect personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
  ] },
  { id: 'rights', title: 'Your rights', body: [
    'Depending on applicable law, you may have the right to:',
    [
      'Access the personal information we hold about you.',
      'Ask us to correct inaccurate information.',
      'Ask us to delete your information.',
      'Object to or restrict certain processing.',
      'Receive your information in a portable format.',
      'Withdraw consent where processing is based on consent.',
      'Complain to your local data protection authority.',
    ],
    `To exercise these rights, contact us ${contactLine}.`,
  ] },
  { id: 'cookies', title: 'Cookies', body: [
    'We use cookies and similar technologies as described in our Cookies Policy.',
  ] },
  { id: 'children', title: 'Children', body: [
    'Our services are directed at businesses and are not intended for children. We do not knowingly collect information from children.',
  ] },
  { id: 'third-party', title: 'Third-party links', body: [
    'Our website may link to other websites. We are not responsible for their privacy practices, so please read their policies.',
  ] },
  { id: 'changes', title: 'Changes to this policy', body: [
    'We may update this policy from time to time. The date at the top shows when it was last revised.',
  ] },
  { id: 'contact', title: 'Contact us', body: [
    `If you have questions about this policy or your information, reach us ${contactLine}.`,
  ] },
];

export const PrivacyPolicy: React.FC = () => (
  <LegalLayout
    title="Privacy Policy"
    description="How Qevnaro collects, uses and protects personal information submitted through its website and contact form."
    path="/privacy-policy"
    intro="We respect your privacy. This policy describes what information we collect when you use our website or contact us, why we collect it, and the choices you have."
    sections={sections}
  />
);

export default PrivacyPolicy;
