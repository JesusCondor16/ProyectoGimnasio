import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera'; // Importa el componente de cabecera
import Pie from './Pie'; // Importa el componente de pie de página
import tonificar from './components/img/tonificar.jpg';
import reducirGrasa from './components/img/reducirGrasa.jpeg';
import musculo from './components/img/musculo.png';

function PlanAlimenticio() {
    
  const [mostrarDetalles, setMostrarDetalles] = useState({
    reducirGrasa: false,
    tonificar: false,
    aumentarMasaMuscular: false,
  });

  const [confirmados, setConfirmados] = useState({
    reducirGrasa: false,
    tonificar: false,
    aumentarMasaMuscular: false,
  });

  const [mensajeAceptado, setMensajeAceptado] = useState(false);

  const toggleDetalles = (plan) => {
    setMostrarDetalles({
      ...mostrarDetalles,
      [plan]: true,
    });
  };

  const confirmarPlan = (plan) => {
    setConfirmados({
      ...confirmados,
      [plan]: true,
    });
    setMostrarDetalles({
      ...mostrarDetalles,
      [plan]: false,
    });
    if (plan === 'tonificar') {
      setMensajeAceptado(true);
    }
    if(plan == 'reducirGrasa') {
      setMensajeAceptado(true);
    }
    if(plan == 'aumentarMasaMuscular') {
      setMensajeAceptado(true);
    }
  };


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

    
     {/* Primer contenedor */}
     <div className="contenedor">
        <h2>Reducir grasa muscular</h2>
        <img src={reducirGrasa} alt="reducirGrasa" />
        {confirmados.reducirGrasa ? (
          <button>Confirmado</button>
        ) : mostrarDetalles.reducirGrasa ? (
          <div className="detalles">
            <h3>Desayuno: Tazón de avena con frutas (manzanas, bayas o plátanos) y nueces.</h3>
            <h3>Almuerzo: Pechuga de pollo a la parrilla con una ensalada mixta (verduras frescas y hojas verdes).</h3>
            <h3>Cena: Ensalada de espinacas con aceite de oliva y vinagre balsámico</h3>
            <button onClick={() => confirmarPlan('reducirGrasa')}>Confirmar</button>
          </div>
        ) : (
          <div>
            <button onClick={() => toggleDetalles('reducirGrasa')}>Ver</button>
          </div>
        )}
        {mensajeAceptado && <p>PLAN ACEPTADO POR 3 MESES</p>}
      </div>

      {/* Segundo contenedor (Tonificar) */}
      <div className="contenedor">
        <h2>Tonificar</h2>
        <img src={tonificar} alt="tonificar" />
        {confirmados.tonificar ? (
          <button>Confirmado</button>
        ) : mostrarDetalles.tonificar ? (
          <div className="detalles">
            <h3>Desayuno: Batido de proteínas con proteína en polvo, plátano y espinacas.</h3>
            <h3>Almuerzo: Pechuga de pavo a la parrilla con batata al horno.</h3>
            <h3>Cena: Pescado a la parrilla (por ejemplo, tilapia o salmón).</h3>
            <button onClick={() => confirmarPlan('tonificar')}>Confirmar</button>
          </div>
        ) : (
          <div>
            <button onClick={() => toggleDetalles('tonificar')}>Observar</button>
          </div>
        )}
        {mensajeAceptado && <p>PLAN ACEPTADO POR 3 MESES</p>}
      </div>

      {/* Tercer contenedor (Aumentar Masa Muscular) */}
      <div className="contenedor">
        <h2>Aumentar masa muscular</h2>
        <img src={musculo} alt="musculo" />
        {confirmados.aumentarMasaMuscular ? (
          <button>Confirmado</button>
        ) : mostrarDetalles.aumentarMasaMuscular ? (
          <div className="detalles">
            <h3>Desayuno: Tortilla de claras de huevo con espinacas y pimientos.</h3>
            <h3>Almuerzo: Pollo a la parrilla con arroz integral con brócoli o espárragos al vapor.</h3>
            <h3>Cena: Ensalada de aguacate y tomate.</h3>
            <button onClick={() => confirmarPlan('aumentarMasaMuscular')}>Confirmar</button>
          </div>
        ) : (
          <div>
            <button onClick={() => toggleDetalles('aumentarMasaMuscular')}>Mostrar</button>
          </div>
        )}
        {mensajeAceptado && <p>PLAN ACEPTADO POR 3 MESES</p>}
      </div>
       </div>
       <Pie></Pie>
     </div>
    );
}

export default PlanAlimenticio;