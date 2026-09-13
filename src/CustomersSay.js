const testimonialsData = [
  {
    id: 1,
    rating: '⭐⭐⭐⭐⭐',
    author: 'Sara Morales',
    comment: 'La mejor comida mediterránea de Chicago. La ensalada griega es insuperable.'
  },
  {
    id: 2,
    rating: '⭐⭐⭐⭐⭐',
    author: 'Carlos Delgado',
    comment: 'Excelente atención, el ambiente es muy acogedor y el servicio rápido.'
  },
  {
    id: 3,
    rating: '⭐⭐⭐⭐',
    author: 'Elena Rojas',
    comment: 'El postre de limón superó todas mis expectativas. Totalmente recomendado.'
  },
  {
    id: 4,
    rating: '⭐⭐⭐⭐⭐',
    author: 'Javier Pérez',
    comment: 'Ingredientes frescos y sabores auténticos en cada plato.'
  }
];

function CustomersSay() {
  return (
    <section className="testimonials-section">
      <h2 className="section-center-title">Opiniones de Clientes</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((item) => (
          <article key={item.id} className="testimonial-card">
            <span className="rating-stars">{item.rating}</span>
            <h4>{item.author}</h4>
            <p>"{item.comment}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;