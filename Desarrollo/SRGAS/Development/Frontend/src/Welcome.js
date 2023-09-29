import React from "react";
import { Link } from "react-router-dom";
import Cabecera from './Cabecera';
import Pie from './Pie'
function Welcome() {
    return (

        <div>
            <Cabecera></Cabecera>
            <main className='d-flex justify-content-center align-items-center bg-danger vh-100'>
            <Link to = '/login'className='btn btn-default border w-50 bg-light rounded-0 text-decoration-none'>Logearse</Link>
            <Link to = '/signup' className='btn btn-default border w-50 bg-light rounded-0 text-decoration-none'>Registrarse</Link>
            </main>
            <Pie></Pie>
        </div>
        
    )
}

export default Welcome