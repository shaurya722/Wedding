import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { LoginHeader } from './components/Login/LoginHeader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginHeader/>
    <App />
  </React.StrictMode>
);
