import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db.js";
import routes from "./api/v2/routes/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Client Dashboard Backend Running...");
});

app.use("/api/v2", routes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Not Found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});