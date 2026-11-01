import { CaseStudyLayout } from '../../components/common/CaseStudyLayout';
import { projects } from '../../lib/projects';

const project = projects.find((p) => p.slug === 'menusqr')!;

export function MenuSQRCaseStudy() {
  return <CaseStudyLayout project={project} />;
}

export default MenuSQRCaseStudy;
