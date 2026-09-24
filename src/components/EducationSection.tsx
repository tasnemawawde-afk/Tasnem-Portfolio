import React from 'react';
import { EducationCard } from './EducationCard';
import styles from './EducationSection.module.css';

interface EducationEntryProps {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
}

interface EducationSectionProps {
  entries: EducationEntryProps[];  // pre-sorted by page.tsx
}

export function EducationSection(props: EducationSectionProps): React.JSX.Element {
  return (
    <section id="education" aria-labelledby="education-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="education-heading" className={styles.heading}>Education</h2>
        <div className={styles.list}>
          {props.entries.map((entry) => (
            <EducationCard key={entry.institution} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
