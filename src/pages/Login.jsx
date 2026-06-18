import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <div className="left-panel">
          <div className="floating-logo">CP</div>

          <h1>Client Portal</h1>
          <p>Project Dashboard Access</p>
        </div>

        <div className="right-panel">

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Sign in to continue managing your projects
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              Login
            </button>
          </form>

          <p className="signup-text">
            New Client?{" "}
            <span
              onClick={handleCreateAccount}
              style={{
                color: "#4f94e8",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Create Account
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;