import React from 'react';
import logo from './assets/Logo.svg';

function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Logotipo oficial de Little Lemon"
        width="200"
      />
    </header>
  );
}

export default Header;