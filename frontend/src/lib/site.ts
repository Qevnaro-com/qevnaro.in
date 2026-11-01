/**
 * Single source of truth for business contact details.
 * Values come from Vite env vars (see .env.example). If a value is not set,
 * the UI must NOT render it (no fake phone numbers / addresses / WhatsApp links).
 */
const env = import.meta.env;

export const site = {
  name: 'Qevnaro',
  url: 'https://qevnaro.in',
  tagline: 'Build Better. Grow Smarter. Move Forward.',
  email: (env.VITE_CONTACT_EMAIL as string | undefined) || 'qevnaro@gmail.com',
  phone: (env.VITE_CONTACT_PHONE as string | undefined) || '+91 87965 30323',
  whatsapp: ((env.VITE_WHATSAPP_NUMBER as string | undefined) || '918796530323').replace(/\D/g, ''),
  address: (env.VITE_CONTACT_ADDRESS as string | undefined) || 'Noida Sector 62 & Bengaluru HSR Layout, India',
  formEndpoint: (env.VITE_FORM_ENDPOINT as string | undefined) || '',
  social: {
    linkedin: (env.VITE_SOCIAL_LINKEDIN as string | undefined) || 'https://www.linkedin.com/company/qevnaro',
    instagram: (env.VITE_SOCIAL_INSTAGRAM as string | undefined) || 'https://www.instagram.com/qevnaro',
    x: (env.VITE_SOCIAL_X as string | undefined) || 'https://twitter.com/qevnaro',
    youtube: (env.VITE_SOCIAL_YOUTUBE as string | undefined) || '',
  },
};

export const whatsappLink = (text = 'Hi Qevnaro, I would like to discuss a project.') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : '';
