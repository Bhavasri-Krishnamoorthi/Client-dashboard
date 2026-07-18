import bcrypt from "bcrypt";
import { registerUser, loginUser } from "../services/auth.service.js";
import { getUserById } from "../models/auth.model.js";
import generateToken from "../utils/generateToken.js";

// Register Controller
export const register = (req, res) => {
  registerUser(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message || "Registration failed",
      });
    }

    return res.status(201).json(result);
  });
};

// Login Controller
export const login = (req, res) => {
  const { email, password } = req.body;

  loginUser(email, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Login failed",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        client_id: user.client_id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        company: user.company,
      },
    });
  });
};

// Get Current User Controller
export const getCurrentUser = (req, res) => {
  const userId = req.user.id;

  getUserById(userId, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch user data",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = result[0];

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user: {
        id: user.id,
        client_id: user.client_id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        company: user.company,
        created_at: user.created_at,
      },
    });
  });
};

// Logout Controller
export const logout = (req, res) => {
  // Logout is handled on the client side by removing the token
  // This endpoint can be used to invalidate tokens on server-side if needed
  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};