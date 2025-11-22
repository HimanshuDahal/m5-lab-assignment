// src/displayProducts.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function DisplayProducts({ products, onIncrement, onDecrement }) {
  const [show, setShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});
  const [sortOption, setSortOption] = useState("normal");

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setActiveProduct(product);
    setShow(true);
  };

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "lowest") return a.price - b.price;
    if (sortOption === "highest") return b.price - a.price;
    return a.id - b.id; // normal
  });

  return (
    <div className="container mt-4">
      {/* Dropdown */}
      <div className="mb-3">
        <label className="me-2 fw-bold">Sort Price By:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="form-select d-inline-block w-auto"
        >
          <option value="normal">Normal</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="row">
        {sortedProducts.map((product) => (
          <div key={product.id} className="col-md-3 text-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-2"
              style={{ maxHeight: "150px", cursor: "pointer" }}
              onClick={() => handleShow(product)}
            />
            <h5>{product.name}</h5>
            <p>${product.price}</p> {/* show price */}
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
        ))}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{activeProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{activeProduct.desc}</p>
          <img
            src={activeProduct.image}
            alt={activeProduct.name}
            width="350"
            className="mx-5"
          />
          <p>
            <span className="text-dark">Price:</span> ${activeProduct.price}
          </p>
          <p>
            <span className="text-dark">Ratings:</span> {activeProduct.ratings}
            /5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;
