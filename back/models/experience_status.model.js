const {
  Model,
} = require('sequelize');

const { EXPERIENCES_STATUS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ExperienceStatus extends Model {
  }
  ExperienceStatus.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: EXPERIENCES_STATUS_TABLE_NAME,
  });
  return ExperienceStatus;
};
