import React from 'react';
import styles from './ClassicsPage.module.css';

interface BookCardProps {
  imageUrl: string;
  title: string;
  author: string;
}

const BookCard: React.FC<BookCardProps> = ({ imageUrl, title, author }) => {
  return (
    <article className={styles.bookCard}>
      <img src={imageUrl} alt={`Cover of ${title}`} className={styles.bookCover} />
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.bookAuthor}>{author}</p>
      </div>
    </article>
  );
};

export default BookCard;