const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Organizacion = sequelize.define(
  'organizacion',
  {

    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'nombre_UNIQUE',
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'email_UNIQUE',
    },
    telefono: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: 'telefono_UNIQUE',
    },
    cuit: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: 'cuit_UNIQUE',
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },

    category: {
      type: DataTypes.ENUM({
        values: ['medio ambiente y fauna', 'asistencia social', 'salud y discapacidad'],
      }),
      allowNull: false,
    },

    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    paranoid: true,
    tableName: 'organizacion',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ],
      },
      {
        name: 'cuit_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cuit' },
        ],
      },
    ],
  },
);

module.exports = Organizacion;
