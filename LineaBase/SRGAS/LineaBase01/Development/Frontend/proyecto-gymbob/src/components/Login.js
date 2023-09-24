import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';
import './css/estilos.css'; 
import './img/gimnasio.jpg';
import './img/logo.png'; 

class Login extends Component {
    render() {
        return (
         <div>
            <Helmet>
               <title>GymBob</title>
            </Helmet>

            <main>
                <div className="bloque-general">
                <div className="login">
                 <h2>Iniciar Sesión</h2>
                  <form action="procesar_login.php" method="post">
                   <label htmlFor="usuario">Usuario:</label>
                   <input type="text" id="usuario" name="usuario" required />
                   <label htmlFor="contrasena">Contraseña:</label>
                   <input type="password" id="contrasena" name="contrasena" required />

                  <Link to="/login" className="boton2">Login</Link>
                  </form>
                </div>
                </div>
            </main>

            </div>   
          
        );
    }
}

export default Login;