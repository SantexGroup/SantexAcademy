const CustomException = require('../exceptions/custom.exeption');

/**
 * Busca una entidad en la base de datos utilizando el modelo proporcionado.
 *
 * @param {{ key: value }} property - Los datos de la entidad que se va a buscar. {email:'x@x.com'}
 * @param {Model} model - El modelo de la entidad
 * @returns {Promise<Model>} Una promesa que resuelve con la entidad encontrada
 */
const findEntityByProperty = async (property, model) => {
  const result = await model.findOne({ where: property });

  if (!result) {
    throw new CustomException('Credenciales invalidas', 401);
  }

  return result.dataValues;
};

module.exports = findEntityByProperty;
