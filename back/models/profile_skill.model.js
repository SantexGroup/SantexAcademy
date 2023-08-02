const {
  Model,
} = require('sequelize');

const { PROFILES_SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileSkill extends Model {
  }
  ProfileSkill.init({
    profiles_id: DataTypes.INTEGER,
    skills_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_SKILLS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return ProfileSkill;
};
