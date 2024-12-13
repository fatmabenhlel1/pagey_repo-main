import React from 'react';
import styles from './CreateAccount.module.css';
const CreateAccount: React.FC = () => {
  return (
    <section className={styles.createAccount}>
      <h2 className={styles.title}>Create an account</h2>
      <form className={styles.form}>
        <p className={styles.loginPrompt}>
          Already have an account? <a href="/Sign-in" className={styles.loginLink}>Log in</a>
        </p>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>User name</label>
          <input type="text" id="username" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email address</label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.passwordHeader}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <button type="button" className={styles.togglePassword}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/965e7aa81dab1f5f7cebc14383e6d97dc28b132ec8bf439807b6989367ebcc14?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.eyeIcon} />
              Hide
            </button>
          </div>
          <input type="password" id="password" className={styles.input} />
          <p className={styles.passwordHint}>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>
        <p className={styles.termsText}>
          By creating an account, you agree to our <br />
          <a href="#" className={styles.termsLink}>Terms of use</a> and <a href="#" className={styles.termsLink}>Privacy Policy</a>
        </p>
        <button type="submit" className={styles.submitButton}>
          <a href="/survey"  className={styles.createhref}> 
          Create an account
          </a>
          </button>
        <p className={styles.loginPrompt}>
          Already have an account? <a href="#" className={styles.loginLink}>Log in</a>
        </p>
      </form>
    </section>
  );
};

export default CreateAccount;