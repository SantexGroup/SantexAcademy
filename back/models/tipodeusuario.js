'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoDeUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TipoDeUsuario.hasMany(models.User, {
        foreignKey: 'idtipodeusuario',
        sourceKey: 'id',
      });
    }
  }
  TipoDeUsuario.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoDeUsuario',
  });
  return TipoDeUsuario;
};