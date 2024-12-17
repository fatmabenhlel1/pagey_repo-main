import React from 'react';
import styles from './BookClub.module.css';

const navItems = [
  'Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks',
  'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts'
];

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navItems}>
        {navItems.map((item, index) => (
          <a key={index} href="#" className={styles.navItem}>{item}</a>
        ))}
      </div>
      <a href="#" className={styles.navItem}>Music & Movies</a>
    </nav>
  );
};

export default Navigation;