import { useEffect } from 'react';

const SITE = 'https://qevnaro.in';

interface Props {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/** Lightweight per-route head manager (no extra dependency). */
export const SEO = ({ title, description, path, image = '/assets/images/og-image.webp', jsonLd, noindex }: Props) => {
  useEffect(() => {
    const full = title.includes('Qevnaro') ? title : `${title} | Qevnaro`;
    document.title = full;
    const url = SITE + (path ?? window.location.pathname);
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow');
    setMeta('property', 'og:title', full);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', SITE + image);
    setMeta('name', 'twitter:card', 'summary_large_image');

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    document.getElementById('route-jsonld')?.remove();
    if (jsonLd) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = 'route-jsonld';
      s.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
    return () => document.getElementById('route-jsonld')?.remove();
  }, [title, description, path, image, jsonLd, noindex]);
  return null;
};
