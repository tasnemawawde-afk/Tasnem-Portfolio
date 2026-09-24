import Image from 'next/image';
import React from 'react';
import styles from './AboutSection.module.css';

interface AboutProps {
  biography: string;
  profileImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export function AboutSection(props: AboutProps): React.JSX.Element {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="about-heading" className={styles.heading}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={props.profileImage.src}
              width={props.profileImage.width}
              height={props.profileImage.height}
              alt={props.profileImage.alt}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.bio}>
            <p>{props.biography}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
