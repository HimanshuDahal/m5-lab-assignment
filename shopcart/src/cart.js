// src/cart.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ products }) {
  const cartItems = products.filter((p) => p.quantity > 0);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <>
          <p>There are 0 items in your cart.</p>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => navigate("/")}
          >
            Continue Shop
          </button>
        </>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.name} — Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-success mt-3"
            onClick={() => navigate("/signin")}
          >
            Check Out
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
