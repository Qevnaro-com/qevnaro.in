import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { SEO } from '../../components/ui/SEO';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { LEGAL_UPDATED } from './legalConstants';

export interface LegalSection {
  id: string;
  title: string;
  body: (string | string[])[]; // string = paragraph, string[] = bullet list
}

export const LegalLayout: React.FC<{
  title: string;
  description: string;
  path: string;
  intro: string;
  sections: LegalSection[];
}> = ({ title, description, path, intro, sections }) => {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    window.scrollTo(0, 0);
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-90px 0px -65% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <div className="bg-ink text-fg">
      <SEO title={title} description={description} path={path} />

      <header className="relative overflow-hidden border-b border-line pt-36 pb-12 sm:pt-44">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: title }]} />
          <h1 className="font-display text-4xl font-bold text-gradient sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-fg-muted">Last updated: {LEGAL_UPDATED}</p>
          <div className="mt-6 flex max-w-2xl items-start gap-3 rounded-[var(--radius-md)] border border-warn/40 bg-warn/10 p-4 text-sm text-fg-soft" role="note">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-warn" aria-hidden="true" />
            <p><strong className="text-fg">Draft, pending legal review.</strong> This document is a working draft and is not yet final legal advice or a binding statement.</p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block">
          <nav aria-label="Contents" className="sticky top-28">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">Contents</p>
            <ul className="space-y-1 border-l border-line">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                    className={`-ml-px block border-l py-1.5 pl-4 text-sm leading-snug transition-colors ${
                      active === s.id ? 'border-brand-sky text-fg' : 'border-transparent text-fg-muted hover:text-fg-soft'
                    }`}
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="min-w-0 max-w-[72ch]">
          <p className="text-lg leading-8 text-fg-soft">{intro}</p>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold">{i + 1}. {s.title}</h2>
              {s.body.map((b, j) =>
                Array.isArray(b) ? (
                  <ul key={j} className="mt-4 list-disc space-y-2 pl-6 leading-7 text-fg-soft marker:text-brand-sky">
                    {b.map((it, k) => <li key={k}>{it}</li>)}
                  </ul>
                ) : (
                  <p key={j} className="mt-4 leading-7 text-fg-soft">{b}</p>
                ),
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};
