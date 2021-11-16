const { body } = require('express-validator');

exports.validate = function (method) {
  let result = [];
  switch (method) {
    case 'login':
      result = [
        body('username').trim().escape()
          .exists()
          .withMessage(() => 'El username es obligatorio.')
          .isLength({ min: 5, max: 60 })
          .withMessage(() => 'El username debe tener entre 5 y 60 caracteres.'),
        body('password').trim().escape()
          .exists()
          .withMessage(() => 'El password es obligatorio.')
          .isLength({ min: 5, max: 60 })
          .withMessage(() => 'El password debe tener entre 5 y 60 caracteres.'),
        body().custom((item) => {
          const keys = ['username', 'recaptcha', 'password', 'cuit'];
          return Object.keys(item).every((key) => keys.includes(key));
        }).withMessage('Hay parámetros no permitidos en su consulta.'),
      ];
      break;
    case 'register':
      result = [
        body('username').trim().escape()
          .exists()
          .withMessage(() => 'El username es obligatorio.')
          .isLength({ min: 5, max: 60 })
          .withMessage(() => 'El username debe tener entre 5 y 60 caracteres.'),
        body('password').trim().escape()
          .exists()
          .withMessage(() => 'El password es obligatorio.')
          .isLength({ min: 5, max: 60 })
          .withMessage(() => 'El password debe tener entre 5 y 60 caracteres.')
          .matches(/^(?=.*[a-z])(?=.*[A-Z]).+$/)
          .withMessage('El password debe contener al menos una letra mayúscula y una mínuscula')
          .matches(/^(?=.*\d).+$/)
          .withMessage('El password debe contener al menos un dígito numérico')
          .matches(/^(?=.*[.,:;_!#$%&()=?¡¿\-\@\/]).+$/)
          .withMessage('El password debe contener al menos un símbolo'),
        body('email')
          .exists()
          .withMessage(() => 'El email es obligatorio.')
          .trim()
          .escape()
          .isEmail()
          .withMessage('El email debe tener un formato valido'),
        body('cuil')
          .exists()
          .withMessage(() => 'El cuil es obligatorio.'),
        body().custom((item) => {
          const keys = ['username', 'recaptcha', 'password', 'cuit',
            'phone_number', 'email', 'name', 'lastname', 'address', 'cuil', ''];
          return Object.keys(item).every((key) => keys.includes(key));
        }).withMessage('Hay parámetros no permitidos en su consulta.'),
      ];
      break;
    case 'edit':
      // TODO: agregar validaciones para los demás campos
      break;
    default:
      break;
  }
  return result;
};
