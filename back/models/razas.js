'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Razas extends Model {
    static associate(models) {
    }
  };
  Razas.init({
    raza: DataTypes.STRING,
    peligroso: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Razas',
  });
  return Razas;
};