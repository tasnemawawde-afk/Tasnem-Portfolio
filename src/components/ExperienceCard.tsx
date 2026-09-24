import React from 'react';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  jobTitle: string;
  organisation: string;
  period: string;
  description: string;
}

export function ExperienceCard(props: ExperienceCardProps): React.JSX.Element {
  return (
    <article className={styles.card}>
      <p className={styles.period}>{props.period}</p>
      <h3 className={styles.jobTitle}>{props.jobTitle}</h3>
      <p className={styles.organisation}>{props.organisation}</p>
      <p className={styles.description}>{props.description}</p>
    </article>
  );
}
