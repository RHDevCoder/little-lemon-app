import greekSalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.jpg';
import lemonDessert from './assets/lemon dessert.jpg';

function Main() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h1>Little Lemon</h1>
        <span className="text-subtitle">Chicago</span>
        <p>
          Somos un restaurante mediterráneo familiar tradicional enfocado en recetas
          auténticas servidas con un toque moderno.
        </p>
      </section>

      <section className="highlights-grid">
        <article className="card-item">
          <img
            src={greekSalad}
            alt="Ensalada griega con queso feta y aceitunas"
            className="card-image"
          />
          <div className="card-body">
            <h3>Ensalada Griega</h3>
            <p>Lechuga crujiente, aceitunas kalamata y queso feta con aderezo de la casa.</p>
            <span className="text-highlight">$12.99</span>
          </div>
        </article>

        <article className="card-item">
          <img
            src={bruchetta}
            alt="Bruschetta tradicional sobre pan tostado"
            className="card-image"
          />
          <div className="card-body">
            <h3>Bruschetta</h3>
            <p>Pan tostado con ajo, tomates frescos, albahaca y aceite de oliva virgen extra.</p>
            <span className="text-highlight">$7.99</span>
          </div>
        </article>

        <article className="card-item">
          <img
            src={lemonDessert}
            alt="Postre de limón tradicional con crema"
            className="card-image"
          />
          <div className="card-body">
            <h3>Postre de Limón</h3>
            <p>Receta secreta de tarta de limón horneada diariamente por nuestros chefs.</p>
            <span className="text-highlight">$5.00</span>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;