const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Usuario = sequelize.define(
  "usuario",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "email_UNIQUE",
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    reputation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    pointsAccumulated: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    rolesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "roles",
        key: "id",
      },
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    basketRewardsId: {
      /*Cesta recompensa */
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: "cestaRecompensas", // Nombre de la tabla referenciada
        key: "id", // Columna referenciada
      },
    },
  },
  {
    sequelize,
    paranoid: true,
    tableName: "usuario",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "rolesId" },
        ],
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [{ name: "email" }],
      },
      {
        name: "fk_usuario_roles1_idx",
        using: "BTREE",
        fields: [{ name: "rolesId" }],
      },

    ],
  }
);

module.exports = Usuario;
