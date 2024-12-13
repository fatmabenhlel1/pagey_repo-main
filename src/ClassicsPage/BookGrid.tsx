import React from 'react';
import BookCard from './BookCard';
import styles from './ClassicsPage.module.css';

const books = Array(20).fill({
  imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67',
  title: 'Book Title',
  author: 'Author Name'
});

const BookGrid: React.FC = () => {
  return (
    <section className={styles.bookGrid}>
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </section>
  );
};

export default BookGrid;