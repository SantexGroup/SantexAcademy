const {
  Model,
} = require('sequelize');

const { MARITALS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Marital extends Model {
  }
  Marital.init({
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: MARITALS_TABLE_NAME,
  });
  return Marital;
};
