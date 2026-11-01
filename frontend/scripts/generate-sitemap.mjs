import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const BASE = 'https://qevnaro.in';

const CORE_ROUTES = [
  '',
  'services',
  'industries',
  'work',
  'work/pulsencare',
  'work/menusqr',
  'about',
  'process',
  'insights',
  'contact',
  'careers',
  'privacy-policy',
  'terms-and-conditions',
  'cookies-policy',
];

const SERVICES = [
  'web-development',
  'mobile-app-development',
  'ecommerce-development',
  'ui-ux-design',
  'digital-marketing',
  'social-media-marketing',
  'seo',
  'geo-aeo',
  'performance-marketing',
  'branding',
  'content-marketing',
  'video-creative-production',
  'email-marketing',
  'marketing-automation',
  'ai-automation',
  'chatbots-agents',
  'cloud-devops',
];

const INDUSTRIES = [
  'healthcare',
  'education',
  'real-estate',
  'ecommerce-retail',
  'saas-technology',
  'hospitality',
  'professional-services',
  'manufacturing-b2b',
  'finance-consulting',
];

const INSIGHTS = [
  'seo-vs-geo-aeo-explained',
  'how-long-does-a-website-project-take',
  'landing-page-website-store-or-web-app',
  'small-business-digital-marketing-channel-mix',
  'rule-based-automation-vs-ai-assistants-vs-agents',
  'core-web-vitals-plain-language',
];

const urls = [
  ...CORE_ROUTES.map((r) => (r ? `${BASE}/${r}` : `${BASE}/`)),
  ...SERVICES.map((s) => `${BASE}/services/${s}`),
  ...INDUSTRIES.map((i) => `${BASE}/industries/${i}`),
  ...INSIGHTS.map((inSlug) => `${BASE}/insights/${inSlug}`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;

fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap, 'utf-8');
fs.writeFileSync(path.join(root, 'public', 'robots.txt'), robots, 'utf-8');

console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
