const {
  Model,
} = require('sequelize');

const { SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
  }
  Skill.init({
    skill: DataTypes.STRING,
  }, {
    sequelize,
    tableName: SKILLS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Skill;
};
