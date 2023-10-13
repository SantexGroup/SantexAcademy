const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Category Association
      Course.belongsTo(models.CourseCategory);
      models.CourseCategory.hasMany(Course, {
        foreignKey: 'CourseCategoryId',
      });
      // Schedule Association
      Course.hasMany(models.ScheduleCourses, {
        foreignKey: 'idCourse',
      });
      // registered Association
      Course.hasMany(models.Registered, {
        foreignKey: 'idCourse',
      });
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING(1000),
      description: DataTypes.STRING,
      maxStudents: DataTypes.INTEGER,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      requirement: DataTypes.STRING,
      teacher: DataTypes.STRING,
      CourseCategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Course',
    },
  );
  return Course;
};
