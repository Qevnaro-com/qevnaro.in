import { Button } from '../components/ui/Button';
import { Reveal, SplitHeading, Eyebrow } from '../components/ui/Reveal';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEO } from '../components/ui/SEO';
import { LineArt } from '../components/ui/line-art/LineArt';
import { site } from '../lib/site';

const card = 'rounded-[var(--radius-lg)] border border-line bg-surface';

const areas = ['Engineering', 'Design', 'Marketing and SEO', 'Content and video', 'Project management'];

const look = [
  { t: 'Craft', d: 'You care about doing things properly, and you notice the details.' },
  { t: 'Curiosity', d: 'You enjoy learning new tools and understanding how businesses work.' },
  { t: 'Clear communication', d: 'You explain your thinking simply and listen well.' },
];

export function Careers() {
  return (
    <div className="bg-ink text-fg">
      <SEO title="Careers" description="Qevnaro is always open to talented engineers, designers and marketers. Get in touch to start a conversation." path="/careers" />

      <section className="relative overflow-hidden border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/15 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ label: 'Careers' }]} />
            <Eyebrow>Careers</Eyebrow>
            <SplitHeading as="h1" text="We are always open to talented people." className="mt-4 font-display text-4xl font-bold leading-[1.06] text-gradient sm:text-5xl lg:text-6xl" />
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
                We do not have specific roles listed right now, but we enjoy meeting people who are good at what they do. If that sounds like you, tell us about yourself.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button to="/contact">Get in touch</Button>
                {site.email && <Button href={`mailto:${site.email}?subject=Career%20enquiry`} variant="ghost" arrow={false}>Email us</Button>}
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <LineArt kind="code" className="mx-auto aspect-[5/4] w-full max-w-md" />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Where you could fit</Eyebrow>
          <h2 className="mt-4 mb-8 font-display text-3xl font-bold sm:text-4xl">Areas we work in</h2>
          <ul className="flex flex-wrap gap-3">
            {areas.map((a) => <li key={a} className="rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-fg-soft">{a}</li>)}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>What we look for</Eyebrow>
          <h2 className="mt-4 mb-10 font-display text-3xl font-bold sm:text-4xl">The qualities that matter to us</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {look.map((l, i) => (
              <Reveal key={l.t} delay={i * 0.06} className={`${card} bg-ink p-7`}>
                <h3 className="font-display text-lg font-bold">{l.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-soft">{l.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Say hello.</h2>
          <p className="mt-4 text-fg-soft">Use the contact form and mention what you do and what you would like to work on. Include a link to your portfolio or profile if you have one.</p>
          <div className="mt-8 flex justify-center"><Button to="/contact">Contact us</Button></div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
