import {
  getPayments,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
  getProjectTimeline,
} from "../models/payment.model.js";

// Get all payments
export const fetchPayments = (callback) => {
  getPayments(callback);
};

// Get single payment
export const fetchPaymentById = (id, callback) => {
  getPaymentById(id, callback);
};

// Create payment
export const createPayment = (paymentData, callback) => {
  addPayment(paymentData, callback);
};

// Update payment
export const editPayment = (id, paymentData, callback) => {
  updatePayment(id, paymentData, callback);
};

// Delete payment
export const removePayment = (id, callback) => {
  deletePayment(id, callback);
};

// Get Project Timeline
export const fetchProjectTimeline = (projectId, callback) => {
  getProjectTimeline(projectId, callback);
};
