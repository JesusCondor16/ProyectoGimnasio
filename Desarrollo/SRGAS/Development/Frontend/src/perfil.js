import React, { useState, useEffect } from 'react';
import Cabecera from './Cabecera';
import Pie from './Pie';
import axios from 'axios';

function Perfil() {
    const userEmail = localStorage.getItem('userEmail');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      if (userEmail) {
          axios.post('http://localhost:8081/login', { correo: userEmail })
              .then(response => {
                  if (response.data === 'Success') {
                      // User is authenticated, fetch user data
                      axios.get('http://localhost:8081/signup', { params: { correo: userEmail } })
                          .then(userDataResponse => {
                              console.log('Datos del usuario recibidos:', userDataResponse.data);
                              setUserData(userDataResponse.data);
                          })
                          .catch(error => {
                              console.error('Error fetching user data:', error);
                          });
                  }
              })
              .catch(error => {
                  console.error('Error checking authentication:', error);
              });
      }
  }, [userEmail]);
  

    if (!userEmail) {
        return null;
    }

    return (
        <div>
            <Cabecera />
            <div>
                <h2>Datos del Usuario:</h2>
                <ul>
                    <li>
                        Nombre: {userData ? userData.nombre : ''}
                    </li>
                    <li>
                        Apellido: {userData ? userData.apellido : ''}
                    </li>
                    <li>
                        Correo: {userEmail}
                    </li>
                </ul>
            </div>
            <Pie />
        </div>
    );
}

export default Perfil;
