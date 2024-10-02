import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TodoList.module.css'; // Імпортуйте стилі

const TodoList = () => {
  const navigate = useNavigate();

  // Створення масиву задач з посиланнями
  const initialTasks = [
    { id: 1, text: 'Чому вітамін D який я подарувала корисний(і не тільки це)', done: false, url: 'https://nauka.ua/news/vidsutnist-sonyachnogo-svitla-zmusila-lyudej-z-depresiyeyu-menshe-ruhatisya' },
    { id: 2, text: 'Документалка шоб подумать раз', done: false, url: 'https://uaserial.tv/movie-the-man-from-earth#:~:text=%22%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%B0%20%D0%B7%20%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B8%20%D0%97%D0%B5%D0%BC%D0%BB%D1%8F%22%20-%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE-%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%20%D0%B4%D1%80%D0%B0%D0%BC%D0%B0,%20%D0%B4%D1%96%D1%8F%20%D1%8F%D0%BA%D0%BE%D1%97%20%D1%80%D0%BE%D0%B7%D0%B3%D0%BE%D1%80%D1%82%D0%B0%D1%94%D1%82%D1%8C%D1%81%D1%8F' },
    { id: 3, text: 'Цікаві подкасти два', done: false, url: 'https://soundcloud.com/makiavelky#:~:text=Play%20%D0%9C%D0%B0%D0%BA%D1%96%D0%B0%D0%B2%D0%B5%D0%BB%D1%8C%D0%BA%D0%B8%20and%20discover%20followers%20on%20SoundCloud%20|%20Stream%20tracks,' },
    { id: 4, text: 'двадцать два(бізнес тємкі муткі)', done: false, url: 'https://www.mixcloud.com/Kyiv_Mohyla_Business_School/%D1%80%D0%BE%D0%B7%D0%B2%D0%B8%D1%82%D0%BE%D0%BA-%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D1%83-%D0%BF%D1%80%D0%BE-%D1%89%D0%BE-%D0%BF%D0%BE%D0%B4%D1%83%D0%BC%D0%B0%D1%82%D0%B8-ceo/' },
    { id: 5, text: 'А може по сирнику?', done: false, url: 'https://klopotenko.com/gladka-ta-kremova-tekstura-klasychnyj-chyzkejk-vid-yevgena-klopotenka/' },
    { id: 6, text: 'О, я знайшла інфу про щось старіше ніж ти', done: false, url: 'https://ukrpublic.com/navchannia/istorichni-epokhi-po-poryadku.html#serednovichchia-i-ioho-znachennia-v-istorii-liudstva' },
    { id: 7, text: 'Ісландія, бо чому б ні', done: false, url: 'https://www.youtube.com/watch?v=5tQ4wHFiNSo' },
    { id: 8, text: 'Ти це і так мабуть знаєш, але раптом ні', done: false, url: 'https://www.youtube.com/watch?v=8FFvNYJWHiA' },
    { id: 9, text: 'а це шоб закусити сирника', done: false, url: 'https://klopotenko.com/ru/penne-arabjata/' },
    { id: 10, text: 'Бонжур ', done: false, url: 'https://naukozavr.info/istoriya/velyka-frantsuzka-revolyutsiya/#:~:text=%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%20%D1%84%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%8C%D0%BA%D0%B0%20%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D1%96%D1%8F%20%E2%80%93%20%D0%BE%D0%B4%D0%BD%D0%B0%20%D0%B7%20%D0%BD%D0%B0%D0%B9%D0%B1%D1%96%D0%BB%D1%8C%D1%88%20%D0%B7%D0%BD%D0%B0%D1%87%D1%83%D1%89%D0%B8%D1%85%20%D1%83%20%D1%81%D0%B2%D1%96%D1%82%D0%BE%D0%B2%D1%96%D0%B9' },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  useEffect(() => {
    // Зберігаємо стан задач у локальне сховище
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className={styles.todoContainer}>
      <h2 className={styles.title}>Список відкриттів для цього місяця:</h2>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <a 
              href={task.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={task.done ? styles.done : ''} // Додаємо клас, якщо задача виконана
              onClick={() => toggleTask(task.id)} // Позначаємо задачу як виконану
            >
              {task.text}
            </a>
          </li>
        ))}
      </ul>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        Повернутися на головну
      </button>
    </div>
  );}
  export default TodoList;