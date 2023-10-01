'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocentePorCurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DocentePorCurso.init({
    iddocente: DataTypes.INTEGER,
    idcurso: DataTypes.INTEGER,
    habilitado: DataTypes.BOOLEAN,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocentePorCurso',
  });
  return DocentePorCurso;
};