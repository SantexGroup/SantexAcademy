const {
  Model,
} = require('sequelize');

const { SEXS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Sex extends Model {
  }
  Sex.init({
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: SEXS_TABLE_NAME,
  });
  return Sex;
};
