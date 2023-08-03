const {
  Model,
} = require('sequelize');

const { PROFILES_LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileLanguage extends Model {
  }
  ProfileLanguage.init({
    profiles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    languages_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_LANGUAGES_TABLE_NAME,
  });
  return ProfileLanguage;
};
