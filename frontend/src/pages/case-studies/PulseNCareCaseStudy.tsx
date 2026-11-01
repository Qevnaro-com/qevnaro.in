import { CaseStudyLayout } from '../../components/common/CaseStudyLayout';
import { projects } from '../../lib/projects';

const project = projects.find((p) => p.slug === 'pulsencare')!;

export function PulseNCareCaseStudy() {
  return <CaseStudyLayout project={project} />;
}

export default PulseNCareCaseStudy;
