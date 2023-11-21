import React from 'react';
import { Link} from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="../logo.png" alt="Carllet Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="dropdown">
          <span>Mais</span>
          <div className="dropdown-content">
            <Link to="/privacy-policy">Política de Privacidade</Link>
            <Link to="/terms-of-use">Termos de Uso</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;