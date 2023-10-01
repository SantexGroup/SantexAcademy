'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Persona.init({
    idusuario: DataTypes.INTEGER,
    idtipodedocumento: DataTypes.INTEGER,
    numerodocumento: DataTypes.STRING,
    habilitado: DataTypes.BOOLEAN,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};