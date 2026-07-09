import db from "../../../config/db.js";

// Get all payments
export const getPayments = (callback) => {
  const sql = `
    SELECT
      id,
      transaction_id,
      payment_name,
      customer_name,
      amount,
      payment_method,
      status,
      created_at
    FROM payments
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

// Get payment by ID
export const getPaymentById = (id, callback) => {
  db.query(
    "SELECT * FROM payments WHERE id=?",
    [id],
    (err, result) => {
      if (err) return callback(err);

      callback(null, result);
    }
  );
};

// Create payment
export const addPayment = (payment, callback) => {
  const sql = `
    INSERT INTO payments
    (
      transaction_id,
      payment_name,
      customer_name,
      amount,
      payment_method,
      status
    )
    VALUES(?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      payment.transaction_id,
      payment.payment_name,
      payment.customer_name,
      payment.amount,
      payment.payment_method,
      payment.status,
    ],
    callback
  );
};

// Update payment
export const updatePayment = (id, payment, callback) => {
  const sql = `
    UPDATE payments
    SET
      transaction_id=?,
      payment_name=?,
      customer_name=?,
      amount=?,
      payment_method=?,
      status=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      payment.transaction_id,
      payment.payment_name,
      payment.customer_name,
      payment.amount,
      payment.payment_method,
      payment.status,
      id,
    ],
    callback
  );
};

// Delete payment
export const deletePayment = (id, callback) => {
  db.query(
    "DELETE FROM payments WHERE id=?",
    [id],
    callback
  );
};
// Update Timeline Status
export const updateTimelineStatus = (
  projectId,
  title,
  callback
) => {
  const sql = `
    UPDATE project_timeline
    SET status='Paid'
    WHERE project_id=? AND title=?
  `;

  db.query(sql, [projectId, title], callback);
};
// Get Project Timeline
export const getProjectTimeline = (projectId, callback) => {
  const sql = `
    SELECT
      id,
      project_id,
      title,
      amount,
      due_date,
      status
    FROM project_timeline
    WHERE project_id = ?
    ORDER BY due_date ASC
  `;

  db.query(sql, [projectId], (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};