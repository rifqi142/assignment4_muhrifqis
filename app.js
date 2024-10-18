require("dotenv").config();
require("module-alias/register");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

const authRoutes = require("@/routes/auth");
const courseRoutes = require("@/routes/course");
const scheduleRoutes = require("@/routes/schedule");
const courseScheduleRoutes = require("@/routes/courseSchedule");
const userCoursesRoutes = require("@/routes/userCourse");
const userRoutes = require("@/routes/user");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/course", courseRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/user-course", userCoursesRoutes);
app.use("/course-schedule", courseScheduleRoutes);
app.use("/user", userRoutes);

app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Course API",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
