const { check } = require('express-validator');
const validateResults = require('./result_validations');
const {
  PRODUCT_CATEGORIES,
} = require('../utils/consts/product_category.const');

const productValidator = [
  check('nombre')
    .exists()
    .notEmpty()
    .withMessage('El correo electrónico no es válido'),
  check('categoria')
    .isIn(PRODUCT_CATEGORIES)
    .withMessage(
      `La categoría debe ser uno de los siguientes: ${PRODUCT_CATEGORIES.join(
        ', ',
      )}`,
    ),
  check('precio')
    .exists()
    .isNumeric()
    .withMessage('El precio debe ser un número'),
  check('cantidad')
    .exists()
    .isNumeric()
    .isInt({ min: 1 })
    .withMessage('La cantidad debe ser un número positivo'),
  check('detalles')
    .exists()
    .isString()
    .withMessage('El detalle debe ser un texto'),
  check('foto')
    .exists()
    .isBase64()
    .withMessage('La foto debe estar en formato base64'),
  check('usuarioId')
    .exists()
    .isUUID()
    .withMessage('El id del usuario es inválido'),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = productValidator;
