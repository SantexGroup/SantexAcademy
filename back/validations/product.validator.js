const { check } = require('express-validator');
const validateResults = require('./result_validations');
const {
  PRODUCT_CATEGORIES,
} = require('../utils/consts/product_category.const');

const productValidator = [
  check('name')
    .exists()
    .notEmpty()
    .withMessage('El nombre del producto no puede estar vacío'),
  check('category')
    .isIn(PRODUCT_CATEGORIES)
    .withMessage(
      `La categoría debe ser uno de los siguientes: ${PRODUCT_CATEGORIES.join(
        ', ',
      )}`,
    ),
  check('price')
    .exists()
    .isNumeric()
    .withMessage('El precio debe ser un número'),
  check('quantity')
    .exists()
    .isNumeric()
    .isInt({ min: 1 })
    .withMessage('La cantidad debe ser un número positivo'),
  check('details')
    .exists()
    .isString()
    .withMessage('El detalle debe ser un texto'),

  check('userId').exists().withMessage('El id del usuario es inválido'),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = productValidator;
