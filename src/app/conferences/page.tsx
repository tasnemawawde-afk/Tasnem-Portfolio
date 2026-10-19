import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { ConferencesSection } from '../../components/ConferencesSection';
import { conferences } from '../../content/conferences';

export const metadata: Metadata = {
  title: 'Conferences & Events',
  alternates: { canonical: '/conferences' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <ConferencesSection content={conferences} />
    </>
  );
}
