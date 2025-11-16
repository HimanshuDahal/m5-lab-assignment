// src/checkOut.js
import React from "react";
import { useLocation } from "react-router-dom";

function CheckOut() {
  const location = useLocation();
  const user = location.state?.user || "Guest";

  return (
    <div className="container mt-4">
      <h2>Check Out</h2>
      <p>Welcome Back {user}!</p>
      <p>Time to check out?</p>
    </div>
  );
}

export default CheckOut;
