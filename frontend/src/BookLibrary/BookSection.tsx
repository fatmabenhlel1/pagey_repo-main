import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BookLibrary.module.css';

interface BookSectionProps {
  title: string;
}

const BookSection: React.FC<BookSectionProps> = ({ title }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const books = [
    { id: 1, title: 'Jungle Book', author: 'Mr.kesah', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 2, title: 'Book 2', author: 'Author 2', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 3, title: 'Book 3', author: 'Author 3', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 4, title: 'Book 4', author: 'Author 4', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
  ];

  // Handle book click and navigate to /book-profile
  const handleBookClick = () => {
    // You can dynamically generate the path based on the bookId if needed
    navigate(`/book-profile`);
  };

  return (
    <section className={styles.bookSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <a href="#viewmore" className={styles.viewMoreLink}>View More</a>
      </div>
      <div className={styles.bookList}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8357a469a3562c657592c77c2d3175d235000120389586230f3b7b35f52de6de?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Previous" className={styles.navigationArrow} />
        
        {/* Map through books and display each */}
        {books.map((book) => (
          <article 
            key={book.id} 
            className={styles.bookCard}
            onClick={() => book.id === 1 ? handleBookClick(book.id) : null} // Only navigate for the first book
          >
            <img src={book.image} alt={book.title} className={styles.bookCover} />
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>{book.author}</p>
            </div>
          </article>
        ))}

        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/980cd6eb80ab9c3df0e4b3f4ba8f182774e1bf5bb492a3e63f0747a30a47a73c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Next" className={styles.navigationArrow} />
      </div>
    </section>
  );
};

export default BookSection;
