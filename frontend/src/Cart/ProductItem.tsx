import React from 'react';
import styles from './ShoppingCart.module.css';

interface ProductItemProps {
  imageSrc: string;
  title: string;
  author: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ imageSrc, title, author, price }) => {
  return (
    <article className={styles.productItem}>
      <img src={imageSrc} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <p className={styles.productType}>Hard Cover</p>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productAuthor}>{author}</p>
        <div className={styles.deliveryOptions}>
          <label className={styles.radioLabel}>
            <input type="radio" name={`delivery-${title}`} className={styles.radioInput} defaultChecked />
            <span className={styles.radioText}>Deliver this item</span>
          </label>
          <p className={styles.giftOption}>Make it a gift</p>
          <label className={styles.radioLabel}>
            <input type="radio" name={`delivery-${title}`} className={styles.radioInput} />
            <span className={styles.radioText}>Pick up in store</span>
          </label>
          <p className={styles.findStore}>Find my store</p>
        </div>
      </div>
      <div className={styles.pricing}>
        <p className={styles.originalPrice}><s>$999</s></p>
        <p className={styles.discountedPrice}>${price}</p>
        <select className={styles.quantitySelect} aria-label="Select quantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <p className={styles.totalPrice}>${price}</p>
      </div>
    </article>
  );
};

export default ProductItem;