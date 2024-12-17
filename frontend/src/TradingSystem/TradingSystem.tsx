import React from 'react';
import styles from './TradingSystem.module.css';
import Header from '../Header/Header';
import BookSection from './BookSection';
import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const TradingSystem: React.FC = () => {
  return (
    <main className={styles.tradingSystem}>
      <Header />
      <h1 className={styles.addBookTitle}>Add a book</h1>
      <BookSection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default TradingSystem;