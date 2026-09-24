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
        <h2 id="training-heading" className={styles.heading}>Training & Certificates</h2>
        <div className={styles.grid}>
          {props.certificates.map((cert) => (
            <CertificateCard key={cert.name} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
