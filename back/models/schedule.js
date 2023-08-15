'use strict';
const {
  Model
} = require('sequelize');
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
  Schedule.init({
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    where: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};