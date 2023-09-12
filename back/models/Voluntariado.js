const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Voluntariado = sequelize.define(
  'voluntariado',
  {
    idVoluntariado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Reward: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'organizacion',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'voluntariado',
    timestamps: false,
    // indexes: [
    //   {
    //     name: "PRIMARY",
    //     unique: true,
    //     using: "BTREE",
    //     fields: [{ name: "idVoluntariado" }, { name: "organizationId" }],
    //   },
    //   {
    //     name: "id_voluntariado_UNIQUE",
    //     unique: true,
    //     using: "BTREE",
    //     fields: [{ name: "idVoluntariado" }],
    //   },
    //   {
    //     name: "fk_voluntariado_organization1_idx",
    //     using: "BTREE",
    //     fields: [{ name: "organizationId" }],
    //   },
    // ],
  },
);

module.exports = Voluntariado;
