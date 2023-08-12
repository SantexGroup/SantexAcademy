const { profileFormationsService } = require('../services');

/**
 */
async function getProfileFormations(req, res, next) {
  const { id } = req.params;

  try {
    const formations = await profileFormationsService.getFomations(id);

    res.status(200).send(formations);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProfileFormations,
};
