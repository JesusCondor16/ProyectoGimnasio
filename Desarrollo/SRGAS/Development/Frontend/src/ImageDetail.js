import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import imageDetails from "./Data";
import Eliptica from "./components/img/Eliptica.jpg";
import TrotadoraElectrica from "./components/img/TrotadoraElectrica.png";
import TrotadoraCurva from "./components/img/TrotadoraCurva.png";
import { FaShoppingCart } from "react-icons/fa";
import { useReservationContext } from "./ReservationContext";

function ImageDetail() {
  const { imageName } = useParams();
  const details = imageDetails[imageName];
  const navigate = useNavigate();
  const { reservedMachines, addReservedMachine } = useReservationContext();

  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");

  const handleHorarioChange = (event) => {
    setHorarioSeleccionado(event.target.value);
  };

  const handleReservarClick = () => {
    const machine = {
      name: details.type,
      horario: horarioSeleccionado,
    };

    // Agregar la máquina al contexto de reserva
    addReservedMachine(machine);
  };

  return (
    <div className="image-detail-container">
      <main>
        <div className="image-detail">
          <div className="image-content">
            <h2>Detalle de la Imagen</h2>
            <img src={Eliptica} alt={imageName} />
            <h3>{details.type}</h3>
            <p>Marca: {details.brand}</p>
            <p>Modelo: {details.model}</p>
            <p>Estado: {details.status}</p>
          </div>
        </div>
      </main>
      <FaShoppingCart /> {/* Icono del carrito */}
      <div className="carrito-container">
        {/* Contenedor del carrito (puedes agregar contenido aquí si lo deseas) */}
      </div>
      <div className="horario-container">
        <label htmlFor="horario-select">Seleccionar Horario:</label>
        <select
          id="horario-select"
          className="horario-select"
          value={horarioSeleccionado}
          onChange={handleHorarioChange}
        >
          <option value="">Selecciona un horario</option>
          <option value="7:00 AM - 9:00 AM">7:00 AM - 9:00 AM</option>
          <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
          <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
          {/* Agrega más horarios aquí si es necesario */}
        </select>
        <button className="reservar-button" onClick={handleReservarClick}>
          Reservar
        </button>
      </div>
    </div>
  );
}

export default ImageDetail;




  
  
  
  





