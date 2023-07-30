const {
  Model,
} = require('sequelize');

const { EXPERIENCES_TYPES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ExpirenceType extends Model {
  }
  ExpirenceType.init({
    type: DataTypes.STRING,
  }, {
    sequelize,
    tableName: EXPERIENCES_TYPES_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return ExpirenceType;
};
