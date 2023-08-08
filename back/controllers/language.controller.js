const languageProfileService = require('../services/languaje.service');

async function addLanguageToProfile(req, res) {
  const { languageId, profileId, level } = req.body;

  try {
    const newRelation = await languageProfileService.addLanguageToProfile(languageId,
      profileId,
      level);
    return res.status(201).json(newRelation);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { addLanguageToProfile };
