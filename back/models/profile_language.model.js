const {
  Model,
} = require('sequelize');

const { PROFILES_LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileLanguage extends Model {
  }
  ProfileLanguage.init({
    profiles_id: DataTypes.INTEGER,
    languages_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_LANGUAGES_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return ProfileLanguage;
};
