const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("🎯 Turf Booking API is working");
});

// TODO: Add your actual routes here
// Example:
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

module.exports = app;
