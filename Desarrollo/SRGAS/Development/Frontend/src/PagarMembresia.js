
import Cabecera from './Cabecera'; // Importa el componente de cabecera
import Pie from './Pie'; // Importa el componente de pie de página
import React, { useState } from 'react';


function PagarMembresia() {
   
    const redirectToHome = (imageName) => {
        window.location.href = '/Home';  
      };  
  const redirectToPagarMembresia = (imageName) => {
    window.location.href = '/PagarMembresia';  
  };
  const redirectToPlanAlimenticio = (imageName) => {
    window.location.href = '/PlanAlimenticio';  
  };
  const redirectToCanjearPremio = (imageName) => {
    window.location.href = '/CanjearPremio';  
  };
  const redirectToPerfil = (imageName) => {
    window.location.href = '/perfil';  
  };

  const validarCampos = () => {
    if (!nombre || !numero || !vencimiento || !contrasena) {
      setMensajeError('Falta completar algún campo');
      setMensajeExito('');
    } else {
      setMensajeError('');
      setMensajeExito('Membresía pagada');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    validarCampos();
  };

  const [nombre, setNombre] = useState('');
const [numero, setNumero] = useState('');
const [vencimiento, setVencimiento] = useState('');
const [contrasena, setContrasena] = useState('');
const [mensajeError, setMensajeError] = useState('');
const [mensajeExito, setMensajeExito] = useState('');

    return (
        <div className="app">
          <Cabecera></Cabecera> 
             <div className="content">
               <div className="buttons">
                 <button className="btm" onClick={redirectToPagarMembresia}>
               <span>
                  Pagar Membresía
                  </span>
              </button>
              <button className="btm" onClick={redirectToPlanAlimenticio}>
              <span>
                 Plan Alimenticio
              </span>
              </button>
              <button className="btm" onClick={redirectToCanjearPremio}>
              <span>
                Canjear Premio
              </span>
             </button>
              <button className="btm" onClick={redirectToPerfil}>
             <span>
                 Perfil
             </span>
             </button>
              <button className="btm" onClick={redirectToHome}>
             <span>
                 Pagina Principal
             </span>
          </button>
          <div className="bloqueBlanco"></div>

          

    </div>
    <h1>Pagar Membresia</h1>
    <div className='ContenedorPrincipal'>
    <div className="formsTarjeta">
    <form onSubmit={handleSubmit}>
  <div className="formsTarjeta-group">
    <label>Nombre del Titular:</label>
    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
  </div>

  <div className="formsTarjeta-group">
    <label>Número de Tarjeta:</label>
    <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
  </div>

  <div className="formsTarjeta-group">
    <label>Fecha de Vencimiento(mm/yy):</label>
    <input type="text" value={vencimiento} onChange={(e) => setVencimiento(e.target.value)} />
  </div>

  <div className="formsTarjeta-group">
    <label>Codigo CVV:</label>
    <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
  </div>

  <button type="submit" className="boton-pagar">Pagar</button>
</form>

{mensajeError && <div className="mensaje-error">{mensajeError}</div>}
{mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}


  
  </div>
</div>
    </div>
    
    <Pie></Pie>
</div>

    );
}

export default PagarMembresia;