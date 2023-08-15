const {
  Model,
} = require('sequelize');

const { EXPERIENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Experience.belongsToMany(models.Profile, {
        through: models.ProfileExperience,
        foreignKey: 'experiences_id',
        otherKey: 'profiles_id',
      });
      models.Experience.belongsTo(models.ExperienceStatus, { foreignKey: 'status_id' });
      models.Experience.belongsTo(models.ExperienceType, { foreignKey: 'types_id' });
      models.Experience.belongsTo(models.Country, { foreignKey: 'countries_id' });
    }
  }
  Experience.init({
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_id',
    },
    countriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'countries_id',
    },
    typesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'types_id',
    },
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    tableName: EXPERIENCES_TABLE_NAME,
  });
  return Experience;
};
