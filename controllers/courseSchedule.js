require("module-alias/register");

const { courses_schedules } = require("@/models");

const createCourseSchedule = async (req, res) => {
  try {
    const { cs_cr_id, cs_sc_id } = req.body;

    if (!cs_cr_id || !cs_sc_id) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields must be filled",
      });
    }

    const newCourseSchedule = await courses_schedules.create({
      cs_cr_id,
      cs_sc_id,
    });

    return res.status(201).json({
      status: "success create course schedule",
      code: 201,
      data: newCourseSchedule,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to create course schedule",
      code: 500,
      message: error.message,
    });
  }
};

const getAllUserSchedules = async (req, res) => {
  try {
    const allCourseSchedules = await courses_schedules.findAll({
      include: [
        {
          association: "course",
          attributes: ["cr_id", "cr_name", "cr_code", "cr_trainer"],
        },
        {
          association: "schedule",
          attributes: ["sc_date", "sc_start_time", "sc_end_time"],
        },
      ],
    });

    if (!allCourseSchedules) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course schedule not found",
      });
    }

    return res.status(200).json({
      status: "success get all course schedules",
      code: 200,
      data: allCourseSchedules,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get all course schedules",
      code: 500,
      message: error.message,
    });
  }
};

const getUserScheduleById = async (req, res) => {
  try {
    const { id } = req.params;

    const courseSchedule = await courses_schedules.findOne({
      where: {
        cs_id: id,
      },
      include: [
        {
          association: "course",
          attributes: ["cr_id", "cr_name", "cr_code", "cr_trainer"],
        },
        {
          association: "schedule",
          attributes: ["sc_date", "sc_start_time", "sc_end_time"],
        },
      ],
    });

    if (!courseSchedule) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course schedule not found",
      });
    }

    return res.status(200).json({
      status: "success get course schedule",
      code: 200,
      data: courseSchedule,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get course schedule",
      code: 500,
      message: error.message,
    });
  }
};

const updateUserSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { cs_cr_id, cs_sc_id } = req.body;

    if (!cs_cr_id || !cs_sc_id) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields must be filled",
      });
    }

    const courseSchedule = await courses_schedules.findOne({
      where: {
        cs_id: id,
      },
    });

    if (!courseSchedule) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course schedule not found",
      });
    }

    const previousDataUserSchedule = { ...courseSchedule.dataValues };

    courseSchedule.cs_cr_id = cs_cr_id;
    courseSchedule.cs_sc_id = cs_sc_id;

    await courseSchedule.save();

    return res.status(200).json({
      status: "success update course schedule",
      code: 200,
      data: {
        previous: previousDataUserSchedule,
        current: courseSchedule,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to update course schedule",
      code: 500,
      message: error.message,
    });
  }
};

const deleteUserSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    const courseSchedule = await courses_schedules.findOne({
      where: {
        cs_id: id,
      },
    });

    if (!courseSchedule) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course schedule not found",
      });
    }

    await courseSchedule.destroy();

    return res.status(200).json({
      status: "success delete course schedule",
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to delete course schedule",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  createCourseSchedule,
  getAllUserSchedules,
  getUserScheduleById,
  updateUserSchedule,
  deleteUserSchedule,
};
