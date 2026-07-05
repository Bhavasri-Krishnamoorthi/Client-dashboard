import express from "express";
import {
  getAllPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

// GET all payments
router.get("/", getAllPayments);

// GET payment by ID
router.get("/:id", getPayment);

// CREATE payment
router.post("/", createPayment);

// UPDATE payment
router.put("/:id", updatePayment);

// DELETE payment
router.delete("/:id", deletePayment);

export default router;