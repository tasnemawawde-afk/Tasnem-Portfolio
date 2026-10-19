import Link from 'next/link';
import React from 'react';
import { SITE_PAGES } from '../content/sections';
import styles from './ExploreSection.module.css';

/** Home-page grid: one button per subject, each leading to its own page. */
export function ExploreSection(): React.JSX.Element {
  return (
    <section id="explore" aria-labelledby="explore-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="explore-heading" className={styles.heading}>Explore</h2>
        <ul className={styles.grid}>
          {SITE_PAGES.map((page, i) => (
            <li key={page.href}>
              <Link href={page.href} className={styles.card}>
                <span className={styles.index} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.title}>{page.title}</span>
                <span className={styles.description}>{page.description}</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
