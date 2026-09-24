import React from 'react';
import styles from './HeroSection.module.css';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  cvPath: string;
  contactHref: string;
}

export function HeroSection(props: HeroProps): React.JSX.Element {
  return (
    <section id="hero" aria-labelledby="hero-heading" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Engineering Portfolio</p>
        <h1 id="hero-heading" className={styles.name}>{props.name}</h1>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.tagline}>{props.tagline}</p>
        <div className={styles.actions}>
          <a href={props.contactHref} className={styles.btnPrimary}>Get in Touch</a>
          <a href={props.cvPath} download className={styles.btnSecondary}>Download CV</a>
        </div>
      </div>
    </section>
  );
}
