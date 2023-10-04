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
async function getAllLanguage(userId) {
  const userLanguage = await Profile.findAll({
    attributes: [],
    where: {
      user_id: userId,
    },
    include: [{
      model: ProfileLanguage,
      attributes: ['level'],
      where: {
        deletedAt: null,
      },
      include: [{
        model: Language,
      }],
    }],
  });

  const languageList = [];
  const idLanguage = [];

  userLanguage.forEach((element) => {
    for (let i = 0; i < element.ProfileLanguages.length; i += 1) {
      const languageItem = {
        id: element.ProfileLanguages[i].Language.id,
        language: element.ProfileLanguages[i].Language.language,
        level: element.ProfileLanguages[i].level,
      };

      const { id } = element.ProfileLanguages[i].Language;

      if (!idLanguage.includes(id)) {
        idLanguage.push(id);
        languageList.push(languageItem);
      }
    }
  });

  return languageList;
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
