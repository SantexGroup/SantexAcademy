// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('producto_has_carritoRecompensa', {
    producto_id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producto',
        key: 'id_producto',
      },
    },
    producto_catalogoProductos_id_catalogo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producto',
        key: 'catalogo_Productos_id_catalogo',
      },
    },
    carritoRecompensa_id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'carritoRecompensa',
        key: 'id_carrito',
      },
    },
  }, {
    sequelize,
    tableName: 'producto_has_carritoRecompensa',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'producto_id_producto' },
          { name: 'producto_catalogoProductos_id_catalogo' },
          { name: 'carritoRecompensa_id_carrito' },
        ],
      },
      {
        name: 'fk_productoHasCarritoRecompensa_carritoRecompensa1_idx',
        using: 'BTREE',
        fields: [
          { name: 'carritoRecompensa_id_carrito' },
        ],
      },
      {
        name: 'fk_productoHasCarritoRecompensa_producto1_idx',
        using: 'BTREE',
        fields: [
          { name: 'producto_id_producto' },
          { name: 'producto_catalogoProductos_id_catalogo' },
        ],
      },
    ],
  });
};
