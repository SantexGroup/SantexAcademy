const {
  Model,
} = require('sequelize');

const { PROFILES_OPTIONALS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileOptional extends Model {
  }
  ProfileOptional.init({
    profiles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    optionals_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_OPTIONALS_TABLE_NAME,
  });
  return ProfileOptional;
};
