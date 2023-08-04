// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('voluntario', {
    id_voluntario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    nombre_rol: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id_rol',
      },
    },
  }, {
    sequelize,
    tableName: 'voluntario',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_voluntario' },
        ],
      },
      {
        name: 'id_rol',
        using: 'BTREE',
        fields: [
          { name: 'id_rol' },
        ],
      },
    ],
  });
};
