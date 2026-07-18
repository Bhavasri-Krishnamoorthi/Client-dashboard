// Utility functions for consistent API responses

export const sendSuccess = (res, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message: data.message || "Success",
    ...data,
  });
};

export const sendError = (res, message = "Error", statusCode = 500, errorDetails = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(errorDetails && { error: errorDetails }),
  });
};

export const sendCreated = (res, data = {}) => {
  return sendSuccess(res, data, 201);
};

export const sendBadRequest = (res, message = "Invalid request") => {
  return sendError(res, message, 400);
};

export const sendUnauthorized = (res, message = "Unauthorized") => {
  return sendError(res, message, 401);
};

export const sendForbidden = (res, message = "Forbidden") => {
  return sendError(res, message, 403);
};

export const sendNotFound = (res, message = "Not found") => {
  return sendError(res, message, 404);
};
