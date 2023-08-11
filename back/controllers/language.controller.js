const languageService = require('../services/languaje.service');

async function addLanguageToProfile(req, res) {
  const { languageId, profileId, level } = req.body;

  try {
    const newRelation = await languageService.addLanguageToProfile(languageId,
      profileId,
      level);
    return res.status(201).json(newRelation);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
//
//
//
async function getLanguagesByUser(req, res, next) {
  try {
    const { id } = req.params;
    const languages = await languageService.getLanguagesByUser(id);
    res.json(languages);
  } catch (error) {
    next(error);
  }
}

module.exports = { addLanguageToProfile, getLanguagesByUser };
