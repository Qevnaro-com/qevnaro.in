import { projects, type Project } from '../lib/projects';

export interface CaseStudy extends Project {}

export const caseStudies: CaseStudy[] = projects;

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);
