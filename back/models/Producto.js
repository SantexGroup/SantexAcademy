const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Producto = sequelize.define(
  'producto',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    costoEnHoras: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

// Se exporta el modelo SIN DESESTRUCTURAR
module.exports = Producto;
