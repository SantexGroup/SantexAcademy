const { body } = require('express-validator');

const courseCreateValidations = [
  body('name')
    .notEmpty()
    .withMessage('Este campo es obligatorio'),
  body('description')
    .notEmpty()
    .withMessage('Este campo es obligatorio'),
  body('image')
    .notEmpty()
    .withMessage('Este campo es obligario'),
];

module.exports = courseCreateValidations;
