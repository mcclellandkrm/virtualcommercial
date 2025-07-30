"use client";
"use client";
import styles from './VerticalPanels.module.css';
import { useState } from 'react';
import Link from 'next/link';

const panels = [
  {
    title: 'Retail',
    subtitle: 'Modern solutions for retail businesses to engage and convert customers.',
    button: 'Retail',
    link: '/retail',
    graphic: (
      <img src="https://assets-global.website-files.com/63e3e7b7e7b7e7e7e7e7e7e7/63e3e7b7e7b7e7e7e7e7e7e7_servicers.png" alt="Retail" className={styles.panelIcon} />
    )
  },
  {
    title: 'Commercial',
    subtitle: 'Powerful tools for commercial property and business management.',
    button: 'Commercial',
    link: '/commercial',
    graphic: (
      <img src="https://assets-global.website-files.com/63e3e7b7e7b7e7e7e7e7e7e7/63e3e7b7e7b7e7e7e7e7e7e7_subservicers.png" alt="Commercial" className={styles.panelIcon} />
    )
  },
  {
    title: 'Hospitality',
    subtitle: 'Engage guests and streamline operations for hospitality businesses.',
    button: 'Hospitality',
    link: '/hospitality',
    graphic: (
      <img src="https://assets-global.website-files.com/63e3e7b7e7b7e7e7e7e7e7e7/63e3e7b7e7b7e7e7e7e7e7e7_lenders.png" alt="Hospitality" className={styles.panelIcon} />
    )
  },
];

const VerticalPanels = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="panels" className={styles.section}>
      <div className={styles.headlineBlock}>
        <h2 className={styles.headline}>The most effective way to retain homeowners</h2>
        <p className={styles.description}>
          Predict prepayment and deliver personalized offers that convert by making the tough decisions of homeownership simple and intuitive.
        </p>
      </div>
      <div className={styles.panels}>
        {panels.map((panel, i) => (
          <div
            className={styles.panel + (hovered === i ? ' ' + styles.panelHovered : '')}
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className={styles.panelTitle}>{panel.title}</h3>
            {panel.graphic}
            <div className={styles.panelReveal + (hovered === i ? ' ' + styles.revealVisible : '')}>
              <p className={styles.panelSubtitle}>{panel.subtitle}</p>
              <Link href={panel.link} className={styles.panelButton}>{panel.button} &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalPanels;
