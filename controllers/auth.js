require("module-alias/register");
const bcrypt = require("bcrypt");
const { generateToken } = require("@/controllers/token");
const { Op } = require("sequelize");
