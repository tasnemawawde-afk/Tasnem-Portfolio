"use client";

import React from 'react';
import { hero } from '../content/hero';
import styles from './NavBar.module.css';

const NAV_ITEMS = [
  { label: 'About',        href: '#about'    },
  { label: 'Projects',     href: '#projects' },
  { label: 'Skills',       href: '#skills'   },
  { label: 'Background',   href: '#education' },
  { label: 'Certificates', href: '#training' },
  { label: 'Events',       href: '#conferences' },
  { label: 'Contact',      href: '#contact'  },
] as const;

export function NavBar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Mark a section active when it crosses the middle band of the viewport —
      // works for sections taller than the screen, unlike a fixed threshold.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav aria-label="Main navigation" className={styles.nav}>
        <a href="#hero" className={styles.brand} aria-label="Tasnem Moura — back to top">
          <span className={styles.brandMark} aria-hidden="true">TM</span>
          <span>Tasnem Moura</span>
        </a>

        <button
          className={styles.hamburger}
          aria-expanded={isMenuOpen}
          aria-controls="nav-links-list"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="nav-links-list"
          className={[styles.menu, isMenuOpen ? styles.open : ''].filter(Boolean).join(' ')}
        >
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={[
                    styles.navLink,
                    item.href === '#' + activeSection ? styles.active : '',
                  ].filter(Boolean).join(' ')}
                  aria-current={item.href === '#' + activeSection ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={hero.cvPath}
            download
            className={styles.cvButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
