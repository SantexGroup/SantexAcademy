const CustomException = require('../exceptions/custom.exeption');

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
