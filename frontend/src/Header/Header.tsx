import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import styles from './Header.module.css';

const Header: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const navItems = [
    { label: 'Books', path: '/book-library' },
    { label: 'Classics', path: '/Classics' },
    { label: 'Fiction', path: '/fiction' },
    { label: 'Nonfiction', path: '/nonfiction' },
    { label: 'eBooks', path: '/ebooks' },
    { label: 'Audiobooks', path: '/audiobooks' },
    { label: 'Teens & YA', path: '/teens-ya' },
    { label: 'Toys & Games', path: '/toys-games' },
    { label: 'Stationery & Gifts', path: '/stationery-gifts' },
  ];

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <a href="/" className={styles.createhref}>
          <h1 className={styles.logo}>Pagey</h1>
        </a>
        <div className={styles.userActions}>
          <form className={styles.searchForm} role="search">
            <input
              type="search"
              id="search"
              className={styles.searchInput}
              placeholder="Search"
            />
            <button type="submit" className={styles.searchButton} aria-label="Submit search">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d08929509878e10a610133339c7b5249869905f38d81364d31c5a9e8434c2c2a?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
                alt=""
                className={styles.searchIcon}
              />
            </button>
          </form>
          
          <button className={styles.iconButton} aria-label="User profile">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97912ab42c0bc71a14d9ea1b97bf0c97dfb5ea80766eb18c13d2fafb89107644?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
              alt=""
              className={styles.userIcon}
            />
          </button>
          <a href="/my-cart">
            <button className={styles.iconButton} aria-label="Notifications">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a14411436f1f1df6a183c08c0cba8d43624cb93d5090af66c799bb5d271a1ce8?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
                alt=""
                className={styles.notificationIcon}
              />
            </button>
          </a>
          <a href="/user-profile">
            <button className={styles.iconButton} aria-label="Shopping cart">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c2e0fa5fa9c45eddcda1867d829f4f063beebff5d56909f8fcdf9285d002ab3?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
                alt=""
                className={styles.cartIcon}
              />
            </button>
          </a>
        </div>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              {/* Use a span instead of an anchor tag */}
              <span
                className={styles.navLink}
                onClick={() => handleNavigation(item.path)} // Handle navigation on click
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
