import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => mockedNavigate,
}));

const mockTimesFromAPI = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

beforeEach(() => {
  global.fetchAPI = jest.fn(() => mockTimesFromAPI);
  window.fetchAPI = global.fetchAPI;
});

test('Renderiza el texto estático de las etiquetas en BookingForm', () => {
  render(<BookingForm availableTimes={mockTimesFromAPI} dispatch={jest.fn()} />);

  expect(screen.getByText('Elige una fecha')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Hacer tu reserva')).toBeInTheDocument();
});

test('initializeTimes retorna un arreglo no vacío de horarios desde fetchAPI', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes retorna los horarios correspondientes para una fecha seleccionada', () => {
  const action = { type: 'UPDATE_TIMES', payload: '2026-09-15' };
  const updatedTimes = updateTimes([], action);
  expect(Array.isArray(updatedTimes)).toBe(true);
  expect(updatedTimes.length).toBeGreaterThan(0);
});

test('Aplica los atributos de validación HTML5 requeridos en los campos del formulario', () => {
  render(<BookingForm availableTimes={mockTimesFromAPI} dispatch={jest.fn()} />);

  const dateInput = screen.getByLabelText(/Elige una fecha/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('min');

  const timeSelect = screen.getByLabelText(/Elige una hora/i);
  expect(timeSelect).toHaveAttribute('required');

  const guestsInput = screen.getByLabelText(/Número de invitados/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  const occasionSelect = screen.getByLabelText(/Ocasión/i);
  expect(occasionSelect).toHaveAttribute('required');
});

test('Mantiene el botón de envío deshabilitado cuando los campos son inválidos (estado inválido)', () => {
  const mockSubmit = jest.fn();
  render(<BookingForm availableTimes={mockTimesFromAPI} dispatch={jest.fn()} submitForm={mockSubmit} />);

  const submitButton = screen.getByDisplayValue('Hacer tu reserva');

  expect(submitButton).toBeDisabled();

  const dateInput = screen.getByLabelText(/Elige una fecha/i);
  const guestsInput = screen.getByLabelText(/Número de invitados/i);

  fireEvent.change(dateInput, { target: { value: '2026-09-20' } });
  fireEvent.change(guestsInput, { target: { value: '0' } });

  expect(submitButton).toBeDisabled();

  fireEvent.click(submitButton);
  expect(mockSubmit).not.toHaveBeenCalled();
});

test('Habilita el botón de envío y permite enviar cuando todos los campos son válidos (estado válido)', () => {
  const mockSubmit = jest.fn();
  render(<BookingForm availableTimes={mockTimesFromAPI} dispatch={jest.fn()} submitForm={mockSubmit} />);

  const submitButton = screen.getByDisplayValue('Hacer tu reserva');
  const dateInput = screen.getByLabelText(/Elige una fecha/i);
  const guestsInput = screen.getByLabelText(/Número de invitados/i);

  fireEvent.change(dateInput, { target: { value: '2026-09-20' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });

  expect(submitButton).not.toBeDisabled();

  fireEvent.click(submitButton);
  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      date: '2026-09-20',
      guests: '4',
      occasion: 'Cumpleaños',
    })
  );
});