import React from 'react';
import styles from './TradingSystem.module.css';

interface BookItemProps {
  title: string;
  author: string;
  coverImage: string;
  type?: string;
}

const BookItem: React.FC<BookItemProps> = ({ title, author, coverImage, type }) => {
  return (
    <article className={styles.bookItem}>
      <img src={coverImage} alt={`Cover of ${title}`} className={styles.bookCover} />
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.bookAuthor}>by {author}</p>
        {type && <p className={styles.bookType}>{type}</p>}
        <hr className={styles.bookDivider} />
        <div className={styles.bookActions}>
          <button className={styles.actionButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/741272f0666af01b4f2c660209f9827b68fce8a3f6e10852656c11a7f67abdfa?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.actionIcon} />
            Contact owner
          </button>
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/e0c6843a8fbc503142bbd439ad6da18ad58f43dfdd7b6a7ba20867e138cea285?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="More options" className={styles.moreOptionsIcon} />
        </div>
      </div>
    </article>
  );
};

export default BookItem;