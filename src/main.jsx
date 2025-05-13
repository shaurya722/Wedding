import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { LoginHeader } from './components/Login/LoginHeader';
import Footer from './components/Divider&Footer/Footer';
import DownloadApp from './components/DonwloadApp/DownloadApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginHeader/>
    <App />
    <DownloadApp/>
    <Footer/>
  </React.StrictMode>
);
