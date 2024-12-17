import React from 'react';
import styles from './BookClub.module.css';

const BookTitle: React.FC = () => {
  return (
    <>
      
      <div className={styles.titleDivider}>
        <span className={styles.titleText}>Your Title</span>
      </div>

      <p className={styles.authorName}>by Mr.kesah</p>
      
    </>
  );
};

export default BookTitle;