import { Video } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Creative & Branding · Video and Creative Production',
  title: 'Video and Visual Content That Holds Attention.',
  subtitle: 'Promotional films, brand stories, product videos, reels and motion graphics, planned and edited for the platform where they will be watched.',
  slug: 'video-creative-production',
  art: 'brand',
  icon: Video,
  seoTitle: 'Video & Creative Production: Reels, Brand Films, Motion | Qevnaro',
  seoDescription: 'Promotional and brand videos, product films, social reels, motion graphics and product photography where available.',
  overview: [
    'Video is the format most people choose to watch and the one most easily scrolled past. Strong production starts with a clear idea, a defined viewer and a first few seconds that earn the next ten.',
    'Qevnaro handles scripting, storyboarding, shooting coordination, editing, sound and motion design. We format every cut for its destination, whether that is a website hero, a vertical reel or a presentation, and we provide photography support where our team or partners are available.'
  ],
  whyNeeded: {
    heading: 'Why video earns its place in the plan',
    points: [
      { title: 'Explains quickly', desc: 'A short demo conveys what paragraphs of text cannot.' },
      { title: 'Feeds every platform', desc: 'One shoot yields reels, ads, site video and email thumbnails.' },
      { title: 'Shows the people behind the brand', desc: 'Faces and real environments build familiarity and trust.' },
      { title: 'Supports paid media', desc: 'Strong creative is often the biggest lever in ad performance.' }
    ]
  },
  problemsSolved: [
    { title: 'Video that looks amateur', problem: 'Poor audio, lighting and pacing undermine an otherwise good business.', solution: 'Planned shoots, proper sound handling and edit rhythm matched to the platform.' },
    { title: 'One-off videos with no reuse', problem: 'A single expensive film is used once and forgotten.', solution: 'Shoot planning that yields multiple cut-downs, vertical versions and still frames.' },
    { title: 'Content nobody finishes', problem: 'Videos open slowly and lose viewers early.', solution: 'Hook-first scripting, captions and structure designed for retention.' }
  ],
  deliverables: [
    'Creative concept and script',
    'Storyboard or shot list',
    'Production planning and scheduling',
    'Shoot coordination and direction',
    'Professional editing and colour correction',
    'Sound design, voice-over and music licensing',
    'Motion graphics and animated titles',
    'Captions and subtitles',
    'Platform-specific exports',
    'Thumbnails and still frames'
  ],
  subServices: [
    { title: 'Promotional videos', desc: 'Campaign and service videos built around a clear offer.' },
    { title: 'Brand films', desc: 'Story-led films about who you are and why you exist.' },
    { title: 'Product videos', desc: 'Demonstrations and feature walk-throughs for physical and digital products.' },
    { title: 'Social reels and short-form', desc: 'Vertical videos for Instagram, YouTube Shorts and Facebook.' },
    { title: 'Motion graphics and animation', desc: '2D animation, kinetic typography and explainer sequences.' },
    { title: 'Testimonial and interview videos', desc: 'Customer and team stories captured with consent.' },
    { title: 'Corporate and event coverage', desc: 'Highlights and recap videos for events and launches.' },
    { title: 'Photography support', desc: 'Product, team and location photography where available for your project.' },
    { title: 'Video ad creative', desc: 'Variations designed for testing in paid campaigns.' },
    { title: 'Post-production and editing', desc: 'Editing, colour, audio clean-up and revisions for footage you provide.' }
  ],
  methodology: [
    { step: '01', title: 'Brief and concept', desc: 'Goals, audience, platform and tone are defined, and a concept is proposed.' },
    { step: '02', title: 'Pre-production', desc: 'Scripts, storyboards, locations, talent and schedules are confirmed.' },
    { step: '03', title: 'Production', desc: 'Filming or asset creation with direction on set.' },
    { step: '04', title: 'Post-production', desc: 'Editing, sound, motion graphics and review rounds.' },
    { step: '05', title: 'Delivery', desc: 'Final cuts exported for each channel with supporting stills.' }
  ],
  toolsAndTech: [
    { category: 'Editing and motion', items: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut for social cuts'] },
    { category: 'Capture', items: ['Cinema and mirrorless cameras', 'Lighting kits', 'Lavalier audio', 'Gimbals'] },
    { category: 'Delivery', items: ['Platform export presets', 'Caption files', 'Cloud review links'] }
  ],
  whoNeedsThis: [
    'Brands preparing a launch or major campaign',
    'Businesses lacking quality video for their website',
    'E-commerce stores needing product demos',
    'Social media teams that need a steady supply of reels',
    'Service firms wanting testimonial and team videos',
    'Startups needing an explainer for investors or users'
  ],
  businessOutcomes: [
    { metric: 'Sharper', label: 'Storytelling', desc: 'Videos that communicate one idea clearly in the time available.' },
    { metric: 'Reusable', label: 'Footage', desc: 'Shoots planned to produce several assets, not one.' },
    { metric: 'Platform-ready', label: 'Formats', desc: 'Correct ratios, captions and lengths for each destination.' }
  ],
  relatedCaseStudies: [],
  relatedServices: [
    { title: 'Social Media Marketing', desc: 'Publish and promote your videos.', href: '/services/social-media-marketing' },
    { title: 'Branding', desc: 'Visual identity for consistent film styling.', href: '/services/branding' },
    { title: 'Performance Marketing', desc: 'Run video ads at scale.', href: '/services/performance-marketing' }
  ],
  faqs: [
    { q: 'Do you handle the entire production?', a: 'Yes, from concept to final edit, or only the stages you need such as editing your own footage.' },
    { q: 'Can you work with footage we already have?', a: 'Yes. We offer editing, colour, sound and motion graphics for provided footage.' },
    { q: 'Where do shoots take place?', a: 'On location at your premises or at agreed venues. Availability of studio space and travel depend on the project.' },
    { q: 'How many revision rounds are included?', a: 'The number is set in the proposal, typically two rounds, with additional rounds quoted if needed.' },
    { q: 'Do you provide music and voice-over?', a: 'Yes, with properly licensed music and voice-over talent arranged as part of the project.' }
  ]
};

export const VideoProduction = () => <ServiceDetailLayout data={DATA} />;
export default VideoProduction;
