const {
  Model,
} = require('sequelize');

const { PROFILES_EXPERIENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileExperience extends Model {
  }
  ProfileExperience.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    experiencesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'experiences_id',
    },
    profilesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profiles_id',
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_EXPERIENCES_TABLE_NAME,
  });
  return ProfileExperience;
};
