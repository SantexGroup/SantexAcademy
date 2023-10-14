const {
  Model,
} = require('sequelize');

const { EXPERIENCES_TYPES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ExperienceType extends Model {
  }
  ExperienceType.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: EXPERIENCES_TYPES_TABLE_NAME,
  });
  return ExperienceType;
};
