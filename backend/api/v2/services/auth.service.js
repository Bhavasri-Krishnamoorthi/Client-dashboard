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
      if (err) return callback(err);

      if (result.length > 0) {
        return callback(null, {
          success: false,
          message: "Email already exists",
        });
      }

      // Hash Password
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      userData.password = hashedPassword;

      // Save User
      createUser(userData, (err, result) => {
        if (err) return callback(err);

        callback(null, {
          success: true,
          message: "User Registered Successfully",
        });
      });
    });
  } catch (error) {
    callback(error);
  }
};

// Login User
export const loginUser = (email, callback) => {
  getUserByEmail(email, callback);
};