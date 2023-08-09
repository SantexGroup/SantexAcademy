const { Model } = require('sequelize');

const {
  PROFILES_FORMATIONS_TABLE_NAME,
} = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileFormation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.ProfileFormation.hasMany(models.Formation, { foreignKey: 'id' });
    }
  }
  ProfileFormation.init(
    {
      formations_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profiles_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: PROFILES_FORMATIONS_TABLE_NAME,
      defaultScope: {
        attributes: {
          exclude: ['formations_id', 'profiles_id'],
        },
      },
    },
  );
  return ProfileFormation;
};
