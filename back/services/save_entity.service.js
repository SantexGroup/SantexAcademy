const CustomException = require('../exceptions/custom.exeption');

/**
 * Guarda una entidad en la base de datos utilizando el modelo proporcionado.
 *
 * @param {any} data - Los datos de la entidad que se va a guardar
 * @param {Model} entityModel - El modelo de la entidad
 * @returns {Promise<void>} Una promesa que resuelve con la entidad guardada
 * @throws {CustomException} Si se produce un error al guardar la entidad
 */
const SaveEntityService = async (data, entityModel) => {
  try {
    await entityModel.create(data);
  } catch (error) {
    throw new CustomException(
      `Error al guardar la entidad: ${error.message}`,
      400,
    );
  }
};

module.exports = SaveEntityService;
