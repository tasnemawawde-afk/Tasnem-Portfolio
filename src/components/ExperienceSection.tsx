import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import styles from './ExperienceSection.module.css';

interface ExperienceEntryProps {
  jobTitle: string;
  organisation: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  entries: ExperienceEntryProps[];  // pre-sorted reverse-chronological by page.tsx
}

export function ExperienceSection(props: ExperienceSectionProps): React.JSX.Element {
  return (
    <section id="experience" aria-labelledby="experience-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="experience-heading" className={styles.heading}>Experience</h2>
        <div className={styles.list}>
          {props.entries.map((entry) => (
            <ExperienceCard key={entry.organisation + entry.jobTitle} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
