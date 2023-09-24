import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Formulario = () => {
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
    // Realiza acciones con los datos enviados, como enviarlos a un servidor o procesarlos localmente
    console.log(data);
};

return (
    <div className="body1">
    <h2 className="titulo-centrado">Registro de Usuario</h2>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer"
    />
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
        <i className="fa-solid fa-user"></i> Nombre:
        <input type="text" id="nombre" name="nombre" {...register('nombre', { required: true })} />
        </label>
        <label>
        <i className="fas fa-envelope"></i> Correo Electrónico:
        <input type="email" id="correo" name="correo" {...register('correo', { required: true })} />
        </label>
        <label>
        <i className="far fa-user"></i> Usuario:
        <input type="text" id="usuario_reg" name="usuario_reg" {...register('usuario_reg', { required: true })} />
        </label>
        <label>
        <i className="fa-solid fa-lock"></i> Contraseña:
        <input type="password" id="contrasena_reg" name="contrasena_reg" {...register('contrasena', { required: true })} />
        </label>
        <label>
        <input type="checkbox" id="mantener_sesion" name="mantener_sesion" {...register('mantener_sesion')} />
        Mantener la sesión abierta
        </label>
        <button type="submit" value="Registrar">Registrarse</button>
    </form>
    </div>
);
};

export default Formulario;