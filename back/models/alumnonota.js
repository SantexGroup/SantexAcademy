'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlumnoNota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AlumnoNota.init({
    idusuario: DataTypes.INTEGER,
    idcurso: DataTypes.INTEGER,
    fechaevidencia: DataTypes.DATE,
    nota: DataTypes.INTEGER,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AlumnoNota',
  });
  return AlumnoNota;
};