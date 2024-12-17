import React from 'react';
import styles from './BookLibrary.module.css';

const TrendingSubjects: React.FC = () => {
  const subjects = [
    { id: 1, title: 'Art & Photography', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4b2ff94642b81fe6d9fdd8df8d83d6140ad575336bd364e80d779bb847e97ce9?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 2, title: 'Biography & Memoir', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f34a7195ec16336ea2a67c04d1f3213c676ab4568193892ca9b4378f98b5aa33?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 3, title: 'Cookbooks, Food & Wine', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5a711f666d0cfbab53cee2cefb4be754e57ff508b0cef13af068d8052b81ebb4?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 4, title: 'Fiction', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9073d1120ca2671aeeb7451a5ab346826a893c081761bf1c70e3dbb72e009833?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 5, title: 'History', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8535232bf60335d250dc2ab372dd927026e163af10db4b36d409a55e5cd5616b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 6, title: 'Mystery & Thrillers', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/10047085ce3e866302b88884d99a6f4c3b9d624b743569f20efc06e2a8efcc09?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 7, title: 'Science Fiction & Fantasy', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5c384c77ecf8f4ad724a0c67fb9b650823de079605fe7e64712689fece2ceca9?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
    { id: 8, title: 'True Crime', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2d3757f013f799922064651851041b9563bb5a31d5970f02b1d083e4afcc4f31?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67' },
  ];

  return (
    <section className={styles.trendingSubjects}>
      <h2 className={styles.sectionTitle}>Trending Subjects</h2>
      <div className={styles.subjectGrid}>
        {subjects.map((subject) => (
          <article key={subject.id} className={styles.subjectCard}>
            <h3 className={styles.subjectTitle}>{subject.title}</h3>
            <img src={subject.image} alt={subject.title} className={styles.subjectImage} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrendingSubjects;