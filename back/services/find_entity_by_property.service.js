const CustomException = require('../exceptions/custom.exeption');

/**
 * Busca una entidad en la base de datos utilizando el modelo proporcionado.
 *
 * @param {{ key: value }} property - Los datos de la entidad que se va a buscar. Ejemplo { id: 1 }
 * @param {Model} model - El modelo de la entidad
 * @returns {Promise<Model>} Una promesa que resuelve con la entidad encontrada
 */
const findEntityByProperty = async (property, model) => {
  try {
    const { dataValues } = await model.findOne({ where: { property } });

    return dataValues;
  } catch (error) {
    throw new CustomException(
      `Error al buscar ${property} - ${error.message}`,
      404,
    );
  }
};

module.exports = findEntityByProperty;
