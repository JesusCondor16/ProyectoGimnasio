import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';
import './css/estilos.css'; 
import './img/gimnasio.jpg';
import './img/logo.png'; 


class Principal extends Component {
    render() {
        return (

            <div>
            <Helmet>
               <title>GymBob</title>
            </Helmet>
            
            <header className="contenedor-header">
                
             <h1 className="titulo">GYMBOB</h1>
             <img src={require('./img/logo.png')} alt="logo.png"></img>
            </header>

            <main>
             <div className="bloque-gimnasio">
                <div className="bloque-general">
                    <div className="mensaje">
                        <h2>¡Bienvenido a GYMBOB, tu gimnasio de confianza!</h2>
                    </div>
                    <Link to="/registro" className="boton1">Registrar usuario</Link>
                    <Link to="/login" className="boton2">Login</Link>
                </div>
                <img src={require('./img/gimnasio.jpg')} alt="gimnasio"></img>
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

export default Principal;