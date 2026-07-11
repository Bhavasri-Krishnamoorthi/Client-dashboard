import express from "express";

import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import profileRoutes from "./profile.routes.js";
import paymentRoutes from "./payment.routes.js";

const router = express.Router();

// Authentication Routes
router.use("/auth", authRoutes);

// Dashboard Routes
router.use("/dashboard", dashboardRoutes);

// Profile Routes
router.use("/profile", profileRoutes);

// Payment Routes
router.use("/payments", paymentRoutes);

// Test Route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Client Dashboard API V2",
  });
});

export default router;