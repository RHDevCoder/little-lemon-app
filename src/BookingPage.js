import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page-container" aria-labelledby="booking-title">
      <header className="booking-header">
        <h1 id="booking-title">Reserva tu Mesa</h1>
        <p>Selecciona la fecha, hora y número de invitados para tu reserva en Little Lemon.</p>
      </header>

      <article className="booking-form-wrapper">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </article>
    </section>
  );
}

export default BookingPage;