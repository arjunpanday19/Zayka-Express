import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const navigate = useNavigate();

  // Ensure admin user exists
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("zayka_users")) || [];
    if (!users.find(u => u.email === "admin@zayka.com")) {
      users.push({ email: "admin@zayka.com", password: "admin123", role: "admin" });
      localStorage.setItem("zayka_users", JSON.stringify(users));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("zayka_users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      if (user.role === "admin") {
        setMessage("Admin login successful! Welcome to home page!");
        setTimeout(() => {
          navigate("/home"); // You can create an /admin route/page
        }, 1000);
      } else {
        setMessage("Customer login successful! Welcome back.");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    if (forgotEmail) {
      setMessage(`Password reset link sent to ${forgotEmail}`);
      setShowForgotModal(false);
    } else {
      setMessage("Please enter your email to reset password.");
    }
  };

  return (
    <>
      
      <div className="login-page d-flex align-items-center justify-content-center">
        <div className="card p-4 shadow-lg login-card">
          <h2 className="text-center mb-4" style={{ color: "#0F172A" }}>Login to Zayka Express</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <button type="submit" className="btn btn-primary w-50" style={{ backgroundColor: "#0F172A" }}>Login</button>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => setShowForgotModal(true)}
              >
                Forgot Password?
              </button>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-outline-danger w-100 mt-2">
                <i className="fab fa-google me-2"></i> Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Forgot Password</h5>
                <button type="button" className="btn-close" onClick={() => setShowForgotModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowForgotModal(false)}>Close</button>
                <button className="btn btn-primary" onClick={handleForgotPassword}>Send Reset Link</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loginpage;