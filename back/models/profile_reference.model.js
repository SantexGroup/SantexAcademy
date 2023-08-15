const {
  Model,
} = require('sequelize');

const { PROFILES_REFERENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileReference extends Model {
  }
  ProfileReference.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    referencesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'wreferences_id',
    },
    profilesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profiles_id',
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_REFERENCES_TABLE_NAME,
  });
  return ProfileReference;
};
