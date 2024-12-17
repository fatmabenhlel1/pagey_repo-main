import React from 'react';
import HeroSection from './HeroSection/HeroSection.tsx';
import FeaturedBooks from './FeaturedBooks/FeatuedBooks.tsx';
import StoreLocator from './StoreLocator/StoreLocator.tsx';
import Newsletter from './NewsLetter/NewsLetter.tsx';
import Footer from './Footer/Footer.tsx';
import styles from './PageyHome.module.css';
import Header from './Header/Header.tsx';

const App: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <HeroSection />
      <FeaturedBooks />
      <StoreLocator />
      <Newsletter />
      <Footer />
      
    </div>
  );
};

export default App;
