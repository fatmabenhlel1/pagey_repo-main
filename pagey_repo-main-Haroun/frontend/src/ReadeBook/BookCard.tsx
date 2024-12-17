import React from 'react';
import styles from './PdfReader.module.css';

interface BookCardProps {
  title: string;
  author: string;
  size: string;
  coverSrc: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, size, coverSrc }) => {
  return (
    <article className={styles.bookCard}>
      <div className={styles.bookContent}>
        <img src={coverSrc} alt={`Cover of ${title}`} className={styles.bookCover} />
        <div className={styles.bookDetails}>
          <h3 className={styles.bookTitle}>{title}</h3>
          <p className={styles.bookAuthor}>by {author}</p>
          <p className={styles.bookSize}>PDF size: {size}</p>
          <hr className={styles.divider} />
          <div className={styles.bookActions}>
            <div className={styles.actionGroup}>
              <div className={styles.action}>
                <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/3f9fd39e546176c325d9f1bf4517fae6b7705a72db7baabc342ed063f571aec4?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Favorite" className={styles.actionIcon} />
                <span>Add to favorites</span>
              </div>
              <div className={styles.action}>
                <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/4c9020cba6d10de37fa68b7bd40e99efea83c2f9c76558f1c5197370e766235b?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Search" className={styles.searchIcon} />
                <span className={styles.searchText}>search in book library</span>
              </div>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/e0c6843a8fbc503142bbd439ad6da18ad58f43dfdd7b6a7ba20867e138cea285?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="More options" className={styles.moreIcon} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BookCard;