const {
  Model,
} = require('sequelize');

const { PROFILES_LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileLanguage extends Model {
  }
  ProfileLanguage.init({
    profilesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profiles_id',
    },
    languagesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'languages_id',
    },
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_LANGUAGES_TABLE_NAME,
  });
  return ProfileLanguage;
};
