import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css"; // reuse same styling

function Signup() {
  const [role, setRole] = useState("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("zayka_users")) || [];
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      setMessage("Email already exists. Please login or use a different email.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const newUser = { name, email, mobile, password, role };
    localStorage.setItem("zayka_users", JSON.stringify([...users, newUser]));
    setMessage("Signup successful! Redirecting...");

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <>
      <div className="login-page d-flex align-items-center justify-content-center">
        <div className="card p-4 shadow-lg login-card">
          <h2 className="text-center mb-4" style={{ color: "#0F172A" }}>
            Create your ZaykaExpress account
          </h2>
          {message && <div className="alert alert-info">{message}</div>}

          <form onSubmit={handleSignup}>
            {/* Role selection */}
            <div className="mb-3">
              <label className="form-label">Sign Up As</label>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="customer"
                    value="customer"
                    checked={role === "customer"}
                    onChange={() => setRole("customer")}
                  />
                  <label className="form-check-label" htmlFor="customer">
                    Customer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="admin"
                    value="admin"
                    checked={role === "admin"}
                    onChange={() => setRole("admin")}
                  />
                  <label className="form-check-label" htmlFor="admin">
                    Admin
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
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

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100 text-white" style={{ backgroundColor: "#0F172A" }}>
              Sign Up
            </button>

            <div className="text-center mt-3">
              <button type="button" className="btn btn-outline-danger w-100">
                <i className="fab fa-google me-2"></i> Sign Up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;