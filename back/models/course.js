'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.User, {
        through: 'UserCourses'
      });
      Course.belongsToMany(models.User, {
        scope: { role: 'teacher' },
        as: 'teachers',
        through: 'UserCourses'
      });
      Course.belongsToMany(models.Category, {
        as: 'categories',
        through: 'CourseCategories'
      });
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    durationHours: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
    paranoid: true,
  });
  return Course;
};