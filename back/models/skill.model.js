const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
  }
  Skill.init({
    skill: DataTypes.STRING,
  }, {
    sequelize,
  });
  return Skill;
};
