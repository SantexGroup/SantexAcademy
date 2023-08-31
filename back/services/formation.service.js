const NotFoundException = require('../exceptions/not_found.exceptions');
const {
  Profile,
  Formation,
  FormationType,
  FormationStatus,
} = require('../models');

const TYPES_STATUS = [FormationType, FormationStatus];

/**
 * Encontrar una formacion por su id.
 * Si no existe, lanza una excepcion NotFoundException.
 */
async function findAndCheckFormationdById(id) {
  const formation = await Formation.findByPk(id, {
    include: TYPES_STATUS,
  });

  if (!formation) {
    throw new NotFoundException('Formations not found');
  }

  return formation;
}

/**
 * Develve una lista de formaciones,
 *
 * Permite aplicar filtros, limitar campos,
 * ordenar y paginar los resultados.
 *
 * En caso de no encontrar formaciones lanza una
 * excepción NotFoundException.
 */
async function fetchFormations() {
  const formations = await Formation.findAll({ include: TYPES_STATUS });

  if (!formations) {
    throw new NotFoundException('Formations not found');
  }

  return formations;
}

/**
 * Obener una formacion por su id.
 */
async function fetchFormationById(id) {
  const formation = await Formation.findByPk(id, { include: TYPES_STATUS });

  if (!formation) {
    throw new NotFoundException(`Formation with id ${id} not found`);
  }

  return formation;
}

/**
 * Guardar los datos de una nueva formacion.
 */
async function saveNewFormationData(data) {
  return Formation.create(data);
}

/**
 * Actualizar los datos de una formacion.
 */
async function saveFormationData(id, data) {
  const formation = await findAndCheckFormationdById(id);
  return formation.update(data);
}

/**
 * Eliminar una formacion
 */
async function deleteFormationData(id) {
  const formation = await findAndCheckFormationdById(id);

  return formation.destroy();
}

/**
 * Obener una lista de FORMACIONES por usuario.
 */
async function fetchFormationssByUserId(userId) {
  const PROFILE = [
    {
      model: Profile,
      attributes: [],
      where: {
        user_id: userId,
      },
    },
  ];

  const formations = await Formation.findAll({
    include: [...PROFILE, ...TYPES_STATUS],
    distinct: true,
  });

  if (!formations) {
    throw new NotFoundException(`Formations with user_id ${userId} not found`);
  }

  return formations;
}

async function getFormationType() {
  const type = await FormationType.findAll();
  return type;
}

async function getFormationStatus() {
  const status = await FormationStatus.findAll();
  return status;
}

module.exports = {
  fetchFormations,
  fetchFormationById,
  saveNewFormationData,
  saveFormationData,
  deleteFormationData,
  fetchFormationssByUserId,
  getFormationStatus,
  getFormationType,
};
