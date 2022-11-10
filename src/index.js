import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import ItemListContainer from './components/itemListContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const navbar1 = ReactDOM.createRoot(document.getElementById('navbar1'));
const ItemList = ReactDOM.createRoot(document.getElementById('itemListContainer'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
