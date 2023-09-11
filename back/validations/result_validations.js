const { validationResult } = require('express-validator');

const validateResults = (req, _res, next) => {
  try {
    validationResult(req).throw();

    next();

    return;
  } catch (err) {
    next({
      extendBase: true,
      status: 401,
      message: err.array()[0].msg,
    });
  }
};

module.exports = validateResults;
