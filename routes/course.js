const express = require("express");
const router = express.Router();

const { courseBodyValidation } = require("@/controllers/validation/course");

const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  softDeleteCourse,
  deleteCourse,
} = require("@/controllers/course");

// [GET]: /course
router.get("/", getAllCourses);

// [GET]: /course/:id
router.get("/:id", getCourseById);

// [POST]: /course
router.post("/", courseBodyValidation, createCourse);

// [PUT]: /course/:id
router.put("/:id", courseBodyValidation, updateCourse);

// [SOFTDELETE]: /course/:id
router.delete("/soft-delete/:id", softDeleteCourse);

// [DELETE]: /course/:id
router.delete("/:id", deleteCourse);

module.exports = router;
