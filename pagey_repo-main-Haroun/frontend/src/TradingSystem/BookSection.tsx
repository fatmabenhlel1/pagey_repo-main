import React from 'react';
import styles from './TradingSystem.module.css';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const BookSection: React.FC = () => {
  return (
    <section className={styles.bookSection}>
      <AddBookForm />
      <div className={styles.sectionDivider}>
        <hr className={styles.dividerLine} />
        <h2 className={styles.sectionTitle}>Books You are interested in</h2>
        <hr className={styles.dividerLine} />
      </div>
      <BookList />
      <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/e9beeb91-36db-45d5-a3a1-09b695b5e527?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.decorativeIcon} />
      <h2 className={styles.tradingTitle}>Available for Trading</h2>
      <div className={styles.searchContainer}>
        <input type="search" className={styles.searchInput} placeholder="Search" aria-label="Search available books" />
        <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/f922b326fc98608fe8a5a676df70a20e67510c68c8f0ded3e3a99d7f2478272d?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.searchIcon} />
      </div>
    </section>
  );
};

export default BookSection;