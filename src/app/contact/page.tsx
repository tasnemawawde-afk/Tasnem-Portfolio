import type { Metadata } from 'next';
import { BackHome } from '../../components/BackHome';
import { ContactSection } from '../../components/ContactSection';
import { contact } from '../../content/contact';

export const metadata: Metadata = {
  title: 'Contact',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <>
      <BackHome />
      <ContactSection
        linkedInUrl={contact.linkedInUrl}
        githubUrl={contact.githubUrl}
        email={contact.email}
      />
    </>
  );
}
