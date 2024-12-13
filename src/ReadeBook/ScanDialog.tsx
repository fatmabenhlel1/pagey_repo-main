import React from 'react';
import styles from './PdfReader.module.css';

const ScanDialog: React.FC = () => {
  return (
    <div className={styles.dialogContainer}>
      <p className={styles.dialogText}>Click the button to scan for local PDF files</p>
      <div className={styles.buttonGroup} />
      <button className={styles.closeButton} aria-label="Close dialog">
        <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/736a4684c3ae90b0a1efaf98618d7bd5118f011b16c1c9b7ff1ed58b18228884?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Close" className={styles.closeIcon} />
      </button>
      <button className={styles.scanButton}>scan</button>
    </div>
  );
};

export default ScanDialog;