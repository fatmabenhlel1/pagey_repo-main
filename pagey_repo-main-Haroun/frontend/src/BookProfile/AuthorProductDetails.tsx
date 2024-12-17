import React from 'react';
import styles from './BookDetails.module.css';

const AuthorProductDetails: React.FC = () => {
  const productDetails = [
    { label: "ISBN-13", value: "9781631490347" },
    { label: "Publisher", value: "ena" },
    { label: "Date", value: "11/21/2017" },
    { label: "Sold by", value: "Barnes & Noble" },
    { label: "Format", value: "eBook" },
    { label: "Pages", value: "624" },
    { label: "Sales rank", value: "233" },
    { label: "File size", value: "2 MB" }
  ];

  return (
    <section className={styles.authorProductDetails}>
      <div className={styles.detailsContainer}>
        <h3 className={styles.detailsTitle}>Author Details</h3>
        <h3 className={styles.detailsTitle}>Product Details</h3>
      </div>
      <div className={styles.productDetails}>
        {productDetails.map((detail, index) => (
          <p key={index} className={styles.detailItem}>
            <span className={styles.detailLabel}>{detail.label}:</span> {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AuthorProductDetails;