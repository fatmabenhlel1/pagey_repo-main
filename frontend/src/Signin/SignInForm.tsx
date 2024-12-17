import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './SignInPage.module.css';
import { toast } from 'react-toastify'; // Import toast

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state for login issues

  const navigate = useNavigate();

  // Log in as Reader - Call Backend API
  const handleLogInAsReader = async () => {
    try {
      setError(null); // Clear previous errors
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      // Store the token and user ID in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);

      console.log(token)
      console.log(user.id)

      // Navigate to the home/library page
      toast.success('Logged in successfully');
      navigate('/book-library');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <section className={styles.signInSection}>
      <h2 className={styles.signInTitle}>Sign in</h2>
      <form className={styles.signInForm}>
        <div className={styles.formGroup}>
          <label htmlFor="emailOrPhone" className={styles.label}>Email or mobile phone number</label>
          <input
            type="text"
            id="emailOrPhone"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>} {/* Display backend error */}
        <button
          type="button"
          className={styles.signInButton}
          onClick={handleLogInAsReader}
        >
          Log in as a reader
        </button>
        <button
          type="button"
          className={styles.libraryOwnerButton}
          onClick={() => navigate('/library-owner')}
        >
          Log in as a library owner
        </button>
      </form>

      <div className={styles.helpLinks}>
        <a href="#" className={styles.link} onClick={() => navigate('/help')}>Other issue with sign in</a>
        <a href="#" className={styles.link} onClick={() => navigate('/forgot-password')}>Forget your password</a>
      </div>
      <div className={styles.divider}>
        <span className={styles.dividerLine}></span>
        <span className={styles.dividerText}>New to our community</span>
        <span className={styles.dividerLine}></span>
      </div>
      <button className={styles.createAccountButton} onClick={() => navigate('/sign-up')}>
        Create an account
      </button>
    </section>
  );
};

export default SignInForm;
