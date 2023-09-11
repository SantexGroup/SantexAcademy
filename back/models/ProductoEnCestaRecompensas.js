const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const ProductoEnCestaRecompensas = sequelize.define(
  "productoEnCestaRecompensas",
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "producto",
        key: "id",
      },
    },
    basketRewardsId: {
      /*Cesta recompensa */
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "cestaRecompensas",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "productoEnCestaRecompensas",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "productoId" }, { name: "basketRewardsId" }],
      },
      {
        name: "fk_producto_has_cestaRecompensas_cestaRecompensas1_idx",
        using: "BTREE",
        fields: [{ name: "basketRewardsId" }],
      },
      {
        name: "fk_producto_has_cestaRecompensas_producto1_idx",
        using: "BTREE",
        fields: [{ name: "productoId" }],
      },
    ],
  }
);

module.exports = ProductoEnCestaRecompensas;
