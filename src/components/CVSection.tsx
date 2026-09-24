import React from 'react';
import styles from './CVSection.module.css';

interface CVSectionProps {
  cvPath: string;
}

export function CVSection(props: CVSectionProps): React.JSX.Element {
  return (
    <section id="cv" aria-labelledby="cv-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="cv-heading" className={styles.heading}>CV</h2>
        <p className={styles.prompt}>
          Download my CV to learn more about my background, education, and experience.
        </p>
        <a
          href={props.cvPath}
          download
          className={styles.downloadLink}
          aria-label="Download Tasnem Moura's CV"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
