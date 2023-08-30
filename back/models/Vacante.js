const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Vacante = sequelize.define(
  'vacante',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    reward: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

module.exports = Vacante;
