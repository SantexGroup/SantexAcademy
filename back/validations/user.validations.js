const { body } = require('express-validator');
const { Rol, User } = require('../models');
const {
  validateValueInModel,
  isUnique,
} = require('../helpers/validations.helper');

/**
 * Valida que el rol exista
 */
async function validateRole(value) {
  return validateValueInModel(Rol, value);
}

async function isNickUnique(value, { req }) {
  const { id } = req.params;

  if (!value) {
    return false;
  }

  return isUnique(User, 'nick', value, id);
}

async function isEmailUnique(value, { req }) {
  const { id } = req.params;

  if (!value) {
    return false;
  }

  return isUnique(User, 'email', value, id);
}

/**
 * Validaciones de express-validator para validar
 * los datos de entrada de una formacion
 */
const create = [
  body('rolesId')
    .notEmpty()
    .withMessage('The "rolesId" field is required.')
    .custom(validateRole),
  body('nick')
    .notEmpty()
    .withMessage('The "nick" field is required.')
    .custom(isNickUnique),
  body('password').notEmpty().withMessage('The "password" field is required.'),
  body('name').notEmpty().withMessage('The "name" field is required.'),
  body('lastName').notEmpty().withMessage('The "lastName" field is required.'),
  body('email')
    .notEmpty()
    .withMessage('The "email" field is required.')
    .custom(isEmailUnique),
];

const update = [
  body('rolesId').optional().custom(validateRole),
  body('nick').optional().custom(isNickUnique),
  //* se quita a modo de prueba
  // body('password').optional(),
  body('name').optional(),
  body('lastName').optional(),
  body('email').optional().custom(isEmailUnique),
];

const login = [
  body('nick').notEmpty(),
  body('password')
    .notEmpty()
    .withMessage('The "password" field is required.')
    .isString()
    .withMessage('The "password" must be string.'),
];

module.exports = { create, update, login };
