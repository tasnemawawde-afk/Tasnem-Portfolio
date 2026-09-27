import Image from 'next/image';
import React from 'react';
import styles from './HeroSection.module.css';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  cvPath: string;
  contactHref: string;
  profileImage?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

// Technical identity terms — derived only from existing factual content
// (hero.tagline / skills / education specialisation fields).
const FOCUS_AREAS = ['VLSI', 'Microelectronics', 'Digital Systems', 'Hardware'];

export function HeroSection(props: HeroProps): React.JSX.Element {
  return (
    <section id="hero" aria-labelledby="hero-heading" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{props.title}</p>
          <h1 id="hero-heading" className={styles.name}>{props.name}</h1>

          <ul className={styles.focus} aria-label="Areas of focus">
            {FOCUS_AREAS.map((area) => (
              <li key={area} className={styles.focusItem}>{area}</li>
            ))}
          </ul>

          <p className={styles.tagline}>{props.tagline}</p>

          <div className={styles.actions}>
            <a href={props.contactHref} className={styles.btnPrimary}>Get in Touch</a>
            <a href={props.cvPath} download className={styles.btnSecondary}>Download CV</a>
          </div>
        </div>

        {props.profileImage && (
          <div className={styles.portrait}>
            <Image
              src={props.profileImage.src}
              width={props.profileImage.width}
              height={props.profileImage.height}
              alt={props.profileImage.alt}
              className={styles.portraitImage}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
