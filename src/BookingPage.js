import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div className="booking-page-container">
      <section className="booking-header">
        <h1>Reserva tu Mesa</h1>
        <p>Selecciona la fecha, hora y número de invitados para tu reserva en Little Lemon.</p>
      </section>

      <div className="booking-form-wrapper">
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingPage;