import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
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
                  marginLeft: "5px"
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