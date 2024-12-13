import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './SignInPage.module.css';

const SignInForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const handleTermsLink = () => {
    navigate('/terms'); // Navigate to the Terms of Use page
  };

  const handlePrivacyPolicyLink = () => {
    navigate('/privacy-policy'); // Navigate to the Privacy Policy page
  };

  const handleHelpLink = () => {
    navigate('/help'); // Navigate to the help page
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to the forgot password page
  };

  const handleCreateAccount = () => {
    navigate('/sign-up'); // Navigate to the sign-up page
  };

  const handleLogInAsReader = () => {
    navigate('/book-library'); // Navigate to the home page (or wherever you want to go after login)
  };

  const handleLogInAsLibraryOwner = () => {
    // Navigate to the library owner login page, adjust the path if needed
    navigate('/library-owner');
  };

  return (
    <section className={styles.signInSection}>
      <h2 className={styles.signInTitle}>Sign in</h2>
      <form className={styles.signInForm}>
        <div className={styles.formGroup}>
          <label htmlFor="emailOrPhone" className={styles.label}>Email or mobile phone number</label>
          <input type="text" id="emailOrPhone" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.passwordHeader}>
            <label htmlFor="password" className={styles.label}>Your password</label>
            <button
              type="button"
              className={styles.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d1b78634eafb5a7b069542d6346404fd95b35131d0c31d9c980ecb7eb3b17c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
                alt=""
                className={styles.eyeIcon}
              />
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className={styles.input}
            required
          />
        </div>
        <p className={styles.termsText}>
          By continuing, you agree to the 
          <a href="#" className={styles.link} onClick={handleTermsLink}>Terms of use</a> 
          and <a href="#" className={styles.link} onClick={handlePrivacyPolicyLink}>Privacy Policy</a>.
        </p>
        <button type="button" className={styles.signInButton} onClick={handleLogInAsReader}>Log in as a reader</button>
        <button type="button" className={styles.libraryOwnerButton} onClick={handleLogInAsLibraryOwner}>Log in as a library owner</button>
      </form>
      
      <div className={styles.helpLinks}>
        <a href="#" className={styles.link} onClick={handleHelpLink}>Other issue with sign in</a>
        <a href="#" className={styles.link} onClick={handleForgotPassword}>Forget your password</a>
      </div>
      <div className={styles.divider}>
        <span className={styles.dividerLine}></span>
        <span className={styles.dividerText}>New to our community</span>
        <span className={styles.dividerLine}></span>
      </div>
      <button className={styles.createAccountButton} onClick={handleCreateAccount}>Create an account</button>
    </section>
  );
};

export default SignInForm;
