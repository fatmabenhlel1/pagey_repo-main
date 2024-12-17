import React from 'react';
import styles from './BookClub.module.css';
import Header from '../Header/Header';
import BookTitle from './BookTitle';
import ChatSection from './ChatSection';
import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const BookClub: React.FC = () => {
  return (
    <div className={styles.bookClub}>
      <Header />
      <BookTitle />
      <button className={styles.chatButton}>Hello</button>
      <ChatSection /> 
      <button className={styles.chatButton}>Sup</button>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BookClub;