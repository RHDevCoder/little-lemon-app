import React from 'react';
import logo from './assets/Logo.svg';

function Header() {
  return (
    <header className="header-container">
      <img
        src={logo}
        alt="Little Lemon Restaurant Logo"
        className="header-logo"
      />
    </header>
  );
}

export default Header;