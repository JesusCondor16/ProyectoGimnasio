import React, { useEffect, useState } from 'react';
import Cabecera from './Cabecera';
import Pie from './Pie';

function Perfil() {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
  });

  useEffect(() => {
    // Reemplaza 'tu_cliente_id' con el ID del cliente actual
    const clienteID = 'tu_cliente_id';

    // Realiza una solicitud GET al servidor para obtener los datos del cliente
    fetch(`http://localhost:5000/api/clientes/${clienteID}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Actualiza el estado con los datos recuperados
      })
      .catch((error) => {
        console.error('Error al recuperar datos del cliente:', error);
      });
  }, []);

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