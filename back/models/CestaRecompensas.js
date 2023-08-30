const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const CestaRecompensas = sequelize.define(
  'cestaRecompensas',
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
      unique: 'name_UNIQUE',
    },
  }, {
    sequelize,
    tableName: 'cestaRecompensas',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ],
      },
      {
        name: 'name_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'name' },
        ],
      },
    ],
  },
);

module.exports = CestaRecompensas;
