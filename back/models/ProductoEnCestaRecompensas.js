const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const ProductoEnCestaRecompensas = sequelize.define(
  'productoEnCestaRecompensas',
  {
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producto',
        key: 'id',
      },
    },
    cestaRecompensasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cestaRecompensas',
        key: 'id',
      },
    },
  }, {
    sequelize,
    tableName: 'productoEnCestaRecompensas',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'productoId' },
          { name: 'cestaRecompensasId' },
        ],
      },
      {
        name: 'fk_producto_has_cestaRecompensas_cestaRecompensas1_idx',
        using: 'BTREE',
        fields: [
          { name: 'cestaRecompensasId' },
        ],
      },
      {
        name: 'fk_producto_has_cestaRecompensas_producto1_idx',
        using: 'BTREE',
        fields: [
          { name: 'productoId' },
        ],
      },
    ],
  },
);

module.exports = ProductoEnCestaRecompensas;
