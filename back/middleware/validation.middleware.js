const ExpressValidator = require('express-validator');

exports.checkValidationResult = function checkValidationResult(req, res, next) {
  const result = ExpressValidator.validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: result.array() });
};
