const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(models) {
      // define association here
      Course.belongsToMany(models.User, {
        through: 'User_Courses',
        foreignKey: 'course_id',
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    finish: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER,
    maximun_quota: DataTypes.INTEGER,
    current_quota: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM('activo', 'inactivo', 'en curso', 'finalizado', 'proximamente'),
      defaultValue: 'inactivo',
    },

  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
