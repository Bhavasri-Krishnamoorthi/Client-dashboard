import { Link } from "react-router-dom";
import {
  FaHome,
  FaCreditCard,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const menuItem = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px 18px",
    borderRadius: "16px",
    marginBottom: "12px",
    color: "#334155",
    textDecoration: "none",
    fontWeight: "500",
    transition: ".3s",
  };

  return (
    <div
      style={{
        width: "280px",
        height: "calc(100vh - 40px)",
        overflowY: "auto",
        position: "fixed",
        left: "20px",
        top: "20px",

        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(20px)",

        border: "1px solid rgba(255,255,255,0.4)",

        borderRadius: "30px",

        boxShadow:
          "0 8px 32px rgba(31,38,135,0.15)",

        padding: "25px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            margin: "auto",
            borderRadius: "25px",

            background:
              "linear-gradient(135deg,#38bdf8,#60a5fa)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color: "white",
            fontWeight: "bold",
            fontSize: "34px",

            animation: "float 3s ease-in-out infinite",
          }}
        >
          CP
        </div>

        <h2
          style={{
            marginTop: "20px",
            color: "#1e293b",
          }}
        >
          Client Portal
        </h2>

        <p
          style={{
            color: "#64748b",
          }}
        >
          Project Dashboard
        </p>
      </div>

      <nav>
        <Link
          to="/dashboard"
          style={{
            ...menuItem,
            background:
              "linear-gradient(135deg,#38bdf8,#60a5fa)",
            color: "white",
          }}
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/payments"
          style={menuItem}
        >
          <FaCreditCard />
          Payments
        </Link>

        <Link
          to="/profile"
          style={menuItem}
        >
          <FaUser />
          Profile
        </Link>

        <Link
          to="/"
          style={{
            ...menuItem,
            marginTop: "40px",
            color: "#ef4444",
          }}
        >
          <FaSignOutAlt />
          Logout
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;