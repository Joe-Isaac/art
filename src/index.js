import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Graffiti from './components/Graffiti';
import Illustrations from './components/Illustrations';
import Paintings from './components/Paintings';
import WaterColors from './components/WaterColors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}>
      <Route path='Illustrations' element={<Illustrations />}></Route>
      <Route path='Graffiti' element={<Graffiti />}></Route>
      <Route path='Paintings' element={<Paintings />}></Route>
      <Route path='WaterColors' element={<WaterColors />}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
