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

module.exports = { addLanguageToProfile };
