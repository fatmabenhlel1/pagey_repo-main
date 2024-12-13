import React from 'react';
import styles from './AudioBookPage.module.css';
import Header from '../Header/Header';
import AudioPlayer from './AudioPlayer';
import NewsletterForm from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const AudioBookPage: React.FC = () => {
  return (
    <main className={styles.audioBookPage}>
      <Header />
      <section className={styles.bookContent}>
        <div className={styles.bookInfo}>
          <h1 className={styles.bookTitle}>Jungle Book</h1>
          <p className={styles.bookAuthor}>by Mr.kesah</p>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d01c8cb4cc074cca725273777217fb00f8bf959c305241ef4a3fa02c4516fb0?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Jungle Book cover" className={styles.bookCover} />
      </section>
      <AudioPlayer />
      <NewsletterForm />
      <Footer />
    </main>
  );
};

export default AudioBookPage;