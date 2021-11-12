'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dogs extends Model {
    static associate(models) {
      dogs.belongsTo(models.user, { foreignKey: 'id_User', targetKey: 'id' });
    }
  };
  dogs.init({
    nombreDog: DataTypes.STRING,
    raza: DataTypes.STRING,
    sexo: DataTypes.TINYINT,
    fechaNacimiento: DataTypes.DATE,
    id_User: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'dogs',
  });
  return dogs;
};