import React from 'react';
import styles from './StoreLocator.module.css';

const StoreLocator: React.FC = () => {
  return (
    <section className={styles.storeLocator}>
      <h2 className={styles.sectionTitle}>Featured Books</h2>
      <hr></hr>
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6784364.889422786!2d4.260908168112972!3d33.872184087933064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisie!5e0!3m2!1sfr!2stn!4v1732528725599!5m2!1sfr!2stn"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Locator Map"
              ></iframe>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.sectionBackground} />
    </section>
  );
};

export default StoreLocator;