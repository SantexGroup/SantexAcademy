const {
  Model,
} = require('sequelize');

const { SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
  }
  Skill.init({
    skill: DataTypes.STRING, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: SKILLS_TABLE_NAME,
  });
  return Skill;
};
