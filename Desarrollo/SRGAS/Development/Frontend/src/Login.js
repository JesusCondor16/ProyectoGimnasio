import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';
import Cabecera from './Cabecera';
import Pie from './Pie'
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
        <div>
            <Cabecera></Cabecera>
            <main className='d-flex justify-content-center align-items-center bg-danger vh-100'>
            <div className="bg-white p-3 rounded w-25">            
            <h1 className="mt-4">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} className="campo-txt">
                <div className="mb-3 ">
                    <label htmlFor="correo" className="txt-correo-e"><strong>Correo Electrónico:</strong></label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="contrasenia" className="txt-contrasenia"><strong>Contraseña:</strong></label>
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

        </main>
        <Pie></Pie>
        </div>
        
    )
}

export default Login