import MainLayout from "../layouts/MainLayout";
import { CiSearch } from "react-icons/ci";
import { MdFilterList, MdMoreVert } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProjectDetailsPopup({ onClose }) {
  const projectDetails = [
    {
      label: "Project Name",
      value: "Ecommerce Website",
    },
    {
      label: "Project ID",
      value: "PRJ-2024-001",
    },
    {
      label: "Client",
      value: "TrendCart Online Store",
    },
    {
      label: "Project Manager",
      value: "David Wilson",
    },
    {
      label: "Technologies",
      value: "React, Node.js, MySQL, AWS",
    },
    {
      label: "Start Date",
      value: "10 Apr 2024",
    },
    {
      label: "Expected Delivery",
      value: "15 Jun 2024",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 23, 42, 0.55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "620px",
          maxWidth: "100%",
          background: "#ffffff",
          borderRadius: "22px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.28)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 30px",
            background: "linear-gradient(135deg, #38bdf8, #2563eb)",
            color: "#ffffff",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "18px",
              right: "22px",
              border: "none",
              background: "rgba(255,255,255,0.2)",
              color: "#ffffff",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              fontSize: "22px",
              cursor: "pointer",
              lineHeight: "30px",
            }}
          >
            ×
          </button>

          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Ecommerce Website Details
          </h2>

          <p
            style={{
              margin: "8px 0 0",
              fontSize: "14px",
              opacity: 0.9,
            }}
          >
            Complete overview of the current ecommerce project
          </p>
        </div>

        {/* Body */}
        <div
          style={{
            padding: "28px 30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              paddingBottom: "18px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 6px",
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Current Status
              </p>

              <span
                style={{
                  display: "inline-block",
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "7px 16px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                In Progress
              </span>
            </div>

            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  margin: "0 0 6px",
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Completion
              </p>

              <h3
                style={{
                  margin: 0,
                  color: "#111827",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                45%
              </h3>
            </div>
          </div>

          {/* Equal spacing details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "28px",
              rowGap: "18px",
              marginBottom: "26px",
            }}
          >
            {projectDetails.map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    margin: "0 0 6px",
                    color: "#6b7280",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  {item.label}
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "#111827",
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "1.5",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px",
              marginBottom: "20px",
            }}
          >
            <h4
              style={{
                margin: "0 0 10px",
                color: "#111827",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              Project Description
            </h4>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                fontSize: "14px",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              This ecommerce website is created for selling products online. It
              includes product listing, product detail page, shopping cart,
              checkout, payment integration, order tracking, and admin product
              management.
            </p>
          </div>

          {/* Features */}
          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px",
            }}
          >
            <h4
              style={{
                margin: "0 0 12px",
                color: "#111827",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              Main Features
            </h4>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {[
                "User Login",
                "Product Search",
                "Cart",
                "Wishlist",
                "Payment",
                "Order History",
                "Admin Dashboard",
              ].map((feature) => (
                <span
                  key={feature}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    color: "#374151",
                    padding: "8px 12px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              marginTop: "24px",
              width: "100%",
              padding: "13px",
              border: "none",
              borderRadius: "12px",
              background: "#111827",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

function MyProjectCard({ onViewDetails }) {
  const stages = [
    { name: "Discussion", completed: true },
    { name: "Design", completed: true },
    { name: "Development", completed: false, current: true },
    { name: "Testing", completed: false },
    { name: "Live", completed: false },
  ];
  const currentStageIndex = stages.findIndex((stage) => stage.current);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: "24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        border: "1px solid #eee",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "26px",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "#e8f5e9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            🧾
          </div>

          <div>
            <h3 style={{ margin: "0 0 6px", fontSize: "20px" }}>
              Ecommerce Website
            </h3>

            <p style={{ margin: "0 0 6px", color: "#666", fontSize: "14px" }}>
              Project ID: PRJ-2024-001
            </p>

            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
              Project Manager: David Wilson
            </p>
          </div>
        </div>

        <span
          style={{
            background: "#e6f4ea",
            color: "#2e7d32",
            padding: "8px 14px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          In Progress
        </span>
      </div>
{/* Professional Stage Progress */}
<div
  style={{
    margin: "34px 0 36px",
    padding: "0 10px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))`,
      alignItems: "start",
      position: "relative",
    }}
  >
    {stages.map((stage, index) => (
      <div
        key={stage.name}
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Line between previous item and current item */}
        {index !== 0 && (
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "calc(-50% + 22px)",
              width: "calc(100% - 44px)",
              height: "4px",
              borderRadius: "999px",
              background:
                index <= currentStageIndex
                  ? "linear-gradient(90deg, #22c55e, #4ade80)"
                  : "#e5e7eb",
              zIndex: 1,
            }}
          />
        )}

        {/* Stage Circle */}
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            margin: "0 auto 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            background: stage.completed
              ? "#22c55e"
              : stage.current
              ? "#ffffff"
              : "#f3f4f6",
            border: stage.current
              ? "4px solid #38bdf8"
              : stage.completed
              ? "4px solid #bbf7d0"
              : "4px solid #e5e7eb",
            color: stage.completed ? "#ffffff" : "#9ca3af",
            fontSize: "15px",
            fontWeight: "700",
            boxShadow: stage.current
              ? "0 0 0 6px rgba(56, 189, 248, 0.15)"
              : stage.completed
              ? "0 0 0 6px rgba(34, 197, 94, 0.12)"
              : "none",
          }}
        >
          {stage.completed ? "✓" : stage.current ? "" : ""}
        </div>

        {/* Current stage inner dot */}
        {stage.current && (
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#38bdf8",
              position: "absolute",
              top: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
            }}
          />
        )}

        {/* Stage Name */}
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: stage.current ? "#0284c7" : "#6b7280",
            fontWeight: stage.current ? "700" : "500",
          }}
        >
          {stage.name}
        </p>
      </div>
    ))}
  </div>
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "22px",
        }}
      >
        <div>
          <p style={{ color: "#888", margin: "0 0 6px", fontSize: "14px" }}>
            Start Date
          </p>
          <h4 style={{ margin: 0 }}>10 Apr 2024</h4>
        </div>

        <div>
          <p style={{ color: "#888", margin: "0 0 6px", fontSize: "14px" }}>
            Expected Delivery
          </p>
          <h4 style={{ margin: 0 }}>15 Jun 2024</h4>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #eee" }} />

      <div style={{ marginTop: "20px" }}>
        <p style={{ color: "#888", marginBottom: "10px", fontSize: "14px" }}>
          Technologies
        </p>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["React", "Node.js", "MySQL", "AWS"].map((tech) => (
            <span
              key={tech}
              style={{
                background: "#f3f4f6",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onViewDetails}
        style={{
          marginTop: "20px",
          border: "none",
          background: "transparent",
          color: "#4caf50",
          fontWeight: "700",
          cursor: "pointer",
          fontSize: "15px",
          padding: 0,
        }}
      >
        View Project Details →
      </button>
    </div>
  );
}

function RecentTransaction({ transactions }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");

  const data =
    transactions ||
    [
      {
        id: "TK-98421",
        productName: "Project1",
        dateTime: "19 Nov 2025, 10:32",
        customer: "Ethan Clarke",
        price: "$79.00",
        status: "Completed",
      },
      {
        id: "TK-98422",
        productName: "Project2",
        dateTime: "19 Nov 2025, 11:05",
        customer: "Ava Mitchell",
        price: "$159.00",
        status: "Cancelled",
      },
      {
        id: "TK-98423",
        productName: "Project3",
        dateTime: "19 Nov 2025, 11:44",
        customer: "Liam Parker",
        price: "$55.00",
        status: "Pending",
      },
    ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return { background: "#e6f4ea", color: "#2e7d32" };
      case "Cancelled":
        return { background: "#fdecea", color: "#c62828" };
      case "Pending":
        return { background: "#e8f4fb", color: "#0277bd" };
      default:
        return { background: "#f0f0f0", color: "#333" };
    }
  };

  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === "All" || row.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ marginTop: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
          Recent Transaction
        </h2>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
  {/* Search */}
  <button
    onClick={() => setShowSearch(!showSearch)}
    style={{
      width: "42px",
      height: "42px",
      border: "1px solid #e5e7eb",
      background: "#ffffff",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <CiSearch size={20} color="#111827" />
  </button>
{/* Filter */}
  <button
    onClick={() => setShowFilter(!showFilter)}
    style={{
      width: "42px",
      height: "42px",
      border: "1px solid #e5e7eb",
      background: "#ffffff",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <MdFilterList size={20} color="#111827" />
  </button>

          <div style={{ position: "relative" }}>
           <button
  onClick={() => setShowMenu(!showMenu)}
  style={{
    width: "42px",
    height: "42px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    borderRadius: "10px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#111827",
    cursor: "pointer",
  }}
>
  ⋮
</button>

            {showMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  background: "#fff",
                  border: "1px solid #eee",
                  borderRadius: 6,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  minWidth: 150,
                  zIndex: 10,
                  marginTop: 4,
                }}
              >
                <div
                  onClick={() => {
                    alert("Refresh: Reloading data...");
                    setShowMenu(false);
                  }}
                  style={{
                    padding: "10px 12px",
                    cursor: "pointer",
                    fontSize: 14,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Refresh
                </div>

                <div
                  onClick={() => {
                    alert("Settings: Configure options");
                    setShowMenu(false);
                  }}
                  style={{
                    padding: "10px 12px",
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                >
                  Settings
                </div>
              </div>
            )}
          </div>

          <button
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "8px 14px",
              borderRadius: 8,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onClick={() => alert("Export: Downloading data...")}
          >
            <FiDownload />
            Export
          </button>
        </div>
      </div>

      {showSearch && (
  <div
    style={{
      marginTop: 12,
      display: "flex",
      gap: 8,
      alignItems: "center",
    }}
  >
    {/* Search Icon Box */}
    <div
      style={{
        width: "42px",
        height: "42px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        color: "#666",
      }}
    >
      <CiSearch size={20} color="#666" />
    </div>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search by name, customer, or ID..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        flex: 1,
        padding: "10px 12px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        fontSize: "14px",
      }}
      autoFocus
    />
  </div>
)}

      {showFilter && (
        <div
          style={{
            marginTop: 12,
            marginBottom: 25,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {["All", "Completed", "Pending", "Cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              style={{
                padding: "6px 12px",
                border:
                  filterStatus === status
                    ? "1px solid #111"
                    : "1px solid #ddd",
                background: filterStatus === status ? "#111" : "#fff",
                color: filterStatus === status ? "#fff" : "#333",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: filterStatus === status ? "600" : "400",
              }}
            >
              {status}
            </button>
          ))}
        </div>
      )}

      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
          border: "1px solid #eee",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", color: "#777", fontSize: 12 }}>
                <th style={{ padding: "12px 8px", width: "16.66%" }}>
                  Project ID
                </th>
                <th style={{ padding: "12px 8px", width: "16.66%" }}>
                  Project Name
                </th>
                <th style={{ padding: "12px 8px", width: "16.66%" }}>
                  Date & Time
                </th>
                <th style={{ padding: "12px 8px", width: "16.66%" }}>
                  Customer
                </th>
                <th style={{ padding: "12px 8px", width: "16.66%" }}>
                  Price
                </th>
                <th style={{ padding: "12px 8px", width: "16.66%" }}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => navigate(`/payments/${row.id}`)}
                  style={{
                    borderBottom: "1px solid #f4f4f4",
                    cursor: "pointer",
                  }}
                >
                  <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                    {row.id}
                  </td>

                  <td style={{ padding: "12px 8px" }}>
                    <div style={{ fontWeight: 600 }}>{row.productName}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>
                      {row.description}
                    </div>
                  </td>

                  <td style={{ padding: "12px 8px", color: "#666" }}>
                    {row.dateTime}
                  </td>

                  <td style={{ padding: "12px 8px" }}>{row.customer}</td>

                  <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                    {row.price}
                  </td>

                  <td style={{ padding: "12px 8px" }}>
                    <span
                      style={{
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 600,
                        ...getStatusStyle(row.status),
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      color: "#777",
                    }}
                  >
                    No matching transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


function Dashboard() {
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <div style={{ marginTop: "40px" }}>
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          📋 My Project
        </h2>

        <MyProjectCard onViewDetails={() => setShowProjectDetails(true)} />

        <RecentTransaction />
      </div>

      {showProjectDetails && (
        <ProjectDetailsPopup onClose={() => setShowProjectDetails(false)} />
      )}
    </MainLayout>
  );
}

export default Dashboard;