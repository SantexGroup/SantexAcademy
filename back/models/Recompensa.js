const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Recompensa = sequelize.define(
  'recompensa',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    costHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

// Se exporta el modelo SIN DESESTRUCTURAR
module.exports = Recompensa;
