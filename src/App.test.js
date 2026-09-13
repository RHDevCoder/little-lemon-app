import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

jest.mock('react-router-dom', () => ({
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

test('Renderiza el texto estático de las etiquetas en BookingForm', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  const labelElement = screen.getByText('Elige una fecha');
  expect(labelElement).toBeInTheDocument();

  const submitButton = screen.getByDisplayValue('Hacer tu reserva');
  expect(submitButton).toBeInTheDocument();
});

test('initializeTimes retorna el arreglo esperado de horarios iniciales', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes retorna los horarios correspondientes según la acción', () => {
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2026-09-14' };
  
  const updatedState = updateTimes(currentState, action);
  
  expect(updatedState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});