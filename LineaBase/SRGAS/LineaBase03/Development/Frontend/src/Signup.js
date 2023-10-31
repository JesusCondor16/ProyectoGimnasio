import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Validation from './SignupValidation'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cabecera from './Cabecera';
import Pie from './Pie';
import './components/css/index.css';
function Signup() {
    const [formData, setFormData] = useState({
        contrasenia: "",
        correo: "",
        apellido: "",
        dni: "",
        nombre: "",
        fecha_nacimiento: new Date()
    });

    const [errors, setErrors] = useState({});

    const validate = (values) => {
        const errors = Validation(values);
        setErrors(errors);
        return Object.values(errors).every((error) => error === "");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            fecha_nacimiento: date
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        if (validate(formData)) {
            try {
                const response = await axios.post("http://localhost:8081/signup", formData);
                if (response.data === "Success") {
                    localStorage.setItem('userData', JSON.stringify(formData));
                } else {
                }
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            console.error("Los datos no son válidos.");
        }

    };

    return (
        <div>
        <Cabecera />
        <main className='signup-container'>
            
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                crossOrigin="anonymous" 
                referrerPolicy="no-referrer"
            />
            <div className="signup-form">
                <h1 className="custom-signup-title">Registro</h1>
                <form onSubmit={handleSubmit} className="signup-form-content">
                    <div className="contenedor-1">
                        <label>
                        <i className="far fa-user"></i>
                        </label>
                        <label htmlFor="nombre" className="custom-label"><strong>Nombre:</strong></label>
                        <input
                            type="text"
                            className="form-control "
                            name="nombre"
                            placeholder="Ingrese Nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                        />
                        {errors.nombre && <div  className="error-message">{errors.nombre}</div>}
                    </div>
                    <div className="contenedor-1">
                        <label htmlFor="apellido" className="custom-label"><strong>Apellido:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            name="apellido"
                            placeholder="Ingrese Apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                        />
                        {errors.apellido && <div  className="error-message">{errors.apellido}</div>}
                    </div>
                    <div className="contenedor-1">
                        <label>
                        <i className="fas fa-envelope"></i>
                        </label>
                        <label htmlFor="email" className="custom-label"><strong>Correo:</strong></label>
                        <input
                            type="email"
                            className="form-control"
                            name="correo"
                            placeholder="Ingrese Correo Electrónico"
                            value={formData.correo}
                            onChange={handleInputChange}
                        />
                        {errors.correo && <div className="error-message">{errors.correo}</div>}
                    </div>
                    <div className="contenedor-1">
                        <label>
                        <i className="fa-solid fa-lock"></i>
                        </label>
                        <label htmlFor="contrasenia" className="custom-label"><strong>Contraseña:</strong></label>
                        <input
                            type="password"
                            className="form-control"
                            name="contrasenia"
                            placeholder="Ingrese Contraseña"
                            value={formData.contrasenia}
                            onChange={handleInputChange}
                        />
                        {errors.contrasenia && <div  className="error-message">{errors.contrasenia}</div>}
                    </div>
                    <div className="contenedor-1">
                        <label htmlFor="dni" className="custom-label"><strong>DNI:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            name="dni"
                            placeholder="Ingrese DNI"
                            value={formData.dni}
                            onChange={handleInputChange}
                        />
                        {errors.dni && <div  className="error-message">{errors.dni}</div>}
                    </div>
                    <div className="contenedor-1">
                        <label htmlFor="fecha_nacimiento" className="custom-label"><strong>Fecha de Nacimiento:</strong></label>
                        <DatePicker
                            id="fecha_nacimiento"
                            className="form-control"
                            selected={formData.fecha_nacimiento}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Seleccionar fecha"
                        />
                    </div>
                    <div className="custom-buttons">
                        <button type='submit' className='custom-create-button'>Crear Cuenta</button>
                        <Link to="/login" className='custom-login-button'>Login</Link>
                    </div>
                </form>
            </div>
        </main>
        <Pie />
        </div>
    )
}

export default Signup