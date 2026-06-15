import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        height: "80px",

        background: "rgba(255,255,255,0.75)",

        backdropFilter: "blur(10px)",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "0 30px",

        borderRadius: "16px",

        border: "1px solid rgba(255,255,255,0.4)",

        boxShadow: "0 8px 25px rgba(0,0,0,.06)",
      }}
    >
      {/* Left Section */}
      <div>
        <h2
          style={{
            color: "#111827",
            fontWeight: "600",
          }}
        >
          Welcome Back 👋
        </h2>

        <p
          style={{
            color: "#64748B",
            fontSize: "14px",
          }}
        >
          Manage your projects efficiently
        </p>
      </div>

      {/* Right Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Search Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",

            background: "#F8FAFC",

            padding: "12px 16px",

            borderRadius: "14px",

            width: "280px",

            transition: "0.3s",

            boxShadow:
              "0 2px 8px rgba(0,0,0,.03)",
          }}
        >
          <FaSearch color="#64748B" />

          <input
            type="text"
            placeholder="Search..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              marginLeft: "10px",
              width: "100%",
              color: "#111827",
            }}
          />
        </div>

        {/* Notification */}
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <FaBell
            size={22}
            color="#38BDF8"
            style={{
              animation: "bellRing 2s infinite",
            }}
          />

          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",

              background: "#EF4444",
              color: "white",

              width: "18px",
              height: "18px",

              borderRadius: "50%",

              fontSize: "10px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            3
          </span>
        </div>

        {/* User Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            padding: "8px 14px",

            borderRadius: "14px",

            background: "#F8FAFC",

            transition: "0.3s",

            boxShadow:
              "0 2px 8px rgba(0,0,0,.03)",
          }}
        >
          <FaUserCircle
            size={42}
            color="#38BDF8"
          />

          <div>
            <h4
              style={{
                color: "#111827",
                fontSize: "14px",
              }}
            >
              Client User
            </h4>

            <p
              style={{
                color: "#64748B",
                fontSize: "12px",
              }}
            >
              Premium Client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;