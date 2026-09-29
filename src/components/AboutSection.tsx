import React from 'react';
import styles from './AboutSection.module.css';

interface AboutProps {
  biography: string;
}

// Focus areas drawn only from existing factual content (about.biography /
// education specialisation). No new facts introduced.
const FOCUS_AREAS: { label: string; detail: string }[] = [
  {
    label: 'VLSI & Microelectronics',
    detail: 'Semiconductor technologies and VLSI systems.',
  },
  {
    label: 'Digital Design',
    detail: 'Digital design and hardware development.',
  },
  {
    label: 'Engineering Projects',
    detail: 'Circuit design, simulation, validation, and system analysis.',
  },
];

export function AboutSection(props: AboutProps): React.JSX.Element {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.kicker}>01 · About</p>
          <h2 id="about-heading" className={styles.heading}>
            Engineering focused on hardware, from circuit to system.
          </h2>
          <p className={styles.bio}>{props.biography}</p>
        </div>

        <ul className={styles.focusList}>
          {FOCUS_AREAS.map((area) => (
            <li key={area.label} className={styles.focusItem}>
              <h3 className={styles.focusLabel}>{area.label}</h3>
              <p className={styles.focusDetail}>{area.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
