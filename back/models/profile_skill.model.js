const {
  Model,
} = require('sequelize');

const { PROFILES_SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileSkill extends Model {
    static associate(models) {
      models.ProfileSkill.belongsTo(models.Skill, {
        foreignKey: 'skills_id',
      });
    }
  }
  ProfileSkill.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_SKILLS_TABLE_NAME,
  });
  return ProfileSkill;
};
