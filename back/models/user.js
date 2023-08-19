const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Survey, {
        foreignKey: 'userId',
      });
    }
  }

  User.init(
    {
      nombre: {
        type: DataTypes.STRING,
      },
      apellido: {
        type: DataTypes.STRING,
      },
      nombreUsuario: {
        type: DataTypes.STRING,
      },
      contrasena: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      cel: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );

  return User;
};
