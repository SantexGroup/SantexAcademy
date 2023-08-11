const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Catalogo = sequelize.define(
  'catalogo',
  {
    id: {
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
    sequelize,
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

module.exports = { Catalogo };
