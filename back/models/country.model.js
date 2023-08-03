const {
  Model,
} = require('sequelize');

const { COUNTRIES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
  }
  Country.init({
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: COUNTRIES_TABLE_NAME,
  });
  return Country;
};
