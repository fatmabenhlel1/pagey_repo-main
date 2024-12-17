import React from 'react';
import styles from './BookDetails.module.css';
import Header from '../Header/Header';
import BookInfo from './BookInfo';
import Overview from './Overview';
import Reviews from './Reviews';
import AuthorProductDetails from './AuthorProductDetails';

import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const BookProfile: React.FC = () => {
  return (
    <main className={styles.bookProfile}>
      <Header />
      <BookInfo />
      <Overview />
      <Reviews />
      <AuthorProductDetails />
      
      <Newsletter />
      <Footer />
    </main>
  );
};

export default BookProfile;