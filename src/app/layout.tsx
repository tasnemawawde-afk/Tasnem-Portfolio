import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NavBar } from '../components/NavBar';
import styles from './layout.module.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tasnem Moura | Electrical & Computer Engineer',
  description:
    'Personal portfolio of Tasnem Moura — Electrical and Computer Engineering graduate specialising in VLSI, microelectronics, digital systems, and hardware engineering.',
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} Tasnem Moura. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
