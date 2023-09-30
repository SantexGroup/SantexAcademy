'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Asistencias.init({
    idalumno: DataTypes.INTEGER,
    idcurso: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    asistio: DataTypes.BOOLEAN,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asistencias',
  });
  return Asistencias;
};