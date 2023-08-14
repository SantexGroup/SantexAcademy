const { body } = require('express-validator');
const { FormationStatus, FormationType } = require('../models');
const { validateValueInModel } = require('../helpers/validations.helper');

/**
 * Valida que el valor exista en FORMATIONS_STATUS
 */
async function validateFormationStatus(value) {
  return validateValueInModel(FormationStatus, value);
}

/**
 * Valida que el valor exista en FORMATIONS_TYPES
 */
async function validateFormationType(value) {
  return validateValueInModel(FormationType, value);
}

/**
 * Validaciones de express-validator para validar
 * los datos de entrada de una formacion
 */
const create = [
  body('statusId')
    .notEmpty()
    .withMessage('The "statusId" field is required.')
    .custom(validateFormationStatus),
  body('typesId')
    .notEmpty()
    .withMessage('The "statusId" field is required.')
    .custom(validateFormationType),
  body('title').notEmpty().withMessage('The "title" field is required.'),
];

const update = [
  body('title').optional().isLength({ min: 1, max: 45 }),
  body('statusId')
    .optional()
    .custom(validateFormationStatus),
  body('typesId')
    .optional()
    .custom(validateFormationType),
];

module.exports = { create, update };
