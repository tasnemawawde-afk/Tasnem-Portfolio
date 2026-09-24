"use client";

import React from 'react';
import styles from './NavBar.module.css';

const NAV_ITEMS = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Education',  href: '#education'  },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Training',   href: '#training'   },
  { label: 'CV',         href: '#cv'         },
  { label: 'Contact',    href: '#contact'    },
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
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav aria-label="Main navigation" className={styles.nav}>
        <a href="#hero" className={styles.brand}>
          Tasnem Moura
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

        <ul
          id="nav-links-list"
          className={[styles.navList, isMenuOpen ? styles.open : ''].filter(Boolean).join(' ')}
        >
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
      </nav>
    </header>
  );
}
