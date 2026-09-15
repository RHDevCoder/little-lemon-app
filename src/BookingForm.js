import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes && availableTimes[0] ? availableTimes[0] : '17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Cumpleaños');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    }
  };

  const isFormValid = () => {
    return (
      date !== '' &&
      date >= today &&
      Number(guests) >= 1 &&
      Number(guests) <= 10 &&
      time !== '' &&
      occasion !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid() && submitForm) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate={false}>
      <label htmlFor="res-date">Elige una fecha</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={handleDateChange}
        required
        aria-required="true"
      />

      <label htmlFor="res-time">Elige una hora</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
      >
        {availableTimes && availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Número de invitados</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="occasion">Ocasión</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-required="true"
      >
        <option value="Cumpleaños">Cumpleaños</option>
        <option value="Aniversario">Aniversario</option>
      </select>

      <input
        type="submit"
        value="Hacer tu reserva"
        className="button-primary submit-btn"
        disabled={!isFormValid()}
        aria-label="On Click"
      />
    </form>
  );
}

export default BookingForm;