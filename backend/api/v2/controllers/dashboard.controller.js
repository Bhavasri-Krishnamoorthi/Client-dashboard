import { fetchDashboardData } from "../services/dashboard.service.js";

export const getDashboard = (req, res) => {
  fetchDashboardData((err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data,
    });
  });
};