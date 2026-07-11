import bcrypt from "bcrypt";
import { registerUser, loginUser } from "../services/auth.service.js";
import generateToken from "../utils/generateToken.js";

// Register Controller
export const register = (req, res) => {
  registerUser(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    return res.status(201).json(result);
  });
};

// Login Controller
export const login = (req, res) => {
  const { email, password } = req.body;

  loginUser(email, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        client_id: user.client_id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        company: user.company,
      },
    });
  });
};