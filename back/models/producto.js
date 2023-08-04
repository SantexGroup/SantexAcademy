// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('producto', {
    id_producto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    costo_en_horas: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    catalogo_Productos_id_catalogo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'catalogo_Productos',
        key: 'id_catalogo',
      },
    },
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_producto' },
          { name: 'catalogo_Productos_id_catalogo' },
        ],
      },
      {
        name: 'fk_producto_catalogoProductos1_idx',
        using: 'BTREE',
        fields: [
          { name: 'catalogo_Productos_id_catalogo' },
        ],
      },
    ],
  });
};
