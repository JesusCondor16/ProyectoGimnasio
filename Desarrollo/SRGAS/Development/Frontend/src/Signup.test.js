import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signup from './Signup';

test('Manejo de formulario', () => {
  const { getByPlaceholderText, getByText } = render(<Signup />);
  const nombreInput = getByPlaceholderText('Ingrese Nombre');
  const apellidoInput = getByPlaceholderText('Ingrese Apellido');
  const correoInput = getByPlaceholderText('Ingrese Correo Electrónico');
  const contraseniaInput = getByPlaceholderText('Ingrese Contraseña');
  const dniInput = getByPlaceholderText('Ingrese DNI');

  fireEvent.change(nombreInput, { target: { value: 'John' } });
  fireEvent.change(apellidoInput, { target: { value: 'Doe' } });
  fireEvent.change(correoInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(contraseniaInput, { target: { value: 'password123' } });
  fireEvent.change(dniInput, { target: { value: '123456789' } });

  expect(nombreInput.value).toBe('John');
  expect(apellidoInput.value).toBe('Doe');
  expect(correoInput.value).toBe('john.doe@example.com');
  expect(contraseniaInput.value).toBe('password123');
  expect(dniInput.value).toBe('123456789');
});
