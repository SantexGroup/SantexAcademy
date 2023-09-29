const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");


//TODO!! ESTABLECER RELACION MANY TO ONE CON LA NUEVA TABLA ORDEN DE RETIRO


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
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "email_UNIQUE",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.JSON,
    },
    reputation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, 
    },
    hoursAcc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    rolesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
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
        fields: [{ name: "id" }, { name: "rolesId" }],
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
