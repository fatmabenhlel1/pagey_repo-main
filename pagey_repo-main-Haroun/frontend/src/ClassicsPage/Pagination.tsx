import React from 'react';
import styles from './ClassicsPage.module.css';

const Pagination: React.FC = () => {
  return (
    <nav className={styles.pagination} aria-label="Page navigation">
      <button className={styles.paginationButton} aria-label="Previous page">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1104aec5a05185b362fad99fb551c2b8964668ff1ac022ee5ea71ac02c140e75?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.buttonIcon} />
        Previous
      </button>
      <ul className={styles.pageList}>
        <li><a href="#" className={`${styles.pageLink} ${styles.active}`} aria-current="page">1</a></li>
        <li><a href="#" className={styles.pageLink}>2</a></li>
        <li><a href="#" className={styles.pageLink}>3</a></li>
        <li><span className={styles.ellipsis}>...</span></li>
        <li><a href="#" className={styles.pageLink}>67</a></li>
        <li><a href="#" className={styles.pageLink}>68</a></li>
      </ul>
      <button className={styles.paginationButton} aria-label="Next page">
        Next
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4ac06c7bcb49496795db64d7e303f5d6071dd4166a09e8300771f12e0e41e7?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.buttonIcon} />
      </button>
    </nav>
  );
};

export default Pagination;