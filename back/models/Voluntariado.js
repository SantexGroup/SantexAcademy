const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Voluntariado = sequelize.define(
  "voluntariado",
  {
    idVolunteering: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    modeOfwork: {
      type: DataTypes.ENUM({
        values: ["hibrido", "presencial", "remoto"],
      }),
      allowNull: false,
    },
    workTime: {
      type: DataTypes.ENUM({
        values: ["tiempo completo", "tiempo parcial", "temporada"],
      }),
      allowNull: false,
    },
    vacancies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "organizacion",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "voluntariado",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "idVolunteering" }],
      },
      {
        name: "fk_voluntariado_organization1_idx",
        using: "BTREE",
        fields: [{ name: "organizationId" }],
      },
    ],
  }
);

module.exports = Voluntariado;
