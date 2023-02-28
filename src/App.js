import React from 'react';
import './style.css';
import Detail from './views/detail.js';
import Gestion from './views/gestion.js';
import Liste from './views/liste.js';
import Navigation from './components/Navigation.js';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/utilisateur/editer/:user_id" element={<Gestion />} />
        <Route path="/" element={<Liste />} />
        <Route path="/utilisateurs/:user_id" element={<Detail />} />
      </Routes>
    </div>
  );
}
