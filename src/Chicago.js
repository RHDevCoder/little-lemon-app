import chefA from './assets/Mario and Adrian A.jpg';
import chefB from './assets/Mario and Adrian b.jpg';

function Chicago() {
  return (
    <section className="chicago-section" id="about">
      <div className="chicago-details">
        <h2>Little Lemon</h2>
        <span className="text-subtitle-dark">Chicago</span>
        <p>
          Fundado por los hermanos Mario y Adrian, Little Lemon nace con la misión de
          traer las recetas tradicionales del Mediterráneo a Chicago, combinando sabores
          caseros con una presentación moderna.
        </p>
      </div>
      <div className="chicago-gallery">
        <img src={chefA} alt="Mario y Adrian cocinando" className="chef-photo photo-top" />
        <img src={chefB} alt="Mario y Adrian revisando ingredientes" className="chef-photo photo-bottom" />
      </div>
    </section>
  );
}

export default Chicago;