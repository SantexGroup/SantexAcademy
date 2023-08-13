const {
  Model,
} = require('sequelize');

const { SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
  }
  Skill.init({
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: SKILLS_TABLE_NAME,
  });
  return Skill;
};
