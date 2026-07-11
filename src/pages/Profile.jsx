import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import "./Profile.css";

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

  // Load Profile
  const loadProfile = async () => {
    try {
      // Get logged-in user
      const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
      );

      if (!loggedInUser) {
        alert("Please login first");
        navigate("/");
        return;
      }

      console.log("Logged In User:", loggedInUser);

      const clientId = loggedInUser.client_id;

      console.log("Client ID:", clientId);

      const response = await api.get(`/profile/${clientId}`);

      console.log(response.data);

      const data = response.data.data;

      setProfile({
        clientId: data.client_id,
        clientName: data.full_name,
        email: data.email,
        mobile: data.phone,
        projectAddress: "",
        companyName: data.company,
      });

    } catch (error) {
      console.error(error);
      alert("Failed to load profile");
    }
  };

  useEffect(() => {
    loadProfile();
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

  const handleSave = async () => {
    try {
      await api.put(`/profile/${profile.clientId}`, {
        full_name: profile.clientName,
        phone: profile.mobile,
        company: profile.companyName,
      });

      alert("Profile Updated Successfully");

      setIsEditing(false);

      loadProfile();

    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
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
              {(profile.clientName || "C").charAt(0).toUpperCase()}
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
              <h3>{profile.email}</h3>
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
              <h3>{profile.projectAddress || "Not Available"}</h3>
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