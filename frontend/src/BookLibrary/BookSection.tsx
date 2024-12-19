import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './BookLibrary.module.css';
interface Book {
  _id: string;
  title: string;
  author: { name?: string }; // Assuming the author is an object with a name field
  imagePath: string; // Relative image path
}

interface BookSectionProps {
  title: string;
}

const BookSection: React.FC<BookSectionProps> = ({ title }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]); // Books fetched dynamically
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books'); // Replace with your API endpoint
        setBooks(response.data);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleBookClick = () => {
    navigate(`/book-profile`);
  };

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.bookSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <a href="#viewmore" className={styles.viewMoreLink}>View More</a>
      </div>
      <div className={styles.bookList}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8357a469a3562c657592c77c2d3175d235000120389586230f3b7b35f52de6de?placeholderIfAbsent=true"
          alt="Previous"
          className={styles.navigationArrow}
        />

        {/* Dynamically display fetched books */}
        {books.map((book) => (
          <article
            key={book._id}
            className={styles.bookCard}
            onClick={() => handleBookClick()}
          >
            <img
              src={book.imagePath} // Adjust with your backend domain
              alt={book.title}
              className={styles.bookCover}
            />
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>{book.author?.name || 'Unknown Author'}</p>
            </div>
          </article>
        ))}

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/980cd6eb80ab9c3df0e4b3f4ba8f182774e1bf5bb492a3e63f0747a30a47a73c?placeholderIfAbsent=true"
          alt="Next"
          className={styles.navigationArrow}
        />
      </div>
    </section>
  );
};

export default BookSection