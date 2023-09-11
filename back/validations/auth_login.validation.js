const { check } = require('express-validator');
const validateResults = require('./result_validations');

const authLoginValidator = [
  check('email')
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('El correo electrónico no es válido'),
  check('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula'),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = authLoginValidator;
