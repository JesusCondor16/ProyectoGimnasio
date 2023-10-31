import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GestordeCanasta from "./GestordeCanasta";

test("Renderiza el componente GestordeCanasta correctamente", () => {
  // Renderiza el componente
  const { getByText, getByTestId } = render(<GestordeCanasta />);

  // Comprueba que se renderice el título del carrito de compras
  const titleElement = getByText("Productos Reservados");
  expect(titleElement).toBeInTheDocument();

  // Comprueba que el botón "Eliminar Reservas" esté presente
  const clearButton = getByText("Eliminar Reservas");
  expect(clearButton).toBeInTheDocument();

  // Simula hacer clic en el botón "Eliminar Reservas" y verifica el comportamiento esperado
  fireEvent.click(clearButton);

  // Aquí puedes agregar más pruebas según las interacciones y elementos de tu componente
});
