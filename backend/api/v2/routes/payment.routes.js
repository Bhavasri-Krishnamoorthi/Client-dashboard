import express from "express";

import {
  getAllPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
  getProjectTimeline,
} from "../controllers/payment.controller.js";

const router = express.Router();

// GET all payments
router.get("/", getAllPayments);

router.get("/timeline/:projectId", getProjectTimeline);

// GET payment by ID
router.get("/:id", getPayment);

// CREATE payment
router.post("/", createPayment);

// UPDATE payment
router.put("/:id", updatePayment);

// DELETE payment
router.delete("/:id", deletePayment);

export default router;