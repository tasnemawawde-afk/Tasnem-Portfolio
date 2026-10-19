import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { AboutSection } from '../../components/AboutSection';
import { about } from '../../content/about';

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <AboutSection biography={about.biography} />
    </>
  );
}
