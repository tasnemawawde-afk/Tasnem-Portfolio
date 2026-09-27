import React from 'react';
import { CertificateCard } from './CertificateCard';
import styles from './TrainingSection.module.css';

interface CertificateProps {
  name: string;
  issuingOrganisation: string;
  completionDate: string;
  credentialUrl?: string;
}

interface TrainingSectionProps {
  certificates: CertificateProps[];
}

export function TrainingSection(props: TrainingSectionProps): React.JSX.Element {
  return (
    <section id="training" aria-labelledby="training-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Continued Learning</p>
          <h2 id="training-heading" className={styles.heading}>Training &amp; Certificates</h2>
        </header>
        <ul className={styles.grid}>
          {props.certificates.map((cert) => (
            <li key={cert.name}>
              <CertificateCard {...cert} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
