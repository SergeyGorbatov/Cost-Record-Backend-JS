const { check, validationResult } = require("express-validator");

const handleValidationError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res
      .status(422)
      .json({ message: "Validation error", error: errors.array() });
  next();
};

const createNewCostValidator = [
  check("text").notEmpty().isString(),
  check("number").notEmpty().isNumeric(),
  handleValidationError,
];

const changeCostInfoValidator = [
  check("_id").notEmpty().isString(),
  check("text").notEmpty().isString(),
  check("number").notEmpty().isNumeric(),
  handleValidationError,
];

const deleteCostValidator = [
  check("_id").notEmpty().isString(),
  handleValidationError,
];

module.exports = {
  createNewCostValidator,
  changeCostInfoValidator,
  deleteCostValidator,
};
