require("module-alias/register");
const bcrypt = require("bcrypt");
const { generateToken } = require("@/controllers/token");
const { Op } = require("sequelize");
const { user, token } = require("@/models");

const authRegister = async (req, res) => {
  try {
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
        message: "Please fill all fields",
      });
    }

    // create new user
    const newUser = await user.create({
      us_username,
      us_fullname,
      us_email,
      us_phone_number,
      us_password: bcrypt.hashSync(us_password, 10),
    });

    // generate token
    const tokenValue = generateToken(
      newUser.us_id,
      newUser.us_email,
      newUser.us_fullname,
      "REGISTER_TOKEN",
      "1h"
    );

    // save token
    await token.create({
      tkn_value: tokenValue,
      tkn_type: "REGISTER_TOKEN",
      tkn_description: `Successfully crate token user for ${newUser.us_email}`,
      tkn_us_id: newUser.us_id,
      tkn_expired_on: new Date(new Date().getTime() + 60 * 60 * 1000), //   expired token 1hour
      tkn_is_active: true,
    });

    // remove password from response
    delete newUser.dataValues.us_password;

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      code: "500",
      message: error.message,
    });
  }
};

const authLogin = async (req, res) => {
  try {
    const { input, password } = req.body;
    if (!input || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const user = await user.findOne({
      where: {
        [Op.or]: [
          { us_username: input },
          {
            us_email: input,
          },
          {
            us_phone_number: input,
          },
        ],
      },

      attribute: [
        "us_id",
        "us_username",
        "us_fullname",
        "us_email",
        "us_phone_number",
        "us_password",
        "us_is_active",
      ],
    });

    if (!user) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.us_password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        status: "failed",
        code: 401,
        message: "Password not match",
      });
    }

    // generate token for login
    const loginToken = generateToken(
      user.us_id,
      user.us_email,
      user.us_fullname,
      "LOGIN_TOKEN",
      "1h"
    );

    // save token
    await token.create({
      tkn_value: loginToken,
      tkn_type: "LOGIN_TOKEN",
      tkn_description: `Successfully create token user for ${user.us_email}`,
      tkn_us_id: user.us_id,
      tkn_expired_on: new Date(new Date().getTime() + 60 * 60 * 1000), // expired token 1hour
      tkn_is_active: true,
      tkn_created_at: new Date(),
      tkn_updated_at: new Date(),
    });

    // remove password from response
    delete user.dataValues.us_password;
    user.dataValues.token = loginToken;

    // set cookie
    const options = {
      httpOnly: false,
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    };

    return res.cookie("user", user, options).status(200).send({
      status: "success",
      code: 200,
      message: "Login successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  authRegister,
  authLogin,
};
