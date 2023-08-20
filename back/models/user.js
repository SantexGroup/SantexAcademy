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
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      nombreusuario: DataTypes.STRING,
      contrasena: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
      cel: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: 'User',
    },
  );
  return User;
};
