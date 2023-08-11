const { Profile, Language, ProfileLanguage } = require('../models');

async function addLanguageToProfile(languagesId, profilesId, level) {
  try {
    const profile = await Profile.findByPk(profilesId);
    const language = await Language.findByPk(languagesId);

    if (!profile || !language) {
      throw new Error('Profile or Language not found');
    }

    const newRelation = await ProfileLanguage.create({
      languagesId,
      profilesId,
      level,
    });

    return newRelation;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getLanguagesByUser(id) {
  try {
    const userLanguages = await Profile.findOne({
      where: { user_id: id },
      include: [
        {
          model: Language,
          through: {
            model: ProfileLanguage,
            attributes: ['level'],
          },
        },
      ],
    });

    if (userLanguages) {
      return userLanguages.Languages;
    }

    return [];
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { addLanguageToProfile, getLanguagesByUser };
