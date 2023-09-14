const {
  Model,
} = require('sequelize');

const { PROFILES_LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileLanguage extends Model {
    static associate(models) {
      models.ProfileLanguage.belongsTo(models.Language, {
        foreignKey: 'languages_id',
      });
    }
  }
  ProfileLanguage.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_LANGUAGES_TABLE_NAME,
  });
  return ProfileLanguage;
};
