import React from 'react';
import { Hero } from '../components/Hero';
import { CapabilityStrip } from '../components/CapabilityStrip';
import { AgencyIntro } from '../components/AgencyIntro';
import { MainServicesOverview } from '../components/MainServicesOverview';
import { FeaturedServices } from '../components/FeaturedServices';
import { IndustriesSection } from '../components/IndustriesSection';
import { FeaturedWorkSection } from '../components/FeaturedWorkSection';
import { WhyChooseQevnaro } from '../components/WhyChooseQevnaro';
import { ProcessSection } from '../components/ProcessSection';
import { TechPlatformsSection } from '../components/TechPlatformsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InsightsPreviewSection } from '../components/InsightsPreviewSection';
import { HomeFAQSection } from '../components/HomeFAQSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { SEO } from '../components/ui/SEO';

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Qevnaro',
    url: 'https://qevnaro.in',
    logo: 'https://qevnaro.in/logo-qevnaro.png',
    description:
      'Qevnaro is a technology, creative and digital growth partner: web and app development, branding, SEO and GEO, performance marketing and AI automation.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Qevnaro',
    url: 'https://qevnaro.in',
  },
];

export const Home: React.FC = () => (
  <>
    <SEO
      title="Qevnaro — Technology, Creative & Digital Growth Agency"
      description="Qevnaro helps businesses build websites and apps, strengthen their brand, grow search and social visibility, and automate operations with AI."
      path="/"
      jsonLd={JSON_LD}
    />
    <Hero />
    <CapabilityStrip />
    <div id="intro" className="scroll-mt-20"><AgencyIntro /></div>
    <MainServicesOverview />
    <FeaturedServices />
    <IndustriesSection />
    <FeaturedWorkSection />
    <WhyChooseQevnaro />
    <ProcessSection />
    <TechPlatformsSection />
    <TestimonialsSection />
    <InsightsPreviewSection />
    <HomeFAQSection />
    <FinalCTASection />
  </>
);

export default Home;
