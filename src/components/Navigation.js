import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
  return (
    <div>
      <nav class="nav">
        <NavLink to="/utilisateurs/:user_id"> Detail </NavLink>
        <br />
        <NavLink to="/utilisateur/editer/:user_id"> Gestion </NavLink>
        <br />
        <NavLink to="/"> Liste </NavLink>
      </nav>
    </div>
  );
};

export default navigation;
