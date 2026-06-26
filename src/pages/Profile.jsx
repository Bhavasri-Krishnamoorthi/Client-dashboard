import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Profile.css";
import MainLayout from "../layouts/MainLayout";
import {
  getProfile,
  saveProfile,
} from "../services/profileService";

function Profile() {

  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    clientId: "",
    clientName: "",
    email: "",
    mobile: "",
    projectAddress: "",
    companyName: "",
  });

  useEffect(() => {
    const storedData = getProfile();

    if (storedData) {
      setProfile({
        clientId: storedData.clientId || "",
        clientName: storedData.clientName || "",
        email: storedData.email || "",
        mobile: storedData.mobile || "",
        projectAddress: storedData.address || "",
        companyName: storedData.company || "",
      });
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
    const updatedData = {
      clientId: profile.clientId,
      clientName: profile.clientName,
      email: profile.email,
      mobile: profile.mobile,
      company: profile.companyName,
      address: profile.projectAddress,
    };

    saveProfile(updatedData);

    setIsEditing(false);
  };

  return (
    <MainLayout>
      <div className="profile-page">
        <div className="profile-container">

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </button>

          <h1 className="profile-title">PROFILE</h1>

          <div className="profile-header">
            <div className="profile-avatar">
              {(profile.clientName || "C")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <h2 className="profile-name">
                {profile.clientName || "Client"}
              </h2>
            </div>
          </div>

          <div className="profile-grid">

            <div className="info-card">
              <label>Client ID</label>
              <h3>{profile.clientId}</h3>
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
    </MainLayout>
  );
}

export default Profile;