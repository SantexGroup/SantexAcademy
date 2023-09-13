const {
  Model,
} = require('sequelize');

const { SKILLS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      models.Skill.belongsToMany(models.Profile, {
        through: models.ProfileSkill,
        foreignKey: 'skills_id',
        otherKey: 'profiles_id',
      });

      models.Skill.belongsTo(models.ProfileSkill, {
        foreignKey: 'id',
      });
    }
  }
  Skill.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
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
