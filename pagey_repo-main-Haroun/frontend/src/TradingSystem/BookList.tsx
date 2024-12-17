import React from 'react';
import styles from './TradingSystem.module.css';
import BookItem from './BookItem';

const bookData = [
  { id: 1, title: "Book Title", author: "Mr.kesah", coverImage: "https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/4c14504c2dec68d13a8170c5dc1be4334e5e6d5c19881e66fe09fd51b2235883?apiKey=aa44427859a843449abe1b5eddeb093b&" },
  { id: 2, title: "Book Title", author: "Mr.kesah", coverImage: "https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/d45583ff97e27e4c7600d373202557faea99f8b28fb3837a45d2e03c62799832?apiKey=aa44427859a843449abe1b5eddeb093b&", type: "Hard copy" },
  { id: 3, title: "Book Title", author: "Mr.kesah", coverImage: "https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/f364d4b15eb2943c4466b6eb5f6562ca0bbc04b67ba95f5859f035ebe4a9ceb0?apiKey=aa44427859a843449abe1b5eddeb093b&", type: "Hard copy" },
  { id: 4, title: "Book Title", author: "Mr.kesah", coverImage: "https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/22b099ec283fc14cb9d653edd14e822fd8fb65644c491381c700782338b2362f?apiKey=aa44427859a843449abe1b5eddeb093b&", type: "Hard copy" }
];

const BookList: React.FC = () => {
  return (
    <div className={styles.bookList}>
      {bookData.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;