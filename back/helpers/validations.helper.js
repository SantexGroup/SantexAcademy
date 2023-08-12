const NotFoundException = require('../exceptions/not_found.exceptions');

/**
 *  Validacion de valores en modelos
 */
async function validateValueInModel(model, value, msg = 'Value not found') {
  const result = await model.findByPk(value);

  if (!result) {
    throw new NotFoundException(msg);
  }
}

module.exports = { validateValueInModel };
