const express = require("express");
const router = express.Router();

const {
  createCourseSchedule,
  getAllUserSchedules,
  getUserScheduleById,
  updateUserSchedule,
  deleteUserSchedule,
} = require("@/controllers/courseSchedule");

// [POST] /course-schedule
router.post("/", createCourseSchedule);

// [GET] /course-schedule
router.get("/", getAllUserSchedules);

// [GET] /course-schedule/:id
router.get("/:id", getUserScheduleById);

// [PUT] /course-schedule/:id
router.put("/:id", updateUserSchedule);

// [DELETE] /course-schedule/:id
router.delete("/:id", deleteUserSchedule);

module.exports = router;
