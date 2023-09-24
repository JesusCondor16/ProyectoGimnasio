import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';

class Principal extends Component {
    render() {
        return (

            <div>
            <Helmet>
               <title>GymBob</title>
            </Helmet>
            

            <main>
             <div className="bloque-gimnasio">
                <div className="bloque-general">
                    <div className="mensaje">
                        <h2>¡Bienvenido a GYMBOB, tu gimnasio de confianza!</h2>
                    </div>
                    <Link to="/registro" className="boton1">Registro</Link>
                    <Link to="/login" className="boton2">Login</Link>
                </div>
                <img src={require('./img/gimnasio.jpg')} alt="gimnasio" className="gimnasio"></img>
             </div>
            </main>
            </div>
            
            
        );
    }
}

export default Principal;