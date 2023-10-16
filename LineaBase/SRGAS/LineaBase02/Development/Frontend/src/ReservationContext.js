// ReservationContext.js

import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const ReservationContext = createContext();

// Proveedor del contexto
export function ReservationProvider({ children }) {
  const [reservedMachines, setReservedMachines] = useState([]);

  // Función para agregar una máquina reservada
  const addReservedMachine = (machine) => {
    setReservedMachines([...reservedMachines, machine]);
  };
  const clearReservations = () => {
    setReservedMachines([]); // Limpia las reservas estableciendo un arreglo vacío
  };
  // Resto del contexto

  return (
    <ReservationContext.Provider
      value={{
        reservedMachines,
        addReservedMachine,
        clearReservations, // Asegúrate de que addReservedMachine esté en el valor del contexto
        // Resto de los valores del contexto
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

// Función personalizada para usar el contexto
export function useReservationContext() {
  return useContext(ReservationContext);
}
