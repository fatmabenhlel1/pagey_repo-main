import React from 'react';
import styles from './SignInPage.module.css';
import Header from '../Header/Header';
import SignInForm from './SignInForm';
import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const SignInPage: React.FC = () => {
  return (
    <main className={styles.signInPage}>
      <Header />
      <SignInForm />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default SignInPage;