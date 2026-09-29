import React from 'react';
import { SkillCategory } from './SkillCategory';
import styles from './SkillsSection.module.css';

interface SkillCategoryProps {
  name: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories: SkillCategoryProps[];
}

export function SkillsSection(props: SkillsSectionProps): React.JSX.Element {
  return (
    <section id="skills" aria-labelledby="skills-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>03 · Capabilities</p>
          <h2 id="skills-heading" className={styles.heading}>Technical Skills</h2>
        </header>
        <div className={styles.grid}>
          {props.categories.map((cat) => (
            <SkillCategory key={cat.name} name={cat.name} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
