import React from 'react';
import styles from './BookLibrary.module.css';
import Header from '../Header/Header';
import BookSection from './BookSection';
import TrendingSubjects from './TrendingSubjects';
import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const BookLibrary: React.FC = () => {
  return (
    <main >
      <Header />
      <div className={styles.bookLibrary}>
      <BookSection title="The best books of 2024" />
      <BookSection title="Bestsellers" />
      <TrendingSubjects />
      <BookSection title="Best Reviewed" />
      </div>
      <Newsletter />
      <Footer />
    </main>
  );
};

export default BookLibrary;