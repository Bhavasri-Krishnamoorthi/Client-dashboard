import express from "express";
import authRoutes from "./auth.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Client Dashboard API v2",
  });
});

export default router;