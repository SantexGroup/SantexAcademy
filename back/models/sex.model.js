const {
  Model,
} = require('sequelize');

const { SEXS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Sex extends Model {
  }
  Sex.init({
    gender: DataTypes.STRING,
  }, {
    sequelize,
    tableName: SEXS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Sex;
};
