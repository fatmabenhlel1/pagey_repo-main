import React from 'react';
import styles from './AudioBookPage.module.css';

const AudioPlayer: React.FC = () => {
  return (
    <section className={styles.audioPlayer}>
      <div className={styles.progressBar}>
        <span className={styles.currentTime}>00:00</span>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill}></div>
        </div>
        <span className={styles.totalTime}>1:00:00</span>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton} aria-label="Previous">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a376c628f08422e97638ea4f06a8d586fcfe9762ff72907b7868f97a9c7c0dc2?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.controlIcon} />
        </button>
        <button className={styles.playButton} aria-label="Play/Pause">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cede4b33cab9f6cb37f13ce227c52bca38bba9901fbf05d877984e326e825577?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.playIcon} />
        </button>
        <button className={styles.controlButton} aria-label="Next">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07918f8694534f18ac312c1ce3e51661ee04f921d7372055492d8de22eac30ce?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.controlIcon} />
        </button>
      </div>
    </section>
  );
};

export default AudioPlayer;