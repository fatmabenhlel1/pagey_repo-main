import React from 'react';
import styles from './BookForm.module.css';
import { InputField } from './InputField';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
interface BookFormProps {}

export const BookForm: React.FC<BookFormProps> = () => {
  return (
    <div>
      <Header/>
      <form className={styles.container}>
        <section className={styles.formSection}>
          <div className={styles.formatSelection}>
            <label htmlFor="bookFormat" className={styles.sectionTitle}>Choose a Book format:</label>
            <div className={styles.dropdown}>
              <select id="bookFormat" className={styles.dropdownValue}>
                <option>Hard copy</option>
                <option>Audio</option>
              </select>
            </div>
          </div>
        </section>
        
        <section className={styles.scanSection}>
          
          <p>Click here to scan your book:</p>
          <div className={styles.centerContainer2}>
              <button className={styles.circularButton}>
                <img src="/assets/add_file.png" alt="icon" className={styles.buttonIcon} />
              </button>
          </div>
          <p className={styles.audioBookLabel}>Add Audio book:</p>
          <div className={styles.centerContainer}>
            <button className={styles.circularButton}>
              <img src="/assets/audio.png" alt="icon" className={styles.buttonIcon} />
            </button>
          </div>
        </section>
        <hr className={styles.horizontalLine}></hr>
        <section className={styles.formFields}>
          <div className={styles.divider} />
          <InputField label="Add Title:" placeholder="Book title" />
          <InputField label="Add Author's name:" placeholder="Author's name" />
          <InputField label="Add ISBN-13:" placeholder="ISBN-13 code" />
          
          <div className={styles.overviewSection}>
            <div className={styles.overviewContainer}>
              <div className={styles.overviewLabelColumn}>
                <label htmlFor="overview" className={styles.overviewLabel}>Add Overview:</label>
              </div>
              <div className={styles.overviewInputColumn}>
                <textarea id="overview" className={styles.overviewInput} placeholder="Add overview here" />
              </div>
            </div>
          </div>
        </section>
      </form>
      <Footer/>
    </div>
  );
};
export default BookForm;