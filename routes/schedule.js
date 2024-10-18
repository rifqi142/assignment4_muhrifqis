const express = require("express");
const router = express.Router();

const { scheduleBodyValidation } = require("@/controllers/validation/schedule");

const {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  softDeleteSchedule,
  deleteSchedule,
} = require("@/controllers/schedule");

// [GET]: /schedule
router.get("/", getAllSchedules);

// [GET]: /schedule/:id
router.get("/:id", getScheduleById);

// [POST]: /schedule
router.post("/", scheduleBodyValidation, createSchedule);

// [PUT]: /schedule/:id
router.put("/:id", scheduleBodyValidation, updateSchedule);

// [SOFTDELETE]: /schedule/:id
router.delete("/soft-delete/:id", softDeleteSchedule);

// [DELETE]: /schedule/:id
router.delete("/:id", deleteSchedule);

module.exports = router;
