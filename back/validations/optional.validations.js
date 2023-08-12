const { body } = require('express-validator');
const { Marital, Sex, Country } = require('../models');
const { validateValueInModel } = require('../helpers/validations.helper');

/**
 * Valida que el valor exista en MARITALS
 */
async function validateMarital(value) {
  return validateValueInModel(Marital, value);
}

/**
 * Valida que el valor exista en SEXS
 */
async function validateSex(value) {
  return validateValueInModel(Sex, value, 'Sex value not valid');
}

/**
 * Valida que el valor exista en COUNTRIES
 */
async function validateCountry(value) {
  return validateValueInModel(Country, value, 'Country id not valid');
}

/**
 * Validaciones de express-validator para validar
 * los datos de entrada de una formacion
 */
const create = [
  body('maritalId')
    .notEmpty()
    .withMessage('The "maritalId" field is required.')
    .custom(validateMarital),
  body('sexsId')
    .notEmpty()
    .withMessage('The "sexsId" field is required.')
    .custom(validateSex),
  body('countriesId')
    .notEmpty()
    .withMessage('The "countriesId" field is required.')
    .custom(validateCountry),
];

const update = [
  body('maritalId')
    .optional()
    .custom(validateMarital),
  body('sexsId')
    .optional()
    .custom(validateSex),
  body('countriesId')
    .optional()
    .custom(validateCountry),
];

module.exports = { create, update };
