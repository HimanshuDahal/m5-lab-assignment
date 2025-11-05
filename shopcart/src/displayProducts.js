// src/displayProducts.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function DisplayProducts({ products, onIncrement, onDecrement }) {
  const [show, setShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setActiveProduct(product);
    setShow(true);
  };

  return (
    <div className="row mt-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-3 text-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid mb-2"
            style={{ maxHeight: "150px", cursor: "pointer" }}
            onClick={() => handleShow(product)}
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
      ))}

      {/* Modal */}
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{activeProduct.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{activeProduct.desc}</p> {/* <-- description here */}
          <img
            src={activeProduct.image}
            alt={activeProduct.name}
            width="350"
            className="mx-5"
          />
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
