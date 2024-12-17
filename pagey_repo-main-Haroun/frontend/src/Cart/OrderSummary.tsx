import React from 'react';
import styles from './ShoppingCart.module.css';

const OrderSummary: React.FC = () => {
  return (
    <section className={styles.orderSummary}>
      <h2 className={styles.summaryTitle}>Order Summary</h2>
      <div className={styles.summaryDivider} />
      <div className={styles.summaryDetails}>
        <div className={styles.summaryRow}>
          <span>Subtotal (2 items)</span>
          <span>$18</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Delivery fees</span>
          <span>$5</span>
        </div>
        <div className={`${styles.summaryRow} ${styles.total}`}>
          <span>Order Total</span>
          <span>$23</span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;