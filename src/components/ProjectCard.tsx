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

export function ProjectCard(props: ProjectProps): React.JSX.Element {
  return (
    <article className={styles.card}>
      <div className={styles.aside}>
        {props.index !== undefined && (
          <span className={styles.index} aria-hidden="true">
            {String(props.index).padStart(2, '0')}
          </span>
        )}
        <span className={styles.domain}>{props.domain}</span>
      </div>

      <div className={styles.body}>
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

        {props.highlights && props.highlights.length > 0 && (
          <dl className={styles.metrics}>
            {props.highlights.map((h) => (
              <div key={h.label} className={styles.metric}>
                <dt className={styles.metricLabel}>{h.label}</dt>
                <dd className={styles.metricValue}>{h.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <p className={styles.description}>{props.description}</p>

        <div className={styles.tech}>
          <span className={styles.techLabel}>Tools &amp; Technologies</span>
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
    </article>
  );
}
