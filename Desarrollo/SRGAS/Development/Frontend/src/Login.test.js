import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';  // Importamos userEvent para simular eventos de usuario
import axios from 'axios';  // Mockeamos axios para simular peticiones HTTP
import Login from './Login';

// Mockeamos axios para simular una respuesta exitosa
jest.mock('axios');

describe('Login Component', () => {
  it('should render the login form', () => {
    render(<Login />);
    
    // Asegurarse de que los elementos del formulario estén presentes
    expect(screen.getByLabelText('Correo Electrónico:')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Crear cuenta' })).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    // Configuramos un mock para axios.post
    axios.post.mockResolvedValue({ data: 'Success' });

    render(<Login />);
    
    // Simulamos el llenado del formulario
    userEvent.type(screen.getByLabelText('Correo Electrónico:'), 'test@example.com');
    userEvent.type(screen.getByLabelText('Contraseña:'), 'password');
    
    // Simulamos el envío del formulario
    fireEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));
    
    // Esperamos que la redirección haya ocurrido
    expect(window.location.pathname).toBe('/home');
  });

  it('should handle login error', async () => {
    // Configuramos un mock para axios.post que simula un error
    axios.post.mockRejectedValue({ message: 'Credenciales incorrectas' });

    render(<Login />);
    
    // Simulamos el llenado del formulario
    userEvent.type(screen.getByLabelText('Correo Electrónico:'), 'test@example.com');
    userEvent.type(screen.getByLabelText('Contraseña:'), 'password');
    
    // Simulamos el envío del formulario
    fireEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));
    
    // Esperamos que el mensaje de error esté presente
    expect(screen.getByText('Credenciales incorrectas. Inténtalo de nuevo.')).toBeInTheDocument();
  });
});
