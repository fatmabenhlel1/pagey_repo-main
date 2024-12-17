import React from 'react';
import Header from '../Header/Header';
import CreateAccount from './CreateAccount';
import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const SignUp: React.FC = () => {
  

  return (
    <div>
      <Header/>
      <main>
        <CreateAccount />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;