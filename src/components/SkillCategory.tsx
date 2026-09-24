import React from 'react';
import styles from './SkillCategory.module.css';

interface SkillCategoryProps {
  name: string;
  skills: string[];
}

export function SkillCategory(props: SkillCategoryProps): React.JSX.Element {
  return (
    <div className={styles.category}>
      <h3 className={styles.name}>{props.name}</h3>
      <ul className={styles.list}>
        {props.skills.map((skill) => (
          <li key={skill} className={styles.item}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
