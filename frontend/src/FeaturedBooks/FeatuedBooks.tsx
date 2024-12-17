import React from 'react';
import styles from './FeaturedBooks.module.css';

interface BookProps {
  cover: string;
  tag: string;
  title: string;
  author: string;
}

const Book: React.FC<BookProps> = ({ cover, tag, title, author }) => (
  <article className={styles.bookCard}>
    <div className={styles.bookCoverWrapper}>
      <img src={cover} alt={`Cover of ${title}`} className={styles.bookCover} />
      <span className={styles.bookTag}>{tag}</span>
    </div>
    <div className={styles.bookInfo}>
      <h3 className={styles.bookTitle}>{title}</h3>
      <p className={styles.bookAuthor}>{author}</p>
    </div>
  </article>
);

const FeaturedBooks: React.FC = () => {
  const books = [
    { cover: "https://cdn.builder.io/api/v1/image/assets/TEMP/565d2c6ac304b15c183a348d84e49e94b344600fea82412ef5f066591c62b628?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", tag: "Bestseller", title: "The Alchemist", author: "Paulo Coelho" },
    { cover: "../assets/TGG.jpg", tag: "Classic", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { cover: "../assets/TKAM.jpg", tag: "Modern Classic", title: "To Kill a Mockingbird", author: "Harper Lee" },
  ];

  return (
    <section className={styles.featuredBooks}>
      <h2 className={styles.sectionTitle}>Featured Books</h2>
      <div className={styles.bookGrid}>
        {books.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/571441b3e4aabdac7135a937652f507c7c6c4c35be9238e595244369f32af985?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.sectionBackground} />
    </section>
  );
};

export default FeaturedBooks;