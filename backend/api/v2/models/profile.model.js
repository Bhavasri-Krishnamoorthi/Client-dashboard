import db from "../../../config/db.js";

// Get Profile by Client ID
export const getProfileByClientId = (clientId) => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT
        client_id,
        full_name,
        email,
        phone,
        company
      FROM users
      WHERE client_id = ?`;

    db.query(sql, [clientId], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Update Profile
export const updateProfile = (
  clientId,
  full_name,
  phone,
  company
) => {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE users
      SET
        full_name = ?,
        phone = ?,
        company = ?
      WHERE client_id = ?`;

    db.query(
      sql,
      [full_name, phone, company, clientId],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      }
    );
  });
};