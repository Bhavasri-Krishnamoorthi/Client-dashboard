import express from "express";
import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/dashboard", dashboardRoutes);

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Client Dashboard API v2",
  });
});

export default router;