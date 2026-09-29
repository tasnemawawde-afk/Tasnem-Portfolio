import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { NavBar } from '../components/NavBar';
import { hero } from '../content/hero';
import { contact } from '../content/contact';
import { SITE_URL } from '../content/site';
import styles from './layout.module.css';
import './globals.css';

const TITLE = 'Tasnem Moura | Electrical & Computer Engineer';
const DESCRIPTION =
  'Tasnem Moura — Electrical and Computer Engineering graduate specialising in VLSI, microelectronics, digital systems, and hardware engineering.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Tasnem Moura',
  },
  description: DESCRIPTION,
  applicationName: 'Tasnem Moura',
  authors: [{ name: 'Tasnem Moura', url: SITE_URL }],
  creator: 'Tasnem Moura',
  keywords: [
    'Tasnem Moura',
    'Electrical Engineer',
    'Computer Engineer',
    'VLSI',
    'Microelectronics',
    'Digital Systems',
    'Hardware Engineering',
    'Physical Design',
    'Chip Verification',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: 'Tasnem Moura',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    firstName: 'Tasnem',
    lastName: 'Moura',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#07090f',
  colorScheme: 'dark',
};

// Structured data so search engines understand this is a personal profile page.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: hero.name,
  jobTitle: hero.title,
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.jpg`,
  email: `mailto:${contact.email}`,
  sameAs: [contact.linkedInUrl, contact.githubUrl],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'The Hebrew University of Jerusalem',
  },
  knowsAbout: ['VLSI', 'Microelectronics', 'Digital Design', 'Hardware Verification', 'MEMS'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className={styles.skipLink}>
          Skip to content
        </a>
        <NavBar />
        <main id="main-content" className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerName}>
              <span className={styles.footerMark} aria-hidden="true">TM</span>
              Tasnem Moura
            </p>
            <ul className={styles.footerLinks}>
              <li><a href={`mailto:${contact.email}`}>Email</a></li>
              <li><a href={contact.linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} Tasnem Moura · Designed from circuit to system.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
