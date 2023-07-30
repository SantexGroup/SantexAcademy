const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Formation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Formation.belongsTo(models.FormationStatus, { foreignKey: 'status_id' });
      models.Formation.belongsTo(models.FormationType, { foreignKey: 'types_id' });
    }
  }
  Formation.init({
    status_id: DataTypes.INTEGER,
    types_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    institute: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Formation;
};
