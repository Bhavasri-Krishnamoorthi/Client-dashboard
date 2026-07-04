import { getDashboardData } from "../models/dashboard.model.js";

export const fetchDashboardData = (callback) => {
  getDashboardData(callback);
};