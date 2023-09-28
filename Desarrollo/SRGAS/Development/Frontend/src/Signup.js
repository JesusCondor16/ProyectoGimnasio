import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Validation from './SignupValidation'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
        <div className='d-flex justify-content-center align-items-center bg-danger vh-100'>
            <div className="bg-white p-3 rounded w-25">
                <h1 className="mt-4">Registro</h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="contrasenia" className="me-2"><strong>Contraseña:</strong></label>
                        <input
                            type="password"
                            className="form-control"
                            name="contrasenia"
                            placeholder="Ingrese Contraseña"
                            value={formData.contrasenia}
                            onChange={handleInputChange}
                        />
                        {errors.contrasenia && <div style={{ color: 'red' }} className="error-message">{errors.contrasenia}</div>}
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="email" className="me-2"><strong>Correo:</strong></label>
                        <input
                            type="email"
                            className="form-control"
                            name="correo"
                            placeholder="Ingrese Correo Electrónico"
                            value={formData.correo}
                            onChange={handleInputChange}
                        />
                        {errors.correo && <div style={{ color: 'red' }} className="error-message">{errors.correo}</div>}
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="apellido" className="me-2"><strong>Apellido:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            name="apellido"
                            placeholder="Ingrese Apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                        />
                        {errors.apellido && <div style={{ color: 'red' }} className="error-message">{errors.apellido}</div>}
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="nombre" className="me-2"><strong>Nombre:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Ingrese Nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                        />
                        {errors.nombre && <div style={{ color: 'red' }} className="error-message">{errors.nombre}</div>}
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="dni" className="me-2"><strong>DNI:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            name="dni"
                            placeholder="Ingrese DNI"
                            value={formData.dni}
                            onChange={handleInputChange}
                        />
                        {errors.dni && <div style={{ color: 'red' }} className="error-message">{errors.dni}</div>}
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="fecha_nacimiento" className="me-2"><strong>Fecha de Nacimiento:</strong></label>
                        <DatePicker
                            id="fecha_nacimiento"
                            className="form-control"
                            selected={formData.fecha_nacimiento}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Seleccionar fecha"
                        />
                    </div>

                    <div className="mb-3">
                        <button type='submit' className='btn btn-success w-100 rounded-0'>Crear Cuenta</button>
                        <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup