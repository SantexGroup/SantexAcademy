const {
  Model,
} = require('sequelize');

const { PROFILES_EXPERIENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileExperience extends Model {
  }
  ProfileExperience.init({
    experiences_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profiles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_EXPERIENCES_TABLE_NAME,
  });
  return ProfileExperience;
};
