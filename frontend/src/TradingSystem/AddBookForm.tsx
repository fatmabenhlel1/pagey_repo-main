import React from 'react';
import styles from './TradingSystem.module.css';

const AddBookForm: React.FC = () => {
  return (
    <form className={styles.addBookForm}>
      <div className={styles.formGroup}>
        <label htmlFor="bookTitle" className={styles.formLabel}>Add Title:</label>
        <input type="text" id="bookTitle" className={styles.formInput} placeholder="Book title" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="authorName" className={styles.formLabel}>Add Author's name:</label>
        <input type="text" id="authorName" className={styles.formInput} placeholder="Author's name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="coverPhoto" className={styles.formLabel}>Upload Cover photo:</label>
        <div className={styles.uploadArea}>
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/f94c006d-a7c9-4aeb-bbd7-32e4df6a3101?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Upload cover" className={styles.uploadIcon} />
        </div>
      </div>
    </form>
  );
};

export default AddBookForm;