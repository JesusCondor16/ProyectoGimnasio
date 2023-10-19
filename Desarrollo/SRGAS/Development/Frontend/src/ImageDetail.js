import React, { useState } from "react";
import Cabecera from "./Cabecera";
import Pie from "./Pie";
import { useParams, useNavigate } from "react-router-dom";
import imageDetails from "./Data";
import { FaShoppingCart } from "react-icons/fa";

function ImageDetail() {
  const { imageName } = useParams();
  const details = imageDetails[imageName];
  const navigate = useNavigate();
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");
  
  const handleHorarioChange = (event) => {
    setHorarioSeleccionado(event.target.value);
  };

  const handleReservarClick = () => {
    const machine = {
      name: details.type,
      horario: horarioSeleccionado,
    };

    // Obtener las reservas anteriores del almacenamiento local
    const storedMachines = JSON.parse(localStorage.getItem("reservedMachines")) || [];
    // Agregar la nueva reserva a la lista
    storedMachines.push(machine);
    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem("reservedMachines", JSON.stringify(storedMachines));

  };

  return (
    <div>

    <Cabecera> </Cabecera>
    <div className="image-detail-container">
      <main>
        <div className="image-detail">
          <div className="image-content">
          <h3>{details.type}</h3>
            <img src={details.imageSrc} alt={imageName} />
            <h2>Características</h2>
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
          <option value="7:00 AM - 7:15 AM">7:00 AM - 7:15 AM</option>
          <option value="7:15 AM - 7:30 AM">7:15 AM - 7:30 AM</option>
          <option value="7:30 AM - 7:45 AM">7:30 AM - 7:45 AM</option>
          <option value="7:45 AM - 8:00 AM">7:45 AM - 8:00 AM</option>
          <option value="8:00 AM - 8:15 AM">8:00 AM - 8:15 AM</option>
          <option value="8:15 AM - 8:30 AM">8:15 AM - 8:30 AM</option>
          <option value="8:30 AM - 8:45 AM">8:30 AM - 8:45 AM</option>
          <option value="8:45 AM - 9:00 AM">8:45 AM - 9:00 AM</option>
          <option value="9:00 AM - 9:15 AM">9:00 AM - 9:15 AM</option>
          <option value="9:15 AM - 9:30 AM">9:15 AM - 9:30 AM</option>
          <option value="9:30 AM - 9:45 AM">9:30 AM - 9:45 AM</option>
          <option value="9:45 AM - 10:00 AM">9:45 AM - 10:00 AM</option>
          <option value="10:00 AM - 10:15 AM">10:00 AM - 10:15 AM</option>
          <option value="10:15 AM - 10:30 AM">10:15 AM - 10:30 AM</option>
          <option value="10:30 AM - 10:45 AM">10:30 AM - 10:45 AM</option>
          <option value="10:45 AM - 11:00 AM">10:45 AM - 11:00 AM</option>
          <option value="11:00 AM - 11:15 AM">11:00 AM - 11:15 AM</option>
          <option value="11:15 AM - 11:30 AM">11:15 AM - 11:30 AM</option>
          <option value="11:30 AM - 11:45 AM">11:30 AM - 11:45 AM</option>
          <option value="11:45 AM - 12:00 PM">11:45 AM - 12:00 PM</option>
          <option value="12:00 PM - 12:15 PM">12:00 PM - 12:15 PM</option>
          <option value="12:15 PM - 12:30 PM">12:15 PM - 12:30 PM</option>
          <option value="12:30 PM - 12:45 PM">12:30 PM - 12:45 PM</option>
          <option value="12:45 PM - 1:00 PM"> 12:45 PM - 1:00 PM</option>
          <option value="1:00 PM - 1:15 PM">1:00 PM - 1:15 PM</option>
          <option value="1:15 PM - 1:30 PM">1:15 PM - 1:30 PM</option>
          <option value="1:30 PM - 1:45 PM">1:30 PM - 1:45 PM</option>
          <option value="1:45 PM - 2:00 PM">1:45 PM - 2:00 PM</option>
          <option value="2:00 PM - 2:15 PM">2:00 PM - 2:15 PM</option>
          <option value="2:15 PM - 2:30 PM">2:15 PM - 2:30 PM</option>
          <option value="2:30 PM - 2:45 PM">2:30 PM - 2:45 PM</option>
          <option value="2:45 PM - 3:00 PM">2:45 PM - 3:00 PM</option>
          <option value="3:00 PM - 3:15 PM">3:00 PM - 3:15 PM</option>
          <option value="3:15 PM - 3:30 PM">3:15 PM - 3:30 PM</option>
          <option value="3:30 PM - 3:45 PM">3:30 PM - 3:45 PM</option>
          <option value="3:45 PM - 3:00 PM">3:45 PM - 4:00 PM</option>
          <option value="4:00 PM - 4:15 PM">4:00 PM - 4:15 PM</option>
          <option value="4:15 PM - 4:30 PM">4:15 PM - 4:30 PM</option>
          <option value="4:30 PM - 4:45 PM">4:30 PM - 4:45 PM</option>
          <option value="4:45 PM - 5:00 PM">4:45 PM - 5:00 PM</option>
          <option value="5:00 PM - 5:15 PM">5:00 PM - 5:15 PM</option>
          <option value="5:15 PM - 5:30 PM">5:15 PM - 5:30 PM</option>
          <option value="5:30 PM - 5:45 PM">5:30 PM - 5:45 PM</option>
          <option value="5:45 PM - 6:00 PM">5:45 PM - 6:00 PM</option>
          <option value="6:00 PM - 6:15 PM">6:00 PM - 6:15 PM</option>
          <option value="6:15 PM - 6:30 PM">6:15 PM - 6:30 PM</option>
          <option value="6:30 PM - 6:45 PM">6:30 PM - 6:45 PM</option>
          <option value="6:45 PM - 7:00 PM">6:45 PM - 7:00 PM</option>
          <option value="7:00 PM - 7:15 PM">7:00 PM - 7:15 PM</option>
          <option value="7:15 PM - 7:30 PM">7:15 PM - 7:30 PM</option>
          <option value="7:30 PM - 7:45 PM">7:30 PM - 7:45 PM</option>
          <option value="7:45 PM - 8:00 PM">7:45 PM - 8:00 PM</option>


          {/* Agrega más horarios aquí si es necesario */}
        </select>
        <button className="reservar-button" onClick={handleReservarClick}>
          Reservar
        </button>
      </div>
    </div>
    <Pie></Pie>
  </div>
  );
}

export default ImageDetail;




  
  
  
  





