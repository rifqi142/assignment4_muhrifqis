const express = require("express");
const router = express.Router();

const {
  authBodyValidation,
  authCheckDuplicate,
} = require("@/controllers/validation/auth");
const { authRegister, authLogin, authLogout } = require("@/controllers/auth");

router.post("/register", authBodyValidation, authCheckDuplicate, authRegister);
router.post("/login", authLogin);
router.post("/logout", authLogout);

module.exports = router;
