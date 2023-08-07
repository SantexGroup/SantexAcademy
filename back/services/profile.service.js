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

async function getProfileById(id) {
  const profiles = await Profile.findByPk(id, {
    include: [USERS, EXPERIENCE, Reference, Language, Skill, FORMATION, OPTIONAL],
  });

  if (!profiles) {
    throw new Error('Profile not found');
  }

  return profiles;
}

async function getProfileByUserId(id) {
  try {
    // Consulta la base de datos para obtener los perfiles correspondientes al 'user_id'
    const profiles = await Profile.findAll({
      where: { user_id: id },
      include: [USERS, EXPERIENCE, Reference, Language, Skill, FORMATION, OPTIONAL],
    });

    if (!profiles || profiles.length === 0) {
      throw new Error(`No profiles found for the user with ID ${id}`);
    }
    return profiles;
  } catch (error) {
    // Manejo de errores si ocurre algún problema con la consulta
    throw new Error(`Error al obtener los perfiles para el usuario con ID ${id}`);
  }
}

module.exports = { getProfileById, getProfileByUserId };
