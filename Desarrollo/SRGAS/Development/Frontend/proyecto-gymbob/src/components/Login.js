import React from 'react';
import { useForm } from 'react-hook-form';
import './css/estilos.css'; 

const Formulario = () => {
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
    // Realiza acciones con los datos enviados, como enviarlos a un servidor o procesarlos localmente
    console.log(data);
};

return (
    <div className="body1">
    <h2 className="titulo-centrado">Iniciar Sesion</h2>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer"
    />
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
        <i className="far fa-user"></i> Usuario:
        <input type="text" id="usuario_reg" name="usuario_reg" {...register('usuario_reg', { required: true })} autoComplete="username" />
        </label>
        <label>
        <i className="fa-solid fa-lock"></i> Contraseña:
        <input type="password" id="contrasena_reg" name="contrasena_reg" {...register('contrasena', { required: true })}autoComplete="current-password" />
        </label>
        <label>
        <input type="checkbox" id="mantener_sesion" name="mantener_sesion" {...register('mantener_sesion')} />
        Mantener la sesión abierta
        </label>
        <button type="submit" value="RLogin">Iniciar Sesion </button>
    </form>
    </div>
);
};

export default Formulario;