const { body } = require('express-validator');

// eslint-disable-next-line func-names
exports.validate = function (method) {
  let result = [];
  switch (method) {
    case 'register':
      result = [
        body('name')
          .exists()
          .withMessage(() => 'El nombre de la mascota es obligatorio.')
          .trim()
          .escape()
          .isLength({ max: 255 })
          .withMessage(() => 'El nombre de la mascota no debe tener más de 255 caracteres.'),
        body('birth_date')
          .exists()
          .withMessage(() => 'La fecha de nacimiento es obligatoria.')
          .trim()
          .isDate()
          .withMessage(() => 'La fecha ingresada no es válida'),
        body('breed')
          .exists()
          .withMessage(() => 'La raza de la mascota es obligatoria.')
          .trim()
          .escape()
          .isLength({ max: 255 })
          .withMessage(() => 'La raza de la mascota no debe tener más de 255 caracteres.'),
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
