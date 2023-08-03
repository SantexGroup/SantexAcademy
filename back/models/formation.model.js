const {
  Model,
} = require('sequelize');

const { FORMATIONS_TABLE_NAME } = require('../helpers/sequelize.helper');

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
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    types_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: DataTypes.STRING,
    institute: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    description: DataTypes.STRING,
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: FORMATIONS_TABLE_NAME,
  });
  return Formation;
};
