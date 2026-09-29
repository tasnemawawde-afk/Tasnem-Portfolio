import Image from 'next/image';
import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ProjectHighlight {
  value: string;
  label: string;
}

interface ProjectProps {
  index?: number;
  title: string;
  description: string;
  technologies: string[];
  domain: string;
  highlights?: ProjectHighlight[];
  externalLink?: { href: string; label: string };
  image?: ProjectImage;
}

/**
 * A project presented as a component datasheet:
 * header strip with part number, title, electrical characteristics table,
 * then the design narrative and toolchain.
 */
export function ProjectCard(props: ProjectProps): React.JSX.Element {
  const partNo = `TM-${String(props.index ?? 0).padStart(2, '0')}`;

  return (
    <article className={styles.card}>
      <header className={styles.strip}>
        <span className={styles.part}>{partNo}</span>
        <span className={styles.domain}>{props.domain}</span>
        <span className={styles.stamp} aria-hidden="true">DATASHEET</span>
      </header>

      <div className={styles.body}>
        <div className={styles.main}>
          <h3 className={styles.title}>{props.title}</h3>

          {props.image && (
            <div className={styles.imageWrapper}>
              <Image
                src={props.image.src}
                width={props.image.width}
                height={props.image.height}
                alt={props.image.alt}
                className={styles.image}
              />
            </div>
          )}

          <p className={styles.description}>{props.description}</p>

          <div className={styles.tech}>
            <span className={styles.techLabel}>Toolchain</span>
            <ul className={styles.techList}>
              {props.technologies.map((tech) => (
                <li key={tech} className={styles.techItem}>{tech}</li>
              ))}
            </ul>
          </div>

          {props.externalLink && (
            <a
              href={props.externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {props.externalLink.label}
            </a>
          )}
        </div>

        {props.highlights && props.highlights.length > 0 && (
          <aside className={styles.specs} aria-label="Key results">
            <p className={styles.specsTitle}>Characteristics</p>
            <dl className={styles.specTable}>
              {props.highlights.map((h) => (
                <div key={h.label} className={styles.specRow}>
                  <dt className={styles.specLabel}>{h.label}</dt>
                  <dd className={styles.specValue}>{h.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        )}
      </div>
    </article>
  );
}
