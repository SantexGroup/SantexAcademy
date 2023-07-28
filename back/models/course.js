const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  // Initialize the model
  Course.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
