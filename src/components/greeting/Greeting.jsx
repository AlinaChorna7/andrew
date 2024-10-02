// Greeting.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Greeting.module.css'; // Імпорт стилів

const Greeting = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.greetingContainer}>
      <h3 className={styles.greetingText}>
        Привіт, Andrew! 🎉
        <br />
        Сьогодні твій день, і я хочу побажати тобі не лише гарного настрою, а й знайти натхнення пізнавати світ навколо тебе, навіть коли запалу не вистачає. Ти завжди прагнеш дізнатися щось нове, тому сьогодні я тобі з цим допоможу. Сподіваюся, що сьогоднішній день нагадає тобі, скільки ще всього цікавого чекає на тебе!
        <br />
        Маю надію, що цей сайт стане твоїм маленьким острівцем цікавості, куди можна повернутися, коли з'явиться час і бажання.
        <br />
        З днем народження, Andrew! 🎂 Нехай цей рік буде сповнений несподіваних відкриттів і справжніх захоплень!
        <br />
        Твоя сестра, Аліна
      </h3>

      <div className={styles.optionsContainer}>
        <div className={styles.option} onClick={() => navigate('/todo-list')}>
          <img src="../../../public/images/raz (1).jpg" alt="Список справ" className={styles.optionImage} />
          <p>Клік тут</p>
        </div>
        <div className={styles.option} onClick={() => navigate('/chat-bot')}>
          <img src="../../../public/images/raz (2).jpg" alt="Чат-бот" className={styles.optionImage} />
          <p>Клік тут</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;