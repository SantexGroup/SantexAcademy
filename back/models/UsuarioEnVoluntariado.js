const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const UsuarioEnVoluntariado = sequelize.define(
  "usuarioEnVoluntariado",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "usuario",
        key: "id",
      },
    },
    idVolunteering: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "voluntariado",
        key: "idVoluntariado",
      },
    },
  },
  {
    sequelize,
    tableName: "usuarioEnVoluntariado",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "userId" }, { name: "idVolunteering" }],
      },
      {
        name: "fk_usuario_en_voluntariado_usuario_idx",
        using: "BTREE",
        fields: [{ name: "userId" }],
      },
      {
        name: "fk_usuario_en_voluntariado_voluntariado_idx",
        using: "BTREE",
        fields: [{ name: "idVolunteering" }],
      },
    ],
  }
);

module.exports = UsuarioEnVoluntariado;