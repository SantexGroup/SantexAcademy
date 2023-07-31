const {
  Model,
} = require('sequelize');

const { PROFILES_REFERENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileReference extends Model {
  }
  ProfileReference.init({
    wreferences_id: DataTypes.INTEGER,
    profiles_id: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_REFERENCES_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return ProfileReference;
};
