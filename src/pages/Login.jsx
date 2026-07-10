import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        // Save client details if returned from backend
        if (response.data.user) {
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(response.data.user)
          );
        }

        alert("Login Successful");

        navigate("/dashboard");
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error(error);

      alert("Invalid Email or Password");
    }
  };

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT PANEL */}
        <div className="left-panel">

          <div className="cp-logo">
            CP
          </div>

          <h1>Client Portal</h1>

          <p>Project Dashboard Access</p>

        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">

          <h2 className="welcome-title">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="options">

              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>

            <p className="signup">
              New Client?

              <span
                onClick={handleCreateAccount}
                style={{
                  color: "#4c9ef2",
                  cursor: "pointer",
                  fontWeight: "600",
                  marginLeft: "5px",
                }}
              >
                Create Account
              </span>

            </p>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;