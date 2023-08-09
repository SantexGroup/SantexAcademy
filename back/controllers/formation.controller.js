const { formationService } = require('../services');

/**
 */
async function getFormations(req, res, next) {
  try {
    const formations = await formationService.fetchFormations(req.query);

    res.status(200).send(formations);
  } catch (error) {
    next(error);
  }
}

/**
 */
async function getFormationById(req, res, next) {
  const { id } = req.params;

  try {
    const formations = await formationService.fetchFormationById(id);

    res.status(200).send(formations);
  } catch (error) {
    next(error);
  }
}

/**
 */
async function createFormation(req, res, next) {
  const {
    statusId,
    typesId,
    title,
    institute,
    description,
    startDate,
    endDate,
  } = req.body;

  try {
    const formations = await formationService.saveFormationData(
      statusId,
      typesId,
      title,
      institute,
      description,
      startDate,
      endDate,
    );

    res.status(200).send(formations);
  } catch (error) {
    next(error);
  }
}

/**
 */
async function updateFormation(req, res, next) {
  const { id } = req.params;
  const {
    statusId,
    typesId,
    title,
    institute,
    description,
    startDate,
    endDate,
  } = req.body;

  try {
    const formations = await formationService.updateFormationDataById(
      id,
      statusId,
      typesId,
      title,
      institute,
      description,
      startDate,
      endDate,
    );

    res.status(200).send(formations);
  } catch (error) {
    next(error);
  }
}

/**
 */
async function deleteFormation(req, res, next) {
  const { id } = req.params;

  try {
    await formationService.deleteFormationDataById(id);

    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getFormations,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
};
