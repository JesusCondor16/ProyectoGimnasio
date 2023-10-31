import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera";
import Pie from "./Pie";

function GestordeCanasta() {
  // Obtener las reservas desde el almacenamiento local
  const storedMachines = JSON.parse(localStorage.getItem("reservedMachines")) || [];
  const [reservedMachines, setReservedMachines] = useState(storedMachines);

  const handleClearReservationsClick = () => {
    // Limpiar las reservas en el almacenamiento local
    localStorage.removeItem("reservedMachines");
    // Actualizar la lista de reservas en el estado
    setReservedMachines([]);
  };

  return (
    <div>
      <Cabecera></Cabecera>
      <div className="productos-reservados">
        <h2>Productos Reservados</h2>
        {reservedMachines.length === 0 ? (
          <p>No hay productos reservados.</p>
        ) : (
          <ul>
            {reservedMachines.map((machine, index) => (
              <li key={index}>
                <strong>Nombre de la máquina:</strong> {machine.name}, <strong>Horario:</strong> {machine.horario}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleClearReservationsClick}>Eliminar Reservas</button>
      </div>
      <div className="bloque"></div>
      <Pie></Pie>
    </div>
  );
}

export default GestordeCanasta;