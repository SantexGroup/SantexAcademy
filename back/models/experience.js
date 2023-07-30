const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(':::models:::', models);
      models.Experience.belongsTo(models.ExperienceStatus, { foreignKey: 'status_id' });
      models.Experience.belongsTo(models.ExpirenceType, { foreignKey: 'type_id' });
      models.Experience.belongsTo(models.Country, { foreignKey: 'countries_id' });
    }
  }
  Experience.init({
    status_id: DataTypes.INTEGER,
    countries_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Experience;
};
