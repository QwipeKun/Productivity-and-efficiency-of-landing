import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import CentralContent from './components/MainContent/CentralContent/CentralContent';
import GeneralPage from './components/MainContent/GeneralPage/GeneralPage';
import LowComponent from './components/MainContent/LowComponent/LowComponent';
import LowComponentThree from './components/MainContent/LowComponentThree/LowComponentThree';
import LowComponentTwo from './components/MainContent/LowComponentTwo/LowComponentTwo';
import TabsBlock from './components/MainContent/Tabs/Tabs';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <GeneralPage/>
    <CentralContent/>
    <LowComponent/>
    <LowComponentTwo/>
    <LowComponentThree/>
    <TabsBlock/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
