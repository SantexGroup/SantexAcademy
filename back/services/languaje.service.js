const {
  Profile,
  Language,
  ProfileLanguage,
} = require('../models');

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
    const thisLanguage = {
      id: language.Language.id,
      level: language.level,
      language: language.Language.language,
    };
    return thisLanguage;
  }
  throw new Error(' Lenguaje no encontrado');
}

// service que trae todos los idiomas de un usuario
async function getAllLanguage(id) {
  const UserLanguage = await Profile.findAll({
    attributes: [],
    where: {
      user_id: id,
    },
    include: [{
      model: ProfileLanguage,
      attributes: ['level'],
      where: {
        deletedAt: null,
      },
      include: [{
        model: Language,
        attributes: ['id', 'language'],
      }],
    }],
    distinct: true,
    group: ['language'],
  });
  if (UserLanguage) {
    const languageList = UserLanguage.reduce(
      (AllLanguages, language) => AllLanguages.concat(language.ProfileLanguages), [],
    );

    const allLanguage = languageList.map((language) => ({
      id: language.Language.id,
      level: language.level,
      language: language.Language.language,
    }));

    return allLanguage;
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

  await ProfileLanguage.create({
    languagesId: createLanguage.id,
    profilesId: profileId,
    level,
  });

  const newLanguage = await getLanguage(createLanguage.id);

  return newLanguage;
}

async function updateLanguage(id, level, language) {
  // Obtener el idioma existente
  await Language.update({
    language,
  }, {
    where: {
      id,
    },
  });

  /*  // Obtener el ID de la relación entre idioma y perfil
   const relationId = language.ProfileLanguages.id; */

  // Actualizar la relación entre idioma y perfil
  await ProfileLanguage.update({
    level,
  }, {
    where: {
      languagesId: id,
    },
  });

  // Obtener el idioma actualizado
  const upgradedLanguage = await getLanguage(id);

  return upgradedLanguage;
}

async function deleteLanguage(id) {
  const languageDelete = await Language.findByPk(id);

  if (languageDelete) {
    await ProfileLanguage.update({
      deletedAt: new Date(),
    }, {
      where: {
        languagesId: id,
      },
    });
  } else {
    throw Error();
  }
}

module.exports = {
  getLanguage,
  getAllLanguage,
  addLanguage,
  updateLanguage,
  deleteLanguage,
};
