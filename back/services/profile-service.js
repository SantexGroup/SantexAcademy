const {
  User,
  Rol,
  Profile,
  Experience,
  Reference,
  Language,
  ExpirenceType,
  ExperienceStatus,
  Country,
  Skill,
  Formation,
  FormationStatus,
  FormationType,
  Optional,
  Marital,
  Sex,
} = require('../models');

/**
 * Obtener los datos completos de un PROFILE por su ID
 *
 * @param {integer} id - Identificador del PROFILE
 *
 * @returns {Profile}
 */
async function getProfileById(id) {
  const EXPERIENCE = {
    model: Experience,
    include: [ExperienceStatus, ExpirenceType, Country],
  };

  const FORMATION = {
    model: Formation,
    include: [FormationStatus, FormationType],
  };

  const USERS = {
    model: User,
    include: [Rol],
  };

  const OPTIONAL = {
    model: Optional,
    include: [Marital, Sex],
  };

  const profiles = await Profile.findByPk(id, {
    include: [EXPERIENCE, Reference, Language, Skill, USERS, FORMATION, OPTIONAL],
  });

  if (!profiles) {
    throw new Error('Profile not found');
  }

  return profiles;
}

module.exports = { getProfileById };
