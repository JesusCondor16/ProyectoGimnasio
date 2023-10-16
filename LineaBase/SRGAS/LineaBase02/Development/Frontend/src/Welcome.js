import React from "react";
import { Link } from "react-router-dom";
import Cabecera from './Cabecera';
import Pie from './Pie';

function Welcome() {
    return (
        <div>
            <Cabecera></Cabecera>
            <main className='d-flex justify-content-center align-items-center bg-danger vh-100'>
                    <Link to='/login' className='btnLogin'>Login</Link>
                    <Link to='/signup' className='btnRegistrarse'>Registrarse</Link>
            </main>
            <Pie></Pie>
        </div>
    )
}

export default Welcome;
