import React from 'react';
import styles from './BookDetails.module.css';

const BookInfo: React.FC = () => {
  return (
    <section className={styles.bookInfo}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5df869600341a4b52f52e6fa5dd1208f5e3f08cb1416fc4018fe9694e0f1028d?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Jungle Book cover" className={styles.bookCover} />
      <div className={styles.bookDetails}>
        <h2 className={styles.bookTitle}>Jungle Book</h2>
        <p className={styles.bookAuthor}>by Mr.kesah</p>
        <div className={styles.pricingInfo}>
          <p className={styles.currentPrice}>$9</p>
          <p className={styles.originalPrice}>$999</p>
          <p className={styles.discount}>Save 1000%</p>
        </div>
        <div className={styles.formatOptions}>
          {['hard cover', 'Large print', 'E-Book', 'Audio-Book'].map((format, index) => (
            <div key={index} className={styles.formatOption}>
              <span className={styles.formatName}>{format}</span>
              <span className={styles.formatPrice}>trillion $</span>
            </div>
          ))}
        </div>
        <div className={styles.bookActions}>
          <button className={styles.favoriteButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b779e071685cb547f15a0e8846eef1d68ebe234549f3aee96475c5640b10eb?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.favoriteIcon} />
            Add to favorites
          </button>
          <button className={styles.addToCartButton}>Add to Cart</button>
          <button className={styles.bookClubButton}>Book Club</button>
        </div>
      </div>
    </section>
  );
};

export default BookInfo;