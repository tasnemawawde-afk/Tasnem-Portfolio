import React from 'react';
import styles from './EducationSection.module.css';

interface EducationEntryProps {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
}

interface ExperienceEntryProps {
  jobTitle: string;
  organisation: string;
  period: string;
  description: string;
}

interface EducationSectionProps {
  entries: EducationEntryProps[];     // pre-sorted by page.tsx
  experience: ExperienceEntryProps[]; // pre-sorted reverse-chronological
}

export function EducationSection(props: EducationSectionProps): React.JSX.Element {
  return (
    <section
      id="education"
      aria-labelledby="background-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Background</p>
          <h2 id="background-heading" className={styles.heading}>
            Education &amp; Experience
          </h2>
        </header>

        <div className={styles.columns}>
          {/* Education column */}
          <div className={styles.column} aria-labelledby="education-subheading">
            <h3 id="education-subheading" className={styles.columnTitle}>Education</h3>
            <ol className={styles.timeline}>
              {props.entries.map((entry) => (
                <li key={entry.institution} className={styles.item}>
                  <span className={styles.year}>{entry.graduationYear}</span>
                  <p className={styles.itemTitle}>{entry.institution}</p>
                  <p className={styles.itemSubtitle}>{entry.degree}</p>
                  <p className={styles.itemDetail}>{entry.fieldOfStudy}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Experience column — carries the #experience anchor */}
          <div id="experience" className={styles.column} aria-labelledby="experience-subheading">
            <h3 id="experience-subheading" className={styles.columnTitle}>Experience</h3>
            <ol className={styles.timeline}>
              {props.experience.map((entry) => (
                <li key={entry.organisation + entry.jobTitle} className={styles.item}>
                  <span className={styles.year}>{entry.period}</span>
                  <p className={styles.itemTitle}>{entry.jobTitle}</p>
                  <p className={styles.itemSubtitle}>{entry.organisation}</p>
                  <p className={styles.itemDetail}>{entry.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
