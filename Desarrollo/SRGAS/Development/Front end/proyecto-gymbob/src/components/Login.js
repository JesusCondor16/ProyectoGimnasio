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

            <header className="contenedor-header">
                
                <h1 className="titulo">GYMBOB</h1>
                <img src={require('./img/logo.png')} alt="logo"></img>
               </header>

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


               <footer>
              <div className="pie">
              <div className="contactanos">
                <h3>Contactanos: gymbob@gmail.com</h3>
              </div>
              <div className="numero">
                <h4>Numero: 987654321</h4>
              </div>
              </div>
            </footer>
            </div>   
          
        );
    }
}

export default Login;