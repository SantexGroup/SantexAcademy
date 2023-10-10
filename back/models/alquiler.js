'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alquiler.belongsToMany(models.Products, {
        through: 'AlquilerProducto', // Nombre de la tabla intermedia
        foreignKey: 'alquilerId',   // Nombre de la clave foránea en la tabla intermedia
      });
      Alquiler.belongsTo(models.User, {
        foreignKey: 'verificadoPor',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      Alquiler.belongsTo(models.User, {
        foreignKey: 'solicitadoPor',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',})
    }
  }
  Alquiler.init({
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    precioFinal: DataTypes.FLOAT,
    estado: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Alquiler',
  });
  return Alquiler;
};