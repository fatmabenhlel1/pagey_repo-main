import React from 'react';
import styles from './PdfReader.module.css';
import Header from '../Header/Header';
import ScanDialog from './ScanDialog';
import BookCard from './BookCard';
import Footer from '../Footer/Footer';

const PdfReader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.sectionTitle}>PDF reading</h2>
      <ScanDialog />
      <h2 className={styles.sectionTitle}>Your Scanned Books</h2>
      <BookCard
        title="Book Title"
        author="Mr.kesah"
        size="99 kB"
        coverSrc="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/d45583ff97e27e4c7600d373202557faea99f8b28fb3837a45d2e03c62799832?apiKey=aa44427859a843449abe1b5eddeb093b&"
      />
      <BookCard
        title="Book Title"
        author="Mr.kesah"
        size="99 kB"
        coverSrc="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/d45583ff97e27e4c7600d373202557faea99f8b28fb3837a45d2e03c62799832?apiKey=aa44427859a843449abe1b5eddeb093b&"
      />
      <Footer />
    </div>
  );
};

export default PdfReader;