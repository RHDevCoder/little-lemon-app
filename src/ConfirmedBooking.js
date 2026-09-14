import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <div className="booking-page-container">
      <div className="booking-form-wrapper confirmation-card">
        <span className="confirmation-icon" role="img" aria-label="Confirmado">✅</span>
        <h1>¡Reserva Confirmada!</h1>
        <p>Tu mesa ha sido reservada con éxito en Little Lemon.</p>
        <p>¡Te esperamos para disfrutar de una auténtica experiencia mediterránea!</p>
        <Link to="/" className="button-primary">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default ConfirmedBooking;