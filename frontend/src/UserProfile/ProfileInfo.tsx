import React from 'react';
import styles from './UserProfile.module.css';

const ProfileInfo: React.FC = () => {
  return (
    <section className={styles.profileInfo}>
      <h2 className={styles.welcomeMessage}>Welcome, Amanda</h2>
      <p className={styles.currentDate}>Tue, 07 June 2022</p>
      <div className={styles.userDetails}>
        <div className={styles.userAvatar}></div>
        <div className={styles.userNameEmail}>
          <p className={styles.userName}>foulen weld elfouleni</p>
          <p className={styles.userEmail}>foulen.fouleni@gmail.com</p>
        </div>
        <button className={styles.editButton}>Edit</button>
      </div>
      <form className={styles.profileForm}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="fullName" className={styles.formLabel}>Full name</label>
            <input type="text" id="fullName" className={styles.formInput} placeholder="Your First Name" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="username" className={styles.formLabel}>Username</label>
            <input type="text" id="username" className={styles.formInput} placeholder="username" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="gender" className={styles.formLabel}>Gender</label>
            <select id="gender" className={styles.formSelect}>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="languages" className={styles.formLabel}>Languages</label>
            <select id="languages" className={styles.formSelect}>
              <option value="">English</option>
              <option value="">French</option>
              <option value="">العربية</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="age" className={styles.formLabel}>Age</label>
            <input type="date" id="age" className={styles.formInput} />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.formLabel}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5651046-2b77-46f1-93d0-94907301c268?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.emailIcon} />
            My Email Address
          </label>
          <input type="email" id="email" className={styles.formInput} />
        </div>
      </form>
    </section>
  );
};

export default ProfileInfo;