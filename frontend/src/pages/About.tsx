import { Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Reveal, SplitHeading, Eyebrow } from '../components/ui/Reveal';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEO } from '../components/ui/SEO';
import { LineArt, type LineArtKind } from '../components/ui/line-art/LineArt';

const card = 'rounded-[var(--radius-lg)] border border-line bg-surface';

const capabilities: { title: string; desc: string; art: LineArtKind }[] = [
  { title: 'Websites and apps', desc: 'Fast, well-built sites, web apps and mobile products.', art: 'code' },
  { title: 'Design and brand', desc: 'Interfaces and identities that feel considered and clear.', art: 'design' },
  { title: 'Growth marketing', desc: 'SEO, content and paid campaigns tied to real business goals.', art: 'growth' },
  { title: 'AI and automation', desc: 'Practical automation and chatbots that save people time.', art: 'ai' },
  { title: 'Cloud and DevOps', desc: 'Reliable hosting, deployment and monitoring.', art: 'cloud' },
  { title: 'Search visibility', desc: 'Being found in Google and in AI-driven answer engines.', art: 'search' },
];

const values = [
  { title: 'Plain speaking', desc: 'We explain things without jargon and tell you when something is not worth doing.' },
  { title: 'Craft over speed', desc: 'We move quickly, but never at the cost of quality you will notice.' },
  { title: 'Honest promises', desc: 'We do not guarantee rankings or inflate numbers. We commit to what we can control.' },
  { title: 'Ownership', desc: 'We treat your product as if it were ours, and stay accountable after launch.' },
  { title: 'Respect for your time', desc: 'Short feedback loops, clear updates and no surprises.' },
];

const collab = [
  { t: 'Conversation', d: 'We listen first: your goals, your customers, your constraints.' },
  { t: 'Proposal', d: 'A clear scope, timeline and cost, written in plain language.' },
  { t: 'Build together', d: 'Regular previews so you see progress and shape it as we go.' },
  { t: 'Launch and support', d: 'We release carefully, then stay on hand to improve what we shipped.' },
];

const Section: React.FC<{ eyebrow: string; title: string; alt?: boolean; children: React.ReactNode }> = ({ eyebrow, title, alt, children }) => (
  <section className={`border-b border-line py-16 sm:py-24 ${alt ? 'bg-surface' : ''}`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SplitHeading text={title} className="mt-4 mb-10 max-w-3xl font-display text-3xl font-bold sm:text-4xl" />
      {children}
    </div>
  </section>
);

export function About() {
  return (
    <div className="bg-ink text-fg">
      <SEO
        title="About Qevnaro"
        description="Qevnaro is a digital agency that builds websites, apps and growth systems with a mix of engineering and creative craft."
        path="/about"
      />

      <section className="relative overflow-hidden border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ label: 'About' }]} />
            <Eyebrow>About Qevnaro</Eyebrow>
            <SplitHeading as="h1" text="Technology and creativity, working as one team." className="mt-4 font-display text-4xl font-bold leading-[1.06] text-gradient sm:text-5xl lg:text-6xl" />
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
                We are a digital agency that helps businesses build better products and grow with confidence. Engineers, designers and marketers sit at the same table, so what we make looks right and works right.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button to="/contact">Talk to us</Button>
                <Button to="/work" variant="ghost">See our work</Button>
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <LineArt kind="brand" className="mx-auto aspect-[5/4] w-full max-w-md" />
          </div>
        </div>
      </section>

      <Section eyebrow="Who we are" title="A partner, not just a supplier">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4 leading-relaxed text-fg-soft">
            <p>Qevnaro exists to make good digital work easier to get. Too many businesses are handed either beautiful designs that do not work, or working software nobody enjoys using.</p>
            <p>We bring both disciplines together, from the first idea to a live product, and we stay with you as it grows.</p>
          </Reveal>
          <Reveal delay={0.1} className={`${card} p-8`}>
            <p className="font-display text-xl font-semibold leading-snug">{`"Build Better. Grow Smarter. Move Forward."`}</p>
            <p className="mt-3 text-sm text-fg-muted">The idea behind everything we do.</p>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Vision and mission" title="Where we are headed" alt>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className={`${card} bg-ink p-8`}>
            <h3 className="font-display text-xl font-bold">Vision</h3>
            <p className="mt-3 leading-relaxed text-fg-soft">A world where every ambitious business, large or small, has access to digital products and marketing of the highest standard.</p>
          </Reveal>
          <Reveal delay={0.08} className={`${card} bg-ink p-8`}>
            <h3 className="font-display text-xl font-bold">Mission</h3>
            <p className="mt-3 leading-relaxed text-fg-soft">To design, build and grow digital experiences that are clear, dependable and measurably useful to the people who run them and the people who use them.</p>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Our approach" title="How we think about the work">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Start with the goal', 'Every project begins with what you want to change in your business, not with a list of features.'],
            ['Keep it simple', 'The best solution is usually the simplest one that fully does the job.'],
            ['Measure what matters', 'We agree how success will be judged early, and report on it honestly.'],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className={`${card} p-7`}>
              <span className="font-mono text-xs text-brand-sky">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-soft">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Technology and creativity" title="Why the two belong together" alt>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className={`${card} bg-ink p-8`}>
            <h3 className="font-display text-xl font-bold">Technology gives it strength</h3>
            <p className="mt-3 leading-relaxed text-fg-soft">Speed, security, accessibility and reliability are what make a product trustworthy day after day.</p>
          </Reveal>
          <Reveal delay={0.08} className={`${card} bg-ink p-8`}>
            <h3 className="font-display text-xl font-bold">Creativity gives it meaning</h3>
            <p className="mt-3 leading-relaxed text-fg-soft">Story, design and tone are what make people notice a product, understand it and choose it.</p>
          </Reveal>
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed text-fg-soft">When the two are planned together, designers know what is possible and engineers know what matters. The result is work that is both beautiful and dependable.</p>
      </Section>

      <Section eyebrow="Core capabilities" title="What we do">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05} className={`${card} p-6`}>
              <LineArt kind={c.art} className="mb-4 h-24 w-auto text-brand-sky" />
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-soft">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Values" title="How we work, day to day" alt>
        <ul className="grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <li key={v.title} className={`${card} flex gap-4 bg-ink p-6`}>
              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-blue/20 text-brand-sky"><Check className="h-3 w-3" /></span>
              <div>
                <h3 className="font-display font-bold">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fg-soft">{v.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Collaboration" title="Working with us">
        <ol className="grid gap-5 md:grid-cols-4">
          {collab.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06} className={`${card} p-6`}>
              <span className="font-mono text-xs text-brand-sky">Step 0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-soft">{c.d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Leadership" title="The people behind Qevnaro" alt>
        <div className="rounded-[var(--radius-lg)] border border-dashed border-line-strong bg-ink p-8 text-fg-soft">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">Placeholder</p>
          <p className="mt-3 max-w-2xl leading-relaxed">Team and leadership profiles will appear here once they are confirmed. Until then, you can speak with us directly through the contact page.</p>
        </div>
      </Section>

      <section className="py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Let us build something good together.</h2>
          <p className="mt-4 text-fg-soft">Tell us about your project and we will reply with honest, practical next steps.</p>
          <div className="mt-8 flex justify-center"><Button to="/contact">Start a conversation</Button></div>
        </div>
      </section>
    </div>
  );
}

export default About;
