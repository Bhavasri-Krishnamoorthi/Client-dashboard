import db from "../../../config/db.js";

export const getDashboardData = (callback) => {
  db.query("SELECT * FROM projects", (err, projects) => {
    if (err) return callback(err);
db.query("SELECT * FROM payments", (err, transactions) => {
   
      if (err) return callback(err);

      callback(null, {
        projects,
        transactions,
      });
    });
  });
};