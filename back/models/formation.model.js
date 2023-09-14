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
      models.Formation.belongsToMany(models.Profile, {
        through: models.ProfileFormation,
        foreignKey: 'formations_id',
        otherKey: 'profiles_id',
      });
      models.Formation.belongsTo(models.FormationStatus, { foreignKey: 'status_id' });
      models.Formation.belongsTo(models.FormationType, { foreignKey: 'types_id' });
    }
  }
  Formation.init({
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_id',
    },
    typesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'types_id',
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    institute: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: DataTypes.STRING,
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    tableName: FORMATIONS_TABLE_NAME,
  });
  return Formation;
};
