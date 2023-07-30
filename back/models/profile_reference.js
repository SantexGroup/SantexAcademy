const {
  Model,
} = require('sequelize');

const { PROFILES_REFERENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileReference extends Model {
  }
  ProfileReference.init({
    references_id: DataTypes.INTEGER,
    profiles_id: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: PROFILES_REFERENCES_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },

  });
  return ProfileReference;
};
