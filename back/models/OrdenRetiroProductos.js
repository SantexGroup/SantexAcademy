const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const OrdenRetiroProductos = sequelize.define(
  "ordenRetiroProductos",
  {

    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "producto",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min:1,
    },
    emisionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "ordenRetiroProductos",
    timestamps: false,
  }
);

module.exports = OrdenRetiroProductos;
