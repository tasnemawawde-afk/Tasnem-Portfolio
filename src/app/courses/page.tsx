import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { TrainingSection } from '../../components/TrainingSection';
import { certificates } from '../../content/certificates';

export const metadata: Metadata = {
  title: 'Courses & Certificates',
  alternates: { canonical: '/courses' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <TrainingSection certificates={certificates} />
    </>
  );
}
