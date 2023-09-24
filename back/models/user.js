const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Course, { through: 'UserCourses' });
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING, 
      allowNull:false,
      validate: {
        len: [3, 20]
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [3, 30]
      },
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      /*decidir como operar con este campo */
      type: DataTypes.STRING,
      allowNull: false
    },
    role: DataTypes.ENUM('admin', 'teacher', 'student'),
    specialty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true, 
  });
  return User;
};
