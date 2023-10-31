import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cabecera from "./Cabecera";
import Pie from "./Pie";
import Eliptica from './components/img/Eliptica.jpg';
import TrotadoraCurva from './components/img/TrotadoraCurva.png';
import TrotadoraElectrica from './components/img/TrotadoraElectrica.png';
import MiniEscaladora from './components/img/MiniEscaladora.jpg';
import MancuernaHexagonal5kg from './components/img/MancuernaHexagonal5kg.jpg';
import MancuernaHexagonal15kg from './components/img/MancuernaHexagonal15kg.jpg';
import MancuernaHexagonal20kg from './components/img/MancuernaHexagonal20kg.jpg';
import RuedaAbdominales from './components/img/RuedaAbdominales.jpg';
import BarraOlimpica from './components/img/BarraOlimpica.jpg';
import BarraOlimpicaGruesa from './components/img/BarraOlimpicaGruesa.jpg';
import BarraOlimpicaRecta from './components/img/BarraOlimpicaRecta.jpg';
import MaquinaDominadas from './components/img/MaquinaDominadas.png';
import DiscoOlimpico5kg from './components/img/DiscoOlimpico5kg.png';
import DiscoOlimpico15kg from './components/img/DiscoOlimpico15kg.jpg';
import BancaInclinada from './components/img/BancaInclinada.jpg';
import BancaPlana from './components/img/BancaPlana.jpg';

function Home() {
  const redirectToGestorCesta = () => {
    window.location.href = '/GestordeCanasta'; 
  };
  const redirectToPerfil = () => {
    window.location.href = '/perfil';  
  };
  const [maquinasData, setMaquinasData] = useState([]);
  const [cardioData, setCardioData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/maquinas")
      .then((response) => {
        setMaquinasData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de máquinas:", error);
      });

    axios.get("http://localhost:8081/cardio")
      .then((response) => {
        setCardioData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de cardio:", error);
      });
  }, []); // Este useEffect se ejecuta una vez al montar el componente

  const redirectToImageDetail = (imageName) => {
    // Redirige a la página de detalle de la imagen con el nombre de la imagen
    navigate(`/imagen/${imageName}`);
    
  };
  
    return (

        <div>
            <Cabecera></Cabecera> 
            <main>
            <button className="gestor-cesta-button" onClick={redirectToGestorCesta}>
            Gestor de Cesta
            </button>
            <button className="perfil-button" onClick={redirectToPerfil}>
            Perfil de usuario
            </button>
                <div className='ContenedorPrincipal'>

                    <div className="titulo-Cardio">Cardio</div>

                        <div className="img-Eliptica" onClick={()=> redirectToImageDetail('eliptica')}>
                            <img src={Eliptica}alt="Eliptica" />
                            <div className="titulo-Eliptica">Máquina Eliptica</div>
                        </div>               
                    <div className="img-TrotadoraCurva" onClick={()=> redirectToImageDetail('trotadoraCurva')}>
                    <img src={TrotadoraCurva} alt="TrotadoraCurva" />
                    <div className= "titulo-TrotadoraCurva">Trotadora curva</div>
                </div>

               
                    <div className="img-TrotadoraElectrica" onClick={()=> redirectToImageDetail('trotadoraElectrica')}>
                    <img src={TrotadoraElectrica} alt="TrotadoraElectrica" />
                    <div className= "titulo-TrotadoraElectrica">Trotadora eléctrica</div>
                </div>

                
                    <div className="img-MiniEscaladora" onClick={()=> redirectToImageDetail('miniEscaladora')}>
                    <img src={MiniEscaladora} alt="MiniEscaladora" />
                    <div className= "titulo-MiniEscaladora">Mini escaladora</div>
                </div>

                    
                 

                <div className="titulo-MaquinasDeFuerza" >Máquinas de fuerza</div>
                    <main>
                    
                    <div className="img-MancuernaHexagonal5kg" onClick={()=> redirectToImageDetail('mancuerna5kg')}>
                      <img src={MancuernaHexagonal5kg} alt="MancuernaHexagonal5kg" />
                      <div className= "titulo-MancuernaHexagonal5kg">Mancuerna Hexagonal 5 kg</div>
                    </div>

                    <div className="img-MancuernaHexagonal15kg" onClick={()=> redirectToImageDetail('mancuerna15kg')}>
                      <img src={MancuernaHexagonal15kg} alt="MancuernaHexagonal15kg" />
                      <div className= "titulo-MancuernaHexagonal15kg">Mancuerna Hexagonal 15 kg</div>
                    </div>

                    <div className="img-MancuernaHexagonal20kg" onClick={()=> redirectToImageDetail('mancuerna20kg')}>
                      <img src={MancuernaHexagonal20kg} alt="MancuernaHexagonal20kg" />
                      <div className= "titulo-MancuernaHexagonal20kg">Mancuerna Hexagonal 20 kg</div>
                    </div>

                    <div className="img-RuedaAbdominales" onClick={()=> redirectToImageDetail('ruedaAbdominales')}>
                      <img src={RuedaAbdominales} alt="RuedaAbdominales" />
                      <div className= "titulo-RuedaAbdominales">Rueda Abdominales</div>
                    </div>

                    <div className="img-BarraOlimpica" onClick={()=> redirectToImageDetail('barraOlimpica')}>
                      <img src={BarraOlimpica} alt="BarraOlimpica" />
                      <div className= "titulo-BarraOlimpica">Barra Olimpica</div>
                    </div>

                    <div className="img-BarraOlimpicaGruesa" onClick={()=> redirectToImageDetail('barraOlimpicaGruesa')}>
                      <img src={BarraOlimpicaGruesa} alt="BarraOlimpicaGruesa" />
                      <div className= "titulo-BarraOlimpicaGruesa">Barra Olimpica Gruesa</div>
                    </div>

                    <div className="img-BarraOlimpicaRecta" onClick={()=> redirectToImageDetail('barraOlimpicaRecta')}>
                      <img src={BarraOlimpicaRecta} alt="BarraOlimpicaRecta" />
                      <div className= "titulo-BarraOlimpicaRecta">Barra Olimpica Recta</div>
                    </div>

                    <div className="img-MaquinaDominadas" onClick={()=> redirectToImageDetail('estacionDominadasParalelas')}>
                      <img src={MaquinaDominadas} alt="MaquinaDominadas" />
                      <div className= "titulo-MaquinaDominadas">Maquina Dominadas</div>
                    </div>

                    <div className="img-DiscoOlimpico5kg" onClick={()=> redirectToImageDetail('discoOlimpico5kg')}>
                      <img src={DiscoOlimpico5kg} alt="DiscoOlimpico5kg" />
                      <div className= "titulo-DiscoOlimpico5kg">Disco Olimpico 5kg</div>
                    </div>

                    <div className="img-DiscoOlimpico15kg" onClick={()=> redirectToImageDetail('discoOlimpico15kg')}>
                      <img src={DiscoOlimpico15kg} alt="DiscoOlimpico15kg" />
                      <div className= "titulo-DiscoOlimpico15kg">Disco Olimpico 15kg</div>
                    </div>

                    <div className="img-BancaInclinada" onClick={()=> redirectToImageDetail('bancaMultiFuncionInclinable')}>
                      <img src={BancaInclinada} alt="BancaInclinada" />
                      <div className= "titulo-BancaInclinada">Banca Inclinada</div>
                    </div>

                    <div className="img-BancaPlana" onClick={()=> redirectToImageDetail('bancaEjercicios')}>
                      <img src={BancaPlana} alt="BancaPlana" />
                      <div className= "titulo-BancaPlana">Banca Plana</div>
                    </div>
                    </main>
                </div>
            </main>
            <Pie></Pie>
        </div>
        

        
    );

    
}


export default Home;
