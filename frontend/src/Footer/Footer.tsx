import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>© 2024 Pagey. All Rights Reserved</p>
        <nav className={styles.footerNav}>
          <a href="#" className={styles.footerLink}>Privacy Policy</a>
          <a href="#" className={styles.footerLink}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;