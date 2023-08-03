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
    timestamps: false,
    tableName: MARITALS_TABLE_NAME,
  });
  return Marital;
};
