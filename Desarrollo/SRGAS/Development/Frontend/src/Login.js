import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        correo: '',
        contrasenia: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8081/login", formData);
            if (response.data === "Success") {
                navigate('/home');
            } else {
                setError('Credenciales incorrectas. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className='d-flex justify-content-center align-items-center bg-danger vh-100'>
            <div className="bg-white p-3 rounded w-25">            
            <h1 className="mt-4">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="correo" className="me-2"><strong>Correo Electrónico</strong></label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="contrasenia" className="me-2"><strong>Contraseña</strong></label>
                    <input
                        type="password"
                        id="contrasenia"
                        name="contrasenia"
                        value={formData.contrasenia}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Iniciar Sesión</button>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Crear cuenta</Link>
            </form></div>

        </div>
    )
}

export default Login