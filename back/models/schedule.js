"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.hasMany(models.ScheduleCourses, {
        foreignKey: "idSchedule",
      });
    }
  }
  Schedule.init(
    {
      where: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      day: DataTypes.STRING,
      schedule: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
