const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const UsuarioEnVoluntariado = sequelize.define(
  "usuarioEnVoluntariado",
  {

    postulateId:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuario",
        key: "id",
      },
    },

    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'organizacion',
        key: 'id',
      },
    },

    idVolunteering: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "voluntariado",
        key: "idVoluntariado",
      },
    },
    status: {
      type: DataTypes.ENUM({
        values: [
          "active",
          "finished",
          "abandoned",
        ],
      }),
      allowNull: false,
      defaultValue: "active",
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "usuarioEnVoluntariado",
    timestamps: false,
    paranoid: true,
  }
);


module.exports = UsuarioEnVoluntariado;