const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Role, {
        through: 'User_Roles',
        foreignKey: 'user_id', // TODO: Cambiar a user_id el nombre de la column
      });

      User.belongsToMany(models.Course, {
        through: 'User_Courses',
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 15],
      },
    },

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
