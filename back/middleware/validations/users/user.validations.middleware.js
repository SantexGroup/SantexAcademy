const { body } = require('express-validator');

exports.validate = function (method) {
  if (method === 'login') {
    return [
      body('username').trim().escape()
        .exists()
        .withMessage(() => 'El campo es obligatorio.')
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
      body('password').trim().escape()
        .exists()
        .withMessage(() => 'El campo es obligatorio.')
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
      body().custom((item) => {
        const keys = ['username', 'recaptcha', 'password', 'cuit'];
        return Object.keys(item).every((key) => keys.includes(key));
      }).withMessage('Hay parámetros no permitidos en su consulta.'),
    ];
  }
  return [];
};
