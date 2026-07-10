import express from "express";
import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
<<<<<<< HEAD
import profileRoutes from "./profile.routes.js";
=======
import paymentRoutes from "./payment.routes.js";
>>>>>>> f7a593d378b93e585d8a704c1782c14164777844

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/dashboard", dashboardRoutes);
<<<<<<< HEAD
router.use("/profile", profileRoutes);
=======
router.use("/payments", paymentRoutes);
>>>>>>> f7a593d378b93e585d8a704c1782c14164777844

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Client Dashboard API v2",
  });
});

export default router;