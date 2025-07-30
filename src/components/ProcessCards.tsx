"use client";
import styles from './ProcessCards.module.css';
import { useRef, useEffect, useState } from 'react';

const processes = [
  {
    title: 'Client Meeting',
    desc: 'Understand your client’s needs and goals in a collaborative session.',
    color: '#38a1db',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#38a1db"/><path d="M16 32v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="20" r="4" stroke="#fff" strokeWidth="2"/></svg>
    )
  },
  {
    title: 'Onsite Photography',
    desc: 'Capture high-quality images of the property for the virtual tour.',
    color: '#7be0c9',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#7be0c9"/><rect x="16" y="20" width="16" height="10" rx="2" fill="#fff"/><circle cx="24" cy="25" r="3" fill="#38a1db"/></svg>
    )
  },
  {
    title: 'Virtual Tour Build',
    desc: 'Assemble the virtual experience with interactive features and branding.',
    color: '#2563eb',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#2563eb"/><rect x="18" y="18" width="12" height="12" rx="3" fill="#fff"/><rect x="22" y="22" width="4" height="4" rx="1" fill="#38a1db"/></svg>
    )
  },
  {
    title: 'Deploy',
    desc: 'Launch the virtual tour and share it with your audience.',
    color: '#fbbf24',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fbbf24"/><path d="M24 16v16M24 16l-6 6M24 16l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  }
];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Card height (should match CSS)
  const CARD_HEIGHT = 260;
  const CARD_GAP = 0;
  const TOTAL_CARDS = processes.length;

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY + window.innerHeight / 2 - sectionRef.current.offsetTop;
      // Which card should be on top?
      let idx = Math.floor(scrollTop / (CARD_HEIGHT + CARD_GAP));
      idx = Math.max(0, Math.min(TOTAL_CARDS - 1, idx));
      setActiveIndex(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Height of sticky area
  const stickyHeight = (CARD_HEIGHT + CARD_GAP) * TOTAL_CARDS;

  return (
    <section className={styles.section} ref={sectionRef}>
      <h2 className={styles.headline}>Generate value with your clients through an all-in-one process</h2>
      <div className={styles.stickyArea} style={{ height: stickyHeight }}>
        <div className={styles.stickyCards}>
          {processes.map((proc, i) => {
            // Each card is absolutely stacked, only the top card is fully visible
            let translateY = 0;
            if (i < activeIndex) {
              translateY = -40; // previous cards move up slightly
            } else if (i === activeIndex) {
              translateY = 0;
            } else {
              translateY = 40; // next cards move down slightly
            }
            return (
              <div
                className={styles.card}
                key={proc.title}
                style={{
                  zIndex: 10 + i,
                  background: '#fff',
                  boxShadow: `0 4px 24px rgba(30,41,59,0.08)`,
                  border: i === activeIndex ? '2px solid #e5e7eb' : 'none',
                  transform: `translate(-50%, ${translateY}px)`
                }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.iconWrap} style={{ background: proc.color }}>{proc.icon}</div>
                  <div className={styles.textWrap}>
                    <h3 className={styles.cardTitle}>{proc.title}</h3>
                    <p className={styles.cardDesc}>{proc.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

export default ProcessCards;
