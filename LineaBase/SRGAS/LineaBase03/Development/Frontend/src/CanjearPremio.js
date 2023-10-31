import Cabecera from './Cabecera'; // Importa el componente de cabecera
import Pie from './Pie'; // Importa el componente de pie de página
import React, { useState } from 'react';
import descuento from './components/img/descuento.png';
import TarjetaRegalo from './components/img/TarjetaRegalo.jpg';
import creatina from './components/img/creatina.jpg';


function CanjearPremio() {
  
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

  const [mostrarAdvertencia1, setMostrarAdvertencia1] = useState(false);
  const [mostrarAdvertencia2, setMostrarAdvertencia2] = useState(false);
  const [mostrarAdvertencia3, setMostrarAdvertencia3] = useState(false);

   const mostrarMensajeAdvertencia1 = () => {
    setMostrarAdvertencia1(true);
  };

  const mostrarMensajeAdvertencia2 = () => {
    setMostrarAdvertencia2(true);
  };

  const mostrarMensajeAdvertencia3 = () => {
    setMostrarAdvertencia3(true);
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

      <div className="bloqueBlanco"></div>
    </div>

<main>

<h11 className="tituloCanjearPremio">Canjear Premio</h11>
<div className="premio1">
  <h3>Descuento en tu membresía</h3>
  <img src={descuento} alt="descuento" />
  <h4>Por 100 puntos, puedes canjear un descuento de 20 soles</h4>
  {mostrarAdvertencia1 && (
    <div className="advertencia">
      Acerquese al modulo de atención para validar sus datos y entregarle su premio
    </div>
  )}
  <button className="botonCanjearPremio1" onClick={mostrarMensajeAdvertencia1}>
    Canjear Premio
  </button>
</div>

      <div className="premio2">
  <h5>Tarjeta de regalo</h5>
  <img src={TarjetaRegalo} alt="TarjetaRegalo" />
  <h6>Por 200 puntos, puedes canjear una tarjeta de regalo en Tiendas deportivas</h6>
  {mostrarAdvertencia2 && (
    <div className="advertencia">
      Acerquese al modulo de atención para validar sus datos y entregarle su premio
    </div>
  )}
  <button className="botonCanjearPremio2" onClick={mostrarMensajeAdvertencia2}>
    Canjear Premio
  </button>
</div>

      <div className="premio3">
  <h7 className="titulo">Suplemento</h7>
  <div className="imagen-contenedor">
    <img src={creatina} alt="creatina" className="imagen" />
  </div>
  <p>Por 500 puntos, puedes canjear el suplemento "Creatina"</p>
  {mostrarAdvertencia3 && (
    <div className="advertencia">
      Acerquese al modulo de atención para validar sus datos y entregarle su premio
    </div>
  )}
  <button className="botonCanjearPremio3" onClick={mostrarMensajeAdvertencia3}>
    Canjear Premio
  </button>
      </div>
</main>
  </div>
  <Pie />
</div>

    );
}

export default CanjearPremio;