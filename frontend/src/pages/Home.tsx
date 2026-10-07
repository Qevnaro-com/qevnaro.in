import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { CoreServices } from '../components/CoreServices';
import { WhyQevnaro } from '../components/WhyQevnaro';
import { Industries } from '../components/Industries';
import { SuccessStories } from '../components/SuccessStories';
import { Insights } from '../components/Insights';

export function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <CoreServices />
      <WhyQevnaro />
      <Industries />
      <SuccessStories />
      <Insights />
    </>
  );
}
