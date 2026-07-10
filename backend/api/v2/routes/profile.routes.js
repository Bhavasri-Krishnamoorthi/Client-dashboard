import express from "express";

import {
  getProfile,
  updateProfile,
} from "../controllers/profile.controller.js";

const router = express.Router();

// Get Profile
router.get("/:clientId", getProfile);

// Update Profile
router.put("/:clientId", updateProfile);

export default router;