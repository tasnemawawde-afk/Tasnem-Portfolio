import React from 'react';
import styles from './EducationCard.module.css';

interface EducationCardProps {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
}

export function EducationCard(props: EducationCardProps): React.JSX.Element {
  return (
    <article className={styles.card}>
      <p className={styles.year}>{props.graduationYear}</p>
      <h3 className={styles.institution}>{props.institution}</h3>
      <p className={styles.degree}>{props.degree}</p>
      <p className={styles.field}>{props.fieldOfStudy}</p>
    </article>
  );
}
