const { body } = require('express-validator');

const userCreateValidations = [
  body('nombre')
    .notEmpty()
    .withMessage('Por favor, ingrese su nombre'),
  body('apellido')
    .notEmpty()
    .withMessage('Por favor, ingrese su apellido'),
  body('email')
    .isEmail()
    .withMessage('Por favor, Ingrese una dirección de correo electronico válida'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
];

module.exports = userCreateValidations;
