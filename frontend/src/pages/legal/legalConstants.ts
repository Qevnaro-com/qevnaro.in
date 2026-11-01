import { site } from '../../lib/site';

export const LEGAL_UPDATED = '1 November 2026';

/** Shared contact sentence, never invents details. */
export const contactLine = site.email
  ? `by emailing ${site.email} or through our contact form`
  : 'through our contact form';
