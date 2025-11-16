// src/signIn.js
import React from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate FB login success
    // In real app, you'd integrate OAuth here
    navigate("/checkout", { state: { user: "Rich West" } });
  };

  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <p>Please login using one of the following:</p>
      <form>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your email"
          />
        </div>
        <button type="button" className="btn btn-primary me-2">
          Login
        </button>
        <button type="button" className="btn btn-info" onClick={handleLogin}>
          f LOGIN WITH FACEBOOK
        </button>
      </form>
    </div>
  );
}

export default SignIn;
