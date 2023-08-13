const NotFoundException = require('../exceptions/not_found.exceptions');
const { FormationType } = require('../models');

/**
 * Verifica que exista un tipo de formacion.
 * Si no existe, lanza una excepcion NotFoundException.
 */
async function checkFormationTypeById(id) {
  const type = await FormationType.findByPk(id);
  if (!type) {
    throw new NotFoundException('Formation type not found');
  }
}

module.exports = {
  checkFormationTypeById,
};
