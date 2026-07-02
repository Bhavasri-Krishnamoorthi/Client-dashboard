import db from "../../../config/db.js";

// Create User
export const createUser = (userData, callback) => {
  const sql = `
    INSERT INTO users
    (client_id, full_name, email, phone, company, password)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      userData.client_id,
      userData.full_name,
      userData.email,
      userData.phone,
      userData.company,
      userData.password,
    ],
    callback
  );
};

// Get User by Email
export const getUserByEmail = (email, callback) => {
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    callback
  );
};

// Get User by ID
export const getUserById = (id, callback) => {
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [id],
    callback
  );
};