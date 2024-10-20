const express = require("express");
const router = express.Router();

const { authBodyValidation } = require("@/controllers/validation/auth");

const {
  getAllUsers,
  getUserById,
  updateUser,
  softDeleteUser,
  deleteUser,
} = require("@/controllers/user");

// [GET] /user
router.get("/", getAllUsers);

// [GET] /user/:id
router.get("/:id", getUserById);

// [PUT] /user/:id
router.put("/:id", authBodyValidation, updateUser);

// [SOFTDELETE] /soft-delete/:id
router.delete("/soft-delete/:id", softDeleteUser);

// [DELETE] /user/:id
router.delete("/:id", deleteUser);

module.exports = router;
