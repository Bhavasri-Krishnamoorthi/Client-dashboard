import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      style={{
        minHeight: "80px",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",

        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "stretch" : "center",

        gap: "15px",

        padding: isMobile ? "15px" : "0 30px",

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
            margin: 0,
          }}
        >
          Hello, folks !
        </h2>

        <p
          style={{
            color: "#64748B",
            fontSize: "14px",
            marginTop: "5px",
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
          justifyContent: isMobile ? "space-between" : "flex-end",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
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

            width: isMobile ? "100%" : "280px",

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
          }}
        >
          <FaBell
            size={22}
            color="#38BDF8"
          />

          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              background: "#EF4444",
              color: "#fff",
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
                margin: 0,
              }}
            >
              Client User
            </h4>

            <p
              style={{
                color: "#64748B",
                fontSize: "12px",
                margin: 0,
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