const {
  Model,
} = require('sequelize');

const { PROFILES_OPTIONALS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileOptional extends Model {
  }
  ProfileOptional.init({
    profiles_id: DataTypes.INTEGER, /* Not Null */
    optionals_id: DataTypes.INTEGER, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_OPTIONALS_TABLE_NAME,
  });
  return ProfileOptional;
};
