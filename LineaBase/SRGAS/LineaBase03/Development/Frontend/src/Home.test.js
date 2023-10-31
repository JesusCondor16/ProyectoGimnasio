import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

// Mock de axios para simular las solicitudes HTTP
jest.mock('axios');

test('Renderiza el componente Home', () => {
  render(<Home />);
  
  // Verifica si el texto "Cardio" está presente en el componente
  const cardioTitle = screen.getByText('Cardio');
  expect(cardioTitle).toBeInTheDocument();
});

test('Redirige al Gestor de Cesta al hacer clic en el botón', () => {
  render(<Home />);
  
  // Busca el botón "Gestor de Cesta" y simula un clic
  const gestorCestaButton = screen.getByText('Gestor de Cesta');
  fireEvent.click(gestorCestaButton);
  
  // Verifica si la función redirectToGestorCesta se llamó al hacer clic
  // Esto es solo un ejemplo, asegúrate de que la función se defina adecuadamente en tu componente
  // y que esté configurada para redirigir a la página correcta.
  expect(redirectToGestorCesta).toHaveBeenCalled();
});

test('Redirige al Perfil de Usuario al hacer clic en el botón', () => {
  render(<Home />);
  
  // Busca el botón "Perfil de Usuario" y simula un clic
  const perfilButton = screen.getByText('Perfil de Usuario');
  fireEvent.click(perfilButton);
  
  // Verifica si la función redirectToPerfil se llamó al hacer clic
  // Esto es solo un ejemplo, asegúrate de que la función se defina adecuadamente en tu componente
  // y que esté configurada para redirigir a la página correcta.
  expect(redirectToPerfil).toHaveBeenCalled();
});
