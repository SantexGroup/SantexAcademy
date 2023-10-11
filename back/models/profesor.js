'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profesor.init({
    img: DataTypes.STRING,
    nombreCompleto: DataTypes.STRING,
    nombreUsuario: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    genero: DataTypes.STRING,
    profesion: DataTypes.STRING,
    tipoContenido: DataTypes.STRING,
    modalidadEnseñanza: DataTypes.STRING,
    correoElectronico: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profesor',
  });
  return Profesor;
};