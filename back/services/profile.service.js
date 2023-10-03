// Importación de modelos desde el archivo '../models'
const { Op } = require('sequelize');
const {
  User,
  Rol,
  Profile,
  Experience,
  Reference,
  Language,
  ExperienceType,
  ExperienceStatus,
  Country,
  Skill,
  Formation,
  FormationStatus,
  FormationType,
  Optional,
  Marital,
  Sex,
  ProfileExperience,
  ProfileReference,
  ProfileFormation,
  ProfileLanguage,
  ProfileSkill,
  ProfileOptional,
} = require('../models');

// Definición de una constante EXPERIENCE que contiene el modelo Experience y sus relaciones
const EXPERIENCE = {
  model: Experience,
  include: [ExperienceStatus, ExperienceType, Country],
};
// Definiciòn de una constante FORMATION que contiene el modelo Formation y sus relaciones
const FORMATION = {
  model: Formation,
  include: [FormationStatus, FormationType],
};
// Definición de una constante User que contiene el modelo User y sus relaciones.
const USERS = {
  model: User,
  include: [Rol],
};
// Definición de una constante Optional que contiene el modelo Optional y sus relaciones
const OPTIONAL = {
  model: Optional,
  include: [Marital, Sex],
};

// Función asincrónica para obtener un perfil por su ID

async function getProfileById(id) {
  // Consulta el perfil por su ID, incluyendo las relaciones definidas en User, Experience ...
  const profiles = await Profile.findByPk(id, {
    include: [USERS, EXPERIENCE, Reference, Language, FORMATION, OPTIONAL],
  });
  // En caso de no encontrar el perfil, se lanza un error
  if (!profiles) {
    throw new Error('Profile not found');
  }
  // En caso de que la respuesta sea dentro del rango 200 , retorna el perfil encontrado
  return profiles;
}

// Funcion asincrónica para obtener todos los perfiles de un Usuario

async function getProfileByUserId(id) {
  try {
    // Consulta la base de datos para obtener los perfiles correspondientes al 'user_id'
    const profiles = await Profile.findAll({
      where: {
        user_id: id,
        deletedAt: null,
        profileName: {
          [Op.not]: 'Profile Inicial',
        },
      },
      include: [USERS, EXPERIENCE, Reference, Language, Skill, FORMATION, OPTIONAL],
    });
    // si no se encontraron perfiles o el array esta vacio, se lanza un error
    if (!profiles || profiles.length === 0) {
      throw new Error(`No profiles found for the user with ID ${id}`);
    }
    // En caso de que la respuesta sea dentro del rango 200, retorna el perfil encontrado
    return profiles;
  } catch (error) {
    // Manejo de errores si ocurre algún problema con la consulta
    throw new Error(`Error al obtener los perfiles para el usuario con ID ${id}`);
  }
}

async function deleteProfile(id) {
  const profile = await Profile.findByPk(id);

  if (profile) {
    await Profile.update({
      deletedAt: new Date(),
    }, {
      where: {
        id,
      },
    });
  } else {
    throw new Error();
  }
}

async function createProfile(
  userId,
  profileName,
) {
  try {
    const newProfile = await Profile.create({
      userId,
      profileName,
    });
    return newProfile;
  } catch (error) {
    throw new Error(error);
  }
}

async function relationExperience(
  profileId,
  experienceId,
) {
  try {
    const newRelation = await ProfileExperience.create({
      profilesId: profileId,
      experiencesId: experienceId,
    });
    return newRelation;
  } catch (error) {
    throw new Error(error);
  }
}

async function relationFormation(
  profileId,
  formationId,
) {
  try {
    const newRelation = await ProfileFormation.create({
      profilesId: profileId,
      formationsId: formationId,
    });
    return newRelation;
  } catch (error) {
    throw new Error(error);
  }
}

async function relationReference(
  profileId,
  referenceId,
) {
  try {
    const newRelation = await ProfileReference.create({
      profilesId: profileId,
      referencesId: referenceId,
    });
    return newRelation;
  } catch (error) {
    throw new Error(error);
  }
}

async function relationOptional(
  profileId,
  optionalId,
) {
  try {
    const newRelation = await ProfileOptional.create({
      profilesId: profileId,
      optionalsId: optionalId,
    });
    return newRelation;
  } catch (error) {
    throw new Error(error);
  }
}

async function relationSkill(
  profileId,
  skillId,
  level,
) {
  try {
    const newRelation = await ProfileSkill.create({
      profilesId: profileId,
      skillsId: skillId,
      level,
    });
    return newRelation;
  } catch (error) {
    throw new Error(error);
  }
}

async function relationLanguage(
  profileId,
  languageId,
  level,
) {
  try {
    const newRelation = await ProfileLanguage.create({
      profilesId: profileId,
      languagesId: languageId,
      level,
    });
    return newRelation;
  } catch (error) {
    throw new Error(error);
  }
}

// Exportamos archivos para su uso en profile.controller

module.exports = {
  getProfileById,
  getProfileByUserId,
  createProfile,
  deleteProfile,
  relationExperience,
  relationFormation,
  relationReference,
  relationOptional,
  relationSkill,
  relationLanguage,
};
