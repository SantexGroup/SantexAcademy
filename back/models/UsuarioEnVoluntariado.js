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
    volunteerId: {
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
        fields: [{ name: "userId" }, { name: "volunteerId" }],
      },
      {
        name: "fk_usuario_has_voluntariado_voluntariado1_idx",
        using: "BTREE",
        fields: [{ name: "volunteerId" }],
      },
      {
        name: "fk_usuario_has_voluntariado_usuario1_idx",
        using: "BTREE",
        fields: [{ name: "userId" }],
      },
    ],
  }
);

module.exports = UsuarioEnVoluntariado;
