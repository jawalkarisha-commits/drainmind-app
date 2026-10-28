
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Report = require("./Report");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({ message: "DrainMind API is running!" });
});

// Check server and database
app.get("/api/health", (req, res) => {
  res.json({
    project: "DrainMind",
    server: "online",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "not connected"
  });
});

// Get all reports
app.get("/api/reports", async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch reports" });
  }
});

// Add a new report
app.post("/api/reports", async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json({
      message: "Report saved successfully!",
      report
    });
  } catch (error) {
    res.status(400).json({
      message: "Could not save report",
      error: error.message
    });
  }
});

// Start server after connecting to MongoDB
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`DrainMind backend running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

startServer();
