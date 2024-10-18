const express = require("express");
const router = express.Router();

const {
  createUserCourse,
  getAllUserCourses,
  getUserCourseById,
  updateUserCourse,
  deleteUserCourse,
} = require("@/controllers/userCourse");

// [POST] /user-course
router.post("/", createUserCourse);

// [GET] /user-course
router.get("/", getAllUserCourses);

// [GET] /user-course/:id
router.get("/:id", getUserCourseById);

// [PUT] /user-course/:id
router.put("/:id", updateUserCourse);

// [DELETE] /user-course/:id
router.delete("/:id", deleteUserCourse);

module.exports = router;
