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
    recompensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    organizacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'organizacion',
        key: 'id',
      },
    },
  }, {
    sequelize,
    tableName: 'voluntariado',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'idVoluntariado' },
          { name: 'organizacionId' },
        ],
      },
      {
        name: 'id_voluntariado_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'idVoluntariado' },
        ],
      },
      {
        name: 'fk_voluntariado_organizacion1_idx',
        using: 'BTREE',
        fields: [
          { name: 'organizacionId' },
        ],
      },
    ],
  },
);

module.exports = Voluntariado;
