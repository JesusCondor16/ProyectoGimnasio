import React from 'react';
import Cabecera from './Cabecera'; // Importa el componente de cabecera
import Pie from './Pie'; // Importa el componente de pie de página


function PlanAlimenticio() {
    

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


    return (
        <div className="app">
  <Cabecera />
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
    </div>

    
    <div className="user-info">
      
    </div>
  </div>
  <Pie />
</div>

    );
}

export default PlanAlimenticio;