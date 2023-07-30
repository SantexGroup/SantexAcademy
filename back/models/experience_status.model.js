const {
  Model,
} = require('sequelize');

const { EXPERIENCES_STATUS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ExperienceStatus extends Model {
  }
  ExperienceStatus.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    tableName: EXPERIENCES_STATUS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return ExperienceStatus;
};
