const {
  Model,
} = require('sequelize');

const { PROFILES_FORMATIONS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileFormation extends Model {
  }
  ProfileFormation.init({
    formations_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profiles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_FORMATIONS_TABLE_NAME,
  });
  return ProfileFormation;
};
