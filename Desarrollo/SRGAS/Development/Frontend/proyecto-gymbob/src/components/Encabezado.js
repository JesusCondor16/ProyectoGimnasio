import React from 'react';

const Encabezado = () => {
return (
    <header className="contenedor-header">
        <h1 className="titulo">GYMBOB</h1>
        <img src={require('./img/logo.png')} alt="logo.png" className="logo" />
    </header>
);
};

export default Encabezado;