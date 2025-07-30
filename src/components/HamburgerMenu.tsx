"use client";
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = ({ links }: { links: { label: string, href: string }[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.menuWrapper}>
      <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={open ? styles.open : ''}></span>
        <span className={open ? styles.open : ''}></span>
        <span className={open ? styles.open : ''}></span>
      </button>
      <nav className={`${styles.menu} ${open ? styles.show : ''}`}>
        <ul>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
