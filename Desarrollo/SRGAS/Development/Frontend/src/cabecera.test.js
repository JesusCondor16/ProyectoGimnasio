import React from 'react';
import { render } from '@testing-library/react';
import Cabecera from './Cabecera'; // Usa '../' para subir un nivel a la carpeta 'src'





test('Renderiza el componente Cabecera correctamente', () => {
  const { getByText, getByAltText } = render(<Cabecera />);
  
  // Verifica que el título "GYMBOB" esté presente en el encabezado
  const titulo = getByText('GYMBOB');
  expect(titulo).toBeInTheDocument();

  // Verifica que la imagen con el atributo alt "logo.png" esté presente
  const logo = getByAltText('logo.png');
  expect(logo).toBeInTheDocument();
});
