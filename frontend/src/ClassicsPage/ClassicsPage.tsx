import React from 'react';
import Header from '../Header/Header';
import BookGrid from './BookGrid.tsx';
import Pagination from './Pagination';
import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';
import styles from './ClassicsPage.module.css';

const ClassicsPage: React.FC = () => {
  return (
    <div >
      <Header />
      <div className={styles.classicsPage}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>
          <span className={styles.titleLine}></span>
          Classics
          <span className={styles.titleLine}></span>
        </h1>
        <BookGrid />
        <Pagination />
      </main>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ClassicsPage;