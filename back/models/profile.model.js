const {
  Model,
} = require('sequelize');

const { PROFILES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Profile.belongsTo(models.User, { foreignKey: 'user_id' });
      models.Profile.belongsToMany(models.Experience, {
        through: models.ProfileExperience,
        foreignKey: 'profiles_id',
        otherKey: 'experiences_id',
      });
      models.Profile.belongsToMany(models.Reference, {
        through: models.ProfileReference,
        foreignKey: 'profiles_id',
        otherKey: 'wreferences_id',
      });
      models.Profile.belongsToMany(models.Language, {
        through: models.ProfileLanguage,
        foreignKey: 'profiles_id',
        otherKey: 'languages_id',
      });
      models.Profile.belongsToMany(models.Skill, {
        through: models.ProfileSkill,
        foreignKey: 'profiles_id',
        otherKey: 'skills_id',
      });
      models.Profile.belongsToMany(models.Formation, {
        through: models.ProfileFormation,
        foreignKey: 'profiles_id',
        otherKey: 'formations_id',
      });
      models.Profile.belongsToMany(models.Optional, {
        through: models.ProfileOptional,
        foreignKey: 'profiles_id',
        otherKey: 'optionals_id',
      });
    }
  }
  Profile.init({
    user_id: DataTypes.INTEGER,
    profileName: DataTypes.STRING,
  }, {
    sequelize,
    tableName: PROFILES_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Profile;
};
