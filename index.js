const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const authRoutes = require("./src/Route/auth");
const uploadRoutes = require("./src//Route/upload");
const sentimentRoutes = require("./src/Route/sentiment");

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("enter your url", {})
  .then(() => {
    console.log("MongoDb Connection");
  })
  .catch((err) => {
    console.error(err);
  });

// Routes setup
app.use("/auth", authRoutes);
app.use("/upload", uploadRoutes);
app.use("/sentiment", sentimentRoutes);
// Passport middleware setup
app.use(passport.initialize());

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
