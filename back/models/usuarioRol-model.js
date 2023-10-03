const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsuarioRol extends Model { }
  UsuarioRol.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'usuarioRol',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );

  return UsuarioRol;
};
