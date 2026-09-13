import { Link } from 'react-router-dom';

function BookingPage() {
  return (
    <div className="booking-wrapper">
      <h1>Reserva de Mesa</h1>
      <p>Organiza tu próxima comida con nosotros en Little Lemon.</p>
      <div className="booking-card">
        <h3>Formulario de Reserva</h3>
        <p>El selector interactivo de mesas y turnos se integrará en el siguiente ejercicio.</p>
        <Link to="/" className="button-primary">Volver al Inicio</Link>
      </div>
    </div>
  );
}

export default BookingPage;