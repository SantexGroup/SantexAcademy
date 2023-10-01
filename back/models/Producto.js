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
    image: {
      type: DataTypes.JSON,
    },
    costInHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      }
    },

    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    }
  },
  {
    sequelize,
    tableName: "producto",
    timestamps: false,
  }
);

// Se exporta el modelo SIN DESESTRUCTURAR
module.exports = Producto;
