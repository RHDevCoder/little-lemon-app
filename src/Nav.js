function Nav() {
  return (
    <nav className="main-nav" aria-label="Navegación principal">
      <ul className="nav-list">
        <li><a href="/" className="nav-link">Inicio</a></li>
        <li><a href="/about" className="nav-link">Acerca de</a></li>
        <li><a href="/menu" className="nav-link">Menú</a></li>
        <li><a href="/reservations" className="nav-link">Reservas</a></li>
        <li><a href="/order" className="nav-link">Pedidos</a></li>
        <li><a href="/login" className="nav-link">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;