import React from 'react';
import styles from './BookDetails.module.css';

const Reviews: React.FC = () => {
  const reviewsData = [
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/324badc1-e2b3-4edc-a949-c44573363f52?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67",
      text: "blablablablabla blablabla bla bla blablablablabla blablabla bla bla bla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla"
    },
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf15e566-8213-401d-97d9-c2c5b8bbbe72?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67",
      text: "blablablablabla blablabla bla bla blablablablabla blablabla bla bla bla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla bla bla blablablablabla blablabla"
    }
  ];

  return (
    <section className={styles.reviews}>
      <h3 className={styles.sectionTitle}>Community Reviews</h3>
      {reviewsData.map((review, index) => (
        <div key={index} className={styles.review}>
          <img src={review.avatarSrc} alt="Reviewer avatar" className={styles.reviewerAvatar} />
          <p className={styles.reviewText}>{review.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Reviews;