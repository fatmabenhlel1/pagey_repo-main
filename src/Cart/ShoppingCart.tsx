import React from 'react';
import styles from './ShoppingCart.module.css';
import Header from '../Header/Header';
import ProductItem from './ProductItem';
import OrderSummary from './OrderSummary';
import Newsletter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const ShoppingCart: React.FC = () => {
  return (
    <main className={styles.shoppingCart}>
      <Header />
      <section className={styles.cartContent}>
        <h1 className={styles.cartTitle}>My Shopping Cart</h1>
        <div className={styles.cartDivider} />
          
        <div className={styles.productList}>
          <ProductItem
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/55e9b6d8819806b36bece0ed0603b02425a4923babbe0c681110f81077568d67?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
            title="Jungle Book"
            author="by Mr.kesah"
            price={9}
          />
          <ProductItem
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/55e9b6d8819806b36bece0ed0603b02425a4923babbe0c681110f81077568d67?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67"
            title="Jungle Book"
            author="by Mr.kesah"
            price={9}
          />
        </div>
        <OrderSummary />
        <div className={styles.actionButtons}>
          <button className={styles.button}>Add Coupon</button>
          <button className={styles.button}>Check Out</button>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
};

export default ShoppingCart;