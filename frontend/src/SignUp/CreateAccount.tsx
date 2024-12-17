import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './CreateAccount.module.css';
import { toast } from 'react-toastify'; // Import toast

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(null);
      setSuccess(null);

      // Send POST request to backend
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        toast.success('Account created successfully!');
        setFormData({ username: '', email: '', password: '' });
        navigate('/Sign-in'); // Navigate to the login page
      }
    } catch (error: any) {
      setError(
        error.response?.data?.error ||
          'An error occurred while creating your account. Please try again.'
      );
    }
  };

  return (
    <section className={styles.createAccount}>
      <h2 className={styles.title}>Create an Account</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.loginPrompt}>
          Already have an account?{' '}
          <a href="/Sign-in" className={styles.loginLink}>
            Log in
          </a>
        </p>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className={styles.passwordHint}>
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </p>
        </div>
        <p className={styles.termsText}>
          By creating an account, you agree to our <br />
          <a href="#" className={styles.termsLink}>Terms of Use</a> and{' '}
          <a href="#" className={styles.termsLink}>Privacy Policy</a>.
        </p>
        <button type="submit" className={styles.submitButton}>
          Create an Account
        </button>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <p className={styles.loginPrompt}>
          Already have an account?{' '}
          <a href="/Sign-in" className={styles.loginLink}>
            Log in
          </a>
        </p>
      </form>
    </section>
  );
};

export default CreateAccount;
