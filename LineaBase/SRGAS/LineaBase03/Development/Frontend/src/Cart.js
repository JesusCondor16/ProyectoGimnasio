import React from 'react';

function Cart({ reservedProducts }) {
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {reservedProducts.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {reservedProducts.map((item, index) => (
            <li key={index}>
              <strong>Nombre de la máquina:</strong> {item.nombreMaquina}, <strong>Horario:</strong> {item.horario}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
