import React from 'react';
import { Link } from 'react-router-dom';

const liste = () => {
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <p>Ceci est une liste</p>
      <Link to="/utilisateurs/editer/:user_id"> Gestion des utilisiateurs</Link>
      <Link to="/utilisateurs/:user_id"> Détails des utilisiateurs</Link>
    </div>
  );
};

export default liste;
