const express = require("express");
const router = express.Router();

const {
  authBodyValidation,
  authCheckDuplicate,
} = require("@/controllers/validation/auth");
const { authRegister, authLogin } = require("@/controllers/auth");

router.post("/register", authBodyValidation, authCheckDuplicate, authRegister);
router.post("/login", authLogin);

router.get("/get-users", async (req, res) => {
  try {
    const users = await user.findAll({
      attributes: [
        "us_id",
        "us_username",
        "us_fullname",
        "us_email",
        "us_phone_number",
        "us_is_active",
      ],
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      code: "500",
      message: error.message,
    });
  }
});

module.exports = router;
