'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Razas extends Model {
    static associate(models) {
     Razas.hasMany(models.dogs, { foreignKey: 'idRaza' });      
    }
  };
  Razas.init({
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    raza: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    peligroso: { 
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Razas',
  });

  return Razas;  
};