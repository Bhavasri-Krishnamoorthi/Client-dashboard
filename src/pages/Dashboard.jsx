import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/ProjectCard";
import { CiSearch } from "react-icons/ci";
import { MdFilterList, MdMoreVert } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function RecentTransaction({ transactions }) {
  const navigate = useNavigate();

  const data =
    transactions ||
    [
      {
        id: "TK-98421",
        productName: "NovaEar Pro ANC",
        description: "Black, 32h Battery",
        image: "🎧",
        dateTime: "19 Nov 2025, 10:32",
        customer: "Ethan Clarke",
        customerAvatar: "👨",
        price: "$79.00",
        status: "Completed",
      },
      {
        id: "TK-98422",
        productName: "TekWatch Pulse",
        description: "44mm, Silver",
        image: "⌚",
        dateTime: "19 Nov 2025, 11:05",
        customer: "Ava Mitchell",
        customerAvatar: "👩",
        price: "$159.00",
        status: "Cancelled",
      },
      {
        id: "TK-98423",
        productName: "AeroPods Lite",
        description: "White, 20h Battery",
        image: "🎙️",
        dateTime: "19 Nov 2025, 11:44",
        customer: "Liam Parker",
        customerAvatar: "👨",
        price: "$55.00",
        status: "Pending",
      },
    ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return {
          background: "#e6f4ea",
          color: "#2e7d32",
        };

      case "Cancelled":
        return {
          background: "#fdecea",
          color: "#c62828",
        };

      case "Pending":
        return {
          background: "#e8f4fb",
          color: "#0277bd",
        };

      default:
        return {
          background: "#f0f0f0",
          color: "#333",
        };
    }
  };

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
        <h2
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Recent Transaction
        </h2>

        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            <CiSearch />
          </button>

          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            <MdFilterList />
          </button>

          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            <MdMoreVert />
          </button>

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
          >
            <FiDownload />
            Export
          </button>
        </div>
      </div>

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
            }}
          >
            <thead>
              <tr
                style={{
                  textAlign: "left",
                  color: "#777",
                  fontSize: 12,
                }}
              >
                <th style={{ padding: "12px 8px" }}>
                  Order ID
                </th>

                <th style={{ padding: "12px 8px" }}>
                  Product Name
                </th>

                <th style={{ padding: "12px 8px" }}>
                  Date & Time
                </th>

                <th style={{ padding: "12px 8px" }}>
                  Customer
                </th>

                <th style={{ padding: "12px 8px" }}>
                  Price
                </th>

                <th style={{ padding: "12px 8px" }}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  onClick={() =>
                    navigate(`/payments/${row.id}`)
                  }
                  style={{
                    borderBottom:
                      "1px solid #f4f4f4",
                    cursor: "pointer",
                  }}
                >
                  <td
                    style={{
                      padding: "12px 8px",
                      fontWeight: 600,
                    }}
                  >
                    {row.id}
                  </td>

                  <td style={{ padding: "12px 8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 8,
                          background: "#f5f5f5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",
                          fontSize: 20,
                        }}
                      >
                        {row.image}
                      </div>

                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          {row.productName}
                        </div>

                        <div
                          style={{
                            fontSize: 12,
                            color: "#888",
                          }}
                        >
                          {row.description}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    style={{
                      padding: "12px 8px",
                      color: "#666",
                    }}
                  >
                    {row.dateTime}
                  </td>

                  <td style={{ padding: "12px 8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "#eee",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",
                        }}
                      >
                        {row.customerAvatar}
                      </div>

                      <div
                        style={{
                          fontSize: 14,
                        }}
                      >
                        {row.customer}
                      </div>
                    </div>
                  </td>

                  <td
                    style={{
                      padding: "12px 8px",
                      fontWeight: 600,
                    }}
                  >
                    {row.price}
                  </td>

                  <td style={{ padding: "12px 8px" }}>
                    <span
                      style={{
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 600,
                        ...getStatusStyle(
                          row.status
                        ),
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
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

        <ProjectCard
          projectName="Ecommerce Website"
          projectId="PRJ-2024-001"
          projectManager="David Wilson"
          status="In Progress"
          stages={[
            {
              name: "Discussion",
              date: "10 Apr 2024",
              completed: true,
            },
            {
              name: "Design",
              date: "18 Apr 2024",
              completed: true,
            },
            {
              name: "Development",
              date: "In Progress",
              completed: false,
              current: true,
            },
            {
              name: "Testing",
              date: "Pending",
              completed: false,
            },
            {
              name: "Live",
              date: "Pending",
              completed: false,
            },
          ]}
          startDate="10 Apr 2024"
          expectedDelivery="15 Jun 2024"
          technologies={[
            "React",
            "Node.js",
            "MySQL",
            "AWS",
          ]}
        />

        <RecentTransaction />
      </div>
    </MainLayout>
  );
}

export default Dashboard;