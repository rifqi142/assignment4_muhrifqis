// list:
// get course, get course by id, create course,
// update course, delete course, soft delete course

require("module-alias/register");

const { courses } = require("@/models");

// get all courses
const getAllCourses = async (req, res) => {
  try {
    const allCourses = await courses.findAll();
    if (!allCourses) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course not found",
      });
    }

    return res.status(200).json({
      status: "success get all courses",
      code: 200,
      data: allCourses,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get all courses",
      code: 500,
      message: error.message,
    });
  }
};

// get course by id
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courses.findOne({
      where: {
        cr_id: id,
      },
    });
    if (!course) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course not found",
      });
    }
    return res.status(200).json({
      status: "success get course by id",
      code: 200,
      data: course,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to get course by id",
      code: 500,
      message: error.message,
    });
  }
};

// create course
const createCourse = async (req, res) => {
  try {
    const {
      cr_name,
      cr_code,
      cr_description,
      cr_price,
      cr_duration,
      cr_category,
    } = req.body;

    if (
      !cr_name ||
      !cr_code ||
      !cr_description ||
      !cr_price ||
      !cr_duration ||
      !cr_category
    ) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "Please fill all fields",
      });
    }

    const newCourse = await courses.create({
      cr_name,
      cr_code,
      cr_description,
      cr_price,
      cr_duration,
      cr_category,
      cr_created_at: new Date(),
      cr_updated_at: new Date(),
    });

    return res.status(201).json({
      status: "success to create course",
      code: 201,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed to create course",
      code: 500,
      message: error.message,
    });
  }
};

// update course by id
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      cr_name,
      cr_code,
      cr_description,
      cr_price,
      cr_duration,
      cr_category,
    } = req.body;

    if (
      !cr_name ||
      !cr_code ||
      !cr_description ||
      !cr_price ||
      !cr_duration ||
      !cr_category
    ) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "Please fill all fields",
      });
    }

    const course = await courses.findOne({
      where: {
        cr_id: id,
      },
    });

    if (!course) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course not found",
      });
    }

    // get previous data
    const previousDataCourse = { ...course.dataValues };

    // update course
    course.cr_name = cr_name;
    course.cr_code = cr_code;
    course.cr_description = cr_description;
    course.cr_price = cr_price;
    course.cr_duration = cr_duration;
    course.cr_category = cr_category;

    await course.save();

    return res.status(200).json({
      status: "success to update course",
      code: 200,
      message: "Course updated successfully",
      data: {
        previous_data: previousDataCourse,
        updated_data: course,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to update course",
      code: 500,
      message: error.message,
    });
  }
};

// soft delete course by id
const softDeleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courses.findOne({
      where: {
        cr_id: id,
      },
    });

    if (!course) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course not found",
      });
    }

    // soft delete
    course.cr_is_active = false;
    await course.save();

    return res.status(200).json({
      status: "success to soft delete course",
      code: 200,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to soft delete course",
      code: 500,
      message: error.message,
    });
  }
};

// permanent delete course by id
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courses.findOne({
      where: {
        cr_id: id,
      },
    });

    if (!course) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Course not found",
      });
    }

    await course.destroy();

    return res.status(200).json({
      status: "success to delete course",
      code: 200,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to delete course",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  softDeleteCourse,
  deleteCourse,
};
