require("dotenv").config();
require("module-alias/register");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

const courseRoutes = require("@routes/course");
const authRoutes = require("@routes/auth");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());

app.use("/course", courseRoutes);

// localhost:3000/course/auth/register -> untuk register
// localhost:3000/course/auth/login -> untuk login
app.use("/auth", authRoutes);

app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Course API",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
