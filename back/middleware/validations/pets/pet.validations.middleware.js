const { body, query } = require('express-validator');
const fields = ['id', 'age', 'name', 'birth_date', 'gender', 'user', 'breed', 'dangerous'];
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
          .isLength({ min: 2, max: 60 })
          .withMessage(
            () => 'El nombre de la mascota debe tener entre 2 y 60 caracteres.',
          ),
        body('birth_date')
          .exists()
          .withMessage(() => 'La fecha de nacimiento es obligatoria.')
          .trim()
          .isISO8601()
          .withMessage(() => 'La fecha ingresada no es válida'),
        body('gender')
          .exists()
          .withMessage(() => 'El sexo de la mascota es obligatorio.')
          .trim()
          .escape()
          .isIn(['M', 'F'])
          .withMessage(() => `El sexo de la mascota sólo acepta 'M' o 'F'`),
        body('breedId')
          .exists()
          .withMessage(() => 'La raza de la mascota es obligatoria.')
          .trim()
          .escape()
          .isInt()
          .withMessage(() => 'El id de la raza debe ser un número entero.'),
      ];
      break;
    case 'list':
      result = [
        query('page')
          .exists()
          .withMessage(() => `Se requiere el parámetro 'page'.`)
          .bail()
          .trim()
          .escape()
          .isInt({ min: 0 })
          .withMessage(() => `El parámetro 'page' debe ser un número entero a partir de 0.`),
        query('limit')
          .optional()
          .trim()
          .escape()
          .isInt({ min: 0, max: 10 })
          .withMessage(() => `El parámetro 'limit' debe ser un número entero entre 0 y 10.`)
          .bail(),
        query('sort')
          .optional()
          .trim()
          .escape()
          .isIn(fields)
          .withMessage(() => `El parámetro 'sort' sólo acepta: ${fields}`),
        query('order')
          .optional()
          .trim()
          .escape()
          .isIn(['asc', 'desc'])
          .withMessage(() => `El parámetro 'order' sólo acepta 'asc' o 'desc'`),
        query()
          .custom((item) => {
              const keys = ['page', 'limit', 'sort', 'order'];
              return Object.keys(item).every((key) => keys.includes(key));
          })
          .withMessage(() => 'Hay parámetros no permitidos en su consulta.')

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
