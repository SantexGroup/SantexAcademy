const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Especialidad extends Model {
  }
  Especialidad.init({
    nombre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Especialidad',
  });
  return Especialidad;
};
