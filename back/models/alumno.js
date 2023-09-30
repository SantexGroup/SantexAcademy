'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alumno.init({
    idusuario: DataTypes.INTEGER,
    habilitado: DataTypes.BOOLEAN,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alumno',
  });
  return Alumno;
};