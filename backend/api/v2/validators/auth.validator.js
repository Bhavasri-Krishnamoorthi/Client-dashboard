// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation - at least 6 characters
const passwordRegex = /^.{6,}$/;

export const validateRegister = (req, res, next) => {
  const { full_name, email, password, phone, company } = req.body || {};

  // Check required fields
  if (!full_name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Full Name, Email and Password are required",
    });
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  // Validate password strength (minimum 6 characters)
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long",
    });
  }

  // Validate full name (at least 2 characters)
  if (full_name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Full name must be at least 2 characters long",
    });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  next();
};