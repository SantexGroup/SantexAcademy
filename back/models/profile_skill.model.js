const {
  Model,
} = require('sequelize');

const { PROFILES_SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileSkill extends Model {
  }
  ProfileSkill.init({
    profiles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skills_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_SKILLS_TABLE_NAME,
  });
  return ProfileSkill;
};
