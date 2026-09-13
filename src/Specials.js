import { Link } from 'react-router-dom';
import greekSalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.jpg';
import lemonDessert from './assets/lemon dessert.jpg';

const specialsData = [
  {
    id: 1,
    title: 'Ensalada Griega',
    price: '$12.99',
    description: 'Lechuga crujiente, aceitunas kalamata y queso feta con aderezo de la casa.',
    image: greekSalad
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$7.99',
    description: 'Pan artesanal tostado a la parrilla untado con ajo y cubierto con tomates frescos y albahaca.',
    image: bruchetta
  },
  {
    id: 3,
    title: 'Postre de Limón',
    price: '$5.00',
    description: 'Receta tradicional de tarta de limón horneada diariamente por nuestros chefs.',
    image: lemonDessert
  }
];

function Specials() {
  return (
    <section className="specials-wrapper" id="menu">
      <div className="specials-top">
        <h2>Especialidades de la Semana</h2>
        <Link to="/booking" className="button-secondary">Menú Online</Link>
      </div>

      <div className="highlights-grid">
        {specialsData.map((dish) => (
          <article key={dish.id} className="card-item">
            <img src={dish.image} alt={dish.title} className="card-image" />
            <div className="card-body">
              <div className="card-heading">
                <h3>{dish.title}</h3>
                <span className="text-highlight">{dish.price}</span>
              </div>
              <p>{dish.description}</p>
              <span className="order-delivery">Pedir a domicilio 🚴</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;