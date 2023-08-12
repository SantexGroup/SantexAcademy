const { body } = require('express-validator');

const loginValidations = [
  body('email')
    .isEmail()
    .withMessage('Por favor, Ingrese una dirección de correo electronico válida'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
];

module.exports = loginValidations;
