import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => mockedNavigate,
}));

test('Renderiza el texto estático de las etiquetas en BookingForm', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  expect(screen.getByText('Elige una fecha')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Hacer tu reserva')).toBeInTheDocument();
});

test('initializeTimes retorna un arreglo no vacío de horarios desde la API', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes retorna horarios disponibles según la fecha seleccionada', () => {
  const action = { type: 'UPDATE_TIMES', payload: '2026-09-15' };
  const times = updateTimes([], action);
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});