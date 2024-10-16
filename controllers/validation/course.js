const joi = require("joi");

const courseBodyValidation = (req, res, next) => {
  const bodySchema = joi.object({
    cr_name: joi.string().min(3).max(50).required(),
    cr_code: joi.string().min(2).max(10).required(),
    cr_description: joi.string().min(3).max(255).required(),
    cr_price: joi.number().required(),
    cr_duration: joi.number().required(),
    cr_category: joi.string().min(3).max(50).required(),
  });
  const validationErrors = bodySchema.validate(req.body);
  if (validationErrors.error) {
    return res.status(400).json({
      message: validationErrors.error.details[0].message,
    });
  }
  next();
};

module.exports = {
  courseBodyValidation,
};
