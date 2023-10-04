const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Testimonios = sequelize.define(
  "testimonios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuario",
        key: "id",
      },
    },
    testimonial: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [50, 500],
      },
    },
  },
  {
    sequelize,
    tableName: "testimonios",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "userId" }],
      },
      {
        name: "idx_usuario_testimonio",
        using: "BTREE",
        fields: [{ name: "userId" }, { name: "createdAt" }],
      },
    ],
  }
);

module.exports = Testimonios;
