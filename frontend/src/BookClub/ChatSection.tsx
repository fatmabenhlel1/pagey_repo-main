import React from 'react';
import styles from './BookClub.module.css';

const ChatMessage: React.FC<{ userName: string; message: string; avatarSrc: string }> = ({ userName, message, avatarSrc }) => (
  <div className={styles.chatMessage}>
    <img src={avatarSrc} alt={userName} className={styles.userAvatar} />
    <div className={styles.messageContent}>
      <span className={styles.userName}>{userName}</span>
      <p className={styles.messageText}>{message}</p>
    </div>
  </div>
);

const ChatSection: React.FC = () => {
  return (
    <section className={styles.chatSection}>
      <ChatMessage userName="joe" message="Hi" avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08ab2394f86098128b685dfbeb3788608e237d08fcec8c744da04d93fb646bbb?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" />
      <ChatMessage userName="joe" message="Hi" avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f9de3e42be0215860b7a55ec7cdb957a894ef1d0034264b65a3a69df38703f8e?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" />
      <ChatMessage userName="joe" message="Hi" avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b6c7f9148d72c4b69d559a05b44214e2b89391c14765071185b27046c5c7e1b5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" />
      <ChatMessage userName="joe" message="Sup" avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08ab2394f86098128b685dfbeb3788608e237d08fcec8c744da04d93fb646bbb?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" />
      <footer className={styles.chatFooter}>
        <div className={styles.chatInput}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a027b7a5b5eb4f3df43ce7efce0e94d43008f12decccae48e29bf889fc27142?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Send" className={styles.sendIcon} />
          <input type="text" className={styles.inputField} placeholder="Start typing..." aria-label="Chat input" />
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/686ee084e93b49f550df0cdd04c2d6279c3ca4c5d8897ba128b5d4feb6b1f0c2?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Emoji" className={styles.emojiIcon} />
      </footer>
    </section>
  );
};

export default ChatSection;