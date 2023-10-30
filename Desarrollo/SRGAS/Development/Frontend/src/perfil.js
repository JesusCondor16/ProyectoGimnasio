import React, { useState, useEffect } from 'react';
import Cabecera from './Cabecera';
import Pie from './Pie';
import axios from 'axios';

function Perfil() {
    const userEmail = localStorage.getItem('userEmail');
    const [dni, setDNI] = useState('');
    const [userData, setUserData] = useState(null);

    const handleDNIChange = (event) => {
        setDNI(event.target.value);
    };

    const fetchUserData = () => {
        axios.get('http://localhost:8081/obtenerDatosPorDNI', { params: { dni } })
            .then(userDataResponse => {
                console.log('Datos del usuario recibidos:', userDataResponse.data);
                setUserData(userDataResponse.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    useEffect(() => {
        if (userEmail) {
            // No es necesario comprobar la autenticación en el frontend si lo haces en el backend.
        }
    }, [userEmail]);

    const redirectToHome = () => {
        window.location.href = '/Home';
    };

    const redirectToPagarMembresia = () => {
        window.location.href = '/PagarMembresia';
    };

    const redirectToPlanAlimenticio = () => {
        window.location.href = '/PlanAlimenticio';
    };

    const redirectToCanjearPremio = () => {
        window.location.href = '/CanjearPremio';
    };

    const redirectToPerfil = () => {
        window.location.href = '/perfil';
    };

    return (
        <div className="app">
            <Cabecera />
            <div className="content">
                <div className="buttons">
                    <button className="btm" onClick={redirectToPagarMembresia}>
                        <span>Pagar Membresía</span>
                    </button>
                    <button className="btm" onClick={redirectToPlanAlimenticio}>
                        <span>Plan Alimenticio</span>
                    </button>
                    <button className="btm" onClick={redirectToCanjearPremio}>
                        <span>Canjear Premio</span>
                    </button>
                    <button className="btm" onClick={redirectToPerfil}>
                        <span>Perfil</span>
                    </button>
                    <button className="btm" onClick={redirectToHome}>
                        <span>Pagina Principal</span>
                    </button>
                </div>
                <div className="user-info">
                    <h2>Ingresa tu DNI:</h2>
                    <input
                        type="text"
                        value={dni}
                        onChange={handleDNIChange}
                    />
                    <button onClick={fetchUserData}>Buscar Usuario</button>
                    {userData && (
                        <div>
                            <h2>Datos del Usuario:</h2>
                            <ul>
                                <li>Nombre: {userData[0].nombre}</li>
                                <li>Apellido: {userData[0].apellido}</li>
                                <li>Correo: {userData[0].correo}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <Pie />
        </div>
    );
}

export default Perfil;
