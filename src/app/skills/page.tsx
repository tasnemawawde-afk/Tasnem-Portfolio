import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { SkillsSection } from '../../components/SkillsSection';
import { skills } from '../../content/skills';

export const metadata: Metadata = {
  title: 'Skills',
  alternates: { canonical: '/skills' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <SkillsSection categories={skills} />
    </>
  );
}
