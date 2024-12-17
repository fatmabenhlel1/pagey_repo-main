import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './SurveyForm.module.css';

interface SelectFieldProps {
  label: string;
  options: string[];
  placeholder: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, placeholder }) => (
  <div className={styles.formGroup}>
    <label className={styles.label}>{label}</label>
    <select className={styles.select} defaultValue="">
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const SurveyForm: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContinue = () => {
    navigate('/book-library'); // Navigate to the /librarybook page
  };

  return (
    <form className={styles.surveyForm}>
      <SelectField
        label="Select your age"
        options={['18-24', '25-34', '35-44', '45-54', '55+']}
        placeholder="Age"
      />
      <SelectField
        label="Select your gender"
        options={['Male', 'Female', 'Non-binary', 'Prefer not to say']}
        placeholder="Gender"
      />
      <SelectField
        label="Select your favorite genre(s)"
        options={['Fiction', 'Non-fiction', 'Mystery', 'Sci-Fi', 'Romance', 'Biography']}
        placeholder="Book genre"
      />

      <button type="button" className={styles.continueButton} onClick={handleContinue}>
        Continue
      </button>
    </form>
  );
};

export default SurveyForm;
