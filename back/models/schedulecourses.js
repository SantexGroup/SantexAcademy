"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ScheduleCourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ScheduleCourses.belongsTo(models.Course, {
        foreignKey: "id",
        target_key: "idCourse",
      });
      ScheduleCourses.belongsTo(models.Schedule, {
        foreignKey: "id",
        target_key: "idSchedule",
      });
    }
  }
  ScheduleCourses.init(
    {
      idCourse: DataTypes.INTEGER,
      idSchedule: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ScheduleCourses",
    }
  );
  return ScheduleCourses;
};
