"use client";
import React, { useRef } from 'react';
import styles from './VerticalScrollCards.module.css';

const cards = [
  {
    title: 'Client Meeting',
    desc: 'Understand your client’s needs and goals in a collaborative session.',
    color: '#38a1db',
  },
  {
    title: 'Onsite Photography',
    desc: 'Capture high-quality images of the property for the virtual tour.',
    color: '#7be0c9',
  },
  {
    title: 'Virtual Tour Build',
    desc: 'Assemble the virtual experience with interactive features and branding.',
    color: '#2563eb',
  },
  {
    title: 'Deploy',
    desc: 'Launch the virtual tour and share it with your audience.',
    color: '#fbbf24',
  },
];

export default function VerticalScrollCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.section} ref={sectionRef}>
      <h2 className={styles.headline}>Our Process</h2>
      <div className={styles.stickyContainer}>
        {cards.map((card, i) => (
          <div
            className={styles.card}
            key={card.title}
            style={{ background: '#fff', borderTop: `6px solid ${card.color}` }}
          >
            <div className={styles.cardContent}>
              <div className={styles.icon} style={{ background: card.color }} />
              <div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
