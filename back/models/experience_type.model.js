const {
  Model,
} = require('sequelize');

const { EXPERIENCES_TYPES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ExpirenceType extends Model {
  }
  ExpirenceType.init({
    type: DataTypes.STRING, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: EXPERIENCES_TYPES_TABLE_NAME,
  });
  return ExpirenceType;
};
