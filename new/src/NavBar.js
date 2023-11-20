import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav>
      <ul>
      <li><Link to="/how-it-works">Como Funciona</Link></li>
        <li onClick={toggleDropdown}>Saiba Mais
          {isDropdownOpen && (
            <ul onClick={closeDropdown}>
              <li><Link to="/privacy-policy">Política de Privacidade</Link></li>
              <li><Link to="/terms-of-use">Termos de Uso</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
