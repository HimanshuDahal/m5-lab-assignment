// src/cart.js
import React from "react";

function Cart({ products }) {
  const cartItems = products.filter((p) => p.quantity > 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name} — Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
