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
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      // unique: 'email_UNIQUE',
    },
    uniqueEmail: {
      type: DataTypes.STRING,
      // unique: true,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    reputation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    puntosAcumulados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    puntosCanjeados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    hooks: {
      beforeSave: (usuario) => {
        if (usuario.deletedAt) {
          usuario.uniqueEmail = null;
        } else {
          usuario.uniqueEmail = usuario.email;
        }
      },
    },
    paranoid: true,
  }
);

module.exports = Usuario;
