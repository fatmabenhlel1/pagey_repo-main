import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterDescription}>
          Stay updated with the latest releases and promotions
        </p>
      </div>
      <form className={styles.newsletterForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.newsletterBackground} />
    </section>
  );
};

export default Newsletter;