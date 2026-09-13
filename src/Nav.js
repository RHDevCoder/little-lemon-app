import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav" aria-label="Navegación principal">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        <li><a href="#about" className="nav-link">Acerca de</a></li>
        <li><a href="#menu" className="nav-link">Menú</a></li>
        <li><Link to="/booking" className="nav-link">Reservas</Link></li>
        <li><a href="#order" className="nav-link">Pedidos</a></li>
        <li><a href="#login" className="nav-link">Iniciar sesión</a></li>
      </ul>
    </nav>
  );
}

export default Nav;