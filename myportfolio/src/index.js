import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BroswerRouter,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BroswerRouter>
    <Routes>
      <Route path ='/' element = {<App />}></Route>
    </Routes>
  </BroswerRouter>
);

