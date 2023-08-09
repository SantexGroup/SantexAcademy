const {
  Model,
} = require('sequelize');

const { PROFILES_SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileSkill extends Model {
  }
  ProfileSkill.init({
    profilesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profiles_id',
    },
    skillsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'skills_id',
    },
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_SKILLS_TABLE_NAME,
  });
  return ProfileSkill;
};
