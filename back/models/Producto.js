const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Producto = sequelize.define(
  "producto",
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
    costInHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "producto",
    timestamps: false,
  }
);

// Se exporta el modelo SIN DESESTRUCTURAR
module.exports = Producto;