import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [maquinasData, setMaquinasData] = useState([]);
    const [cardioData, setCardioData] = useState([]);

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
    }, []);

    return (
        <div>
            <h1>Lista de Máquinas:</h1>
            <ul>
                {maquinasData.map((maquina) => (
                    <li key={maquina.id}>{maquina.nombre}{maquina.marca}{maquina.modelo}{maquina.estado}</li>
                ))}
            </ul>

            <h1>Lista de Cardio:</h1>
            <ul>
                {cardioData.map((cardio) => (
                    <li key={cardio.id}>{cardio.nombre}{cardio.marca}{cardio.modelo}{cardio.estado}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
