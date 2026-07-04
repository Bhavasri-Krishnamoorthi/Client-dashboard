import express from "express";
import { getDashboard } from "../controllers/dashboard.controller.js";

const router = express.Router();

// Get Dashboard Data
router.get("/", getDashboard);

export default router;