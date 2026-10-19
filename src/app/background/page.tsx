import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { EducationSection } from '../../components/EducationSection';
import { education } from '../../content/education';
import { experience } from '../../content/experience';

// Reverse-chronological order
const sortedEducation = [...education].sort((a, b) => b.graduationYear - a.graduationYear);
const sortedExperience = [...experience].sort((a, b) =>
  b.startYear !== a.startYear ? b.startYear - a.startYear : b.startMonth - a.startMonth
);

export const metadata: Metadata = {
  title: 'Education & Experience',
  alternates: { canonical: '/background' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <EducationSection entries={sortedEducation} experience={sortedExperience} />
    </>
  );
}
