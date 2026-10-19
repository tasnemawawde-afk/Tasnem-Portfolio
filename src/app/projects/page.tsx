import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { ProjectsSection } from '../../components/ProjectsSection';
import { projects } from '../../content/projects';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: { canonical: '/projects' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <ProjectsSection projects={projects} />
    </>
  );
}
