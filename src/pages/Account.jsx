import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

function Account() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account has been created successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="register-page">
      <div className="register-container">

        {/* LEFT PANEL */}

        <div className="left-panel">

          <div className="desktop-icon">
            🖥️
          </div>

          <h1>Client Portal</h1>

          <p>Create An Account</p>

        </div>

        {/* RIGHT PANEL */}

        <div className="right-panel">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="clientName"
              placeholder="Client Name"
              value={formData.clientName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Create Account
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Account;