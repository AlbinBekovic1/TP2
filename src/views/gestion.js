import React from 'react';
import { Link } from 'react-router-dom';

const gestion = () => {
  return (
    <div>
      <h1>Gestion des utilisateurs</h1>
      <p>Ceci est une gestion</p>
      <Link to="/utilisateurs/:user_id"> Détails des utilisiateurs</Link>
      <Link to="/">Liste des utilisateurs</Link>
    </div>
  );
};

export default gestion;
