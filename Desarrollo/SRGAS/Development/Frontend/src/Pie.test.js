import React from 'react';
import { render } from '@testing-library/react';
import Pie from './Pie';

test('Renderiza el componente Pie correctamente', () => {
  const { getByText } = render(<Pie />);

  expect(getByText('Contactanos: gymbob@gmail.com')).toBeInTheDocument();
  expect(getByText('Numero: 987654321')).toBeInTheDocument();
});
