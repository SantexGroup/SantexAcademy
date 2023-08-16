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
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'catalogo',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
    ],
  },
);

// Se exporta el modelo SIN DESESTRUCTURAR
module.exports = Catalogo;
