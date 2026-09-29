import Image from 'next/image';
import React from 'react';
import styles from './HeroSection.module.css';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  cvPath: string;
  contactHref: string;
  profileImage?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

const FOCUS_AREAS = ['VLSI', 'Microelectronics', 'Digital Systems', 'Hardware'];

// Pin positions (in %) along each edge of the chip package
const PINS = [18, 34, 50, 66, 82];

/** A digital clock waveform that draws itself under the name. */
function Waveform(): React.JSX.Element {
  // Square wave: high/low segments across a 600-wide viewBox
  const d = 'M0 30 H40 V6 H90 V30 H140 V6 H190 V30 H240 V6 H290 V30 H340 V6 H390 V30 H440 V6 H490 V30 H540 V6 H600';
  return (
    <svg className={styles.wave} viewBox="0 0 600 36" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} className={styles.waveBase} />
      <path d={d} className={styles.wavePulse} pathLength={1} />
    </svg>
  );
}

/** Circuit traces running out of the chip, with signal pulses travelling along them. */
function Traces(): React.JSX.Element {
  const traces = [
    'M200 60 V20 H330',
    'M240 60 V38 H400',
    'M340 200 H420',
    'M340 250 H380 V300 H430',
    'M60 200 H0',
    'M60 260 H26 V330',
    'M180 340 V400 H100',
    'M260 340 V420',
  ];
  return (
    <svg className={styles.traces} viewBox="0 0 440 440" aria-hidden="true">
      {traces.map((d, i) => (
        <g key={d}>
          <path d={d} className={styles.trace} />
          <path
            d={d}
            className={styles.tracePulse}
            pathLength={1}
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        </g>
      ))}
      {[[330, 20], [400, 38], [420, 200], [430, 300], [0, 200], [26, 330], [100, 400], [260, 420]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4} className={styles.via} />
      ))}
    </svg>
  );
}

export function HeroSection(props: HeroProps): React.JSX.Element {
  const [first, ...rest] = props.name.split(' ');
  const last = rest.join(' ');

  return (
    <section id="hero" aria-labelledby="hero-heading" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.statusDot} aria-hidden="true" />
            {props.title}
          </p>

          <h1 id="hero-heading" className={styles.name}>
            <span className={styles.first}>{first}</span>{' '}
            <span className={styles.last}>{last}</span>
          </h1>

          <Waveform />

          <ul className={styles.focus} aria-label="Areas of focus">
            {FOCUS_AREAS.map((area) => (
              <li key={area} className={styles.focusItem}>{area}</li>
            ))}
          </ul>

          <p className={styles.tagline}>{props.tagline}</p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              View my work <span aria-hidden="true">→</span>
            </a>
            <a href={props.cvPath} download className={styles.btnSecondary}>Download CV</a>
            <a href={props.contactHref} className={styles.btnGhost}>Get in touch</a>
          </div>
        </div>

        {props.profileImage && (
          <div className={styles.visual}>
            <Traces />
            <div className={styles.chip}>
              {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
                <div key={side} className={`${styles.pins} ${styles[side]}`} aria-hidden="true">
                  {PINS.map((p) => (
                    <span key={p} className={styles.pin} style={{ '--p': `${p}%` } as React.CSSProperties} />
                  ))}
                </div>
              ))}
              <div className={styles.die}>
                <Image
                  src={props.profileImage.src}
                  width={props.profileImage.width}
                  height={props.profileImage.height}
                  alt={props.profileImage.alt}
                  className={styles.portraitImage}
                  priority
                />
                <span className={styles.marking} aria-hidden="true">TM · HUJI · ECE</span>
                <span className={styles.notch} aria-hidden="true" />
              </div>
            </div>
          </div>
        )}
      </div>

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
