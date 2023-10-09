const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model { }
  Rol.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'rol',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );

  Rol.associate = (models) => {
    Rol.belongsToMany(models.usuario, { through: models.usuarioRol });
  };

  return Rol;
};
