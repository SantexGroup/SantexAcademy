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
 * Validacion de valores unicos en modelos
 * Recibe como parametros el modelo, el campo y valor a validar y un mensaje opcional
 * Si el valor ya existe en el modelo, lanza Error
 */
async function isUnique(model, field, value, msg = 'The value is not unique') {
  const whereClause = { [field]: value };
  const result = await model.findOne({ where: whereClause });
  if (result) {
    throw new Error(msg);
  }
}
module.exports = { validateValueInModel, isUnique };
