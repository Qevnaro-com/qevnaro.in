import React from 'react';
import { LegalLayout, type LegalSection } from './LegalLayout';
import { contactLine } from './legalConstants';

const sections: LegalSection[] = [
  { id: 'what', title: 'What cookies are', body: [
    'Cookies are small text files stored on your device by your browser. Similar technologies such as local storage work in comparable ways. They help websites function, remember preferences and understand how the site is used.',
  ] },
  { id: 'categories', title: 'Categories we use', body: [
    [
      'Strictly necessary: needed for the site to work, for example to keep core features and security functioning or to remember your cookie choices. These do not require consent.',
      'Preferences: remember choices such as display settings, where offered.',
      'Analytics: help us understand how visitors use the site so we can improve it. These are used only where you have consented, where consent is required.',
      'Marketing: used to measure or deliver advertising. We only use these if and when we run campaigns that require them, and only with consent where required.',
    ],
    'The specific cookies in use depend on the tools enabled on the site at any time. A detailed cookie list will be added after the legal review and final tool selection.',
  ] },
  { id: 'third-party', title: 'Third-party cookies', body: [
    'Some cookies are set by third-party services we use, such as analytics providers, embedded media or fonts. Those providers have their own privacy and cookie policies.',
  ] },
  { id: 'manage', title: 'Managing cookies', body: [
    [
      'Use any cookie choice controls shown on the site to accept or decline non-essential categories.',
      'Change your browser settings to block or delete cookies. Instructions are in your browser\'s help section.',
      'Use browser features such as private browsing or tracker protection.',
    ],
    'If you block strictly necessary cookies, parts of the site may not work properly.',
  ] },
  { id: 'duration', title: 'How long cookies last', body: [
    'Session cookies expire when you close your browser. Persistent cookies stay for a set period or until you delete them. Durations depend on each cookie and will be listed in the detailed cookie table.',
  ] },
  { id: 'changes', title: 'Changes to this policy', body: [
    'We may update this policy when our use of cookies changes. The date at the top shows the latest revision.',
  ] },
  { id: 'contact', title: 'Contact', body: [
    `For questions about cookies, contact us ${contactLine}. See also our Privacy Policy.`,
  ] },
];

export const CookiesPolicy: React.FC = () => (
  <LegalLayout
    title="Cookies Policy"
    description="How Qevnaro uses cookies and similar technologies, and how you can control them."
    path="/cookies-policy"
    intro="This policy explains what cookies and similar technologies are, which categories we may use on this website, and how you can manage them."
    sections={sections}
  />
);

export default CookiesPolicy;
