import bcrypt from "bcrypt";
import {
  createUser,
  getUserByEmail,
} from "../models/auth.model.js";

// Register User
export const registerUser = async (userData, callback) => {
  try {
    // Check if email already exists
    getUserByEmail(userData.email, async (err, result) => {
      if (err) {
        console.error("Database error in getUserByEmail:", err);
        return callback({
          message: "Database error: " + (err.message || "Failed to check email"),
        });
      }

      if (result.length > 0) {
        return callback(null, {
          success: false,
          message: "Email already exists",
        });
      }

      // Generate Client ID
      const newClientId = "CL" + Date.now();

      // Add client_id to userData
      userData.client_id = newClientId;

      try {
        // Hash Password with salt rounds = 10
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;

        // Save User
        createUser(userData, (err, result) => {
          if (err) {
            console.error("Database error in createUser:", err);
            return callback({
              message: "Failed to create user: " + (err.message || "Database error"),
            });
          }

          callback(null, {
            success: true,
            message: "User Registered Successfully",
            client_id: newClientId,
          });
        });
      } catch (hashError) {
        return callback({
          message: "Password hashing failed",
        });
      }
    });
  } catch (error) {
    callback({
      message: "Registration failed",
    });
  }
};

// Login User
export const loginUser = (email, callback) => {
  try {
    getUserByEmail(email, callback);
  } catch (error) {
    callback({
      message: "Login failed",
    });
  }
};