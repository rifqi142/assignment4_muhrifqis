require("module-alias/register");

const { users_courses } = require("@/models");

const createUserCourse = async (req, res) => {
  try {
    const { uc_us_id, uc_cr_id } = req.body;

    if (!uc_us_id || !uc_cr_id) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields must be filled",
      });
    }

    const newUserCourse = await users_courses.create({
      uc_us_id,
      uc_cr_id,
    });
    return res.status(201).json({
      status: "success create user course",
      code: 201,
      data: newUserCourse,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to create user course",
      code: 500,
      message: error.message,
    });
  }
};

const getAllUserCourses = async (req, res) => {
  try {
    const allUserCourses = await users_courses.findAll();

    if (!allUserCourses) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User course not found",
      });
    }

    return res.status(200).json({
      status: "success get all user courses",
      code: 200,
      data: allUserCourses,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get all user courses",
      code: 500,
      message: error.message,
    });
  }
};

const getUserCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    const userCourse = await users_courses.findOne({
      where: {
        uc_id: id,
      },
    });

    if (!userCourse) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User course not found",
      });
    }

    return res.status(200).json({
      status: "success get user course by id",
      code: 200,
      data: userCourse,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get user course by id",
      code: 500,
      message: error.message,
    });
  }
};

const updateUserCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { uc_us_id, uc_cr_id } = req.body;

    if (!uc_us_id || !uc_cr_id) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields must be filled",
      });
    }

    const userCourse = await users_courses.findOne({
      where: {
        uc_id: id,
      },
    });

    if (!userCourse) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User course not found",
      });
    }

    const previousDataUserCourse = { ...userCourse.dataValues };

    userCourse.uc_us_id = uc_us_id;
    userCourse.uc_cr_id = uc_cr_id;

    await userCourse.save();

    return res.status(200).json({
      status: "success update user course",
      code: 200,
      data: {
        previous: previousDataUserCourse,
        current: userCourse,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to update user course",
      code: 500,
      message: error.message,
    });
  }
};

const deleteUserCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const userCourse = await users_courses.findOne({
      where: {
        uc_id: id,
      },
    });

    if (!userCourse) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User course not found",
      });
    }

    await userCourse.destroy();

    return res.status(200).json({
      status: "success delete user course",
      code: 200,
      data: userCourse,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to delete user course",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  createUserCourse,
  getAllUserCourses,
  getUserCourseById,
  updateUserCourse,
  deleteUserCourse,
};
