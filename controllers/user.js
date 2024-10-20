// get all users, get user by id, update, delete, soft delete user
require("module-alias/register");

const {
  user,
  users_courses,
  courses,
  courses_schedules,
  schedules,
} = require("@/models");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.findAll({
      where: {
        us_is_active: true,
      },
      attributes: [
        "us_id",
        "us_username",
        "us_fullname",
        "us_email",
        "us_phone_number",
        "us_is_active",
      ],
      include: [
        {
          model: users_courses,
          as: "userCourses",
          attributes: ["uc_id"],
          include: [
            {
              model: courses,
              as: "course",
              attributes: ["cr_id", "cr_name", "cr_code", "cr_trainer"],
              include: [
                {
                  model: courses_schedules,
                  as: "courseSchedules",
                  attributes: ["cs_id"],
                  include: [
                    {
                      model: schedules,
                      as: "schedule",
                      attributes: ["sc_date", "sc_start_time", "sc_end_time"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    if (!allUsers) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: "success get all users",
      code: 200,
      data: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get all users",
      code: 500,
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await user.findOne({
      where: {
        us_id: id,
      },
      attributes: [
        "us_id",
        "us_username",
        "us_fullname",
        "us_email",
        "us_phone_number",
        "us_is_active",
      ],
      include: [
        {
          model: users_courses,
          as: "userCourses",
          attributes: ["uc_id"],
          include: [
            {
              model: courses,
              as: "course",
              attributes: ["cr_id", "cr_name", "cr_code", "cr_trainer"],
              include: [
                {
                  model: courses_schedules,
                  as: "courseSchedules",
                  attributes: ["cs_id"],
                  include: [
                    {
                      model: schedules,
                      as: "schedule",
                      attributes: ["sc_date", "sc_start_time", "sc_end_time"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    if (!findUser) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: "success get user by id",
      code: 200,
      data: findUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to get user by id",
      code: 500,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { us_username, us_fullname, us_email, us_phone_number, us_password } =
      req.body;

    if (
      !us_username ||
      !us_fullname ||
      !us_email ||
      !us_phone_number ||
      !us_password
    ) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields are required",
      });
    }

    const updateUser = await user.findOne({
      where: {
        us_id: id,
      },
    });

    if (!updateUser) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    // get previous data user
    const previousDataUser = { ...updateUser.dataValues };

    // update user
    updateUser.us_username = us_username;
    updateUser.us_fullname = us_fullname;
    updateUser.us_email = us_email;
    updateUser.us_phone_number = us_phone_number;
    updateUser.us_password = us_password;

    await updateUser.save();

    return res.status(200).json({
      status: "success to update user",
      code: 200,
      message: "User updated successfully",
      data: {
        previous_data: previousDataUser,
        updated_data: updateUser,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to update user",
      code: 500,
      message: error.message,
    });
  }
};

// soft delete user by id
const softDeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await user.findOne({
      where: {
        us_id: id,
      },
    });

    if (!deleteUser) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    // soft delete user
    deleteUser.us_is_active = false;

    await deleteUser.save();

    return res.status(200).json({
      status: "success to soft delete user",
      code: 200,
      message: "User soft deleted successfully",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to soft delete user",
      code: 500,
      message: error.message,
    });
  }
};

// permanent delete user by id
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await user.findOne({
      where: {
        us_id: id,
      },
    });

    if (!deleteUser) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    await deleteUser.destroy();

    return res.status(200).json({
      status: "success to delete user",
      code: 200,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to delete user",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  softDeleteUser,
  deleteUser,
};
