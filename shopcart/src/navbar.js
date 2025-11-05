// src/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ siteName, totalQuantity }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        {siteName}
      </Link>
      <Link to="/cart" className="text-white">
        <FontAwesomeIcon icon={faShoppingCart} /> {totalQuantity} items
      </Link>
    </nav>
  );
}

export default Navbar;
