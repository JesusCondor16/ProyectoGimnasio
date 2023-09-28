import React from "react";
import { Link } from "react-router-dom";
function Welcome() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-danger vh-100'>
            <Link to = '/login'className='btn btn-default border w-50 bg-light rounded-0 text-decoration-none'>Logearse</Link>
            <Link to = '/signup' className='btn btn-default border w-50 bg-light rounded-0 text-decoration-none'>Registrarse</Link>
        </div>
    )
}

export default Welcome