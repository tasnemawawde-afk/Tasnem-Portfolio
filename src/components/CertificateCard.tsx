import React from 'react';
import styles from './CertificateCard.module.css';

interface CertificateCardProps {
  name: string;
  issuingOrganisation: string;
  completionDate: string;
  credentialUrl?: string;
}

export function CertificateCard(props: CertificateCardProps): React.JSX.Element {
  return (
    <article className={styles.card}>
      <span className={styles.year}>{props.completionDate}</span>
      <h3 className={styles.name}>{props.name}</h3>
      <p className={styles.organisation}>{props.issuingOrganisation}</p>
      {props.credentialUrl && (
        <a
          href={props.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credentialLink}
        >
          Verify Credential
        </a>
      )}
    </article>
  );
}
