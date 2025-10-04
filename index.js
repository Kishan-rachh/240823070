const express = require("express");
const Sequelize = require("sequelize");
const studentRoute = require("./routes/studentRoute");
const app = express();
const PORT = 81;

// Middleware to parse JSON
app.use(express.json());

// Route for student-related endpoints
app.use("/student", studentRoute);

// Start the server
app.listen(PORT, () => {
  console.log("Server is running at localhost:" + PORT);
});
