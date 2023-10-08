const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Organizacion = sequelize.define(
  "organizacion",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "nombre_UNIQUE",
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "email_UNIQUE",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "telefono_UNIQUE",
    },
    cuit: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "cuit_UNIQUE",
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.JSON,
    },
    coverPage: {
      type: DataTypes.JSON,
    },
    urlWebSite: {
      type: DataTypes.STRING,
    },

    category: {
      type: DataTypes.ENUM({
        values: [
          "medio ambiente y fauna",
          "asistencia social",
          "salud y discapacidad",
        ],
      }),
      allowNull: false,
    },

    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    paranoid: true,
    tableName: "organizacion",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "cuit_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [{ name: "cuit" }],
      },
    ],
  }
);

module.exports = Organizacion;
