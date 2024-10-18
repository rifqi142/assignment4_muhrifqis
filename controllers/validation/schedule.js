const joi = require("joi");

const scheduleBodyValidation = (req, res, next) => {
  const bodySchema = joi.object({
    sc_date: joi.date().required(),
    sc_start_time: joi.string().min(3).max(50).required(),
    sc_end_time: joi.string().min(3).max(50).required(),
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
  scheduleBodyValidation,
};
