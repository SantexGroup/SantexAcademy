'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dogs.init({
    nombreDog: DataTypes.STRING,
    raza: DataTypes.STRING,
    sexo: DataTypes.TINYINT,
    fechaNacimiento: DataTypes.DATE,
    id_User: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'dogs',
  });
  return dogs;
};