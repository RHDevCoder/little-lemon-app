import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const fetchTimesFromAPI = (date) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
      return window.fetchAPI(date);
    }
    if (typeof global !== 'undefined' && typeof global.fetchAPI === 'function') {
      return global.fetchAPI(date);
    }
  } catch (error) {
    console.error('Error al consultar horarios:', error);
  }
  return defaultTimes;
};

export const submitAPI = (formData) => {
  try {
    if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
      return window.submitAPI(formData);
    }
    if (typeof global !== 'undefined' && typeof global.submitAPI === 'function') {
      return global.submitAPI(formData);
    }
  } catch (error) {
    console.error('Error al enviar formulario:', error);
  }
  return true;
};

export const initializeTimes = () => {
  const today = new Date();
  const times = fetchTimesFromAPI(today);
  return Array.isArray(times) && times.length > 0 ? times : defaultTimes;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = action.payload ? new Date(`${action.payload}T00:00:00`) : new Date();
      const times = fetchTimesFromAPI(selectedDate);
      return Array.isArray(times) && times.length > 0 ? times : defaultTimes;
    }
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed');
    }
  };

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;