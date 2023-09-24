const { Op } = require('sequelize');
const NotFoundException = require('../exceptions/not_found.exceptions');

/**
 * Validacion de valores en modelos
 * Recibe como parametros el modelo, el valor a validar y un mensaje opcional
 * Si el valor no existe en el modelo, lanza una NotFoundException
 */
async function validateValueInModel(model, value, msg = 'Value not found') {
  const result = await model.findByPk(value);

  if (!result) {
    throw new NotFoundException(msg);
  }
}

/**
 * Verifica si el valor de un campo es único en el modelo especificado.
 * En caso que se especifique un currentId, la validacion se hace sin considerar
 * el registro actual
 *
 * @param {Object} model - El modelo de Sequelize en el que se realizará la búsqueda.
 * @param {string} field - El nombre del campo a verificar.
 * @param {any} value - El valor a comparar.
 * @param {number|null} currentId - El ID actual del registro (opcional, puede ser null).
 * @param {string} - El mensaje de error a lanzar si el valor no es único.
 * @throws {Error} Si el valor no es único.
 */
async function isUnique(model, field, value, currentId, msg = 'The value is not unique') {
  const whereClause = { [field]: value };

  if (currentId) {
    whereClause.id = { [Op.ne]: currentId };
  }

  const result = await model.findOne({ where: whereClause });
  if (result) {
    throw new Error(msg);
  }
}

module.exports = { validateValueInModel, isUnique };
