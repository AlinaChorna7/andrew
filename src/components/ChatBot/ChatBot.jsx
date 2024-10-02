import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ChatBot.module.css';

const ChatBot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to initialize Botpress
    const initBotpress = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init();
      } else {
        console.error("botpressWebChat is not defined");
      }
    };

    // Function to load scripts
    const loadScripts = () => {
      return new Promise((resolve, reject) => {
        const script1 = document.createElement('script');
        script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
        script1.async = true;

        const script2 = document.createElement('script');
        script2.src = 'https://files.bpcontent.cloud/2024/10/02/16/20241002161747-JLG6TXGW.js';
        script2.async = true;

        // Add handlers for both scripts
        script1.onload = () => {
          document.body.appendChild(script2); // Add script2 after script1
          script2.onload = () => {
            resolve(); // Resolve promise when scripts are loaded
            initBotpress(); // Initialize botpressWebChat
          };
          script2.onerror = reject; // Handle load error
        };

        script1.onerror = reject; // Handle load error

        document.body.appendChild(script1); // Add script1 to the body
      });
    };

    loadScripts()
      .catch(err => console.error("Error loading Botpress scripts:", err));

    // Cleanup scripts and initialization
    return () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.close(); // Close chat bot on unmount
      }

      // Cleanup scripts
      const script1 = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"]');
      const script2 = document.querySelector('script[src="https://files.bpcontent.cloud/2024/10/02/16/20241002161747-JLG6TXGW.js"]');
      if (script1) {
        document.body.removeChild(script1);
      }
      if (script2) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return (
    <div className={styles.chatBotContainer}>
      <button onClick={() => navigate('/')} className={styles.backButton}>
        Повернутися на головний екран
      </button>
      <h2 className={styles.title}>Тут можеш поговорити</h2>
    </div>
  );
};

export default ChatBot;
