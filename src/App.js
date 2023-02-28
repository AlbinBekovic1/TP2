import React from 'react';
import './style.css';
import Detail from './views/detail.js';
import Gestion from './views/gestion.js';
import Liste from './views/liste.js';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Routes>
        <Route path="/utilisateurs/:user_id" element={<Gestion />} />
        <Route path="/" element={<Liste />} />
        <Route path="/" element={<Detail />} />
      </Routes>
    </div>
  );
}
