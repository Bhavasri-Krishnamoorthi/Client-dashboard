import {
  fetchPayments,
  fetchPaymentById,
  createPayment as createPaymentService,
  editPayment,
  removePayment,
  fetchProjectTimeline,
} from "../services/payment.service.js";

// GET ALL PAYMENTS
export const getAllPayments = (req, res) => {
  fetchPayments((err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  });
};

// GET PAYMENT BY ID
export const getPayment = (req, res) => {
  const { id } = req.params;

  fetchPaymentById(id, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Payment Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: data[0],
    });
  });
};

// CREATE PAYMENT
export const createPayment = (req, res) => {
  createPaymentService(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Payment Created Successfully",
      paymentId: result.insertId,
    });
  });
};

// UPDATE PAYMENT
export const updatePayment = (req, res) => {
  const { id } = req.params;

  editPayment(id, req.body, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment Updated Successfully",
    });
  });
};

// DELETE PAYMENT
export const deletePayment = (req, res) => {
  const { id } = req.params;

  removePayment(id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment Deleted Successfully",
    });
  });
};

// GET PROJECT TIMELINE
export const getProjectTimeline = (req, res) => {
  const { projectId } = req.params;

  fetchProjectTimeline(projectId, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  });
};