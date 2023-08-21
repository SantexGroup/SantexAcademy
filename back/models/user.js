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
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      rol: DataTypes.STRING,
      phone: DataTypes.STRING,
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
