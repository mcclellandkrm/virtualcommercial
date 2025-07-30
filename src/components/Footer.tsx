import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} VirtualCommercial. All rights reserved.</p>
  </footer>
);

export default Footer;
