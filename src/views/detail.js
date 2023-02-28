import React from 'react';
import { Link } from 'react-router-dom';

const detail = () => {
  return (
    <div>
      <h1>Détails des utilisateurs</h1>
      <p>Contenu de la page</p>
      <Link to="/utilisateurs/:user_id"> Test </Link>
    </div>
  );
};

export default detail;
