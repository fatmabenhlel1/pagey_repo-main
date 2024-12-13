import React from 'react';
import styles from './BookForm.module.css';

interface InputFieldProps {
  label: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      <div className={styles.inputField}>
        <input type="text" placeholder={placeholder} className={styles.fieldvalue} />
      </div>
    </div>
  );
};