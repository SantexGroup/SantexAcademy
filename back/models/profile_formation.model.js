const { Model } = require('sequelize');

const {
  PROFILES_FORMATIONS_TABLE_NAME,
} = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileFormation extends Model {
    static associate(models) {
      models.ProfileFormation.hasMany(models.Formation, { foreignKey: 'id' });
    }
  }
  ProfileFormation.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    formationsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'formations_id',
    },
    profilesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profiles_id',
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_FORMATIONS_TABLE_NAME,
  });
  return ProfileFormation;
};
