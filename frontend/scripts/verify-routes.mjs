import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Read App.tsx
const appCode = fs.readFileSync(path.join(root, 'src', 'App.tsx'), 'utf-8');

// Extract routes
const routeMatches = [...appCode.matchAll(/path="([^"]+)"/g)].map((m) => m[1]);
console.log(`Found ${routeMatches.length} route definitions in App.tsx.`);

// Also extract service slugs & industry slugs & case studies
const knownValidRoutes = new Set([
  '/',
  '/about',
  '/careers',
  '/contact',
  '/process',
  '/work',
  '/work/pulsencare',
  '/work/menusqr',
  '/services',
  '/industries',
  '/insights',
  '/privacy-policy',
  '/terms-and-conditions',
  '/cookies-policy',
]);

// Add all 17 services
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
SERVICES.forEach((s) => knownValidRoutes.add(`/services/${s}`));

// Add all 9 industries
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
INDUSTRIES.forEach((i) => knownValidRoutes.add(`/industries/${i}`));

// Add insights
const INSIGHTS = [
  'seo-vs-geo-aeo-explained',
  'how-long-does-a-website-project-take',
  'landing-page-website-store-or-web-app',
  'small-business-digital-marketing-channel-mix',
  'rule-based-automation-vs-ai-assistants-vs-agents',
  'core-web-vitals-plain-language',
];
INSIGHTS.forEach((ins) => knownValidRoutes.add(`/insights/${ins}`));

// Add redirect sources
const redirects = [
  '/services/app-development',
  '/services/social-media',
  '/services/ui-design',
  '/solutions/e-commerce',
  '/solutions/lead-generation',
  '/solutions/brand-identity',
  '/portfolio',
  '/case-studies/pulsencare',
  '/case-studies/menusqr',
  '/industries/edtech',
  '/industries/retail-ecommerce',
  '/industries/manufacturing',
  '/industries/fintech',
];
redirects.forEach((r) => knownValidRoutes.add(r));

// Crawl Navbar and Footer
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = [
    ...content.matchAll(/to="([^"]+)"/g),
    ...content.matchAll(/href:\s*'([^']+)'/g),
    ...content.matchAll(/to:\s*'([^']+)'/g),
  ].map((m) => m[1]);

  const dead = [];
  for (const link of links) {
    if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#')) {
      continue;
    }
    const cleanLink = link.split('?')[0].split('#')[0];
    if (!knownValidRoutes.has(cleanLink)) {
      dead.push(cleanLink);
    }
  }
  return { links: links.length, dead };
}

const navResult = checkFile(path.join(root, 'src', 'components', 'Navbar.tsx'));
console.log(`Navbar: ${navResult.links} links checked. Dead links:`, navResult.dead);

const footerResult = checkFile(path.join(root, 'src', 'components', 'Footer.tsx'));
console.log(`Footer: ${footerResult.links} links checked. Dead links:`, footerResult.dead);

if (navResult.dead.length === 0 && footerResult.dead.length === 0) {
  console.log('✓ All Navbar and Footer links resolve to valid, non-404 routes!');
} else {
  process.exit(1);
}
