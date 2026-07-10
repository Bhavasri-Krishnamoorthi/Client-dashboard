import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Account.css";

function Account() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/register",
        formData
      );

      if (response.data.success) {
        alert(
          `Account Created Successfully!\nClient ID: ${response.data.client_id}`
        );

        navigate("/");
      } else {
        alert(response.data.message);
      }

    } catch (error) {
  console.log(error);

  if (error.response) {
    alert(error.response.data.message);
  } else {
    alert(error.message);
  }
}
  };

  return (
    <div className="register-page">
      <div className="register-container">

        {/* LEFT PANEL */}

        <div className="left-panel">
          <div className="desktop-icon">🖥️</div>

          <h1>Client Portal</h1>

          <p>Create An Account</p>
        </div>

        {/* RIGHT PANEL */}

        <div className="right-panel">

          <div
            className="close-btn"
            onClick={() => navigate("/")}
          >
            ✕
          </div>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="full_name"
              placeholder="Client Name"
              value={formData.full_name}
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
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
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