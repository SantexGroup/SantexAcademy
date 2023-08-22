const { Model } = require('sequelize');
const { LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
  }
  Language.init(
    {
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: LANGUAGES_TABLE_NAME,
    },
  );
  return Language;
};
