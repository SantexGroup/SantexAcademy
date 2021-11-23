const { body, query } = require('express-validator');

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
          .withMessage(
            () => 'El nombre de la mascota no debe tener más de 255 caracteres.',
          ),
        body('birth_date')
          .exists()
          .withMessage(() => 'La fecha de nacimiento es obligatoria.')
          .trim()
          .isISO8601()
          .withMessage(() => 'La fecha ingresada no es válida'),
        body('breedId')
          .exists()
          .withMessage(() => 'La raza de la mascota es obligatoria.')
          .trim()
          .escape()
          .isInt()
          .withMessage(() => 'El id debe ser un numero entero.'),
      ];
      break;
    case 'list':
      result = [
        query('page')
          .exists()
          .withMessage(() => 'Se requiere un parametro.')
          .isNumeric()
          .withMessage(() => 'El parametro debe ser un numero.'),
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
