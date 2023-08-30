const { addRelation, updateRelation } = require('../helpers/relations.helper');
const { Profile, Language, ProfileLanguage } = require('../models');

async function getLanguage(id) {
  const language = await ProfileLanguage.findOne({
    attributes: ['level'],
    where: {
      languages_id: id,
    },
    include: [{
      model: Language,
      attributes: ['id', 'language'],
    }],
  });
  if (language) {
    return language;
  }
  throw new Error(' Lenguaje no encontrado');
}

// service que trae todos los idiomas de un usuario
async function getAllLanguage(id) {
  const language = await Profile.findAll({
    attributes: [],
    where: {
      user_id: id,
    },
    include: [{
      model: ProfileLanguage,
      attributes: ['level'],
      include: [{
        model: Language,
        attributes: ['language'],
      }],
    }],
    distinct: true,
    group: ['language'],
  });
  if (language) {
    return language;
  }
  throw new Error(`No existe el lenguaje para el usuario ${id}`);
}

// servicio que Agrega un lenguaje
async function addLanguage(
  language,
  level,
  profileId,
) {
  const createLanguage = await Language.create({
    language,
  });

  await addRelation(ProfileLanguage, createLanguage.id, profileId, level);

  const newLanguage = await getLanguage(createLanguage.id);

  return newLanguage;
}

async function updateLanguage(id, level, profileId) {
  // Obtener el idioma existente
  const language = await getLanguage(id);

  // Obtener el ID de la relación entre idioma y perfil
  const relationId = language.ProfileLanguages.id;

  // Actualizar la relación entre idioma y perfil
  await updateRelation(ProfileLanguage, relationId, id, profileId, level);

  // Obtener el idioma actualizado
  const upgradedLanguage = await getLanguage(id);

  return upgradedLanguage;
}

module.exports = {
  getLanguage,
  getAllLanguage,
  addLanguage,
  updateLanguage,
};
