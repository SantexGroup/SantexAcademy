const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const UsuarioEnVoluntariado = sequelize.define(
  'usuarioEnVoluntariado',
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'id',
      },
    },
    voluntariadoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'voluntariado',
        key: 'idVoluntariado',
      },
    },
  }, {
    sequelize,
    tableName: 'usuarioEnVoluntariado',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'usuarioId' },
          { name: 'voluntariadoId' },
        ],
      },
      {
        name: 'fk_usuario_has_voluntariado_voluntariado1_idx',
        using: 'BTREE',
        fields: [
          { name: 'voluntariadoId' },
        ],
      },
      {
        name: 'fk_usuario_has_voluntariado_usuario1_idx',
        using: 'BTREE',
        fields: [
          { name: 'usuarioId' },
        ],
      },
    ],
  },
);

module.exports = UsuarioEnVoluntariado;
