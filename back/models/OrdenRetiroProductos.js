const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const OrdenRetiroProductos = sequelize.define(
  "ordenRetiroProductos",
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
  },
  {
    sequelize,
    tableName: "ordenRetiroProductos",
    timestamps: false,
  }
);

module.exports = OrdenRetiroProductos;
