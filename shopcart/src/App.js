// src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import productsData from "./products";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    siteName: "Shop 2 React",
    products: productsData,
  };

  handleIncrement = (productId) => {
    const products = this.state.products.map((p) =>
      p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
    );
    this.setState({ products });
  };

  handleDecrement = (productId) => {
    const products = this.state.products.map((p) =>
      p.id === productId && p.quantity > 0
        ? { ...p, quantity: p.quantity - 1 }
        : p
    );
    this.setState({ products });
  };

  render() {
    const totalQuantity = this.state.products.reduce(
      (acc, p) => acc + p.quantity,
      0
    );

    return (
      <Router>
        <Navbar siteName={this.state.siteName} totalQuantity={totalQuantity} />
        <Routes>
          <Route
            path="/"
            element={
              <DisplayProducts
                products={this.state.products}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart products={this.state.products} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
