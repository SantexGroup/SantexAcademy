const NotFoundException = require('../exceptions/not_found.exceptions');
const ApiFeatures = require('../helpers/api_features');
const { Formation } = require('../models');
const { checkFormationTypeById } = require('./formation_type.service');
const { checkFormationStatusById } = require('./formation_status.service');

/**
 * Encontrar una formacion por su id.
 * Si no existe, lanza una excepcion NotFoundException.
 */
async function findAndCheckFormationdByPk(formationId) {
  const formation = await Formation.findByPk(formationId);

  if (!formation) {
    throw new NotFoundException('Formations not found');
  }

  return formation;
}

/**
 * Pasar una estring en camel case case a snake
 */
function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

/**
 * reemplazar la propiedad camel case de un objeto por una
 * propiedad en snake case
 */
function propertyToSnakeCase(model, property) {
  const snakeCaseProperty = camelToSnakeCase(property);
  model[snakeCaseProperty] = model[property];
  delete model[property];
}

/**
 * Verificar que existan los tipos y estados de las formacion.
 * Si la propiedad typesId o statusId estan en camel case, trasnforman a snake case
 */
async function transformAndCheckFKData(formationData) {
  if (formationData.typesId) {
    // verificar si existe el type id
    await checkFormationTypeById(formationData.typesId);
    // pasar a snake case la propiedad typesId
    propertyToSnakeCase(formationData, 'typesId');
  }

  if (formationData.statusId) {
    // verificar si existe el status id
    await checkFormationStatusById(formationData.statusId);
    // pasar a snake case la propiedad statusId
    propertyToSnakeCase(formationData, 'statusId');
  }

  return formationData;
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
async function fetchFormations(queryOptions) {
  let formations;

  // en caso de especificar opciones, se pueden aplicar
  // filtros, limites de campos, ordenamiento y paginación
  // De lo contrario se devuelven todas las formaciones
  if (queryOptions) {
    const query = Formation;
    const features = new ApiFeatures(query, queryOptions);
    formations = features.filter().limitFields().sort().paginate()
      .exec();
  } else {
    formations = await Formation.findAll();
  }

  if (!formations) {
    throw new NotFoundException('Formations not found');
  }

  return formations;
}

/**
 * Obener una formacion por su id.
 */
async function fetchFormationById(id) {
  return findAndCheckFormationdByPk(id);
}

/**
 * Guardar los datos de una nueva formacion.
 */
async function saveNewFormationData(formationData) {
  const data = await transformAndCheckFKData(formationData);
  return Formation.create(data);
}

/**
 * Actualizar los datos de una formacion.
 */
async function saveFormationData(id, formationData) {
  const formation = await findAndCheckFormationdByPk(id);

  const data = await transformAndCheckFKData(formationData);
  return formation.update(data);
}

/**
 * Eliminar una formacion
 */
async function deleteFormationData(id) {
  const formation = await findAndCheckFormationdByPk(id);

  return formation.destroy();
}

module.exports = {
  fetchFormations,
  fetchFormationById,
  saveNewFormationData,
  saveFormationData,
  deleteFormationData,
};
