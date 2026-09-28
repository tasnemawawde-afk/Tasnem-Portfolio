import Image from 'next/image';
import React from 'react';
import type { ConferencesContent } from '../content/conferences';
import styles from './ConferencesSection.module.css';

interface ConferencesSectionProps {
  content: ConferencesContent;
}

export function ConferencesSection({ content }: ConferencesSectionProps): React.JSX.Element {
  const { featured } = content;

  return (
    <section id="conferences" aria-labelledby="conferences-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Industry Engagement</p>
          <h2 id="conferences-heading" className={styles.heading}>Conferences &amp; Events</h2>
        </header>

        <article className={styles.featured}>
          <div className={styles.featuredText}>
            <ul className={styles.years} aria-label="Years attended">
              {featured.years.map((year) => (
                <li key={year} className={styles.year}>{year}</li>
              ))}
            </ul>
            <h3 className={styles.name}>{featured.name}</h3>
            <p className={styles.organisers}>{featured.organisers}</p>
            <p className={styles.description}>{featured.description}</p>
            <ul className={styles.facts}>
              {featured.facts.map((fact) => (
                <li key={fact} className={styles.fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <div className={styles.gallery}>
            {featured.photos.map((photo, i) => (
              <figure
                key={photo.src}
                className={i === 0 ? styles.photoMain : styles.photoSecondary}
              >
                <Image
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  className={styles.photo}
                  sizes="(min-width: 900px) 400px, 100vw"
                />
                <figcaption className={styles.caption}>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </article>

        <div className={styles.more}>
          <p className={styles.summary}>{content.summary}</p>
          <dl className={styles.stats}>
            {content.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <ul className={styles.fields} aria-label="Conference fields">
            {content.fields.map((field) => (
              <li key={field} className={styles.field}>{field}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
