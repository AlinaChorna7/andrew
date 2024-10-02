import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting/Greeting';
import TodoList from './components/ToDoList/ToDoList';
import ChatBot from './components/ChatBot/ChatBot';

const App = () => {
  return (
  
      <div>
       
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/chat-bot" element={<ChatBot />} />
        </Routes>
      </div>

  );
};

export default App;