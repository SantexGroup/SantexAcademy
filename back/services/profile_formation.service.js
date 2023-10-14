const NotFoundException = require('../exceptions/not_found.exceptions');
const {
  ProfileFormation, Formation, FormationType, FormationStatus,
} = require('../models');

/**
 * Obtener los datos completos de un PROFILE por su ID
 *
 * @param {integer} id - Identificador del PROFILE
 *
 * @returns {Profile}
 */
async function getFomations(profileId) {
  const FORMATION = {
    model: Formation,
    include: [FormationType, FormationStatus],
  };

  const profileFormation = await ProfileFormation.findAll({
    where: { profiles_id: profileId },
    include: [FORMATION],
  });

  if (!profileFormation) {
    throw new NotFoundException('Formations not found');
  }

  return profileFormation;
}

module.exports = { getFomations };
