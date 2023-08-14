"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      schedule.hasMany(models.ScheduleCourses, {
        foreignKey: "idSchedule",
      });
    }
  }
  schedule.init(
    {
      start: DataTypes.DATE,
      end: DataTypes.DATE,
      where: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "schedule",
    }
  );
  return schedule;
};
