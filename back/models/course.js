const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate() {
      // define association here
    }
  }
  // Initialize the model
  Course.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    courseEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    attendance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    visualized: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Course',
    createdAt: false,
    updatedAt: false,
  });
  return Course;
};
