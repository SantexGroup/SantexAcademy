const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

// INSERT INTO volunTimeDB2.catalogo (id, name) VALUES(0, 'catalogo1');

const Catalogo = sequelize.define(
  'catalogo',
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
  },
  {
    paranoid: true,
  },
);

// Se exporta el modelo SIN DESESTRUCTURAR
module.exports = Catalogo;
