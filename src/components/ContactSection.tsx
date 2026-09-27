import React from 'react';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  linkedInUrl: string;
  githubUrl: string;
  email: string;
}

export function ContactSection(props: ContactSectionProps): React.JSX.Element {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h2 id="contact-heading" className={styles.heading}>Let&rsquo;s work together</h2>
        <p className={styles.intro}>
          Feel free to reach out — I am open to opportunities in hardware engineering, VLSI, and related fields.
        </p>

        <a
          href={`mailto:${props.email}`}
          className={styles.primaryCta}
          aria-label="Send Tasnem an email"
        >
          {props.email}
        </a>

        <ul className={styles.linkList}>
          <li>
            <a
              href={props.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="Visit Tasnem Moura's LinkedIn profile"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={props.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="Visit Tasnem Moura's GitHub profile"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
