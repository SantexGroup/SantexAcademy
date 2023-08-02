const {
  Model,
} = require('sequelize');

const { MARITALS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Marital extends Model {
  }
  Marital.init({
    condition: DataTypes.STRING,
  }, {
    sequelize,
    tableName: MARITALS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Marital;
};
