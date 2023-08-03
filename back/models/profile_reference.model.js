const {
  Model,
} = require('sequelize');

const { PROFILES_REFERENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileReference extends Model {
  }
  ProfileReference.init({
    wreferences_id: DataTypes.INTEGER, /* Not Null */
    profiles_id: DataTypes.INTEGER, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_REFERENCES_TABLE_NAME,
  });
  return ProfileReference;
};
