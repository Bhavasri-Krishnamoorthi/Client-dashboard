import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

function ProjectCard({
  projectName = "Ecommerce Website",
  projectId = "PRJ-2024-001",
  projectManager = "David Wilson",
  status = "In Progress",
  stages = [
    { name: "Discussion", date: "10 Apr 2024", completed: true },
    { name: "Design", date: "18 Apr 2024", completed: true },
    { name: "Development", date: "In Progress", completed: false, current: true },
    { name: "Testing", date: "Pending", completed: false },
    { name: "Live", date: "Pending", completed: false },
  ],
  startDate = "10 Apr 2024",
  expectedDelivery = "15 Jun 2024",
  technologies = ["React", "Node.js", "MySQL", "AWS"],
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        border: "1px solid #e0e0e0",
        marginBottom: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#e8f5e9",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "20px" }}>📱</span>
            </div>
            <div>
              <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
                {projectName}
              </h3>
              <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#666" }}>
                Project ID: {projectId}
              </p>
            </div>
          </div>
          <p style={{ margin: "8px 0 0 50px", fontSize: "12px", color: "#666" }}>
            Project Manager: {projectManager}
          </p>
        </div>
        <div
          style={{
            background: "#e8f5e9",
            color: "#4caf50",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {status}
        </div>
      </div>

      {/* Timeline/Progress Stages */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {stages.map((stage, index) => (
            <React.Fragment key={index}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: stage.completed ? "#4caf50" : "#e0e0e0",
                    color: stage.completed ? "white" : "#999",
                    fontSize: "16px",
                  }}
                >
                  {stage.completed ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#666",
                    marginTop: "6px",
                    textAlign: "center",
                    fontWeight: stage.current ? "600" : "400",
                    color: stage.current ? "#2196f3" : "#666",
                  }}
                >
                  {stage.name}
                </span>
              </div>
              {index < stages.length - 1 && (
                <div
                  style={{
                    flex: "1",
                    height: "2px",
                    background: stage.completed ? "#4caf50" : "#e0e0e0",
                    marginBottom: "20px",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Details Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
          paddingBottom: "20px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div>
          <p style={{ margin: "0", fontSize: "12px", color: "#999", fontWeight: "500" }}>
            Start Date
          </p>
          <p style={{ margin: "6px 0 0 0", fontSize: "14px", fontWeight: "600" }}>
            {startDate}
          </p>
        </div>
        <div>
          <p style={{ margin: "0", fontSize: "12px", color: "#999", fontWeight: "500" }}>
            Expected Delivery
          </p>
          <p style={{ margin: "6px 0 0 0", fontSize: "14px", fontWeight: "600" }}>
            {expectedDelivery}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "0", fontSize: "12px", color: "#999", fontWeight: "500", marginBottom: "10px" }}>
          Technologies
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {technologies.map((tech, index) => (
            <span
              key={index}
              style={{
                background: "#f5f5f5",
                color: "#333",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* View Project Details Link */}
      <div>
        <a
          href="#"
          style={{
            color: "#4caf50",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          onClick={(e) => {
            e.preventDefault();
            console.log("View Project Details clicked");
          }}
        >
          View Project Details <FiArrowRight />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
