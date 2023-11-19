import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/how-it-works">Como Funciona</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Política de Privacidade</Link>
        </li>
        <li>
          <Link to="/terms-of-use">Termos de Uso</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;