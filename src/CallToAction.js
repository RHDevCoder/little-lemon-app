import { Link } from 'react-router-dom';
import heroImage from './assets/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-details">
        <h1>Little Lemon</h1>
        <span className="text-subtitle">Chicago</span>
        <p>
          Somos un restaurante mediterráneo familiar tradicional enfocado en recetas
          auténticas servidas con un toque moderno.
        </p>
        <Link to="/booking" className="button-primary">
          Reservar una Mesa
        </Link>
      </div>
      <div className="hero-thumbnail">
        <img src={heroImage} alt="Plato insignia de Little Lemon" />
      </div>
    </section>
  );
}

export default CallToAction;