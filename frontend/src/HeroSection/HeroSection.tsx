import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = () => {
    navigate('/sign-in'); // Navigate to the /sign-in page
  };

  const handleSignUp = () => {
    navigate('/sign-up'); // Navigate to the /sign-up page
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>
          Welcome To <span className={styles.brandName}>Pagey</span>
        </h2>
        <p className={styles.heroDescription}>Your Next Chapter Begins Here</p>

        <button className={styles.ctaButton} onClick={handleSignIn}>
          Sign in
        </button>
        <button className={styles.ctaButton} onClick={handleSignUp}>
          Sign up
        </button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/230dd498dc13ed60affc0f778d102f84bfe90648d84738bbe56fefbebb9d65ab?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
        alt=""
        className={styles.heroBackground}
      />
    </section>
  );
};

export default HeroSection;
