import logo from './assets/Logo.svg';

function Header() {
  return (
    <header className="header-wrapper">
      <img src={logo} alt="Little Lemon Restaurant Logo" className="header-logo" />
    </header>
  );
}

export default Header;