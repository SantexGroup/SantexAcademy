// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('usuarioVoluntariado', {
    usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idUsuario',
      },
    },
    voluntariadoIdVoluntariado: {
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
    tableName: 'usuarioVoluntariado',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'usuario_idUsuario' },
          { name: 'voluntariadoIdVoluntariado' },
        ],
      },
      {
        name: 'fk_usuarioHasVoluntariadoVoluntariado1_idx',
        using: 'BTREE',
        fields: [
          { name: 'voluntariadoIdVoluntariado' },
        ],
      },
      {
        name: 'fk_usuarioHasVoluntariadoUsuario_idx',
        using: 'BTREE',
        fields: [
          { name: 'usuario_idUsuario' },
        ],
      },
    ],
  });
};
