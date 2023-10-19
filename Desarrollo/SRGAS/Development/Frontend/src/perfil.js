import React, { useEffect, useState } from 'react';
import Cabecera from './Cabecera';
import Pie from './Pie';

function Perfil() {
  const [userData, setUserData] = useState(() => {
    // Recupera los datos del usuario del localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      const storedUserData = localStorage.getItem(userEmail);
      if (storedUserData) {
        return JSON.parse(storedUserData);
      }
    }

    // Si no se encuentran los datos del usuario, muestra valores predeterminados o en blanco
    return {
      nombre: '',
      apellido: '',
      correo: '',
      // Otros campos de datos del usuario
    };
  });

  return (
    <div>
      <Cabecera />
      <main className="perfil-container">
        <h1>Perfil del Usuario</h1>
        <p>Nombre: {userData.nombre}</p>
        <p>Apellido: {userData.apellido}</p>
        <p>Correo: {userData.correo}</p>
        {/* Otros campos de datos del usuario */}
      </main>
      <Pie />
    </div>
  );
}

export default Perfil;
