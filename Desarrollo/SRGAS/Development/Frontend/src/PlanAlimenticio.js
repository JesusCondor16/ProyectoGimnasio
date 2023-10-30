import React from 'react';
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera'; // Importa el componente de cabecera
import Pie from './Pie'; // Importa el componente de pie de página
import tonificar from './components/img/tonificar.jpg';
import reducirGrasa from './components/img/reducirGrasa.jpeg';
import musculo from './components/img/musculo.png';

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

  const redirectToPlanDetalle = (plan) => {
    // Redirecciona a la página de detalles del plan alimenticio
    window.location.href = `/plan-alimenticio-detalle/${plan}`;
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

    
    <div className="contenedores">
          {/* Primer contenedor */}
          <div className="contenedor">
            <h2>Reducir grasa muscular</h2>
            <img src={reducirGrasa} alt="reducirGrasa" />
            <button onClick={() => redirectToPlanDetalle('reducir-grasa')}>Ver</button>
          </div>

          {/* Segundo contenedor */}
          <div className="contenedor">
            <h2>Tonificar</h2>
            <img src={tonificar} alt="tonificar" />
            <button onClick={() => redirectToPlanDetalle('tonificar')}>Ver</button>
          </div>

          {/* Tercer contenedor */}
          <div className="contenedor">
            <h2>Aumentar masa muscular</h2>
            <img src={musculo} alt="musculo" />
            <button onClick={() => redirectToPlanDetalle('aumentar masa muscular')}>Ver</button>
          </div>
          </div>
       </div>
     </div>
    );
}

export default PlanAlimenticio;