import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { CVSection } from '../../components/CVSection';
import { hero } from '../../content/hero';

export const metadata: Metadata = {
  title: 'CV',
  alternates: { canonical: '/cv' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <CVSection cvPath={hero.cvPath} />
    </>
  );
}
