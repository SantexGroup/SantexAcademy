const {
  Model,
} = require('sequelize');

const { PROFILES_REFERENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileReference extends Model {
  }
  ProfileReference.init({
    wreferences_id: {
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
    tableName: PROFILES_REFERENCES_TABLE_NAME,
  });
  return ProfileReference;
};
