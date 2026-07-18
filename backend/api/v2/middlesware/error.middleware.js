// Global Error Handler Middleware
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  console.error("Error:", err);

  return res.status(status).json({
    success: false,
    message: message,
    error: process.env.NODE_ENV === "development" ? err : undefined,
  });
};

// 404 Handler
export const notFoundHandler = (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
};

// Async Error Wrapper
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
