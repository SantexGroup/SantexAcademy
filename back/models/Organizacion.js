const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Organizacion = sequelize.define(
  'organizacion',
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
      unique: 'nombre_UNIQUE',
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'email_UNIQUE',
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: 'telefono_UNIQUE',
    },
    cuit: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: 'cuit_UNIQUE',
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

module.exports = Organizacion;
