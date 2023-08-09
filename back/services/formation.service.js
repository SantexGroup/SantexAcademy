const NotFoundException = require('../exceptions/not_found.exceptions');
const ApiFeatures = require('../helpers/api_features');
const { Formation } = require('../models');

// eslint-disable-next-line no-underscore-dangle
async function _finFormationdByPk(formationId) {
  const formation = await Formation.findByPk(formationId);

  return formation;
}

/**
 *
 */
async function fetchFormations(queryOptions) {
  const query = Formation;
  const features = new ApiFeatures(query, queryOptions);
  const formations = features.filter().limitFields().sort().paginate()
    .exec();

  // const formations = await Formation.findAll({
  //   // limit,
  //   // offset,
  //   // where: {
  //   //   id: { $gt: 1 },
  //   // },

  //   // order: [
  //   //   ['id', 'ASC'],
  //   //   ['title', 'ASC'],
  //   // ],
  // });

  if (!formations) {
    throw new NotFoundException('Formations not found');
  }

  return formations;
}

/**
 *
 */
async function fetchFormationById(id) {
  const formation = await Formation.findByPk(id);

  if (!formation) {
    throw new NotFoundException(`Formation with id ${id} not found`);
  }

  return formation;
}

/**
 *
 */
async function saveFormationData(
  statusId,
  typesId,
  title,
  institute,
  description,
  startDate,
  endDate,
) {
  const formation = await Formation.create({
    status_id: statusId,
    types_id: typesId,
    title,
    description,
    institute,
    startDate,
    endDate,
  });

  return formation;
}

/**
 *
 */
async function updateFormationDataById(
  id,
  statusId,
  typesId,
  title,
  institute,
  description,
  startDate,
  endDate,
) {
  const formation = await _finFormationdByPk(id);

  if (statusId) {
    formation.status_id = statusId;
  }

  if (typesId) {
    formation.types_id = typesId;
  }

  if (title) {
    formation.title = title;
  }

  if (institute) {
    formation.institute = institute;
  }

  if (description) {
    formation.description = description;
  }

  if (startDate) {
    formation.startDate = startDate;
  }

  if (endDate) {
    formation.endDate = endDate;
  }

  return formation.save();
}

async function deleteFormationDataById(id) {
  const formation = await _finFormationdByPk(id);

  return formation.destroy();
}

module.exports = {
  fetchFormations,
  fetchFormationById,
  saveFormationData,
  updateFormationDataById,
  deleteFormationDataById,
};
