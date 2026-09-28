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
            {featured.photos.map((photo) => (
              <figure
                key={photo.src}
                className={photo.width > photo.height ? styles.photoWide : styles.photoTall}
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
          <p className={styles.highlight}>
            <span className={styles.highlightValue}>{content.highlight.value}</span>
            <span className={styles.highlightLabel}>{content.highlight.label}</span>
          </p>
          <div className={styles.moreText}>
            <p className={styles.summary}>{content.summary}</p>
            <ul className={styles.fields} aria-label="Conference fields">
              {content.fields.map((field) => (
                <li key={field} className={styles.field}>{field}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
