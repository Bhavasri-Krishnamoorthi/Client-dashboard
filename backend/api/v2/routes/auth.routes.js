import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import {
  validateRegister,
  validateLogin,
} from "../validators/auth.validator.js";

const router = express.Router();

// Register API
router.post("/register", validateRegister, register);

// Login API
router.post("/login", validateLogin, login);

export default router;