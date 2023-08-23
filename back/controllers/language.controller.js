const languageService = require('../services/languaje.service');

async function languageGet(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    const language = await languageService.getLanguage(id);
    res.status(200).send(language);
  } catch (error) {
    next(error);
  }
}

async function languageGetAll(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    const language = await languageService.getAllLanguage(id);
    res.status(200).send(language);
  } catch (error) {
    next(error);
  }
}

async function languageAdd(
  req,
  res,
  next,
) {
  const {
    language,
    level,
    profileId,
  } = req.body;

  try {
    const newLanguage = await languageService.addLanguage(
      language,
      level,
      profileId,
    );

    res.status(200).send(newLanguage);
  } catch (error) {
    next(error);
  }
}

async function languageUpdate(
  req,
  res,
  next,
) {
  const { id } = req.params;
  const {
    level,
    profileId,
  } = req.body;
  try {
    const updateLanguage = await languageService.updateLanguage(
      id,
      level,
      profileId,
    );
    res.status(201).send(updateLanguage);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  languageGet,
  languageGetAll,
  languageAdd,
  languageUpdate,
};
