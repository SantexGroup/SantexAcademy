const { Profile, Language, ProfileLanguage } = require('../models');

async function addLanguageToProfile(languageId, profileId, level) {
  try {
    const profile = await Profile.findByPk(profileId);
    const language = await Language.findByPk(languageId);

    if (!profile || !language) {
      throw new Error('Profile or Language not found');
    }

    const newRelation = await ProfileLanguage.create({
      languages_id: languageId,
      profiles_id: profileId,
      level,
    });

    return newRelation;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getLanguagesByUser(id) {
  // Buscamos todas los Experinces registrados
  const languages = await Language.findAll({
    // Incluimos el modelo Profile, sin sus atributos
    include: [
      {
        model: Profile,
        attributes: [],
        where: {
          // buscamos donde el Profgiles.user_id sea igual al id indicadno por params
          user_id: id,
        },
      },
      // Incluimos los modelos de las tablas hijas

    ],
    // Que no se repitan
    distinct: true,
  });
  if (languages) {
    // Retornamos el Experinece obtenido
    return languages;
  }
  // Manejador de errores
  throw new Error();
}

module.exports = { addLanguageToProfile, getLanguagesByUser };
