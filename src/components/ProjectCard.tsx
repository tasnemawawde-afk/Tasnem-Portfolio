import Image from 'next/image';
import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  domain: string;
  externalLink?: { href: string; label: string };
  image?: ProjectImage;
}

export function ProjectCard(props: ProjectProps): React.JSX.Element {
  return (
    <article className={styles.card}>
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
      <div className={styles.body}>
        <p className={styles.domain}>{props.domain}</p>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <ul className={styles.techList}>
          {props.technologies.map((tech) => (
            <li key={tech} className={styles.techItem}>{tech}</li>
          ))}
        </ul>
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
