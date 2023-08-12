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

module.exports = { validateValueInModel };
