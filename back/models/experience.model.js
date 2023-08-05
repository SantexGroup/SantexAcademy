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
      models.Experience.belongsTo(models.ExperienceStatus, { foreignKey: 'status_id' });
      models.Experience.belongsTo(models.ExpirenceType, { foreignKey: 'types_id' });
      models.Experience.belongsTo(models.Country, { foreignKey: 'countries_id' });
    }
  }
  Experience.init({
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    countries_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    types_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
