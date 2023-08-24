const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Carrito = sequelize.define(
  'carrito',
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
      unique: 'name_UNIQUE',
    },
  },
  {
    paranoid: true,
  },
);

module.exports = Carrito;
