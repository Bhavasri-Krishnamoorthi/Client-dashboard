import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    clientId: "CLT-178176623531",
    clientName: "BHAVASRI",
    email: "24cs030@kpriet.ac.in",
    mobile: "9361434815",
    projectAddress: "KPRIET, Coimbatore",
    companyName: "ABC Technologies",
  });

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("clientProfile")
    );

    if (storedData) {
      setProfile((prev) => ({
        ...prev,
        ...storedData,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    localStorage.setItem(
      "clientProfile",
      JSON.stringify(profile)
    );

    alert("Profile Updated Successfully!");
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">

        <button
          className="close-btn"
          onClick={() => navigate("/dashboard")}
        >
          ✕
        </button>

        <h1 className="profile-title">PROFILE</h1>

        <div className="profile-header">
          <div className="profile-avatar">
            {(profile.clientName || "B")
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <h2 className="profile-name">
              {(profile.clientName || "BHAVASRI")
                .toUpperCase()}
            </h2>
          </div>
        </div>

        <div className="profile-grid">

          <div className="info-card">
            <label>Client ID</label>

            {isEditing ? (
              <input
                type="text"
                name="clientId"
                value={profile.clientId}
                onChange={handleChange}
              />
            ) : (
              <h3>{profile.clientId}</h3>
            )}
          </div>

          <div className="info-card">
            <label>Client Name</label>

            {isEditing ? (
              <input
                type="text"
                name="clientName"
                value={profile.clientName}
                onChange={handleChange}
              />
            ) : (
              <h3>{profile.clientName}</h3>
            )}
          </div>

          <div className="info-card">
            <label>Email</label>

            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            ) : (
              <h3>{profile.email}</h3>
            )}
          </div>

          <div className="info-card">
            <label>Mobile Number</label>

            {isEditing ? (
              <input
                type="text"
                name="mobile"
                value={profile.mobile}
                onChange={handleChange}
              />
            ) : (
              <h3>{profile.mobile}</h3>
            )}
          </div>

          <div className="info-card large-card">
            <label>Project Address</label>

            {isEditing ? (
              <textarea
                name="projectAddress"
                value={profile.projectAddress}
                onChange={handleChange}
              />
            ) : (
              <h3>{profile.projectAddress}</h3>
            )}
          </div>

          <div className="info-card large-card">
            <label>Company Name</label>

            {isEditing ? (
              <input
                type="text"
                name="companyName"
                value={profile.companyName}
                onChange={handleChange}
              />
            ) : (
              <h3>{profile.companyName}</h3>
            )}
          </div>

        </div>

        <div className="button-container">
          {!isEditing ? (
            <button
              className="edit-btn"
              onClick={handleEdit}
            >
              EDIT PROFILE
            </button>
          ) : (
            <button
              className="save-btn"
              onClick={handleSave}
            >
              SAVE CHANGES
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Profile;