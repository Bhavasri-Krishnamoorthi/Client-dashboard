import express from "express";
import { register, login, getCurrentUser, logout } from "../controllers/auth.controller.js";
import {
  validateRegister,
  validateLogin,
} from "../validators/auth.validator.js";
import { verifyToken } from "../middlesware/auth.middleware.js";

const router = express.Router();

// Register API
router.post("/register", validateRegister, register);

// Login API
router.post("/login", validateLogin, login);

// Get Current User (Protected Route)
router.get("/me", verifyToken, getCurrentUser);

// Logout API (Protected Route)
router.post("/logout", verifyToken, logout);

export default router;