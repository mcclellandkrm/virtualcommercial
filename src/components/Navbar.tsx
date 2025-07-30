"use client";
import styles from './Navbar.module.css';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import { useState, useRef } from 'react';

const useCases = [
  { title: 'For Servicers', desc: 'Improve yields on your MSR with technology that enables your recapture and cross-sell strategy.' },
  { title: 'For Subservicers', desc: 'Win more servicing deals by offering your clients best-in-class recapture functionality.' },
  { title: 'For Lenders', desc: 'Ensure your LOs focus to recapture the highest intent leads from your portfolios.' },
];

const company = [
  { title: 'About Us', desc: 'Learn more about our mission and team.' },
  { title: 'Careers', desc: 'Join our growing team.' },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Open dropdown immediately
  const handleOpen = (menu: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(menu);
  };
  // Delay close to allow mouse to move between parent and dropdown
  const handleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 180);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><Logo /></div>
      <div className={styles.desktopLinks}>
        <ul className={styles.links}>
          <li><a href="#hero">How it Works</a></li>
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => handleOpen('usecases')}
            onMouseLeave={handleClose}
            style={{ position: 'relative' }}
          >
            <span className={styles.linkWithArrow}>Use Cases <span className={styles.arrow}>▼</span></span>
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleOpen('usecases')}
              onMouseLeave={handleClose}
              style={{ display: openMenu === 'usecases' ? 'flex' : 'none' }}
            >
              {useCases.map((item, i) => (
                <div className={styles.dropdownItem} key={i}>
                  <div className={styles.dropdownTitle}>{item.title}</div>
                  <div className={styles.dropdownDesc}>{item.desc}</div>
                </div>
              ))}
            </div>
          </li>
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => handleOpen('company')}
            onMouseLeave={handleClose}
            style={{ position: 'relative' }}
          >
            <span className={styles.linkWithArrow}>Company <span className={styles.arrow}>▼</span></span>
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleOpen('company')}
              onMouseLeave={handleClose}
              style={{ display: openMenu === 'company' ? 'flex' : 'none' }}
            >
              {company.map((item, i) => (
                <div className={styles.dropdownItem} key={i}>
                  <div className={styles.dropdownTitle}>{item.title}</div>
                  <div className={styles.dropdownDesc}>{item.desc}</div>
                </div>
              ))}
            </div>
          </li>
        </ul>
        <a href="#contact" className={styles.ctaBtn}>Get in touch</a>
      </div>
      <div className={styles.mobileMenu}>
        <HamburgerMenu links={[
          { label: 'How it Works', href: '#hero' },
          { label: 'Use Cases', href: '#panels' },
          { label: 'Company', href: '#company' },
          { label: 'Get in touch', href: '#contact' },
        ]} />
      </div>
    </nav>
  );
};

export default Navbar;
