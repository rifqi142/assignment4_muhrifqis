// get all, get by id, create, update, soft delete, permanent delete
require("module-alias/register");

const { schedules } = require("@/models");

const getAllSchedules = async (req, res) => {
  try {
    const allSchedules = await schedules.findAll();
    if (!allSchedules) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Schedules not found",
      });
    }

    return res.status(200).json({
      status: "success get all schedules",
      code: 200,
      data: allSchedules,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get all schedules",
      code: 500,
      message: error.message,
    });
  }
};

const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await schedules.findOne({
      where: {
        sc_id: id,
      },
    });
    if (!schedule) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Schedules not found",
      });
    }
    return res.status(200).json({
      status: "success get schedules by id",
      code: 200,
      data: schedule,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get schedules by id",
      code: 500,
      message: error.message,
    });
  }
};

const createSchedule = async (req, res) => {
  try {
    const { sc_date, sc_start_time, sc_end_time } = req.body;

    if (!sc_date || !sc_start_time || !sc_end_time) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields are required",
      });
    }

    const newSchedule = await schedules.create({
      sc_date,
      sc_start_time,
      sc_end_time,
    });

    return res.status(201).json({
      status: "success create schedule",
      code: 201,
      data: newSchedule,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to create schedule",
      code: 500,
      message: error.message,
    });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    const { sc_date, sc_start_time, sc_end_time } = req.body;

    if (!sc_date || !sc_start_time || !sc_end_time) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields are required",
      });
    }

    const schedule = await schedules.findOne({
      where: {
        sc_id: id,
      },
    });

    if (!schedule) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Schedule not found",
      });
    }

    const previousDataSchedule = { ...schedule.dataValues };

    schedule.sc_date = sc_date;
    schedule.sc_start_time = sc_start_time;
    schedule.sc_end_time = sc_end_time;

    await schedule.save();

    return res.status(200).json({
      status: "success update schedule",
      code: 200,
      data: {
        previousData: previousDataSchedule,
        currentData: schedule,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to update schedule",
      code: 500,
      message: error.message,
    });
  }
};

// soft delete
const softDeleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await schedules.findOne({
      where: {
        sc_id: id,
      },
    });

    if (!schedule) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Schedule not found",
      });
    }

    // soft delete
    schedule.sc_is_active = false;
    await schedule.save();

    return res.status(200).json({
      status: "success to soft delete schedule",
      code: 200,
      message: "Schedule deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to soft delete schedule",
      code: 500,
      message: error.message,
    });
  }
};

// permanent delete
const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await schedules.findOne({
      where: {
        sc_id: id,
      },
    });

    if (!schedule) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Schedule not found",
      });
    }

    await schedule.destroy();

    return res.status(200).json({
      status: "success to delete schedule",
      code: 200,
      message: "Schedule deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to delete schedule",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  softDeleteSchedule,
  deleteSchedule,
};
