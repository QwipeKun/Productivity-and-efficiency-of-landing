import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import GeneralPage from './components/MainContent/GeneralPage/GeneralPage';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <GeneralPage/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
