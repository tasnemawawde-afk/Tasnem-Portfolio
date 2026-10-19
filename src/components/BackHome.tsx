import Link from 'next/link';
import React from 'react';
import styles from './BackHome.module.css';

export function BackHome(): React.JSX.Element {
  return (
    <div className={styles.wrap}>
      <Link href="/" className={styles.link}>← Back to home</Link>
    </div>
  );
}
