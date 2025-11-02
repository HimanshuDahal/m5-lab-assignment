import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Child functional component
function Product({ product, onIncrement, onDecrement }) {
  return (
    <div className="col-md-3 text-center mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid mb-2"
        style={{ maxHeight: "150px" }}
      />
      <h5>{product.name}</h5>
      <p>Quantity: {product.quantity}</p>
      <div>
        <button
          className="btn btn-sm btn-primary me-2"
          onClick={() => onIncrement(product.id)}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDecrement(product.id)}
        >
          –
        </button>
      </div>
    </div>
  );
}

class App extends Component {
  state = {
    siteName: "Shop to React",
    products: [
      {
        id: 1,
        name: "Unisex Cologne",
        quantity: 0,
        image: "/products/cologne.jpg",
      },
      {
        id: 2,
        name: "Apple iWatch",
        quantity: 0,
        image: "/products/iwatch.jpg",
      },
      { id: 3, name: "Unique Mug", quantity: 0, image: "/products/mug.jpg" },
      {
        id: 4,
        name: "Mens Wallet",
        quantity: 0,
        image: "/products/wallet.jpg",
      },
    ],
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
    const totalQuantity = this.state.products
      .map((p) => p.quantity)
      .reduce((acc, curr) => acc + curr, 0);

    return (
      <div className="container mt-4">
        {/* Header */}
        <h1 className="mb-4">
          {this.state.siteName} <FontAwesomeIcon icon={faShoppingCart} />{" "}
          {totalQuantity} items
        </h1>

        {/* Product List */}
        <div className="row">
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
