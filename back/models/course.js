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
      //define association here
      //Course.hasOne(models.CourseCategory)
     // models.CourseCategory.hasMany(Course)
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    maxStudents: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    requirement:DataTypes.STRING,
    teacher:DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};