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
    catalogueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "catalogo",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "producto",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }, { name: "catalogoId" }],
      },
      {
        name: "fk_producto_catalogo1_idx",
        using: "BTREE",
        fields: [{ name: "catalogoId" }],
      },
    ],
  }
);

// Se exporta el modelo SIN DESESTRUCTURAR
module.exports = Producto;
