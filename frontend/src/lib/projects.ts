/** Real Qevnaro projects. Only add verified facts here; no invented metrics. */
export interface Project {
  slug: string;
  name: string;
  industry: 'Healthcare' | 'Hospitality';
  category: string;
  tagline: string;
  intro: string;
  cover: string;
  coverAlt: string;
  liveUrl: string;
  client: string;
  challenge: string[];
  objectives: string[];
  strategy: string[];
  approach: { title: string; desc: string }[];
  services: string[];
  tech: { title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
  /** Only populate with verified figures. Leave undefined to show "to be confirmed". */
  results?: { label: string; value: string }[];
  path: string;
}

export const projects: Project[] = [
  {
    slug: 'pulsencare',
    name: 'Pulse n Care',
    industry: 'Healthcare',
    category: 'Healthcare platform',
    tagline: 'Doorstep nursing and teleconsultation, built as one connected platform.',
    intro:
      'Pulse n Care connects families with registered nurses and clinicians at home across Delhi NCR. We designed and built the web platform that handles discovery, booking, video consultations and caregiver dispatch.',
    cover: '/assets/banners/pulsencare-flagship-3d-banner.jpg',
    coverAlt: 'Pulse n Care telehealth platform banner',
    liveUrl: 'https://www.pulsencare.com/',
    client: 'Pulse n Care',
    challenge: [
      'Families looking for home nursing often rely on informal agents, with little way to verify who is turning up.',
      'Video consultations on variable mobile networks need to stay usable when the connection is weak.',
      'Home-care pricing is often opaque, which makes budgeting hard for families.',
    ],
    objectives: [
      'Make caregiver verification visible and trustworthy.',
      'Keep video consultations dependable on mobile data.',
      'Show pricing up front and make booking quick.',
      'Support health-record standards used in India (ABDM).',
    ],
    strategy: [
      'Treat trust as the core product feature: verified credentials, clear pricing and a simple booking path come before anything decorative.',
      'Build for phones first, since most families will book from a handset, often under stress.',
    ],
    approach: [
      { title: 'Discover', desc: 'Mapped how families find, vet and book care, and where they drop off.' },
      { title: 'Design', desc: 'Calm, clear interface with a cost estimator and a short booking flow.' },
      { title: 'Build', desc: 'React front end with video consultation, map-based dispatch and health-record linking.' },
      { title: 'Launch and refine', desc: 'Released the live platform and continue to iterate on it.' },
    ],
    services: ['Web application development', 'UI/UX design', 'Video consultation integration', 'Map-based dispatch', 'ABDM health-record integration', 'WhatsApp booking flow'],
    tech: [
      { title: 'Front end', desc: 'React, TypeScript, Tailwind CSS and Framer Motion.' },
      { title: 'Real-time video', desc: 'WebRTC consultations with audio-first fallbacks.' },
      { title: 'Geo dispatch', desc: 'Leaflet maps for caregiver routing across operational hubs.' },
      { title: 'Health records', desc: 'ABHA linking and digital prescriptions via WhatsApp.' },
    ],
    gallery: [
      { src: '/assets/images/pulse-n-care-nurse-hero.webp', alt: 'Pulse n Care nurse hero image' },
      { src: '/assets/images/pulse-n-care-team-banner-9.webp', alt: 'Pulse n Care team banner' },
    ],
    path: '/case-studies/pulsencare',
  },
  {
    slug: 'menusqr',
    name: 'MenuSQR',
    industry: 'Hospitality',
    category: 'Restaurant ordering platform',
    tagline: 'QR menus, ordering and payments that need no app download.',
    intro:
      'MenuSQR lets restaurants run a living digital menu behind a permanent QR code. Guests scan, browse, order and pay from their own phone, while the kitchen sees orders as they arrive.',
    cover: '/assets/banners/menusqr-flagship-3d-banner.jpg',
    coverAlt: 'MenuSQR QR dining platform banner',
    liveUrl: 'https://menusqr.in/',
    client: 'MenuSQR',
    challenge: [
      'Printed menus are costly to reprint every time prices change or a dish sells out.',
      'Peak-hour tables wait on menus, orders and bills, which slows service.',
      'Diners are reluctant to install an app just to order one meal.',
    ],
    objectives: [
      'Let owners update menus, prices and stock instantly.',
      'Open the menu in a browser with no install or sign-up.',
      'Take payments at the table and pass orders straight to the kitchen.',
    ],
    strategy: [
      'Make the guest side as light as possible: a scan, a menu, an order.',
      'Give owners a simple back office so changes go live without a designer or a reprint.',
    ],
    approach: [
      { title: 'Discover', desc: 'Looked at the dine-in journey from seating to settling the bill.' },
      { title: 'Design', desc: 'Fast, photo-led menu with a short ordering path.' },
      { title: 'Build', desc: 'Progressive web app, live kitchen display sync and UPI payments.' },
      { title: 'Launch and refine', desc: 'Live product, extended with new tools for owners.' },
    ],
    services: ['Product design', 'Progressive web app development', 'Kitchen display system', 'UPI payment integration', 'AI menu import', 'Brand and visual identity'],
    tech: [
      { title: 'Progressive web app', desc: 'Opens from a camera scan, no download needed.' },
      { title: 'Live kitchen sync', desc: 'WebSockets push orders to the kitchen screen.' },
      { title: 'Payments', desc: 'UPI checkout through payment gateway integration.' },
      { title: 'AI menu import', desc: 'Gemini-based OCR to digitise existing paper menus.' },
    ],
    gallery: [
      { src: '/assets/images/hero_chaap.webp', alt: 'Menu item photography' },
      { src: '/assets/images/burger.webp', alt: 'Burger menu item' },
      { src: '/assets/images/garlic_bread.webp', alt: 'Garlic bread menu item' },
      { src: '/assets/images/iced_coffee.webp', alt: 'Iced coffee menu item' },
    ],
    path: '/case-studies/menusqr',
  },
];
