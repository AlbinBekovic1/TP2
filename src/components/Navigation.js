import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss';

const navigation = () => {
  return (
    <div class="header">
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
