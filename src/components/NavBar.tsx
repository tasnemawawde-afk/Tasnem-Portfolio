"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { SITE_PAGES } from '../content/sections';
import { hero } from '../content/hero';
import styles from './NavBar.module.css';

export function NavBar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav aria-label="Main navigation" className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="Tasnem Moura — home" onClick={() => setIsMenuOpen(false)}>
          <span className={styles.brandMark} aria-hidden="true">TM</span>
          <span>Tasnem Moura</span>
        </Link>

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
            {SITE_PAGES.filter((item) => item.href !== '/cv').map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    styles.navLink,
                    pathname === item.href ? styles.active : '',
                  ].filter(Boolean).join(' ')}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
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
