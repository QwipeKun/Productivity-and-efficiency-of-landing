import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import CentralContent from './components/MainContent/CentralContent/CentralContent';
import GeneralPage from './components/MainContent/GeneralPage/GeneralPage';
import LowComponent from './components/MainContent/LowComponent/LowComponent';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <GeneralPage/>
    <CentralContent/>
    <LowComponent/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
