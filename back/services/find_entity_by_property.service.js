const findEntityByProperty = async (property, model) => {
  const { dataValues } = await model.findOne({ where: { property } });

  return dataValues;
};

module.exports = findEntityByProperty;
