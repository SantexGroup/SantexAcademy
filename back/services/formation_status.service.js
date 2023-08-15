const NotFoundException = require('../exceptions/not_found.exceptions');
const { FormationStatus } = require('../models');

/**
 * Vefificar si un estado de formacion existe.
 * Si no existe, lanza una excepcion NotFoundException.
 */
async function checkFormationStatusById(id) {
  const type = await FormationStatus.findByPk(id);
  if (!type) {
    throw new NotFoundException('Formation status not found');
  }
}

module.exports = {
  checkFormationStatusById,
};
