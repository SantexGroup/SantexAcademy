const {
  Model,
} = require('sequelize');

const { COUNTRIES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
  }
  Country.init({
    country: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    tableName: COUNTRIES_TABLE_NAME,
  });
  return Country;
};
