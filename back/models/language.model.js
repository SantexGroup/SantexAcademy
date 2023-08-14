const { Model } = require('sequelize');
const { LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    static associate(models) {
      models.Language.belongsToMany(models.Profile, {
        through: models.ProfileLanguage,
        foreignKey: 'languages_id',
        otherKey: 'profiles_id',
        as: 'LanguageToProfile', // Alias único para la asociación
      });

      models.Language.hasMany(models.ProfileLanguage, {
        foreignKey: 'languages_id',
        as: 'ProfileLanguages', // Alias único para la asociación
      });
    }
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
